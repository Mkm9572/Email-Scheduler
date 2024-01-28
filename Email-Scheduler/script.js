function scheduleEmail() {
    const recipient = document.getElementById('recipient').value;
    const subject = document.getElementById('subject').value;
    const dateTime = document.getElementById('dateTime').value;

    // You can add further validation or processing logic here

    alert(`Email scheduled!\nRecipient: ${recipient}\nSubject: ${subject}\nDate and Time: ${dateTime}`);
    document.getElementById('emailForm').reset();
}
