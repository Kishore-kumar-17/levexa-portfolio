from PIL import Image

img = Image.open(r"d:\Lavanya Portfolio\levexa final logo.jpeg").convert("RGB")
w, h = img.size
print(f"Total dimensions: {w} x {h}")

# Check color along vertical center column (x = 100)
for y in range(0, h, 20):
    r, g, b = img.getpixel((100, y))
    print(f"y={y}: ({r}, {g}, {b})")
