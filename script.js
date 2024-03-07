// Check for browser support
if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support the Web Speech API. Please use Google Chrome.');
} else {
    var recognition = new webkitSpeechRecognition();
    var textBox = document.getElementById('textBox');
    var startButton = document.getElementById('startButton');

    recognition.continuous = true; // Keep listening even after the user stops speaking
    recognition.interimResults = true; // Show interim results



    // Start recognition
    startButton.onclick = function() {
        recognition.start();
    };

    // Optional: stop recognition
    recognition.onend = function() {
        recognition.stop();
    };

    // Handle errors
    recognition.onerror = function(event) {
        alert('Error occurred in recognition: ' + event.error);
    }
}



var final_transcript = ''; // Moved outside to persist its value

// Rest of the initialization code remains the same

recognition.onresult = function(event) {
    var interim_transcript = '';

    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
        } else {
            interim_transcript += event.results[i][0].transcript;
        }
    }

    textBox.value = final_transcript + interim_transcript;
};
