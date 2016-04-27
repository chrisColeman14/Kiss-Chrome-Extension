	var secondvideo = document.getElementById('media');
	var statelabel = document.getElementById('videoState');
	
	sophis.VideoControl = function(targetEl) {
		this.videoEl_ = targetEl;
	}
	
	sophis.VideoControl.CLASS_NAME ='sophis-video-control';
	
	sophis.VideoControl.prototype.pause = function()
	{
		this.videoEl_.play();
	}
	
	function ENDED(){ // Repeat this for other events
		// The video is playing
		if(statelabel == "ended")
			window.alert("ENDED")
	});
	
	document.getElementById('play').addEventListener('click', pause());
	
	sophis.VideoControl = function(targetEl) {
		this.videoEl_ = targetEl;
	}