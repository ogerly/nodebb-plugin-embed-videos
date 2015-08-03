(function(module) {
	"use strict";

	var EmbedVideo = {},
		
		embed_vimeo = '<iframe class="vimeo-embed" src="//player.vimeo.com/video/$1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		embed_youtube = '<div class="js-lazyYT" data-youtube-id="$1" data-width="640" data-height="360"><iframe class="lazytube" src="//www.youtube.com/embed/$1"></iframe></div>',
     	embed_facebook = '<iframe src="https://www.facebook.com/video/embed?video_id=$1" width="650" height="400" frameborder="0" allowfullscreen></iframe>',
     	 
      embedUrl_vimeo = /<a href="(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/)(?:\D*|).*(\w{9})<\/a>/g,
	  	embedUrl_youtube = /<a href="http.?:.*(?:youtube.com\/|youtu.be\/)(?:watch\?v=|watch\?t=.*v=|embed\/|)(\w{11})<\/a>/g,
	   embedUrl_facebook = /<a href="https:\/\/.+facebook.com\/(?:\w+)\/(?:\w+)\/(?:\w+.\w+)\/(\w+).*<\/a>/ig;
	
	
	EmbedVideo.parse = function(data, callback) {
	    if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(embedUrl_vimeo)) {
        console.log("embed vimeo => " + embedUrl_vimeo );
            data.postData.content = data.postData.content.replace(embedUrl_vimeo, embed_vimeo);
        }
        if (data.postData.content.match(embedUrl_youtube)) {
        console.log("embed youtube => " + embedUrl_youtube );
            data.postData.content = data.postData.content.replace(embedUrl_youtube, embed_youtube);
        }
        if (data.postData.content.match(embedUrl_facebook)) {
        console.log("embed facebook => " + embedUrl_facebook );
            data.postData.content = data.postData.content.replace(embedUrl_facebook, embed_facebook);
        }
        callback(null, data);
    };

	module.exports = EmbedVideo;
}(module));
