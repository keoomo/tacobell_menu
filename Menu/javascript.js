window.onload = function(){
    let images = document.querySelectorAll(".menuItem img");

    for(let i = 0; i < images.length; i++){

        images[i].onclick = function(){
            this.classList.toggle("animate")
        }
    }

    let purpleBoxes = document.getElementsByClassName("itemText purple");

    for(let i = 0; i < purpleBoxes.length; i++){

        purpleBoxes[i].onclick = function(){
            this.style.backgroundColor = "yellow";
        }
    }

}