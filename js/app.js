const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_ns6qwnb';

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
            form.reset(); // 🔄 Limpia los campos
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});
