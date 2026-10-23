from PIL import Image
import os

public_dir = r"d:\Lavanya Portfolio\public"
symbol_dark = Image.open(os.path.join(public_dir, "levexa-symbol-dark.png"))

# Create 512x512 app icon with navy background #07192F
icon = Image.new("RGB", (512, 512), (7, 25, 47))

# Resize symbol with aspect ratio preserved
sym_w, sym_h = symbol_dark.size
target_h = 360
target_w = int(sym_w * (target_h / sym_h))
symbol_resized = symbol_dark.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Paste centered
offset_x = (512 - target_w) // 2
offset_y = (512 - target_h) // 2
icon.paste(symbol_resized, (offset_x, offset_y))

icon.save(os.path.join(public_dir, "icon.png"), "PNG")
icon.save(os.path.join(public_dir, "apple-icon.png"), "PNG")
icon_32 = icon.resize((32, 32), Image.Resampling.LANCZOS)
icon_32.save(os.path.join(public_dir, "favicon.ico"), "ICO")
print("Icons created successfully!")
