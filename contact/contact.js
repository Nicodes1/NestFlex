function contactRealtor() {
    // This function could be expanded to actually send an email or open the user's email client.
    alert('Thank you for your interest. The realtor will contact you shortly.');
}

// Example of form submission handling
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.onsubmit = function(e) {
        e.preventDefault(); // Prevents the default form submission action
        var name = form.querySelector('input[placeholder="Full Name"]').value;
        var email = form.querySelector('input[placeholder="Contact Email"]').value;
        var cell = form.querySelector('input[placeholder="Contact Cell"]').value;
        var message = form.querySelector('textarea').value;

        // Here you would typically send the data to a server
        console.log('Form submitted with:', {name, email, cell, message});

        alert('Your message has been sent! Thank you, ' + name);

        // Reset the form after submission
        form.reset();
    };
});