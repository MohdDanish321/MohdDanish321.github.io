console.log("Welcome to Spotify")

//Initialize the Variables
songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
myProgressBar.value=0;
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById("masterSongName");

let songs =[
    {songName:"Tere Liye | Aryan Patel", filePath:"songs/1.mp3", coverPath:"covers/patel.jfif"},
    {songName:"Mera Mann | Aryan Raj", filePath:"songs/2.mp3", coverPath:"covers/raj.jfif"},
    {songName:"Lag Ja Gale | Patel | Raj", filePath:"songs/3.mp3", coverPath:"covers/patel.jfif"},
    {songName:"Sajni | Aryan Raj ft. Aryan Patel", filePath:"songs/4.mp3", coverPath:"covers/raj.jfif"},
    {songName:"Until I found You | Aryan Raj", filePath:"songs/5.mp3", coverPath:"covers/raj.jfif"},
    {songName:"Ek Ajnabee Haseena | Aryan Patel", filePath:"songs/6.mp3", coverPath:"covers/patel.jfif"},
    {songName:"Tere Hokey Rahenge | Aryan Patel ft. Aryan Raj", filePath:"songs/7.mp3", coverPath:"covers/patel.jfif"},
    {songName:"Perfect | Aryan Raj", filePath:"songs/8.mp3", coverPath:"covers/raj.jfif"},
    {songName:"Always | Shashwat", filePath:"songs/9.mp3", coverPath:"covers/shaw.jfif"},
    {songName:"Sanam Re | Shashwat", filePath:"songs/10.mp3", coverPath:"covers/shaw.jfif"},
    {songName:"Thinking out Loud | Shashwat", filePath:"songs/11.mp3", coverPath:"covers/shaw.jfif"},
    {songName:"Tujhe Kitna Chahne Lage Hum | Shashwat", filePath:"songs/12.mp3", coverPath:"covers/shaw.jfif"},
    {songName:"Snowman | Aryan Raj", filePath:"songs/13.mp3", coverPath:"covers/raj.jfif"}
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

})

//audioElement.play();

//Handle Play Pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        gif.style.opacity=1;
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='songs/'+(songIndex+1)+'.mp3';
        masterSongName.innerText=songs[songIndex].songName;
        console.log("the src is -"+audioElement.src);
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=12){
        songIndex=12;
    }
    else{
        songIndex+=1;
    }
    audioElement.src='songs/'+(songIndex+1)+'.mp3';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    //console.log("the src is -"+audioElement.src);
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src='songs/'+(songIndex+1)+'.mp3';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    //console.log("the src is -"+audioElement.src);
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})