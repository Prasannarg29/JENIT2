$(document).ready(function() {
    $('#registrationForm').on('submit', function(e) {
        // Validate inputs
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let phone = $('#phone').val().trim();

        if (name === '' || email === '' || phone === '') {
            alert('Please fill out all fields.');
            e.preventDefault();
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        }
    });

    function validateEmail(email) {
        let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        return regex.test(email);
    }
});
