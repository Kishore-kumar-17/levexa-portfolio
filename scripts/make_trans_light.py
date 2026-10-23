from PIL import Image
import os

public_dir = r"d:\Lavanya Portfolio\public"
light_logo = Image.open(os.path.join(public_dir, "levexa-logo-light.png")).convert("RGBA")

# Create a transparent version where white background (> 250, 250, 250) is transparent
datas = light_logo.getdata()
new_data = []
for item in datas:
    # item is (r, g, b, a)
    if item[0] > 248 and item[1] > 248 and item[2] > 248:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)

light_logo.putdata(new_data)
light_logo.save(os.path.join(public_dir, "levexa-logo-light-trans.png"), "PNG")
print("Saved light logo with transparent background!")
