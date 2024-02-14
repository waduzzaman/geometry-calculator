/* steps:

get base , height of a triangle. calculate the area by using the provided formula. and the display the area. 

-get bse value: 




*/
function calculateTriangleArea(){

    //get triangle base value
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseText=triangleBaseInput.value;
    const base=parseFloat(triangleBaseText);

     //get triangle height value
    const triangleHeight=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeight.value;
    const height=parseFloat(triangleHeightText);
    
    //calculate triangle area

    const area=0.5*base*height;
    console.log(area);

    // display triangle area
    const triangleAreaSpan=document.getElementById('triangle-area')
    triangleAreaSpan.innerText=area;





}