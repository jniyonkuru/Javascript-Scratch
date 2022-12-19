let currentUser = {};//create an instance of transaction
let balance=0;
const transactions = [];// array of object(transactions)
const send = document.querySelector('#send');
const nameb = document.querySelector('#name');
const phone =document.querySelector('#phone');
const amount=document.querySelector('#amount')/* variables declaration*/
const b=document.querySelector('#bal')
const receive=document.querySelector('#receive')
const table1=document.querySelector('#table')
send.addEventListener('click', (e) => {// add en event listner to the first button
  e.preventDefault()
  if(nameb.value==""||phone.value==0||amount.value==0){
    alert("please fill out all fields")
    return false;
  }
    currentUser.name = "Niyonkuru jacques";
    currentUser.phone = "0787643787";
    currentUser.date = new Date()
    currentUser.trans="outgoing";
    balance=balance-amount.value;
    if(balance<0){
      alert("Insufficient fund")
      return false;
    }
    transactions.unshift(currentUser);
    currentUser={};
    localStorage.setItem("transaction",JSON.stringify(transactions))
    b.value=balance;
    nameb.value=""
    amount.value=""
    phone.value=""
    render()
})
receive.addEventListener('click',(e)=>{  // add event listner to the second button
  e.preventDefault()
  if(nameb.value==""||phone.value==0||amount.value==0){
    alert("please fill out all fields")
    return false;
  }
   currentUser.name=nameb.value 
   currentUser.phone=phone.value
   currentUser.date=new Date()
   currentUser.trans="incoming"
   balance=balance+Number(amount.value)
   transactions.unshift(currentUser);
   currentUser={}
   localStorage.setItem("transaction",JSON.stringify(transactions));// store  to local storage
   b.value=balance;
   nameb.value=""
   amount.value=""
   phone.value=""
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
  var deleteBtn=row.insertCell(4)
  nameCell.innerHTML=arr[0].name;
  phoneCell.innerHTML=arr[0].phone;
  dateCell.innerHTML=arr[0].date;
  transCell.innerHTML=arr[0].trans;
  deleteBtn.innerHTML='<button onclick="dltRow(this)">delete</button>';

}
 function dltRow(r){  // delete transaction
  let i=r.parentNode.parentNode.rowIndex;
  table1.deleteRow(i)

 }
