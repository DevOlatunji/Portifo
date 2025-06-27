function embedLiveStream(platform, mediaId, privacy, outputElement){
	// 

	let iframe = document.createElement("iframe");
	let src;

	switch(platform){
		case "facebook":

			src = `https://www.facebook.com/video/embed?video_id=${mediaId}`;

		break;

		case "youtube":

			src = `https://www.youtube.com/embed/live_stream?channel=${mediaId}`;

		break;

	}

	iframe.src = src;
	iframe.width = "640";
	iframe.height = "360";
	iframe.frameBorder = "0";
	iframe.allow = "";
	iframe.allowFullscreen = true;
	iframe.src = src;


	let outputElement = document.querySelector(outputElement);

	outputElement.innerHTML = iframe;

	return;
}

// how i'll use it 

/*
<div class="container" id="streamer"></div>
<script>
embedLiveStream("facebook", "90348904jslfjs0934089080", "private", streamer)
</script>
*/