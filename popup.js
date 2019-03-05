function runSwitchjs() {
    /* chrome.tabs.executeScript({
        file: 'switch.js'
    }); */
    const passwordFields = document.getElementsByTagName('input');
    for (var i = 0; i < passwordFields.length; i++) {
        if (passwordFields[i].type === 'password') {
            var tmp = passwordFields[i];
            tmp.setAttribute("type", "text");
            tmp.setAttribute("data-type", "password");
            console.log('yeeey: ' + i);

        }

    }
    console.log();
}

document.getElementById('togglePasswordField').addEventListener('click', runSwitchjs);