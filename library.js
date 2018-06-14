(function(module) {
	"use strict";

	var EmbedVideo = {},
	  
	  embed_steam            = '<iframe src="https://store.steampowered.com/widget/$1/" frameborder="0" width="646" height="190"></iframe>',
	  embed_bilibili         = '<div class="embed-container"><iframe src="//player.bilibili.com/player.html?aid=$1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div>',
	  embed_vshare           = '<div class="embed-container"><iframe src="//vshare.io/v/$1/width-470/height-305/" scrolling="no" frameborder="0" width="470" height="305" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>',
	  embed_openload         = '<div class="embed-container"><iframe src="//openload.co/embed/$1" scrolling="no" frameborder="0" width="700" height="430" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>',
	  embed_vimeo            = '<div class="embed-container"><iframe src="//player.vimeo.com/video/$1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>',
	  embed_youtube          = '<div class="embed-container"><iframe src="//www.youtube.com/embed/$1?start=$2?list=$4" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>',     
      embed_facebook         = '<div class="embed-container"><iframe src="https://www.facebook.com/video/embed?video_id=$1" width="640" height="360" frameborder="0" allowfullscreen ></iframe></div>',
      embed_dailymotion      = '<div class="embed-container"><iframe src="http://www.dailymotion.com/embed/video/$1" width="640" height="360" frameborder="0" allowfullscreen></iframe></div>',
      embed_vimeo            = '<div class="embed-container"><iframe src="//player.vimeo.com/video/$1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>',
      embed_youtube_pl       = '<div class="embed-container"><iframe src="//www.youtube.com/embed/$1?list=$2" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>',
      embed_youtube          = '<div class="embed-container"><iframe src="//www.youtube.com/embed/$1?start=$2" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>',
      embed_facebook         = '<div class="embed-container"><iframe src="https://www.facebook.com/video/embed?video_id=$1" width="640" height="360" frameborder="0" allowfullscreen ></iframe></div>',
      embed_dailymotion      = '<div class="embed-container"><iframe src="http://www.dailymotion.com/embed/video/$1" width="640" height="360" frameborder="0" allowfullscreen></iframe></div>',
      embed_vine             = '<div class="embed-container"><iframe src="https://vine.co/v/$1/embed/postcard?related=0" width="640" height="360" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script></div>',   
      embed_mixcloud         = '<iframe src="https://www.mixcloud.com/widget/iframe/?embed_type=widget_standard&amp;embed_uuid=ecd38451-4abc-4c37-85a9-065b45fd8850&amp;feed=https%3A%2F%2Fwww.mixcloud.com%2F$1%2F$2%2F&amp;hide_artwork=1&amp;hide_cover=1&amp;hide_tracklist=1&amp;replace=0" width="" height="180" frameborder="0"></iframe>',  	  
      embed_spotify          = '<iframe src="https://embed.spotify.com/?uri=spotify:track:$1" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>',
      embed_spotify_album    = '<iframe src="https://embed.spotify.com/?uri=spotify:user:erebore:playlist:$1&theme=white&view=coverart" frameborder="0" allowtransparency="true"></iframe>',
      embed_pinterest_pin    = '<a data-pin-do="embedPin" href="http://de.pinterest.com/pin/$1/"></a>',	  
      embed_foursquare       = '<iframe src="https://foursquare.com/v/$1" width="960" height="800"><p>Ihr Browser kann leider keine Iframes darstellen!</p></iframe>', 	  
      embedUrl_steam         = /<a href=".*(?:store.steampowered.com)\/app\/(.*)<\/a>/g,
	  embedUrl_bilibili      = /<a href=".*(?:m.bilibili.com|www.bilibili.com)\/video\/av(.*)<\/a>/g,
      embedUrl_vimeo         = /<a href="(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/)(?:\D*|).*(\w{9})<\/a>/g,
      embedUrl_openload      = /<a href=".*(?:openload.co|oload.site)\/embed\/(.*)<\/a>/g,
	  embedUrl_vshare        = /<a href=".*(?:vshare.io|www.vshare.io)\/v\/(.*)<\/a>/g,
      embedUrl_youtube       = /<a href="(?:http.?:\/\/)?(?:www.)?(?:(?:youtube.com\/)|(?:youtu.be\/))(?!playlist|embed\/video)(?:(?:watch\?v=)|(?:embed\/)|(?:v\/)|)?([a-zA-Z0-9-_]*)(?:(?:\?t=)?([0-9]*))(?:&index=)?([0-9]*)(?:&list=)?([a-zA-Z0-9-_]*).*<\/a>/g,
      embedUrl_facebook      = /<a href="http.:\/\/.+facebook.com\/\w+\.?\w+\/videos\/(\w+).*<\/a>/ig,
      embedUrl_dailymotion   = /<a href="(?:https?:\/\/)?(?:www\.)dailymotion\.com\/video\/(.*)" .*<\/a>/g,
      embedUrl_vine          = /<a href="(?:https?:\/\/)?(?:vine\.co)\/\w*\/(\w*).*<\/a>/g,
      embedUrl_mixcloud      = /<a href="http.?:\/\/?.*\.mixcloud\.com\/(\w*)\/(.*)?\/<\/a>/g,
      embedUrl_spotify       = /<a href="http.?:.*play.spotify.com\/artist\/(.*)<\/a>/g,
      embedUrl_spotify_album = /<a href="http.?:.*play.spotify.com\/album\/(.*)<\/a>/g,
      embedUrl_youtube_pl    = /<a href=".*(?:youtu.be|youtube.com).*(?:v=)([a-zA-Z0-9_-]*)?.*list{1}=([a-zA-Z0-9_-]*)<\/a>/g,
      embedUrl_youtube       = /<a href=".*(?:youtu.be|youtube.com)(?:.*(?:v=)|(?:\/))([a-zA-Z0-9_-]*)(?:\?t=)?([0-9]*)<\/a>/g,
      embedUrl_facebook      = /<a href="http.:\/\/.+facebook.com\/\w+\.?\w+\/videos\/(\w+).*<\/a>/ig,
      embedUrl_dailymotion   = /<a href="(?:https?:\/\/)?(?:www\.)dailymotion\.com\/video\/(.*)" .*<\/a>/g,
      embedUrl_vine          = /<a href="(?:https?:\/\/)?(?:vine\.co)\/\w*\/(\w*).*<\/a>/g,
      embedUrl_mixcloud      = /<a href="http.?:\/\/?.*\.mixcloud\.com\/(\w*)\/(.*)?\/<\/a>/g,
      embedUrl_spotify       = /<a href="http.?:.*play.spotify.com\/artist\/(.*)<\/a>/g,
      embedUrl_spotify_album = /<a href="http.?:.*play.spotify.com\/album\/(.*)<\/a>/g,
      embedUrl_pinterest_pin = /<a href="http.?:.*pinterest.com\/pin\/(\w*).*<\/a>/g,
      embedUrl_foursquare    = /<a href="http.?:.*foursquare.com\/v\/(.*)<\/a>/g;
     	  

     	  

     //	embedUrl_youtube       = /<a href="(?:http.?:\/\/)?(?:www.)?(?:(?:youtube.com\/)|(?:youtu.be\/))(?!playlist|embed\/video)(?:(?:watch\?v=)|(?:embed\/)|(?:v\/)|)?([a-zA-Z0-9-_]*)(?:(?:\?t=)?([0-9]*))(?:&index=)?([0-9]*)(?:&list=)?([a-zA-Z0-9-_]*).*<\/a>/g,     	  

     // Youtube url check [videoID] or [playlistID]
     

     	   
	EmbedVideo.parse = function(data, callback) {
	    if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
		if (data.postData.content.match(embedUrl_steam)) {         
            data.postData.content = data.postData.content.replace(embedUrl_steam, embed_steam);
        }
		if (data.postData.content.match(embedUrl_bilibili)) {         
            data.postData.content = data.postData.content.replace(embedUrl_bilibili, embed_bilibili);
        }
		if (data.postData.content.match(embedUrl_openload)) {        
            data.postData.content = data.postData.content.replace(embedUrl_openload, embed_openload);
        }
		if (data.postData.content.match(embedUrl_vshare)) {        
            data.postData.content = data.postData.content.replace(embedUrl_vshare, embed_vshare);
        }
        if (data.postData.content.match(embedUrl_vimeo)) {        
            data.postData.content = data.postData.content.replace(embedUrl_vimeo, embed_vimeo);
        }
        if (data.postData.content.match(embedUrl_youtube_pl)) {        
            data.postData.content = data.postData.content.replace(embedUrl_youtube_pl, embed_youtube_pl);
        }
        if (data.postData.content.match(embedUrl_youtube)) {        
            data.postData.content = data.postData.content.replace(embedUrl_youtube, embed_youtube);
        }
        if (data.postData.content.match(embedUrl_facebook)) {        
            data.postData.content = data.postData.content.replace(embedUrl_facebook, embed_facebook);
        }
        if (data.postData.content.match(embedUrl_dailymotion)) {        
            data.postData.content = data.postData.content.replace(embedUrl_dailymotion, embed_dailymotion);
        }
        if (data.postData.content.match(embedUrl_vine)) {        
            data.postData.content = data.postData.content.replace(embedUrl_vine, embed_vine);
        }
        if (data.postData.content.match(embedUrl_mixcloud)) {        
            data.postData.content = data.postData.content.replace(embedUrl_mixcloud, embed_mixcloud);
        }
        if (data.postData.content.match(embedUrl_spotify)) {        
            data.postData.content = data.postData.content.replace(embedUrl_spotify, embed_spotify);
        }
        if (data.postData.content.match(embedUrl_spotify_album)) {        
            data.postData.content = data.postData.content.replace(embedUrl_spotify_album, embed_spotify_album);
        }
        if (data.postData.content.match(embedUrl_pinterest_pin)) {        
            data.postData.content = data.postData.content.replace(embedUrl_pinterest_pin, embed_pinterest_pin);
        }
        if (data.postData.content.match(embedUrl_foursquare)) {        
            data.postData.content = data.postData.content.replace(embedUrl_foursquare, embed_foursquare);
        }
        
        callback(null, data);
    };

	module.exports = EmbedVideo;
}(module));
