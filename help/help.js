let signIn = document.getElementById("signIn");
function openSignUp() {
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
});
