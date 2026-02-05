let earthImg;
let satteliteImg;
let hourImg;
let satteliteImg2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    earthImg = loadImage('earth.jpg');
    satteliteImg = loadImage('sattelite.png');
    hourImg = loadImage('moon.png');
    satteliteImg2 = loadImage('sattelite2.png');
}

function draw() {
    background(0); 
    
    let imgWidth = Math.min(width * 0.18, height * 0.18);
    let imgHeight = imgWidth * (earthImg.height / earthImg.width);
    let radius1 = imgWidth * 1.2;
    
    stroke(128);
    noFill();
    ellipse(width / 2, height / 2, radius1 * 2, radius1 * 2);
    noStroke();
    
    
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    for (let i = 1; i <= 12; i++) {
        let theta = ((i % 12) / 12.0) * TWO_PI - PI / 2;
        let x = width / 2 + cos(theta) * (radius1 - 10);
        let y = height / 2 + sin(theta) * (radius1 - 10);
        push();
        translate(x, y);
        rotate(theta + PI / 2);
        text(i, 0, 0);
        pop();
    }
    
    image(earthImg, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2, imgWidth, imgHeight);

    let m = minute() + second() / 60.0;
    let angle = (m / 60.0) * TWO_PI - PI / 2;
    let radius = imgWidth * 1.2;
    let satteliteX = width / 2 + cos(angle) * radius;
    let satteliteY = height / 2 + sin(angle) * radius;
    let satteliteSize = imgWidth * 0.3;
    let satteliteWidth = satteliteSize;
    let satteliteHeight = satteliteWidth * (satteliteImg.height / satteliteImg.width);
    image(satteliteImg, satteliteX - satteliteWidth / 2, satteliteY - satteliteHeight / 2, satteliteWidth, satteliteHeight);

    let h = (hour() % 12) + minute() / 60.0;
    let hourAngle = (h / 12.0) * TWO_PI - PI / 2;
    let hourX = width / 2 + cos(hourAngle) * radius;
    let hourY = height / 2 + sin(hourAngle) * radius;
    let hourSize = imgWidth * 0.2;
    let hourWidth = hourSize;
    let hourHeight = hourWidth * (hourImg.height / hourImg.width);
    image(hourImg, hourX - hourWidth / 2, hourY - hourHeight / 2, hourWidth, hourHeight);

     let s = second();
    let secondAngle = (s) / 60 * TWO_PI - PI / 2;
    let secondRadius = imgWidth * 1.2;
    let secondSatteliteX = width / 2 + cos(secondAngle) * secondRadius;
    let secondSatteliteY = height / 2 + sin(secondAngle) * secondRadius;
    let secondSatteliteSize = imgWidth * 0.3;
    let secondSatteliteWidth = secondSatteliteSize;
    let secondSatteliteHeight = secondSatteliteWidth * (satteliteImg2.height / satteliteImg2.width);
    image(satteliteImg2, secondSatteliteX - secondSatteliteWidth / 2, secondSatteliteY - secondSatteliteHeight / 2, secondSatteliteWidth, secondSatteliteHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}
