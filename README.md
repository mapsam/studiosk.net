# studiosk.net

Buildings & Stuff

### Developing

```
jekyll serve --watch
```

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

Gallery images also may need a white boarder if the aspect ratio is not already set to 775x516. The following command keeps the ratio and adds a white border to the top/bottom left/right while keeping the image gravity in the center.

```
convert input.jpg -resize 775x516 -background white -gravity center -extent 775x516 output.jpg
```

To convert them all with the border:

```
convert *.jpg -resize 775x516 -background white -gravity center -extent 775x516 "name${prefix}_%02d.jpg"
```

```bash
# Convert all images to jpg in place
mogrify -format jpg *.*

# Remove all images that are not .jpg
find . -type f ! -name '*.jpg' -delete

# Resize images to maximum 1000w or 750h, aspect ratio preserved
# https://imagemagick.org/script/command-line-processing.php#geometry
mogrify -resize 1000x750 *.jpg
```

**News images**

News images are the same size as project images. You can use a project image directly in the news section.


**Featured image**

This image is smaller and lives in the /projects block page.
