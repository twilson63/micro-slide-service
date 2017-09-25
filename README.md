# Micro Slide Service

This is a micro service that creates a slide, by making a http get request. It will return a HTML Document representing the slide.

The slide service can take the following attributes:

* img - the centered image on the slide 
* text - the centered text on the slide 
* color - the color of the text 
* background - the background color 
* animate - animation from animate.css

## Deploy with Now 

``` sh
npm install now -g
now
```

## Usage 

```
<a target="_slide" href="https://slide-img.now.sh/?img=https://vignette.wikia.nocookie.net/disney/images/e/eb/Death_Star_Render_01.png/revision/latest?cb=20170217061931">Show Slide</a>
```



## License 

MIT

