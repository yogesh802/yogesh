
function submit(){
var fname=document.getElementById('fname')
var lname=document.getElementById('lname')
var fullname=fname.value+" "+lname.value
var Email=document.getElementById('Email')
var Address=document.getElementById('Address')
var Phonenumber=document.getElementById('Phonenumber')
var Password=document.getElementById('Password')
console.log(fullname) 
console.log(fname.value) 
console.log(lname.value) 
console.log(Email.value)
console.log(Phonenumber.value)
console.log(Address.value)
console.log(Password.value)
}