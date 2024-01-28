function scheduleEmail() {
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    const recipient = document.getElementById('recipient').value;
    const delay = document.getElementById('delay').value;


    if (!subject || !body || !recipient || !delay) {
        alert("Please fill in all fields.");
        return;
    }

    setTimeout(() => {
        sendEmail(subject, body, recipient);
    }, delay * 60 * 60 * 1000);

    alert(`Email scheduled!\nRecipient: ${recipient}\nSubject: ${subject}\nTime Delay: ${delay} hours`);
    document.getElementById('emailForm').reset();
}

function sendEmail(subject, body, recipient) {
    console.log(`Email sent to ${recipient} with subject: ${subject} and body: ${body}`);
}

