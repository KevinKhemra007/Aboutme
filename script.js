const texts = [
  "Professional Hacker ⚡",
  "Full Stack Developer 💻",
  "Cyber Security Expert 🔥",
  "Ethical Hacker 🎯"
];

let count = 0, index = 0;
let currentText = '', letter = '';

(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.getElementById('typewriter').textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(typeEffect, 2000);
    }else{
        setTimeout(typeEffect, 100);
    }
})();

function typeEffect(){
    if(count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typewriter').textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(typeEffect, 2000);
    }else{
        setTimeout(typeEffect, 100);
    }
}
// Music Button Control
document.getElementById('bg-music-btn').addEventListener('click',()=>{
    const audio=document.getElementById('bg-music');
    audio.paused ? audio.play() : audio.pause();
  });
