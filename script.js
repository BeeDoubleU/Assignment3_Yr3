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

let barsValuesColours = [
    '#ffffff',
    '#000000'
];

const canvas = document.getElementById("barBox");
const slidersContainer = document.getElementById("slidersContainer");
const barBox = canvas.getContext("2d");
let captionValueText = "";

let barsValues = [50, 50];

function draw(){

    barBox.clearRect(0,0,500,500);
    barBox.fillText(captionValueText, 50, 50);
    barBox.font = "30px Arial";
    defaultColours.sort(function(a,b) {return Math.random()-0.5});

    for (let i = 0; i< barsValues.length; i++){
        const normalizedValue = barsValues[i] / 100;
        const rectHeight = 500 * normalizedValue;

        const barWidth = canvas.width / barsValues.length;
        const x = i * barWidth;
        barBox.fillStyle = barsValuesColours[i];
        const offset = 100 - barsValues[i];
        let rand = Math.random()*400;
        barBox.fillRect(x,500-rectHeight,barWidth,rectHeight);
    }
}

function randomizeColors(){
    for (let i = 0; i < barsValuesColours.length; i++){
        const newColourIndex = Math.floor(Math.random() * (defaultColours.length - 1));
        const newColour = defaultColours[newColourIndex];
        barsValuesColours[i] = newColour;
        console.log(newColourIndex);
    }
    console.log("Randomize");
    draw();
}

function sliderConstructor(index){
    const container = document.createElement('div');
    container.className="slideContainer";
    container.innerHTML=`<span>Value</span><input onchange="onSliderChange(this)" type="range" name="slider${index}" id="aRange${index}" min="0" max="100" value="50"><div class="slideValue"><span id="aRange${index}Value">50%</span></div>`;
    return container;
}

function onCaptionChange(){
    const captionValue = document.getElementById("caption").value;
    captionValueText = captionValue;
    console.log({captionValue});
    draw();
}

function onChartSizeChange(){
    const sizeChartValue = parseInt(document.getElementById("chartSize").value);
    console.log({sizeChartValue});
    if(isNaN(sizeChartValue)) return;
    slidersContainer.innerHTML="";
    barsValues = [];
    barsValuesColours = [];
    for (let index = 0; index < sizeChartValue; index++) {
        const newSliderElement = sliderConstructor(index);
        slidersContainer.appendChild(newSliderElement);
        barsValues.push(50);
        barsValuesColours.push(defaultColours[index]);
    }
    draw();
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
    draw();
}

draw();

function copyCanvas() {

  }

