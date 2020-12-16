window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
});