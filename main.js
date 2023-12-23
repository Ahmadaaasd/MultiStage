const steps = document.querySelectorAll('.stp');
const formInputs = document.querySelectorAll('.step1 form')
const main = document.querySelector('main');
const num1 = document.getElementById('numIcon1');
const num2 = document.getElementById('numIcon2');
const num3 = document.getElementById('numIcon3');
const num4 = document.getElementById('numIcon4');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const plan1 = document.getElementById('arcade1');
const plan2 = document.getElementById('arcade2');
const plan3 = document.getElementById('arcade3');
const fake = document.querySelector('.fake');
const fake1 = document.querySelector('.fake1');
const fake2 = document.querySelector('.fake2');
const fake3 = document.querySelector('.fake3');
const page4Aracde =document.querySelector('.page4Arcade');
const fakeArcade =document.querySelector('.fakeArcade');
const paymentPage4 = document.querySelector('.paymentPage4');
const checkbox = document.querySelector('.checkbox');
const fakeId = document.getElementById('fake');
const page4Arcade = document.getElementById('page4Arcade');
const amount1 = document.querySelector('.payment1');
const amount2 = document.querySelector('.payment2');
const amount3 = document.querySelector('.payment3');
const page4Payment = document.querySelector('.amountPage4');
const page4Payment1 = document.querySelector('.amount1Page4');
const page4Payment2 = document.querySelector('.amount2Page4');
const page3Amount = document.querySelector('.page3Amount');
const page3Amount1 = document.querySelector('.page3Amount1');
const page3Amount2 = document.querySelector('.page3Amount2');
const page4MY =document.querySelector('.page4MY');
const checkMark1 = document.getElementById('checkMarkCont1');
const checkMark2 = document.getElementById('checkMarkCont2');
const checkMark3 = document.getElementById('checkMarkCont3');
const changeContainer1 = document.querySelector('.changeContainer1');
const changeContainer2 = document.querySelector('.changeContainer2');
const changeContainer3 = document.querySelector('.changeContainer3');
const button1 = document.querySelector('.buttonCheck1');
const button2 = document.querySelector('.buttonCheck2');
const button3 = document.querySelector('.buttonCheck3');
const nextStepPage3 = document.querySelector('.nextStepTotal');
let currentStep = 1;
let circuleStep = 1;
let payment1 = {M:9, Y:90};
let payment2 = {M:12, Y:120};
let payment3 = {M:15, Y:150};
let page3Payment = {M:1, Y:10};
let page3Payment1 = {M:2, Y:20};
let page3Payment2 = {M:2, Y:20};

steps.forEach((step)=>{
  const nextStep = step.querySelector('.nextStep');
  const goBack = step.querySelector('.goBack');
  if(goBack){
    goBack.addEventListener('click', ()=>{
      document.querySelector(`.step${currentStep}`).style.display = "none";
      currentStep--;
      circuleStep--;
      circuleColor();
      document.querySelector(`.step${currentStep}`).style.display = "flex";
    })
  }
  if(nextStep){
  nextStep.addEventListener('click',()=>{
    document.querySelector(`.step${currentStep}`).style.display = "none";
    if(currentStep< 5 && secondPage()){
      currentStep++;
      circuleStep++;
      circuleColor();
      }
    document.querySelector(`.step${currentStep}`).style.display = "flex";
  })
}
});

function secondPage(){
  let valid = false;
  let in1 = input1.value;
  let in2 = input2.value;
  let in3 = input3.value;
  if(in1===''){
    error1.innerHTML = 'This feild is required';
  boxInput1('allotted');
  }
  else if(!in1.match(/^[A-Z-a-z ]/)){
    error1.innerHTML = 'Enter valid name';
    boxInput1('allotted');
  }
  else if(in1.match(/^[A-Z-a-z ]/)){
    error1.innerHTML = '';
    boxInput1('regular');
  }
  if(in2===''){
    error2.innerHTML = 'This feild is required';
    boxInput2('allotted');
  }
  else if(!in2.match(/^[A-Z-a-z\._\-0-9]*[@][A-Za-z]*[\.][com]{3}$/)){
    error2.innerHTML = 'Enter valid email';
    boxInput2('allotted');
  }
  else if(in2.match(/^[A-Z-a-z\._\-0-9]*[@][A-Za-z]*[\.][com]{3}$/)){
    error2.innerHTML = '';
    boxInput2('regular');
  }
  if(in3===''){
    error3.innerHTML = 'This feild is required';
    boxInput3('allotted');
  }
  else if(!in3.match(/^[+][0-9]{12}$/)){
    error3.innerHTML = 'Enter valid number';
    boxInput3('allotted');
  }
  else if(in3.match(/^[+][0-9]{12}$/)){
    error3.innerHTML = '';
    boxInput3('regular');
    if(in1.match(/^[A-Z-a-z ]/) && in2.match(/^[A-Z-a-z\._\-0-9]*[@][A-Za-z]*[\.][com]{3}$/) && in3.match(/^[+][0-9]{12}$/)){
      valid = true;
    }
 }
  return valid;
}

function circuleColor(){
  if(currentStep === 1){
    num1Color('allotted');
    num2Color('general');
    num3Color('general');
    num4Color('general');
  }
  if(currentStep === 2){
    num1Color('allotted');
    num2Color('allotted');
    num3Color('general');
    num4Color('general');
  }
  if(currentStep === 3){
    num1Color('allotted');
    num2Color('allotted');
    num3Color('allotted');
    num4Color('general');
  }
  if(currentStep === 4){
    num1Color('allotted');
    num2Color('allotted');
    num3Color('allotted');
    num4Color('allotted');
  }
}

function boxInput1(type){
  if(type === 'allotted'){
    input1.style.borderColor = 'hsl(354, 84%, 50%)';
  }
  if(type === 'regular'){
    input1.style.borderColor = 'hsl(231, 11%, 63%)';
  }
}
function boxInput2(type){
  if(type === 'allotted'){
    input2.style.borderColor = 'hsl(354, 84%, 50%)';
  }
  if(type === 'regular'){
    input2.style.borderColor = 'hsl(231, 11%, 63%)';
  }
}
function boxInput3(type){
  if(type === 'allotted'){
    input3.style.borderColor = 'hsl(354, 84%, 50%)';
  }
  if(type === 'regular'){
    input3.style.borderColor = 'hsl(231, 11%, 63%)';
  }
}

function selectPlan(){
  fake1.addEventListener('click', ()=>{ 
    fakeArcade.innerHTML = `Arcade`;
    fake.innerHTML = `$${payment1.M}/mo`;
    fake1.style.backgroundColor = 'hsl(206, 94%, 98%)';
    fake1.style.border = '2px solid hsl(213, 96%, 50%)';
    fake2.style.backgroundColor = 'white';
    fake2.style.border = '2px solid hsl(231, 11%, 80%)';
    fake3.style.backgroundColor = 'white';
    fake3.style.border = '2px solid hsl(231, 11%, 80%)';
    })
  fake2.addEventListener('click', ()=>{
      fakeArcade.innerHTML = `Advanced`;
      fake.innerHTML = `$${payment2.M}/mo`;
      fake2.style.backgroundColor = 'hsl(206, 94%, 98%)';
      fake2.style.border = '2px solid hsl(213, 96%, 50%)';
      fake1.style.backgroundColor = 'white';
      fake1.style.border = '2px solid hsl(231, 11%, 80%)';
      fake3.style.backgroundColor = 'white';
      fake3.style.border = '2px solid hsl(231, 11%, 80%)';

    })
  fake3.addEventListener('click', ()=>{
    fakeArcade.innerHTML = `pro`;
    fake.innerHTML = `$${payment3.M}/mo`;
    fake3.style.backgroundColor = 'hsl(206, 94%, 98%)';
    fake3.style.border = '2px solid hsl(213, 96%, 50%)';
    fake2.style.backgroundColor = 'white';
    fake2.style.border = '2px solid hsl(231, 11%, 80%)';
    fake1.style.backgroundColor = 'white';
    fake1.style.border = '2px solid hsl(231, 11%, 80%)';
     })
    checkbox.addEventListener('change', function(){
        if(this.checked){
          changeyear();
          plan1.addEventListener('click', ()=>{
          page4Aracde.innerHTML = `Arcade`;
          paymentPage4.innerHTML = `$${payment1.Y}/yr`;
          plan1.style.backgroundColor = 'hsl(206, 94%, 98%)';
          plan1.style.border = '2px solid hsl(213, 96%, 50%)';
          plan2.style.backgroundColor = 'white';
          plan2.style.border = '2px solid hsl(231, 11%, 80%)';
          plan3.style.backgroundColor = 'white';
          plan3.style.border = '2px solid hsl(231, 11%, 80%)';
          })
        }
        else{
          changemonth();
          plan1.addEventListener('click', ()=>{
          page4Aracde.innerHTML = `Arcade`;
          paymentPage4.innerHTML = `$${payment1.M}/mo`;
          plan1.style.backgroundColor = 'hsl(206, 94%, 98%)';
          plan1.style.border = '2px solid hsl(213, 96%, 50%)';
          plan2.style.backgroundColor = 'white';
          plan2.style.border = '2px solid hsl(231, 11%, 80%)';
          plan3.style.backgroundColor = 'white';
          plan3.style.border = '2px solid hsl(231, 11%, 80%)';
          })
        }
    })
    checkbox.addEventListener('change', function(){
      if(this.checked){
        changeyear();
        plan2.addEventListener('click', ()=>{
        page4Aracde.innerHTML = `Advanced`;
        paymentPage4.innerHTML = `$${payment2.Y}/yr`;
        plan2.style.backgroundColor = 'hsl(206, 94%, 98%)';
        plan2.style.border = '2px solid hsl(213, 96%, 50%)';
        plan1.style.backgroundColor = 'white';
        plan1.style.border = '2px solid hsl(231, 11%, 80%)';
        plan3.style.backgroundColor = 'white';
        plan3.style.border = '2px solid hsl(231, 11%, 80%)';
        })
      }
      else{
        changemonth();
        plan2.addEventListener('click', ()=>{
        page4Aracde.innerHTML = `Advanced`;
        paymentPage4.innerHTML = `$${payment2.M}/mo`;
        plan2.style.backgroundColor = 'hsl(206, 94%, 98%)';
        plan2.style.border = '2px solid hsl(213, 96%, 50%)';
        plan1.style.backgroundColor = 'white';
        plan1.style.border = '2px solid hsl(231, 11%, 80%)';
        plan3.style.backgroundColor = 'white';
        plan3.style.border = '2px solid hsl(231, 11%, 80%)';
        })
      }
    })
    checkbox.addEventListener('change', function(){
      if(this.checked){
        changeyear();
        plan3.addEventListener('click', ()=>{
        page4Aracde.innerHTML = `pro`;
        paymentPage4.innerHTML = `$${payment3.Y}/yr`;
        plan3.style.backgroundColor = 'hsl(206, 94%, 98%)';
        plan3.style.border = '2px solid hsl(213, 96%, 50%)';
        plan2.style.backgroundColor = 'white';
        plan2.style.border = '2px solid hsl(231, 11%, 80%)';
        plan1.style.backgroundColor = 'white';
        plan1.style.border = '2px solid hsl(231, 11%, 80%)';
        })
      }
      else{
        changemonth();
        plan3.addEventListener('click', ()=>{
        page4Aracde.innerHTML = `pro`;
        paymentPage4.innerHTML = `$${payment3.M}/mo`;
        plan3.style.backgroundColor = 'hsl(206, 94%, 98%)';
        plan3.style.border = '2px solid hsl(213, 96%, 50%)';
        plan2.style.backgroundColor = 'white';
        plan2.style.border = '2px solid hsl(231, 11%, 80%)';
        plan1.style.backgroundColor = 'white';
        plan1.style.border = '2px solid hsl(231, 11%, 80%)';
        })
      }
    })
}

function changeyear(){
  fakeId.classList.remove("fake");
  page4Arcade.classList.remove("fakeArcade");
  plan1.classList.remove("fake1");
  plan2.classList.remove("fake2");
  plan3.classList.remove("fake3");
  page4MY.innerHTML = `Yearly`;
  amount1.innerHTML = `
  <p class=paymentYear">$${payment1.Y}/yr</p>
  <p class="monthsFree">2 months free</p>
  `;
  amount2.innerHTML = `
  <p class="paymentYear">$${payment2.Y}/yr</p>
  <p class="monthsFree">2 months free</p>
  `;
  amount3.innerHTML =  `
  <p class="paymentYear">$${payment3.Y}/yr</p>
  <p class="monthsFree">2 months free</p>
  `;
  page3Amount.innerHTML=`+$${page3Payment.Y}/yr`;
  page3Amount1.innerHTML=`+$${page3Payment1.Y}/yr`;
  page3Amount2.innerHTML=`+$${page3Payment2.Y}/yr`;
  page4Payment.innerHTML=`+$${page3Payment.Y}/yr`;
  page4Payment1.innerHTML=`+$${page3Payment1.Y}/yr`;
  page4Payment2.innerHTML=`+$${page3Payment2.Y}/yr`;
  plan1.style.backgroundColor = 'white';
  plan1.style.border = '2px solid hsl(231, 11%, 80%)';
  plan2.style.backgroundColor = 'white';
  plan2.style.border = '2px solid hsl(231, 11%, 80%)';
  plan3.style.backgroundColor = 'white';
  plan3.style.border = '2px solid hsl(231, 11%, 80%)';
}
function changemonth(){
  page4MY.innerHTML = `Monthly`;
  paymentPage4.innerHTML = `$${payment1.M}/mo`;
  amount1.innerHTML = `$${payment1.M}/mo`;
  amount2.innerHTML = `$${payment2.M}/mo`;
  amount3.innerHTML = `$${payment3.M}/mo`;
  page3Amount.innerHTML=`+$${page3Payment.M}/mo`;
  page3Amount1.innerHTML=`+$${page3Payment1.M}/mo`;
  page3Amount2.innerHTML=`+$${page3Payment2.M}/mo`;
  page4Payment.innerHTML=`+$${page3Payment.M}/mo`;
  page4Payment1.innerHTML=`+$${page3Payment1.M}/mo`;
  page4Payment2.innerHTML=`+$${page3Payment2.M}/mo`;
  plan1.style.backgroundColor = 'white';
  plan1.style.border = '2px solid hsl(231, 11%, 80%)';
  plan2.style.backgroundColor = 'white';
  plan2.style.border = '2px solid hsl(231, 11%, 80%)';
  plan3.style.backgroundColor = 'white';
  plan3.style.border = '2px solid hsl(231, 11%, 80%)';
}

function num1Color(type){
  if(type === 'allotted'){
    num1.style.backgroundColor = 'hsl(206, 94%, 94%)';
    num1.style.border = 'none';
    num1.style.color = 'black';
  }
  if(type === 'general'){
    num1.style.color = 'white';
    num1.style.backgroundColor = 'hsl(243, 100%, 62%)';
    num1.style.borderColor = 'white';
    num1.style.borderWidth = '1px';
    num1.style.borderStyle = 'solid';
  }
}
function num2Color(type){
  if(type === 'allotted'){
    num2.style.backgroundColor = 'hsl(206, 94%, 94%)';
    num2.style.border = 'none';
    num2.style.color = 'black';
  }
  if(type === 'general'){
    num2.style.color = 'white';
    num2.style.backgroundColor = 'hsl(243, 100%, 62%)';
    num2.style.borderColor = 'white';
    num2.style.borderWidth = '1px';
    num2.style.borderStyle = 'solid';
  }
}
function num3Color(type){
  if(type === 'allotted'){
    num3.style.backgroundColor = 'hsl(206, 94%, 94%)';
    num3.style.border = 'none';
    num3.style.color = 'black';
  }
  if(type === 'general'){
    num3.style.color = 'white';
    num3.style.backgroundColor = 'hsl(243, 100%, 62%)';
    num3.style.borderColor = 'white';
    num3.style.borderWidth = '1px';
    num3.style.borderStyle = 'solid';
  }
}
function num4Color(type){
  if(type === 'allotted'){
    num4.style.backgroundColor = 'hsl(206, 94%, 94%)';
    num4.style.border = 'none';
    num4.style.color = 'black';
  }
  if(type === 'general'){
    num4.style.color = 'white';
    num4.style.backgroundColor = 'hsl(243, 100%, 62%)';
    num4.style.borderColor = 'white';
    num4.style.borderWidth = '1px';
    num4.style.borderStyle = 'solid';
  }
}

button1.addEventListener('change',function(){
  if(this.checked){
    checkMark1.innerHTML = '<img class="checkMarkEmpty" src="assets/images/icon-checkmark.svg">';
    changeContainer1.style.display = 'flex';
  }
  else{
    checkMark1.innerHTML = '<img class="checkMark" src="assets/images/icon-checkmark.svg">';
    changeContainer1.style.display = 'none';
  }
}
)
button2.addEventListener('change',function(){
  if(this.checked){
    checkMark2.innerHTML = '<img class="checkMarkEmpty1" src="assets/images/icon-checkmark.svg">';
    changeContainer2.style.display = 'flex';
  }
  else{
    checkMark2.innerHTML = '<img class="checkMark1" src="assets/images/icon-checkmark.svg">';
    changeContainer2.style.display = 'none';
  }
})
button3.addEventListener('change',function(){
  if(this.checked){
    checkMark3.innerHTML = '<img class="checkMarkEmpty" src="assets/images/icon-checkmark.svg">';
    changeContainer3.style.display = 'flex';
  }
  else{
    checkMark3.innerHTML = '<img class="checkMark" src="assets/images/icon-checkmark.svg">';
    changeContainer3.style.display = 'none';
  }
})
selectPlan();