// Enter your JavaScript for the solution here...
let selectMeme = document.getElementById("meme-image");
let inputTextTop = document.getElementById("meme-top-text");
let inputTextBottom = document.getElementById("meme-bottom-text");

let memeForm = document.querySelector("form.meme-form");
let image = document.querySelector(".meme-display img");
let textTop = document.querySelector(".meme-display .top-text");
let textBottom = document.querySelector(".meme-display .bottom-text");

function generateSubmitHandler(event){
	event.preventDefault();
	let errorMessage = "";

	if(selectMeme.selectedIndex === 0){
		errorMessage += "<p>please select an image</p>";
	}else if(inputTextTop.value.trim() === "" || inputTextBottom.value.trim() === ""){
		errorMessage += "<p>please add top and bottom text</p>"
	}else{
		if(selectMeme.selectedIndex === 1){
			image.src = "img/fry-meme.png";
			image.alt = "fry meme"
		}else if(selectMeme.selectedIndex === 2){
			image.src = "img/one-does-not-simply-meme.png";
			image.alt = "one does not simply meme"
		}else{
			image.src = "img/most-interesting-man-meme.png";
			image.alt = "most interesting man meme"
		}

		textTop.innerText = inputTextTop.value;
		textBottom.innerText = inputTextBottom.value;
	}

	document.querySelector("div.error").innerHTML = errorMessage;
}

function generateResetHandler(event){
		image.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
		image.alt = "Placeholder Image"

		textTop.innerText = "";
		textBottom.innerText = "";

		document.querySelector("div.error").innerHTML = "";
}

memeForm.addEventListener("submit", generateSubmitHandler);
memeForm.addEventListener("reset", generateResetHandler);