import os
import json
import urllib.request
import urllib.error

base_skills_dir = r"d:\Lavanya Portfolio\.agents\skills"
global_skills_dir = r"C:\Users\Kishore kumar\.gemini\config\skills"
os.makedirs(base_skills_dir, exist_ok=True)
os.makedirs(global_skills_dir, exist_ok=True)

headers = {"User-Agent": "Antigravity-Agent"}

def fetch_json(url):
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode('utf-8'))

def download_file(url, target_path):
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        content = resp.read()
    with open(target_path, "wb") as f:
        f.write(content)
    return content

def download_github_dir(api_contents_url, target_dir):
    os.makedirs(target_dir, exist_ok=True)
    items = fetch_json(api_contents_url)
    for item in items:
        if item["type"] == "file":
            download_url = item["download_url"]
            file_dest = os.path.join(target_dir, item["name"])
            print(f"Downloading {item['name']} to {target_dir}")
            download_file(download_url, file_dest)
        elif item["type"] == "dir":
            sub_dest = os.path.join(target_dir, item["name"])
            download_github_dir(item["url"], sub_dest)

# 1. leonxlnx/taste-skill
print("Installing taste-skill...")
taste_target = os.path.join(base_skills_dir, "taste-skill")
download_github_dir("https://api.github.com/repos/leonxlnx/taste-skill/contents/skills/taste-skill", taste_target)

# 2. pbakaus/impeccable
print("Installing impeccable...")
impeccable_target = os.path.join(base_skills_dir, "impeccable")
download_github_dir("https://api.github.com/repos/pbakaus/impeccable/contents/skill", impeccable_target)
# Ensure SKILL.md exists
src_md = os.path.join(impeccable_target, "SKILL.src.md")
dest_md = os.path.join(impeccable_target, "SKILL.md")
if os.path.exists(src_md) and not os.path.exists(dest_md):
    with open(src_md, "r", encoding="utf-8") as f:
        content = f.read()
    with open(dest_md, "w", encoding="utf-8") as f:
        f.write(content)

# 3. shadcn/improve
print("Installing shadcn-improve...")
improve_target = os.path.join(base_skills_dir, "shadcn-improve")
download_github_dir("https://api.github.com/repos/shadcn/improve/contents/skills/improve", improve_target)

# 4. arvindrk/extract-design-system
print("Installing extract-design-system...")
extract_target = os.path.join(base_skills_dir, "extract-design-system")
download_github_dir("https://api.github.com/repos/arvindrk/extract-design-system/contents/skills/extract-design-system", extract_target)

# 5. 21st-dev/magic-mcp
print("Installing 21st-ui...")
magic_target = os.path.join(base_skills_dir, "21st-ui")
download_github_dir("https://api.github.com/repos/21st-dev/magic-mcp/contents/skills/21st-ui", magic_target)

# 6. ui-ux-pro-max
print("Installing ui-ux-pro-max...")
uiux_target = os.path.join(base_skills_dir, "ui-ux-pro-max")
os.makedirs(uiux_target, exist_ok=True)
download_file("https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/README.md", os.path.join(uiux_target, "SKILL.md"))
try:
    download_github_dir("https://api.github.com/repos/nextlevelbuilder/ui-ux-pro-max-skill/contents/docs", os.path.join(uiux_target, "docs"))
except Exception as e:
    print("UI UX pro max subdocs error:", e)

# 7. awesome-design-md
print("Installing awesome-design-md...")
awesome_target = os.path.join(base_skills_dir, "awesome-design-md")
os.makedirs(awesome_target, exist_ok=True)
download_file("https://raw.githubusercontent.com/voltagent/awesome-design-md/main/README.md", os.path.join(awesome_target, "SKILL.md"))

print("All requested skills downloaded and installed successfully!")
