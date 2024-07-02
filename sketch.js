let img;
let mySound;

let imgWidth, imgHeight, imgX1, imgY1, imgY2, imgY3, imgY4, imgY5, imgY6, imgY7, imgY8, imgY9;

let fsNew, ssNew, rbNew, rb450New, chNew, honeyNew, juiceNew, jamNew, potNew;
let fsLeftOver, ssLeftOver, rbLeftOver, rb450LeftOver, chLeftOver, honeyLeftOver, juiceLeftOver, jamLeftOver, potLeftOver;
let fsSold, ssSold, rbSold, rb450Sold, chSold, honeySold, juiceSold, jamSold, potSold;
let fsMoney, ssMoney, rbMoney, rb450Money, chMoney, honeyMoney, juiceMoney, jamMoney, potMoney;
let total;

function preload() {
  img = loadImage("plus.png", () => {
    console.log("Image loaded successfully");
  }, () => {
    console.error("Failed to load image");
  });
  
  mySound = loadSound("0610.mp3", () => {
    console.log("Sound loaded successfully");
  }, () => {
    console.error("Failed to load sound");
  });
}

function setup() {
  createCanvas(900, 900);

  img.resize(40, 40);
  imgX1 = 750;
  imgY1 = 125;
  imgY2 = 200;
  imgY3 = 275;
  imgY4 = 350;
  imgY5 = 425;
  imgY6 = 500;
  imgY7 = 575;
  imgY8 = 650;
  imgY9 = 725;

  fsNew = 56;
  ssNew = 53;
  rbNew = 22;
  rb450New = 8;
  chNew = 9;
  honeyNew = 0;
  juiceNew = 0;
  jamNew = 0;
  potNew = 90;

  fsLeftOver = fsNew;
  ssLeftOver = ssNew;
  rbLeftOver = rbNew;
  rb450LeftOver = rb450New;
  chLeftOver = chNew;
  honeyLeftOver = honeyNew;
  juiceLeftOver = juiceNew;
  jamLeftOver = jamNew;
  potLeftOver = potNew;

  fsSold = 0;
  ssSold = 0;
  rbSold = 0;
  rb450Sold = 0;
  chSold = 0;
  honeySold = 0;
  juiceSold = 0;
  jamSold = 0;
  potSold = 0;

  fsMoney = 0;
  ssMoney = 0;
  rbMoney = 0;
  rb450Money = 0;
  chMoney = 0;
  honeyMoney = 0;
  juiceMoney = 0;
  jamMoney = 0;
  potMoney = 0;

  total = 0;

  imgWidth = img.width;
  imgHeight = img.height;
}

function draw() {
  background(255);
  fill(0);
  textSize(32);

  text("Fs", 30, 150);
  text("Ss", 30, 225);
  text("Rb", 30, 300);
  text("Bb", 30, 375);
  text("Ch", 30, 450);
  text("Honey", 30, 525);
  text("Juice", 30, 600);
  text("Jam", 30, 675);
  text("Pots", 30, 750);

  line(150, 0, 150, 900);
  line(0, 100, 900, 100);

  text("New", 200, 75);
  text(fsNew, 200, 150);
  text(ssNew, 200, 225);
  text(rbNew, 200, 300);
  text(rb450New, 200, 375);
  text(chNew, 200, 450);
  text(honeyNew, 200, 525);
  text(juiceNew, 200, 600);
  text(jamNew, 200, 675);
  text(potNew, 200, 750);

  line(300, 0, 300, 900);

  image(img, imgX1, imgY1);
  image(img, imgX1, imgY2);
  image(img, imgX1, imgY3);
  image(img, imgX1, imgY4);
  image(img, imgX1, imgY5);
  image(img, imgX1, imgY6);
  image(img, imgX1, imgY7);
  image(img, imgX1, imgY8);
  image(img, imgX1, imgY9);

  line(450, 0, 450, 900);

  text("Closing", 325, 75);
  text(fsLeftOver, 370, 150);
  text(ssLeftOver, 370, 225);
  text(rbLeftOver, 370, 300);
  text(rb450LeftOver, 370, 375);
  text(chLeftOver, 370, 450);
  text(honeyLeftOver, 370, 525);
  text(juiceLeftOver, 370, 600);
  text(jamLeftOver, 370, 675);
  text(potLeftOver, 370, 750);

  text("Sold", 500, 75);
  text(fsSold, 515, 150);
  text(ssSold, 515, 225);
  text(rbSold, 515, 300);
  text(rb450Sold, 515, 375);
  text(chSold, 515, 450);
  text(honeySold, 515, 525);
  text(juiceSold, 515, 600);
  text(jamSold, 515, 675);
  text(potSold, 515, 750);

  line(600, 0, 600, 900);

  text("€" + fsMoney, 660, 150);
  text("€" + ssMoney, 660, 225);
  text("€" + rbMoney, 660, 300);
  text("€" + rb450Money, 660, 375);
  text("€" + chMoney, 660, 450);
  text("€" + honeyMoney, 660, 525);
  text("€" + juiceMoney, 660, 600);
  text("€" + jamMoney, 660, 675);
  text("€" + potMoney, 660, 750);

  text("Total: €" + total, 650, 850);
}

function mousePressed() {
  if (mouseX > imgX1 && mouseX < imgX1 + imgWidth && mouseY > imgY1 && mouseY < imgY1 + imgHeight) {
    fsLeftOver--;
    fsSold++;
    fsMoney += 11;
    total += 11;
    mySound.play();
  }

  if (mouseX > imgX1 && mouseX < imgX1 + imgWidth && mouseY > imgY2 && mouseY < imgY2 + imgHeight) {
    ssLeftOver--;
    ssSold++;
    ssMoney += 5;
    total += 5;
    mySound.play();
  }

  if (mouseX > imgX1 && mouseX < imgX1 + imgWidth && mouseY > imgY3 && mouseY < imgY3 + imgHeight) {
    rbLeftOver--;
    rbSold++;
    rbMoney += 3;
    total += 3;
    mySound.play();
  }

  if (mouseX > imgX1 && mouseX < imgX1 + imgWidth && mouseY > imgY4 && mouseY < imgY4 + imgHeight) {
    rb450LeftOver--;
    rb450Sold++;
    rb450Money += 3;
    total += 3;
    mySound.play();
  }

  if (mouseX > imgX1 && mouseX < imgX1 + imgWidth && mouseY > imgY5 && mouseY < imgY5 + imgHeight) {
    chLeftOver--;
    chSold++;
    chMoney += 7;
    total += 7;
    mySound.play();
  }

  if (mouseX > imgX1 && mouseX < imgX1 + imgWidth && mouseY > imgY6 && mouseY < imgY6 + imgHeight) {
    honeyLeftOver--;
    honeySold++;
    honeyMoney += 8;
    total += 8;
    mySound.play();
  }

  if (mouseX > imgX1 && mouseX < imgX1 + imgWidth && mouseY > imgY7 && mouseY < imgY7 + imgHeight) {
    juiceLeftOver--;
    juiceSold++;
    juiceMoney += 5;
    total += 5;
    mySound.play();
  }

  if (mouseX > imgX1 && mouseX < imgX1 + imgWidth && mouseY > imgY8 && mouseY < imgY8 + imgHeight) {
    jamLeftOver--;
    jamSold++;
    jamMoney += 4;
    total += 4;
    mySound.play();
  }

  if (mouseX > imgX1 && mouseX < imgX1 + imgWidth && mouseY > imgY9 && mouseY < imgY9 + imgHeight) {
    potLeftOver -= 1.25;
    potSold += 1.25;
    potMoney += 5;
    total += 5;
    mySound.play();
  }
}
