console.log("Welcome to Spotify");
//Initialise the variables

function $(x){
    return document.getElementById(x);
}

let SongIndex=0;
let audioelement= new Audio('songs/1.mp3');
let audioelement1= new Audio('songs/2.mp3');
let audioelement2= new Audio('songs/3.mp3');
let audioelement3= new Audio('songs/4.mp3');
let audioelement4= new Audio('songs/5.mp3');
let audioelement5= new Audio('songs/6.mp3');
let audioelement6= new Audio('songs/7.mp3');
let audioelement7= new Audio('songs/8.mp3');
let currentAudio = audioelement; // default

let play0= document.getElementById('0');
let play1= document.getElementById('1');
let play2= document.getElementById('2');
let play3= document.getElementById('3');
let play4= document.getElementById('4');
let play5= document.getElementById('5');
let play6= document.getElementById('6');
let play7= document.getElementById('7');
let songInfo= document.querySelector(".songTitle");
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myProgressbar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Saiyyan", filePath: "songs/1.mp3", CoverPath:"spotify\download.jpg"},
    {songName: "Luka Chuppi", filePath: "songs/2.mp3",CoverPath:"spotify\download (1).jpg"},
    {songName: "duaa", filePath: "songs/3.mp3",CoverPath:"spotify\download (4).jpg"},
    {songName: "Mitwa", filePath: "songs/4.mp3",CoverPath:"spotify\download (3).jpg"},
    {songName: "pal pal", filePath: "songs/5.mp3",CoverPath:"spotify\download (5).jpg"},
    {songName: "Thik Hai", filePath: "songs/6.mp3",CoverPath:"spotify\download (2).jpg"},
    {songName: "Night Changes", filePath: "songs/7.mp3",CoverPath:"spotify\download (6).jpg"},
    {songName: "Stereo hearts", filePath: "songs/8.mp3",CoverPath:"spotify\download (7).jpg"},
]
songItems.forEach((element, i)=>{
    
   
    // element.getElementsByTagName("img")[0].src= songs[i].CoverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

//audioelement.play();
// handle play/pause
masterPlay.addEventListener('click', () => {
    if (currentAudio.paused || currentAudio.currentTime <= 0) {
        pauseAllAudios(); // Pause other audios first
        currentAudio.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        currentAudio.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});


function pauseAllAudios() {
    [audioelement, audioelement1, audioelement2, audioelement3, audioelement4, audioelement5, audioelement6, audioelement7].forEach(a => {
        a.pause();
        a.currentTime = 0;
    });

    // Reset all play buttons
    [play0, play1, play2, play3, play4, play5, play6, play7].forEach(btn => {
        btn.classList.remove('fa-pause-circle');
        btn.classList.add('fa-play-circle');
    });
}

//listen to Events
audioelement.addEventListener('timeupdate',()=>{
    //update seek bar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myProgressbar.value=progress;

})
myProgressbar.addEventListener('change',()=>{
    audioelement.currentTime=(myProgressbar.value*audioelement.duration)/100;
})
  let makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay fas fa-1.5x fa-play-circle')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });

}

Array.from(document.getElementsByClassName('songItemPlay fas fa-1.5x fa-play-circle')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        SongIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // audioelement.src = `songs/${SongIndex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(SongIndex>=7){
        SongIndex=0;
    }
    else{
        SongIndex+=1;
    }
    // audioelement.src =`songs/${SongIndex+1}.mp3`;
    audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
})


document.getElementById('previous').addEventListener('click',()=>{
    if(SongIndex<=0){
        SongIndex=0;
    }
    else{
        SongIndex-=1;
    }
    // audioelement.src =`songs/${SongIndex+1}.mp3`;
    audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
})





play1.addEventListener('click', ()=>{
    if(audioelement1.paused||audioelement1.currentTime<=0){
       pauseAllAudios(); 
currentAudio = audioelement1;

        audioelement1.play();
        
        play1.classList.remove('fa-play-circle');
        play1.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        songInfo.textContent=" Luka-chuppi  Lata Mangeshkar";
    }
    else{
        audioelement1.pause();
        play1.classList.remove('fa-pause-circle');
        play1.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        
        gif.style.opacity=0;
    }
})

play2.addEventListener('click', ()=>{
    if(audioelement2.paused||audioelement2.currentTime<=0){
        pauseAllAudios(); 
currentAudio = audioelement2;

        audioelement2.play();
        play2.classList.remove('fa-play-circle');
        play2.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        songInfo.textContent=" Dua - Arijit Singh";
    }
    else{
        audioelement2.pause();
        play2.classList.remove('fa-pause-circle');
        play2.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

play3.addEventListener('click', ()=>{
    if(audioelement3.paused||audioelement3.currentTime<=0){
        pauseAllAudios(); 
currentAudio = audioelement3;

        audioelement3.play();
        play3.classList.remove('fa-play-circle');
        play3.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        songInfo.textContent=" Mitwa- Udit Narayan";
    }
    else{
        audioelement3.pause();
        play3.classList.remove('fa-pause-circle');
        play3.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

play4.addEventListener('click', ()=>{
    if(audioelement4.paused||audioelement4.currentTime<=0){
        pauseAllAudios(); 
currentAudio = audioelement4;

        audioelement4.play();
        play4.classList.remove('fa-play-circle');
        play4.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        songInfo.textContent=" Pal Pal- Sonu Nigam";
    }
    else{
        audioelement4.pause();
        play4.classList.remove('fa-pause-circle');
        play4.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})



play5.addEventListener('click', ()=>{
    if(audioelement5.paused||audioelement5.currentTime<=0){
        pauseAllAudios(); 
currentAudio = audioelement5;

        audioelement5.play();
        play5.classList.remove('fa-play-circle');
        play5.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        songInfo.textContent=" Thik Hai - khesari lal yadav";
    }
    else{
        audioelement5.pause();
        play5.classList.remove('fa-pause-circle');
        play5.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})




play6.addEventListener('click', ()=>{
    if(audioelement6.paused||audioelement6.currentTime<=0){
        pauseAllAudios(); 
currentAudio = audioelement6;

        audioelement6.play();
        play6.classList.remove('fa-play-circle');
        play6.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        songInfo.textContent=" Night Changes- OneDirection";
    }
    else{
        audioelement6.pause();
        play6.classList.remove('fa-pause-circle');
        play6.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})




play7.addEventListener('click', ()=>{
    if(audioelement7.paused||audioelement7.currentTime<=0){
        pauseAllAudios(); 
currentAudio = audioelement7;

        audioelement7.play();
        play7.classList.remove('fa-play-circle');
        play7.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        songInfo.textContent=" Stereo Hearts- Adam Levine";
    }
    else{
        audioelement7.pause();
        play7.classList.remove('fa-pause-circle');
        play7.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

currentAudio.addEventListener('timeupdate', () => {
    progress = parseInt((currentAudio.currentTime / currentAudio.duration) * 100);
    myProgressbar.value = progress;
});

myProgressbar.addEventListener('change', () => {
    currentAudio.currentTime = (myProgressbar.value * currentAudio.duration) / 100;
});

// audioelement2.addEventListener('timeupdate',()=>{
//     //update seek bar
//     progress=parseInt((audioelement2.currentTime/audioelement2.duration)*100);
//     myProgressbar.value=progress;

// })
// myProgressbar.addEventListener('change',()=>{
//     audioelement2.currentTime=(myProgressbar.value*audioelement2.duration)/100;
// })
// audioelement3.addEventListener('timeupdate',()=>{
//     //update seek bar
//     progress=parseInt((audioelement3.currentTime/audioelement3.duration)*100);
//     myProgressbar.value=progress;

// })
// myProgressbar.addEventListener('change',()=>{
//     audioelement3.currentTime=(myProgressbar.value*audioelement3.duration)/100;
// })

// audioelement4.addEventListener('timeupdate',()=>{
//     //update seek bar
//     progress=parseInt((audioelement4.currentTime/audioelement4.duration)*100);
//     myProgressbar.value=progress;

// })
// myProgressbar.addEventListener('change',()=>{
//     audioelement4.currentTime=(myProgressbar.value*audioelement4.duration)/100;
// })
// audioelement5.addEventListener('timeupdate',()=>{
//     //update seek bar
//     progress=parseInt((audioelement5.currentTime/audioelement5.duration)*100);
//     myProgressbar.value=progress;

// })
// myProgressbar.addEventListener('change',()=>{
//     audioelement5.currentTime=(myProgressbar.value*audioelement5.duration)/100;
// })
// audioelement6.addEventListener('timeupdate',()=>{
//     //update seek bar
//     progress=parseInt((audioelement6.currentTime/audioelement6.duration)*100);
//     myProgressbar.value=progress;

// })
// myProgressbar.addEventListener('change',()=>{
//     audioelement6.currentTime=(myProgressbar.value*audioelement6.duration)/100;
// })
// audioelement7.addEventListener('timeupdate',()=>{
//     //update seek bar
//     progress=parseInt((audioelement7.currentTime/audioelement7.duration)*100);
//     myProgressbar.value=progress;

// })
// myProgressbar.addEventListener('change',()=>{
//     audioelement7.currentTime=(myProgressbar.value*audioelement7.duration)/100;
// })
function IsEnter() {
    var TextBox_val = document.getElementById("InputBox").value; 
    if (TextBox_val != "") {
      if (event.keyCode == 13)
        main();
    }
  }
  
  function main() {
    // the main logic will be coded here.
    var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.
    var ResponseText_val = document.getElementById("ResponseText"); // Get all the data from the response text.
  
    var FormatInput = TextBox_val.toLowerCase().trim(); // convert our given input to lowercase.
    if (FormatInput.includes("hi") || FormatInput.includes("hello"))
      ResponseText_val.innerHTML = "Hello! aur kaisan ba.";
  
    else if (FormatInput.includes("how are you"))
      ResponseText_val.innerHTML = "I'm fine! Thanks for asking!";
  
    // Open websites!
    else if (FormatInput.includes("open google")) {
      // "https://" is important!
      ResponseText_val.innerHTML = "Opening Google";
      window.open("https://www.google.com", "_blank");
    }
  
    else if (FormatInput.includes("open youtube")) {
      // "https://" is important!
      ResponseText_val.innerHTML = "Opening YouTube";
      window.open("https://www.youtube.com", "_blank");
    }
  
    else if (FormatInput.includes("give more songs")) {
      // "https://" is important!
      ResponseText_val.innerHTML = "Ruko jara sabar karo!!";
      window.open("https://open.spotify.com/", "_blank");
    }
  
    else
    window.open("https://open.spotify.com/search/"+document.getElementById("InputBox").value);  }

