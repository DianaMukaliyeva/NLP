function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const content = document.querySelector("input[name=format]:checked").value;
    let formText = document.getElementById('text').value
    // isURL = Client.isURL(formText);
    if (content === "url") {
        console.log("this is url");
    }

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test', {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: content, text: formText}),
    });
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

export { handleSubmit }
