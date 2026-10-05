// ---- Currency Converter Project ---- //
let dropdowns = document.querySelectorAll(".dropdown select");

for(let select of dropdowns){
    for(let country of country_list)
    {
      let  newOption = document.createElement("option");
       newOption.innerText = country.currencyName;
       newOption.value = country.countryCode;
      
 if(select.name === "from" && country.currencyName ==="United States Dollar"){
    newOption.selected = "selected";
    newOption.innerText="United States Dollar";

    
}else if(select.name === "to" && country.currencyName ==="Indian Rupee"){
    newOption.selected = "selected";
        newOption.innerText ="Indian Rupee"

}
        select.append(newOption);
       
   
    }
    select.addEventListener("change",(evt)=>{
        changeFlag(evt.target);
    })

  

}

// changing the flag dynamically
const changeFlag = (element)=>{
   
   let code = element.value;

   let src = `https://flagsapi.com/${code}/flat/64.png`;
    let newImg = element.parentElement.querySelector("img");

    newImg.src = src;
    
    
}
// getting currency code from country codes
let fromCurr = "USD" ;
let fromSelect = document.querySelector(".from select");
fromSelect.addEventListener("change",(e)=>{
       let fromObj = country_list.find(item=>item.countryCode===e.target.value);
fromCurr = fromObj.currencyCode;


})

let toCurr = "INR";

let toSelect = document.querySelector(".to select");
toSelect.addEventListener("change",(e)=>{
       let toObj = country_list.find(item=>item.countryCode===e.target.value);
toCurr = toObj.currencyCode;


})






// for exchange rates ---- main logic----

const get_Exchange_Rate= async()=>{
    let val = amount.value;
if(val === "" || val<1){
    val = 1;
    amount.value=1;
}




const url = `https://api.frankfurter.dev/v2/rate/${fromCurr}/${toCurr}`;
let response =  await fetch(url);
let data = await response.json();



const result = document.querySelector(".result");
let answer = (val*(data.rate)).toFixed(3);
result.innerText = `${val} ${fromCurr} = ${answer} ${toCurr}`;
}

// base api url
// const base_url = "https://api.frankfurter.dev/v2/rate/usd/inr";

     let amount = document.querySelector(".amount input");

const result = document.querySelector(".result");
let btn = document.querySelector("#output");
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
  get_Exchange_Rate();

})


// reset button
let clear = document.querySelector("#clear");
clear.addEventListener("click",(e)=>{
  
  amount.val = "";
  document.querySelector(".from img").src="https://flagsapi.com/US/flat/64.png";
  document.querySelector(".to img").src="https://flagsapi.com/IN/flat/64.png";

  fromCurr = "USD";
  toCurr = "INR";
result.innerText = " ";

})


const swapping = ()=>{
// 1. Swapping flags
    let fromImg = document.querySelector(".from img");
    let toImg =  document.querySelector(".to img");

    let tempSrc = fromImg.src;
    fromImg.src= toImg.src;
    toImg.src = tempSrc




//2. Swapping currency names


let country1 = document.querySelector(".from select ");
let country2 =  document.querySelector(".to select");

let tempVariable = country1.value;
country1.value=country2.value;
country2.value=tempVariable;
// 3. Swapping currency rates 
    temp = toCurr;
    toCurr = fromCurr;
    fromCurr = temp;


// 4. Automatically fetching conversion rate;
  get_Exchange_Rate();
}

let icon = document.querySelector(".icon");
icon.addEventListener("click",(e)=>{
    swapping();
})


// ---- !!End of project!! ---- // 