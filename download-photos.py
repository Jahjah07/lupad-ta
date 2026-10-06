import urllib.request
from PIL import Image
from pathlib import Path
folder=Path('C:/Users/Jahred Uy/Codes/lupad-ta/dist/assets')
photos={
'siquijor':'https://upload.wikimedia.org/wikipedia/commons/f/f9/Coco_Grove_Beach_Resort%2C_Siquijor%2C_Philippines_%288160857823%29.jpg',
'apo':'https://upload.wikimedia.org/wikipedia/commons/1/17/Sea_Turtle_in_Apo_Island.jpg',
'manjuyod':'https://upload.wikimedia.org/wikipedia/commons/5/5e/Manjuyod_Sand_Bar%2C_Philippines.jpg'}
for name,url in photos.items():
    req=urllib.request.Request(url,headers={'User-Agent':'LupadTaWebsite/1.0 (travel website photo attribution)'})
    with urllib.request.urlopen(req,timeout=40) as response:
        (folder/(name+'.jpg')).write_bytes(response.read())
    image=Image.open(folder/(name+'.jpg')).convert('RGB')
    image.thumbnail((1800,1400))
    image.save(folder/(name+'.jpg'),quality=85)
    print(name,image.size)
