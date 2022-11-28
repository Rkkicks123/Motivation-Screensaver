
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
let imageElement1 = document.querySelector('#picture1');
let imageElement2 = document.querySelector('#picture2');
let imageElement3 = document.querySelector('#picture3');


export function drawRect (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement1, x, y, 500, 300);
  //ctx.fillStyle = "#6A0DAD";
  //ctx.fillRect(x, y, 15, 10);
};

export function drawRect2 (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement2, x, y, 300, 300);
  //ctx.fillStyle = "#6A0DAD";
  //ctx.fillRect(x, y, 15, 10);
};

export function drawRect3 (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement3, x, y, 300, 300);
  //ctx.fillStyle = "#6A0DAD";
  //ctx.fillRect(x, y, 15, 10);
};



export function drawRain (b,c){
  ctx.fillStyle = "#6A0DAD";
  ctx.fillRect(b, c, 5, 20);
};
