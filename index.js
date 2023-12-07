function expand() {
  var x = document.getElementById("navmb");
  var y = document.getElementById("secondaryheader");
  if (x.style.height === "0%") {
    x.style.height = "100%";
    y.style.display = "none";
  } else {
    x.style.height = "0%";
    y.style.display = "center";
  }
}

function show() {
  var x = document.getElementById("content");
  var y = document.getElementById("secondaryheader");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "center";
  }
}
