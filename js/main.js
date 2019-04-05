(() => {
	
		console.log('fired');

		let cat = document.querySelector(".allCat");
		let dropZone = document.querySelectorAll(".drop-zone");
		let men = document.querySelectorAll(".men");
		let tracks    = document.querySelectorAll('.trackholder');

	
	initDrag();

	
	//drag
	function initDrag() {
		cat.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('draggin...');
				e.dataTransfer.setData("text/plain", this.dataset.currenttrack);
				console.log(this.id);
		
			});

		});
	}

	dropZone.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged over me!');
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped somethin on me');

			zone.src = "images/man-dance.svg";

			let source = e.dataTransfer.getData("text/plain");

			this.firstChild.classList.add('animateIcon', 'speakerOn');

			let newAudioTrack = document.createElement("audio");
			newAudioTrack.src = `audio/${source}`;

			function pauseAudio() {
			location.reload();
			}

			document.body.appendChild(newAudioTrack);
			newAudioTrack.load();
			newAudioTrack.loop = true;
			newAudioTrack.play();

			let button = document.getElementById('restart');
			button.addEventListener("click", pauseAudio);


			});

		});



})();





