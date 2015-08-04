(function(module) {
	"use strict";

	var EmbedVideo = {},
		
		embed_vimeo = '<iframe class="vimeo-embed" src="//player.vimeo.com/video/$1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		embed_youtube = '<div class="js-lazyYT" data-youtube-id="$1" data-width="640" data-height="360"><iframe class="lazytube" src="//www.youtube.com/embed/$1"></iframe></div>',
     	embed_facebook = '<iframe src="https://www.facebook.com/video/embed?video_id=$1" width="650" height="400" frameborder="0" allowfullscreen></iframe>',
     	embed_dailymotion = '<iframe class="dailymotion-embed" frameborder="0" width="480" height="270" src="http://www.dailymotion.com/embed/video/$1"></iframe>',
      embed_vine = '<iframe class="vine-embed" src="https://vine.co/v/$1/embed/postcard?related=0" width="480" height="480" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>',   
      
      embedUrl_vimeo = /<a href="(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/)(?:\D*|).*(\w{9})<\/a>/g,
	  	embedUrl_youtube = /<a href="http.?:.*(?:youtube.com\/|youtu.be\/)(?:watch\?v=|watch\?t=.*v=|embed\/|)(.*)<\/a>/g,
	   embedUrl_facebook = /<a href="https:\/\/.+facebook.com\/(?:\w+)\/(?:\w+)\/(?:\w+.\w+)\/(\w+).*<\/a>/ig,
	   embedUrl_dailymotion = /<a href="(?:https?:\/\/)?(?:www\.)dailymotion\.com\/video\/(.*)" .*<\/a>/g,
	   embedUrl_vine = /<a href="(?:https?:\/\/)?(?:vine\.co)\/\w*\/(\w*).*<\/a>/g;
	
	
	EmbedVideo.parse = function(data, callback) {
	    if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(embedUrl_vimeo)) {        
            data.postData.content = data.postData.content.replace(embedUrl_vimeo, embed_vimeo);
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
        callback(null, data);
    };

	module.exports = EmbedVideo;
}(module));
