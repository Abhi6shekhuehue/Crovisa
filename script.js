document.getElementById('appForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    console.log("Form Submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    document.getElementById('successMessage').style.display = 'block';

    // Optional: Reset form after submission
    this.reset();
});
