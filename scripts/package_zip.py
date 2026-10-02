import os
import zipfile

def create_bundle():
    root_dir = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
    public_dir = os.path.join(root_dir, "public")
    os.makedirs(public_dir, exist_ok=True)
    
    zip_public_path = os.path.join(public_dir, "safarilax-website.zip")
    zip_root_path = os.path.join(root_dir, "safarilax-website.zip")

    # Files and folders to exclude
    exclude_dirs = {'.git', 'node_modules', '.cache', 'dist', '__pycache__', 'assets'}
    exclude_files = {'safarilax-website.zip', 'bun.lock', 'repo_base64.txt', 'test.zip'}

    for target_zip in [zip_public_path, zip_root_path]:
        with zipfile.ZipFile(target_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk(root_dir):
                # Modify dirs in-place to skip excluded directories
                dirs[:] = [d for d in dirs if d not in exclude_dirs and not d.startswith('.')]
                
                # Don't recurse into public to avoid archiving the zip into itself
                if os.path.abspath(root) == os.path.abspath(public_dir):
                    continue

                for file in files:
                    if file in exclude_files or file.endswith('.pyc'):
                        continue
                    file_path = os.path.join(root, file)
                    arcname = os.path.relpath(file_path, root_dir)
                    zipf.write(file_path, arcname)

    print(f"Successfully generated zip archive at {zip_public_path} and {zip_root_path}")
    print(f"Size: {os.path.getsize(zip_public_path) / 1024:.1f} KB")

if __name__ == '__main__':
    create_bundle()
