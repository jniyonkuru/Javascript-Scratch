let currentUser = {};
let balance=0
const transactions = [];
const send = document.querySelector('#send');
const nameb = document.querySelector('#name');
const phone =document.querySelector('#phone');
const amount=document.querySelector('#amount')
const b=document.querySelector('#bal')
const receive=document.querySelector('#receive')
const table1=document.querySelector('#table')
send.addEventListener('click', (e) => {
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
receive.addEventListener('click',(e)=>{
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
   localStorage.setItem("transaction",JSON.stringify(transactions));
   b.value=balance;
   nameb.value=""
   amount.value=""
   phone.value=""
 render();
  }
)
 function render(){
  let arr = JSON.parse(localStorage.getItem("transaction")||'[]') 
  var row=table1.insertRow(-1);
  var nameCell=row.insertCell(0);
  var phoneCell=row.insertCell(1);
  var dateCell=row.insertCell(2);
  var transCell=row.insertCell(3)
  nameCell.innerHTML=arr[0].name;
  phoneCell.innerHTML=arr[0].phone;
  dateCell.innerHTML=arr[0].date;
  transCell.innerHTML=arr[0].trans;

}

