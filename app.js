const celsisusFeild=document.querySelector("#celsius");
const degree=document.querySelector("#degree");
const convertBtn=document.querySelector("#convert-btn");
const tempType=document.querySelector("#temp-type");

window.addEventListener("load",() =>{
    degree.value= "";
    celsisusFeild.innerHTML= "";
})

convertBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    convertToCelsius();
    convertBtn.innerHTML="<span><i class='fa-solid fa-spinner fa-spin'></i>Converting..</span>";
    setTimeout(()=>{
        convertBtn.innerHTML="<span>Convert</span>";
    },1000)
})

function convertToCelsius(){
    let inputValue=degree.value;

   setTimeout(()=>{
    if(tempType.value === "fahrenheit"){
        const fahrenheitToCelsius=(inputValue)*(9/5)+32;
        celsisusFeild.innerHTML= `${fahrenheitToCelsius.toFixed(3)} &deg;
        c`;
    }

    else if(tempType.value === "kelvin"){
        const kelvinToCelsius= inputValue -273.15;
        celsisusFeild.innerHTML=`${kelvinToCelsius.toFixed(3)} &deg;
        c`;
    }
   },1200)
}  