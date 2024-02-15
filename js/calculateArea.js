

// 

// Get input value by id
function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldText=inputField.value;
    const inputValue=parseFloat(inputFieldText);
    return inputValue;

}

function setInnerTextByID(elementId, text){
    const element=document.getElementById(elementId);
    element.innerText=text;

}


// calculateTriangle
function calculateTriangle() {
    // input base value id
    const base=getInputValueById('triangle-base')    
    // input height value by id
    const height=getInputValueById('triangle-height')
    // calculate area
    const area=0.5*base*height;
    //set area
    setInnerTextByID('triangle-area', area)  

}

//Calculate Rectangular 

function calculateRectangle(){
    const  length = getInputValueById("rectangle-length");
    const width = getInputValueById("rectangle-width")
    const area = length * width;
    setInnerTextByID("rectangle-area", area)


}

// Calculate parallelogram

function calculateParallelogram(){
    const base=getInputValueById("parallelogram-base");
    const height=getInputValueById("parallelogram-height");
    const area=base*height;
    setInnerTextByID( "parallelogram-area" , area);
    
}

//Calculate rhombus
function calculateRhombus(){

    const d1=getInputValueById("rhombus-sideA");
    const d2=getInputValueById("rhombus-sideB");
    const area=0.5*d1*d2;
    setInnerTextByID("rhombus-area", area);

    

}

//calculate pentagon
function calculatePentagon() {
    const perimeter = getInputValueById("pentagon-perimeter");
    const apothem =getInputValueById('pentagon-apothem');     
    const area=0.5*perimeter*apothem;
    setInnerTextByID("pentagon-area", area);
}    

//Calculate Ellipse

function calculateEllipse(){
    const majorRadius=getInputValueById( 'ellipse-major' );
    const minorRadius=getInputValueById( 'ellipse-minor' );
    const area =Math.PI*(majorRadius)*(minorRadius);
    setInnerTextByID("ellipse-area", area);
}