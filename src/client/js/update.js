export const updateUI = (data) => {
    if (!data.text) {
        alert('Requested URL was not found');
        return false;
    }
    const result = document.getElementById('result');
    result.className = 'flex-box';
    document.getElementById('text').value = "";
    document.getElementById('input_text').innerHTML = data.text;
    document.getElementById('polar').innerHTML = data.polarity;
    document.getElementById('subject').innerHTML = data.subjectivity;
    document.getElementById('polar_conf').innerHTML = data.polarity_confidence;
    document.getElementById('subject_conf').innerHTML = data.subjectivity_confidence;
}
