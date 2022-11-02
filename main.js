var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult =function(event)  {

    console.log(event);

    var Content = event.result[0][0].transcript;

    document.getElementById("textbox").innerHTML= Content;
}

var SpeechRecognition = new SpeechRecognition();


recognition.onresult = function(event){
      
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(content);
      if(Content=="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}

function speak (){
    var synth = window.speechSynthesis;

    speak_data ="taking your selfie in 5 seconds";
    speak_data = document.getElementById("textbox").Value;
    
    var utterThis =new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}

function take_snapshot()
{

    Webcam.snap(function(data_uri)) {
        Document.getElementById("result").innerHTML = '<img id="selfie_image "selfie_image"src= +data_uri+'>;
    
    }
}











