from PIL import Image
import os

img = Image.open(r"d:\Lavanya Portfolio\levexa final logo.jpeg").convert("RGB")
w, h = img.size

# Light logo bounds:
# x: 80 to 1500, y: 95 to 350
light_logo = img.crop((85, 95, 1495, 350))

# Dark logo: exactly 424 pixels below
# y: 95 + 424 = 519, to 350 + 424 = 774
dark_logo = img.crop((85, 519, 1495, 774))

# Also extract just the chevron symbol: x: 85 to 340
light_symbol = img.crop((85, 95, 340, 350))
dark_symbol = img.crop((85, 519, 340, 774))

public_dir = r"d:\Lavanya Portfolio\public"
light_logo.save(os.path.join(public_dir, "levexa-logo-light.png"), "PNG")
dark_logo.save(os.path.join(public_dir, "levexa-logo-dark.png"), "PNG")
light_symbol.save(os.path.join(public_dir, "levexa-symbol-light.png"), "PNG")
dark_symbol.save(os.path.join(public_dir, "levexa-symbol-dark.png"), "PNG")

print("Perfect crop completed!")
print("Light logo size:", light_logo.size)
print("Dark logo size:", dark_logo.size)
