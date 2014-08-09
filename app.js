var recognition;
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
recognition = new window.SpeechRecognition();

recognition.lang = "en-GB";

// continuous (streaming) result
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = function(e){
  console.log(e.results[0][0].transcript);
};

function record() {
  recognition.start();
}

function stop() {
  recognition.stop();
}
