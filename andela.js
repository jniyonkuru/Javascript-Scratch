let sender = {

};//declare an instance of transaction
let balance=0;
const transactions = [];// array of object(transactions)
const send = document.querySelector('#send');
const nameb = document.querySelector('#name');
const phone =document.querySelector('#phone');
const amount=document.querySelector('#amount')
const successIcon=document.querySelectorAll('.success-icon');
const failureIcon=document.querySelectorAll('.failure-icon');
const erroMsg=document.querySelectorAll('.error');
const receive=document.querySelector('#receive')
const table1=document.querySelector('#table-body')
send.addEventListener('click', (e) => {// add en event listener to the first button
  e.preventDefault()
  validFunc(nameb,0,"Name cannot be blank")
  validFunc(phone,1,"phone number can't be blank")
  validFunc(amount,2,"amount can't be blank")
  if(nameb.value==""||phone.value==0||amount.value==0){
      return false;}
    sender.name = "Niyonkuru jacques";
    sender.phone = "0787643787";
    sender.date = new Date()
    sender.trans="outgoing";
    balance=balance-amount.value;
    sender.balance=balance;
    sender.amount=amount.value;
    if(balance<0){
      alert("Insufficient fund")
      // nameb.value=""
      // amount.value=""
      // phone.value=""
      return false;
    }

    transactions.unshift(sender);
    sender={};
    localStorage.setItem("transaction",JSON.stringify(transactions))
    // nameb.value=""
    // amount.value=""
    // phone.value=""
    render()
})
receive.addEventListener('click',(e)=>{  // add event listner to the second button

  validFunc(nameb,0,"Name cannot be blank")
  validFunc(phone,1,"phone number can't be blank")
  validFunc(amount,2,"amount can't be blank")
  if(nameb.value==""||phone.value==0||amount.value==0){

    return false;
  }
   sender.name=nameb.value ;
   sender.phone=phone.value;
   sender.date=new Date();
   sender.trans="incoming";  // record transaction
   balance=balance+Number(amount.value);
   sender.balance=balance;
   sender.amount=amount.value;
   transactions.unshift(sender);
   sender={}
   localStorage.setItem("transaction",JSON.stringify(transactions));// store  to local storage
  //   nameb.value=""
  //   amount.value=""
  //  phone.value=""
 render();
  }
)
 function render(){
  let arr = JSON.parse(localStorage.getItem("transaction")||'[]') // fetch from local storage
  var row=table1.insertRow(-1);
  var nameCell=row.insertCell(0);
  var phoneCell=row.insertCell(1); // display in a table
  var dateCell=row.insertCell(2);
  var transCell=row.insertCell(3)
  var amountcell=row.insertCell(4)
  var balanceCell=row.insertCell(5)
  var deleteBtn=row.insertCell(6)

  nameCell.innerHTML=arr[0].name;
  phoneCell.innerHTML=arr[0].phone;
  dateCell.innerHTML=arr[0].date;
  transCell.innerHTML=arr[0].trans;
  balanceCell.innerHTML=arr[0].balance;
  amountcell.innerHTML=arr[0].amount;
  deleteBtn.innerHTML='<a onclick="dltRow(this)" class="btn btn__tb">delete</a>';
}

 function dltRow(r){  // delete transaction
  let i=r.parentNode.rowIndex;
  table1.deleteRow(i)

 }
 let validFunc = (id, i,message) => {

  if (id.value.trim() === "") {
    erroMsg[i].innerHTML = message;
    id.style.border = "2px solid red";
    // icons
    failureIcon[i].style.opacity = "1";
     successIcon[i].style.opacity = "0"; // form  data validation
  }
  else {
    erroMsg[i].innerHTML = "";
    id.style.border = "2px solid green";
    // icons
    failureIcon[i].style.opacity = "0";
    successIcon[i].style.opacity = "1";
  }
}