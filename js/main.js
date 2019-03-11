(() => {
	
		console.log('fired');

		let cat = document.querySelector(".allCat");

		let dropZone = document.querySelectorAll(".drop-zone");

		let aud       = document.querySelector('audio');

		let tracks    = document.querySelectorAll('.trackholder');

		let beats 	  = document.querySelectorAll(".beats");



	function playAudio() {
		aud.play();
	}

	function newTrack(e) {
		currentTrack = this.dataset.currenttrack;

		aud.src = `audio/${currentTrack}`;
		aud.load();
		aud.play();
	}


	initDrag();
	
	//drag
	function initDrag() {
		cat.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('draggin...');
				e.dataTransfer.setData("text/plain", this.id);
				console.log(this.id);
		
			});

		});
	}


	//drop
	dropZone.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged over me!');

		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped somethin on me');

			let item = e.dataTransfer.getData("text/plain");
			
			e.target.appendChild(document.querySelectorAll("img"));
		
		})
	});

		tracks.forEach(track => {
		track.addEventListener('drop', newTrack);

	})



})();