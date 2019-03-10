(() => {
	console.log('fired');

	let cat = document.querySelector(".allCat");

	let dropZone1 = document.querySelector("#man1");

	let dropZone2 = document.querySelector("#man2");

	let dropZone3 = document.querySelector("#man3");

	let dropZone4 = document.querySelector("#man4");

	let dropZone5 = document.querySelector("#man5");

	let dropZone6 = document.querySelector("#man6");



	initDrag();

	function playAudio() {
		aud.play();
	}



	
	//drag
	function initDrag() {
		cat.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('draggin...');
				e.dataTransfer.setData("text/plain", this.id);
			});

		});
	}


	//drop
		dropZone1.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged over me!');

		});

		dropZone1.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped somethin on me');

			let item = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelectorAll("img"));
		
		});

		dropZone2.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged over me!');

		});

		dropZone2.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped somethin on me');

			let item = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(".icons"));
		
		});

		dropZone3.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged over me!');

		});

		dropZone3.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped somethin on me');

			let item = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(".icons"));
		
		});

		dropZone4.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged over me!');

		});

		dropZone4.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped somethin on me');

			let item = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(".icons"));
		
		});

		dropZone5.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged over me!');

		});

		dropZone5.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped somethin on me');

			let item = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(".icons"));
		
		});

		dropZone6.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged over me!');

		});

		dropZone6.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped somethin on me');

			let item = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(".icons"));
		
		});



})();