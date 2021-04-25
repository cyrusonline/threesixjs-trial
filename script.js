const images = [];
for (var i = 1; i < 80; i++) {
    let filename = i < 10 ? `./images/image-00${i}.jpg` : `./images/image-0${i}.jpg`
    images.push(filename)
}

var threesixty;
Promise.all(images.map((src) => {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = resolve;
        image.onerror = resolve;

        image.style.display = 'none';
        image.src = src;

        document.body.appendChild(image);
    })
})).then(() => {
    threesixty = new ThreeSixty(document.getElementById('threesixty'), {
        image: images,
        width: 225,
        height: 500,
        speed: 200,
    });

    // threesixty.play();
});
var nextBtn = document.getElementById('nextBtn');
nextBtn.onclick = function () {
    //do stuff
    console.log('hello')
    threesixty.next();
}
var prevBtn = document.getElementById('prevBtn');
prevBtn.onclick = function () {
    //do stuff
    console.log('hello')
    threesixty.prev();
}
var play = document.getElementById('play');
play.onclick = function () {
    //do stuff
    console.log('hello')
    threesixty.play();
}
var stop = document.getElementById('stop');
stop.onclick = function () {
    //do stuff
    console.log('hello')
    threesixty.stop();
}
