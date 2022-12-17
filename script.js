const defaultColours = [
    '#ffffff',
    '#000000',
    '#333333',
    '#666666',
    '#888888',
    '#aaaaaa',
    '#cccccc',
    '#eeeeee'
];

const canvas = document.getElementById("barBox");
const slidersContainer = document.getElementById("slidersContainer");
const barBox = canvas.getContext("2d");

let barsValues = [];

function draw(){

    barBox.clearRect(0,0,500,500);
    defaultColours.sort(function(a,b) {return Math.random()-0.5});

    for (let i = 0; i< barsValues.length; i++){
        const bw = canvas.width / 4;
        const x = i * bw; 
        barBox.fillStyle = defaultColours[i];
        const offset = 100 - barsValues[i];
        let rand = Math.random()*400;
        barBox.fillRect(x,500-rand,bw,rand);
    }
}

function randomizeColors(){
    // create a function to re-render the bars with the same values, but only randomize the colors of the rectangles.
    //use draw somewhere around here;
    console.log("Randomize");
}

function sliderConstructor(index){
    const container = document.createElement('div');
    container.className="slideContainer";
    container.innerHTML=`<span>Value</span><input onchange="onSliderChange(this)" type="range" name="slider${index}" id="aRange${index}" min="0" max="100" value="50"><div class="slideValue"><span id="aRange${index}Value">50%</span></div>`;
    return container;
}

function onCaptionChange(){
    const captionValue = document.getElementById("caption").value;
    console.log({captionValue});
}

function onChartSizeChange(){
    const sizeChartValue = parseInt(document.getElementById("chartSize").value);
    console.log({sizeChartValue});
    if(isNaN(sizeChartValue)) return;
    slidersContainer.innerHTML="";
    barsValues = [];
    for (let index = 0; index < sizeChartValue; index++) {
        const newSliderElement = sliderConstructor(index);
        slidersContainer.appendChild(newSliderElement);
        barsValues.push(50);
    }
    //use draw() somewhere here
}

function onSliderChange(element){
    const sliderValue = element.value;
    const sliderName = element.name;
    const sliderValueText = document.getElementById(element.id+"Value");
    sliderValueText.innerHTML = sliderValue + "%";
    const barvalueIndex = parseInt(element.name.replace(/slider/g, ''));
    console.log(sliderValue);
    console.log({sliderName});
    barsValues[barvalueIndex] = parseInt(sliderValue);
    console.log({barsValues});
    console.log({value: barsValues[barvalueIndex]});
    // use draw() somewhere here
}