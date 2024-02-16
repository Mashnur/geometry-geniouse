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
    
    // Getting base for parralogram
   const  ParaloBase=document.getElementById('Text-Base');
   const  ParaloBasText =ParaloBase.value;
   const Base=parseFloat(ParaloBasText);
   console.log(Base);
//    getting length from paralaogram
const ParalalHeight= document.getElementById('Text-Height');
const ParalalHeighText= ParalalHeight.value;
const Height =parseFloat(ParalalHeighText);
console.log(ParalalHeighText);
// calculating the Area of the parallelogram

const Area3= Base*Height;
console.log(Area3);
const parallelogramspan= document.getElementById('text3-area');
parallelogramspan.innerText=Area3;

const Textd1= document.getElementById('Text-d1');
const Rohmbusd1=Textd1.value;
const d1=parseFloat(Rohmbusd1);
console.log(d1);
const Textd2= document.getElementById('Text-d2');
const Rohmbusd2=Textd1.value;
const d2=parseFloat(Rohmbusd2);
console.log(d2);
const Area4=0.5*d1*d2;
console.log(Area4);
const Rohmbusspan= document.getElementById('text4-area');
Rohmbusspan.innerText=Area4;


const Textp1= document.getElementById('Text-p');
const pentagonp=Textp1.value;
const p=parseFloat(pentagonp);
console.log(p);
const Textb= document.getElementById('Text-b');
const pentagon=Textb.value;
const b=parseFloat(pentagon);
console.log(b);
const Area5=0.5*p*b;
console.log(Area5);
const Pentagoanspan= document.getElementById('text5-area');
Pentagoanspan.innerText=Area5;





 

    


}