var fldName = document.getElementById('campo1');
    fldName.oninvalid = function () {
        fldName.setCustomValidity("");
        if (!fldName.validity.valid) {
            fldName.setCustomValidity("Muda ae amigo");
        }
    };
