import argparse
import os
import shutil
import subprocess
import sys
import time
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_DIR = Path(__file__).resolve().parent

APP_CONFIGS = {
    'sisora': {
        'title': 'SI SORA',
        'html_path': BASE_DIR / 'Galeri PTJJ 2026' / 'SISORA' / 'index.html',
        'output_mp4': BASE_DIR / 'SISORA_TV_READY.mp4',
        'estimated_duration': 391
    },
    'rbv': {
        'title': 'RBV New Reborn',
        'html_path': BASE_DIR / 'Galeri PTJJ 2026' / 'RBV New Reborn' / 'index.html',
        'output_mp4': BASE_DIR / 'RBV_TV_READY.mp4',
        'estimated_duration': 322
    }
}


def record_app(app_key, headless=True):
    config = APP_CONFIGS[app_key]
    title = config['title']
    html_path = config['html_path']
    output_mp4 = config['output_mp4']
    est_duration = config['estimated_duration']

    print('=' * 60)
    print(f'MEMPROSES BACKDROP VIDEO (TANPA SUARA): {title}')
    print(f'Target File: {output_mp4.name}')
    print(f'Estimasi Durasi: {est_duration} detik (~{est_duration // 60}m {est_duration % 60}s)')
    print('=' * 60)

    temp_dir = BASE_DIR / f'temp_render_{app_key}'
    if temp_dir.exists():
        shutil.rmtree(temp_dir, ignore_errors=True)
    temp_dir.mkdir(parents=True, exist_ok=True)

    record_dir = temp_dir / 'video_raw'
    record_dir.mkdir(parents=True, exist_ok=True)

    target_url = html_path.as_uri() + '?tv=1'

    print(f'\nMembuka browser untuk merekam tampilan: {target_url}')
    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=headless,
            args=[
                '--autoplay-policy=no-user-gesture-required',
                '--disable-web-security',
                '--use-gl=angle',
                '--use-angle=d3d11',
                '--window-size=1920,1080',
                '--hide-scrollbars'
            ]
        )
        context = browser.new_context(
            record_video_dir=str(record_dir),
            record_video_size={'width': 1920, 'height': 1080},
            viewport={'width': 1920, 'height': 1080}
        )
        page = context.new_page()
        page.goto(target_url)

        start_time = time.time()
        print('Perekaman visual sedang berjalan...')

        while True:
            elapsed = int(time.time() - start_time)
            pct = min(100, int((elapsed / est_duration) * 100))
            sys.stdout.write(f'\rProgress Perekaman: [{elapsed}s / {est_duration}s] ({pct}%)  ')
            sys.stdout.flush()

            try:
                finished = page.evaluate('() => window.__BACKDROP_FINISHED === true')
            except Exception:
                finished = False

            if finished:
                print(f'\nSatu siklus playlist {title} selesai terdeteksi!')
                time.sleep(1)
                break

            if elapsed >= est_duration + 15:
                print(f'\nBatas waktu tercapai ({elapsed}s). Menyelesaikan rekaman.')
                break

            time.sleep(1)

        page.close()
        context.close()
        browser.close()

    raw_videos = list(record_dir.glob('*.webm'))
    if not raw_videos:
        print('Error: Tidak ada file rekaman video yang dihasilkan.')
        return False

    raw_video = raw_videos[0]
    print(f'Rekaman visual mentah selesai: {raw_video.name}')

    print('\nMembuat video standar TV (MP4 H.264 1080p tanpa suara)...')
    final_cmd = [
        'ffmpeg', '-y',
        '-i', str(raw_video),
        '-c:v', 'libx264',
        '-profile:v', 'high',
        '-level', '4.1',
        '-preset', 'fast',
        '-crf', '20',
        '-pix_fmt', 'yuv420p',
        '-an',
        '-movflags', '+faststart',
        str(output_mp4)
    ]

    ffmpeg_proc = subprocess.run(final_cmd, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
    if ffmpeg_proc.returncode != 0:
        print('Error FFmpeg encoding:', ffmpeg_proc.stderr.decode('utf-8', errors='ignore'))
        return False

    shutil.rmtree(temp_dir, ignore_errors=True)

    file_size_mb = output_mp4.stat().st_size / (1024 * 1024)
    print('\n' + '=' * 60)
    print(f'BERHASIL! File Video Siap Flashdisk: {output_mp4}')
    print(f'Ukuran File: {file_size_mb:.2f} MB')
    print('Format: MP4 (H.264 1920x1080, No Audio)')
    print('Status: Siap di-copy ke Flashdisk & diputar looping di TV booth!')
    print('=' * 60 + '\n')
    return True


def main():
    parser = argparse.ArgumentParser(description='Automated Backdrop Video Generator for Flashdisk TV')
    parser.add_argument('--app', choices=['sisora', 'rbv', 'all'], default='all', help='Pilih aplikasi yang ingin digenerate')
    parser.add_argument('--headful', action='store_true', help='Tampilkan jendela browser saat proses merekam')
    args = parser.parse_args()

    headless = not args.headful

    if args.app == 'all':
        record_app('sisora', headless=headless)
        record_app('rbv', headless=headless)
    else:
        record_app(args.app, headless=headless)


if __name__ == '__main__':
    main()
