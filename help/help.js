let signIn = document.getElementById("signIn");
function openSignUp(){
    signIn.classList.add("open-signIn");
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}
function closeSignUp(){
    signIn.classList.remove("open-signIn")
    document.body.style.overflow = 'auto'; // Allow scrolling
}
function changeListings(){
    signIn.classList.remove("open-signIn")
}