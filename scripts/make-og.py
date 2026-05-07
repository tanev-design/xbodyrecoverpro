from PIL import Image

W, H = 1200, 630
PAD = 80

logo = Image.open(r"E:\WEBSITES\xbodyrecoverpro\public\logotransperant.png").convert("RGBA")
canvas = Image.new("RGB", (W, H), (255, 255, 255))

max_w = W - PAD * 2
max_h = H - PAD * 2
ratio = min(max_w / logo.width, max_h / logo.height)
new_w = int(logo.width * ratio)
new_h = int(logo.height * ratio)
logo_resized = logo.resize((new_w, new_h), Image.LANCZOS)

x = (W - new_w) // 2
y = (H - new_h) // 2
canvas.paste(logo_resized, (x, y), logo_resized)

out = r"E:\WEBSITES\xbodyrecoverpro\public\og-image.png"
canvas.save(out, "PNG", optimize=True)
print(f"Wrote {out} ({new_w}x{new_h} logo on {W}x{H})")
