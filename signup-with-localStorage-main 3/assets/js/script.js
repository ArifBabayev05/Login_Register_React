firstName = document.getElementById('firstName');
lastName = document.getElementById('lastName');
email = document.getElementById('email');
password = document.getElementById('password');
const signUp = e => {
    let firstName = document.getElementById('firstName').value,
        lastName = document.getElementById('lastName').value,
        email = document.getElementById('email').value,
        password = document.getElementById('password').value;


    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    // let singInForm=Json.parse(localStorage.setItem('Data')) && formData;


    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.firstName.toLowerCase() == firstName.toLowerCase() &&
            data.lastName.toLowerCase() == lastName.toLowerCase()
        );
    if (!exist) {
        formData.push({ firstName, lastName, email, password });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('firstName').focus();
        alert("Account Created.\nPlease Sign In Now.");
        location.parse = "/signup-with-localStorage-main%203/signin.html"
    }
    else {
        alert("This Account has Already Exist!");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, password = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password);
    if (!exist) {
        alert("Incorrect login informations");
    }

    else {
        location.pathname = "result.html";
        // window.location.pathname ="result.html";
        alert("Succesfully Login")
    }

    e.preventDefault();
}
const validate = {
    password: {
        length: "Password length must be atleast 8 characters",
        lowerCase: "Password must contain at least one lowercase letter",
        upperCase: "Password must contain at least one uppercase letter",
    },
    firstName: {
        length: "Username length must be atleast 3 characters"
    }
}

function validateInput(input, regex, message) {
    const newRegex = new RegExp(regex);
    if (newRegex.test(input?.value)) {
        return true;
    } else {
        if (input?.nextElementSibling?.tagName.toLowerCase() == "span") {
            input.nextElementSibling.innerText = message;
        }
    }
    return false;
};

//validate inputs
password?.addEventListener('keyup', function () {
    if (validateInput(this, /.{8,}/, validate.password.length) &&
        validateInput(this, /.*[A-Z]/, validate.password.upperCase) &&
        validateInput(this, /.*[a-z]/, validate.password.lowerCase)) {
        this.nextElementSibling.innerText = "";
    }
});

firstName?.addEventListener('keyup', function () {
    if (validateInput(this, /.{3,}/, validate.firstName.length)) {
        this.nextElementSibling.innerText = "";
    }
});
