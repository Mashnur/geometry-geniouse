function CalculateTriangle(){
// get base
    
    const TriangleBase=document.getElementById('text-base');
    const TriangleBaseText=TriangleBase.value;
    console.log(TriangleBaseText)
    const base= parseFloat(TriangleBaseText);
    console.log( base)
    // get height

    const TriangleHeight=document.getElementById('text-height');
    const TriangleHeightText= TriangleHeight.value;
    const height=parseFloat(TriangleHeightText)
    console.log(height)

    // calculating the area
    const Area = 0.5*base*height;
    console.log(Area);
    const TriangleAreaspan=document.getElementById('text-area');
    TriangleAreaspan.innerText=Area;
    // getting width
    const RectangleWidth =document.getElementById('text-width');
    const RectangleWidthText=RectangleWidth.value;
    const width=parseFloat(RectangleWidthText);
    console.log(width);
    // getting length
    const RectangleLength=document.getElementById('text-length');
    const RectangleLengthText=RectangleLength.value;
    const length=parseFloat(RectangleLengthText);
    console.log(length);
    // calculating the area of the Reactangle
    const Area2 = width*length;
    console.log(Area2);
    const ReactangleAreaspan=document.getElementById('text2-area');
    ReactangleAreaspan.innerText=Area2;


 

    


}