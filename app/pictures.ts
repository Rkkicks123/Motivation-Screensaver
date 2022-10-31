
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
let imageElement1 = document.querySelector('#picture1');
let imageElement2 = document.querySelector('#picture2');
let imageElement3 = document.querySelector('#picture3');
let imageElement4 = document.querySelector('#picture4');
let imageElement5 = document.querySelector('#picture5');
let imageElement6 = document.querySelector('#picture6');

export function drawRect (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement1, x, y, 300, 200);
  //ctx.fillStyle = "#6A0DAD";
  //ctx.fillRect(x, y, 15, 10);
};

export function drawRect2 (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement2, x, y, 300, 200);
  //ctx.fillStyle = "#6A0DAD";
  //ctx.fillRect(x, y, 15, 10);
};

export function drawRect3 (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement3, x, y, 300, 200);
  //ctx.fillStyle = "#6A0DAD";
  //ctx.fillRect(x, y, 15, 10);
};

export function drawRect4 (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement4, x, y, 150, 200);
  //ctx.fillStyle = "#6A0DAD";
  //ctx.fillRect(x, y, 15, 10);
};

export function drawRect5 (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement5, x, y, 300, 200);
  //ctx.fillStyle = "#6A0DAD";
  //ctx.fillRect(x, y, 15, 10);
};

export function drawRect6 (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement6, x, y, 250, 300);
  //ctx.fillStyle = "#6A0DAD";
  //ctx.fillRect(x, y, 15, 10);
};

export function drawRain (b,c){
  ctx.fillStyle = "#6A0DAD";
  ctx.fillRect(b, c, 5, 20);
};
