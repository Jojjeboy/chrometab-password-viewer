// Detects if password field exists
(function () {
    passwordsFields = false;
    let passwordFieldsExist = doesPasswordFieldsExist();

    if (passwordFieldsExist) {
        // send message to background script
        chrome.runtime.sendMessage({ 'exist': true });
    }

    function doesPasswordFieldsExist() {
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

});