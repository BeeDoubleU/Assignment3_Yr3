let defaultColours = [
    '#ffffff',
    '#000000',
    '#333333',
    '#666666',
    '#888888',
    '#aaaaaa',
    '#cccccc',
    '#eeeeee'
];

let canvas = document.getElementById("barBox");
const barBox = canvas.getContext("2d");


function draw(){

    barBox.clearRect(0,0,500,500);
defaultColours.sort(function(a,b) {return Math.random()-0.5});

for (let i = 0; i< 4; i++){

    var bw = canvas.width / 4;
    
x = i*bw; 
barBox.fillStyle = defaultColours[i];

let rand = Math.random()*400;
barBox.fillRect(x,500-rand,bw,rand);
}
}