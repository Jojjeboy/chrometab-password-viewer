// this is the code which will be injected into a given page...

(function() {

    var arr = document.getElementsByTagName('input');
    var passwordsElements = 0;
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
})();