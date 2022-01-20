let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
  let x = document.getElementById("email").value;
 document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + " " + x ;
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}