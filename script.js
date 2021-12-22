function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            break;
        default:
            console.log(key);
    }
    audio.play();
}

function buttonAnimation(key) {
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 150);
}


array = document.getElementsByClassName("drum")
for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})


