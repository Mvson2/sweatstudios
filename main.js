function changeplh() {
                var sel = document.getElementById(select);
                var textbx = document.getElementById(textbox);
                var indexe = sel.selectedIndex;

                if (indexe == 1) {
                    jQuery(#textbox).attr(placeholder, Search for Jobs in Ontario);

                }
                if (indexe == 2) {
                    jQuery(#textbox).attr(placeholder, Search for Jobs in Quebec);
                }
                if (indexe == 3) {
                    jQuery(#textbox).attr(placeholder, Search for Jobs in Manitoba);
                }
            }
            
const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');

 Show the dialog button opens the dialog modally
showButton.addEventListener('click', () = {
  favDialog.showModal();
});

 Favorite animal input sets the value of the submit button
selectEl.addEventListener('change', (e) = {
  confirmBtn.value = selectEl.value;
});

 Cancel button closes the dialog without submitting because of [formmethod=dialog], triggering a close event.
favDialog.addEventListener('close', (e) = {
  outputBox.value = favDialog.returnValue === 'default'  No return value.  `ReturnValue ${favDialog.returnValue}.`;  Have to check for default rather than empty string
});

 Prevent the confirm button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the close event.
confirmBtn.addEventListener('click', (event) = {
  event.preventDefault();  We don't want to submit this fake form
  favDialog.close(selectEl.value);  Have to send the select box value here.
});

node.addEventListener(keyup, ({key}) = {
    if (key === Enter) {
        
    }
})
