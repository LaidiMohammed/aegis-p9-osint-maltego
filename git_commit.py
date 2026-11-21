import subprocess
import os

repo_dir = r'C:\Users\pc\Documents\M1\IACS\Project_EthicalHacking\aegis-p9-osint-maltego'

# Reset all changes
result = subprocess.run(['git', 'reset', 'HEAD', '--', '.'], cwd=repo_dir, capture_output=True, text=True)
print("Reset result:", result.returncode)

# Add intended files
files_to_add = [
    'src/osint_maltego_main.py',
    'src/generate_report.py',
    'tests/test_smoke.py',
]
for f in files_to_add:
    full_path = os.path.join(repo_dir, f)
    if os.path.exists(full_path):
        subprocess.run(['git', 'add', f], cwd=repo_dir, capture_output=True, text=True)
        print(f"Added: {f}")

# Commit
result = subprocess.run(['git', 'commit', '-m', 'feat(P9): OSINT comparaison WHOIS/DNS/Hunter (AEGIS P9)'], 
                       cwd=repo_dir, capture_output=True, text=True)
print("Commit STDOUT:", result.stdout)
print("Commit STDERR:", result.stderr)
print("Commit return code:", result.returncode)