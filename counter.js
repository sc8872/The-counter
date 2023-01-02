
const totalCount = document.querySelector('.total-count');
const countBtn = document.querySelector('.count-btn')
const saveBtn =document.querySelector('.save-btn')
const countRecords= document.querySelector('.count-records');

function pluseOne (){
  totalCount.textContent = ++countBtn.value;
}

function save(){
  const saveCount = totalCount.textContent + " - ";
  countRecords.textContent += saveCount;
  totalCount.textContent = 0;
  // the below line of code is suppose to reset the counter to zero. its not working 
  // totalCount == 0;
  
}


