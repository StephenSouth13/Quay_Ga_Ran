// This file contains JavaScript code for sending emails using a service like EmailJS or similar, allowing users to submit their orders via email without needing a backend.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.order-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const orderItems = document.getElementById('order-items').value;
        const note = document.getElementById('note').value;

        // Validate form fields
        if (!name || !phone || !address || !orderItems) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        // Prepare email data
        const emailData = {
            name: name,
            phone: phone,
            address: address,
            orderItems: orderItems,
            note: note
        };

        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                document.getElementById('order-success').style.display = 'block'; // Show success message
                form.reset(); // Reset the form
            }, function(error) {
                console.error('Failed to send email. Error:', error);
                alert('Có lỗi xảy ra, vui lòng thử lại sau!');
            });
    });
});