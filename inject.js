// this is the code which will be injected into a given page...

(function() {

    passwordsFields = false;
    let passwordFieldsExist = doesPasswordFieldsExist();
    if(passwordFieldsExist) {
        // send message to background script
        chrome.runtime.sendMessage({ "newIconPath" : 'images/lock128.png' });
    }

    var arr = document.getElementsByTagName('input');
    
    if(passwordFieldsExist){
        if (!window.convertedPasswords) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].type === 'password') {
                    passwordsElements++;
                    arr[i].setAttribute('type', 'text');
                    arr[i].setAttribute('data-type-original', 'password');
                    window.convertedPasswords = true;
                }
            }
        } else {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].dataset.typeOriginal === 'password') {
                    arr[i].setAttribute('type', 'password');
                    arr[i].removeAttribute('data-type-original');
                    delete(window.convertedPasswords);
                }
            }
        }
    }


    function doesPasswordFieldsExist(){
        let exist = false;
        var inputs = document.getElementsByTagName('input');

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'password') {
                exist = true;
                break;
            }
        }
        return exist;


    }
})();