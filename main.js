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

function changeplh() {
                var sel = document.getElementById("select");
                var textbx = document.getElementById("textbox");
                var indexe = sel.selectedIndex;

                if (indexe == 1) {
                    jQuery("#textbox").attr("placeholder", "Search for Jobs in Ontario");

                }
                if (indexe == 2) {
                    jQuery("#textbox").attr("placeholder", "Search for Jobs in Quebec");
                }
                if (indexe == 3) {
                    jQuery("#textbox").attr("placeholder", "Search for Jobs in Manitoba");
                }
            }
            
const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');


showButton.addEventListener('click', () => {
  favDialog.showModal();
});


selectEl.addEventListener('change', (e) => {
  confirmBtn.value = selectEl.value;
});


favDialog.addEventListener('close', (e) => {
  outputBox.value = favDialog.returnValue === 'default' ? "No return value." : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});


confirmBtn.addEventListener('click', (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});

node.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        
    }
})
