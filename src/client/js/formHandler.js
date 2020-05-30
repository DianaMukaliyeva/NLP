export const handleSubmit = (event) => {
    event.preventDefault();
    const result = document.getElementById('result');
    result.className = 'hidden';
    const data = {};
    // check what text was put into the form field
    const format = document.querySelector('input[name=format]:checked').value;
    const clientInput = document.getElementById('text').value;
    if (format === 'url') {
        try {
            new URL(clientInput);
        } catch (_) {
            alert('It is not valid URL');
            return false;
        }
        data.url = clientInput;
    } else {
        data.text = clientInput;
    }
    Client.getAnalys('http://localhost:8081/analys', data)
    .then(function(res) {
        Client.updateUI(res);
    })
}
