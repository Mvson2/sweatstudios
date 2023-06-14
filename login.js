
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
};

var btnToggle = true;
var upVoteBtn = document.getElementById("hide");
upVoteBtn.style.backgroundColor = "transparent";

function vote(){
    if (btnToggle){
        upVoteBtn.style.color = "black";
        btnToggle = false;
    } else{
        upVoteBtn.style.color = "grey";
        btnToggle = true;
    }
}