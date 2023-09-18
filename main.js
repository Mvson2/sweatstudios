function expand() {
  var x = document.getElementById("menu");
  if (x.style.height === "0%") {
    x.style.height = "100vh";
  } else {
    x.style.height = "0%";
  }
}

function show() {
	var x = document.getElementById("content");
  if (x.style.display === "none") {
  		x.style.display = "block";
    } else{
    	x.style.display = "none";
    }
  }
