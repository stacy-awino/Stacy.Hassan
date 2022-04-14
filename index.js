document.getElementById("jim").addEventListener("click", calculateScore);

function calculateScore(){
  alert('Hello');
  var myScore = parseInt(prompt("Enter a score:"));

  if (myScore >= 80 && myScore < 100){
  document.getElementById("para").innerHTML="A";
}else if(myScore >= 75 && myScore < 80){
}
