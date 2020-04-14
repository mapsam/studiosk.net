# studiosk.net

Buildings & Stuff

### Image resizing

**Gallery images**

Example command resizing all JPG in a directory and renaming with the project name and the image number (in processing order).
```
magick *.jpg -resize 12% "malin_goetz_sf${prefix}_%02d.jpg"
```

Resulting files look like this:

```
malin_goetz_sf_00.jpg
malin_goetz_sf_01.jpg
malin_goetz_sf_02.jpg
malin_goetz_sf_03.jpg
malin_goetz_sf_04.jpg
malin_goetz_sf_05.jpg
malin_goetz_sf_06.jpg
malin_goetz_sf_07.jpg
malin_goetz_sf_08.jpg
malin_goetz_sf_09.jpg
malin_goetz_sf_10.jpg
```

**News images**

**Featured
