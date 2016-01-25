# NodeBB Embed-Videos Plugin

With this plugin, video, audio, images from Youtube, Vimeo, Facebook, Vine, Dailymotion, Mixcloud, spotify, pinterest embeded.

    the url must be in a <A> tag.
    is detected, the entire link and the respective ID.



## Version

0.1.1 > EMBED A YOUTUBE VIDEO WITH A SPECIFIC START TIME 




## Installation

    npm install nodebb-plugin-embed-videos
    
    
 
 ## Youtube Urls
    
    REGEX Example: https://regex101.com/r/xJ8zJ5/1
    
         1.	[v=]	    `fqMfRi2gJok`
         2.	[t=]	     `300`
         3.	[index=]	 `1`
         4.	[list=]	     `PLuC2HflhhpLGQ4RgqA76_Gv52fGA0909r`
    
       REGEX =   /(?:http.?:\/\/)?(?:www.)?(?:(?:youtube.com\/)|(?:youtu.be\/))(?!playlist|embed\/video)(?:(?:watch\?v=)|(?:embed\/)|(?:v\/)|)?([a-zA-Z0-9-_]*)(?:(?:\?t=)?([0-9]*))(?:&index=)?([0-9]*)(?:&list=)?([a-zA-Z0-9-_]*)/g
    
    
    
 ## Vimeo Urls
    
    https://vimeo.com/130279788

    https://vimeo.com/channels/staffpicks/133122341
 
 
 
 ## Facebook Urls
 
    https://www.facebook.com/fridolinDD/videos/vb.100000066602469/1007904135888464/?type=2&amp;theater
    
    
 
 ## Dailymotion Urls
 
    http://www.dailymotion.com/video/x2zrdut_slow-west-jetzt-im-kinomagazin-now-on-screen_shortfilms
    
 
 
 ## Vine Urls
    
    https://vine.co/v/OLYpnEjagqQ
    
    
    
 ## Mixcloud
     
     https://www.mixcloud.com/scheibosan/scheibosan-gomde-summerparty-2015-big-chill-how-slow-can-u-go/
     
     
     
 ## spotify
 
    https://play.spotify.com/album/56qhSdV2i3pTFr5Pi5ZzbQ

    https://play.spotify.com/artist/0shGXlIx6zAwyctdtnJn4D
 
 
 
 ## pinterest
    
    https://de.pinterest.com/pin/29414203793917475/   
     
    <!-- Please call pinit.js only once per page -->
    <script type="text/javascript" async defer src="//assets.pinterest.com/js/pinit.js"></script>

    
