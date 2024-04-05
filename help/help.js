let signIn = document.getElementById("signIn");
let createCounter = 0;
function openSignUp() {
    createCounter = 0;
    
    signIn.classList.add("open-signIn");
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    // Show everything for sign in
    var forgotPass = document.getElementById('forgotPass');
    forgotPass.classList.remove('hidden');

    var signInB = document.getElementById('signInB');
    signInB.classList.remove('hidden');


    // Hide stuff for create account
    var conPass = document.getElementById('conPass-bar');
    conPass.classList.add('hidden');

    var conPassTxt = document.getElementById('conPassTxt');
    conPassTxt.classList.add('hidden');

    // Hide incorrect Info
    var wrongInfo = document.getElementById('wrongInfo');
    wrongInfo.classList.add('hidden');

    // Hide Forgot pass
    var resetEmail = document.getElementById('resetEmail');
    resetEmail.classList.add('hidden');

    // Hide Account Created message
    var accountCreated = document.getElementById('accountCreated');
    accountCreated.classList.add('hidden');

    // Hide account created error message
    var accountError = document.getElementById('accountError');
    accountError.classList.add('hidden');
}
function closeSignUp() {
    signIn.classList.remove("open-signIn")
    document.body.style.overflow = 'auto'; // Allow scrolling
}
function changeListings() {
    signIn.classList.remove("open-signIn")
}

document.getElementById('createAccountButton').addEventListener('click', function () {
    // Hide stuff for create account
    var forgotPass = document.getElementById('forgotPass');
    forgotPass.classList.add('hidden');

    var signIn = document.getElementById('signInB');
    signIn.classList.add('hidden');

    // Show stuff for create account
    var conPass = document.getElementById('conPass-bar');
    conPass.classList.remove('hidden');

    var conPassTxt = document.getElementById('conPassTxt');
    conPassTxt.classList.remove('hidden');

    var wrongInfo = document.getElementById('wrongInfo');
    wrongInfo.classList.add('hidden');

    var resetEmail = document.getElementById('resetEmail');
    resetEmail.classList.add('hidden');

    var email = document.getElementById("email-bar").value;
    var emailLength = email.length;
    var pass = document.getElementById("pass-bar").value;
    var passLength = pass.length;
    var confirmPass = document.getElementById("conPass-bar").value;

    if (createCounter > 0 && pass == confirmPass && emailLength > 0 && passLength > 0) {
        // Show Account Created message
        var accountCreated = document.getElementById('accountCreated');
        accountCreated.classList.remove('hidden');

        // Hide Account Created Error message
        var accountError = document.getElementById('accountError');
        accountError.classList.add('hidden');
    } else if (createCounter > 0) {
        // Show Account Created Error message
        var accountError = document.getElementById('accountError');
        accountError.classList.remove('hidden');
    }
    createCounter++;
});

function login() {
    // Hide Forgot pass
    var resetEmail = document.getElementById('resetEmail');
    resetEmail.classList.add('hidden');

    var email = document.getElementById("email-bar").value;
    var pass = document.getElementById("pass-bar").value;

    if (email == 'person@nestflex.ca' && pass == 'pass') {
        window.location.href = '/profile/profile.html';
    } else {
        // Show incorrect Info
        var wrongInfo = document.getElementById('wrongInfo');
        wrongInfo.classList.remove('hidden');
    }
}

function resetPass() {
    // Hide incorrect Info
    var wrongInfo = document.getElementById('wrongInfo');
    wrongInfo.classList.add('hidden');

    // Show reset pass
    var resetEmail = document.getElementById('resetEmail');
    resetEmail.classList.remove('hidden');
}
