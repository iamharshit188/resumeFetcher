// Add JavaScript code to handle form submissions, preview, etc. 

document.getElementById('resumeForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const linkedInProfileUrl = document.getElementById('linkedInProfileUrl').value;

    try {
        const response = await fetch('/api/resume/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ linkedInProfileUrl })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        if (result.error) {
            document.getElementById('resumeOutput').innerText = 'Error: ' + result.error;
        } else {
            document.getElementById('resumeOutput').innerText = JSON.stringify(result.data, null, 2);
        }
    } catch (error) {
        console.error('Error generating resume:', error);
        document.getElementById('resumeOutput').innerText = 'Error generating resume';
    }
}); 