function toggleMenu(){
const menu=document.querySelector('.menu');
menu.classList.toggle('active');
const nav=document.querySelector('.nav');
nav.classList.toggle('active');
}
console.log("hello");
//changing background video when click images
function changeVideo(name){
    const bgVideoList=document.querySelectorAll('.bg-video');
    const trailers=document.querySelectorAll('.trailer');
    const models=document.querySelectorAll('.model');
    // data mapping
   bgVideoList.forEach(video =>{
    video.classList.remove('active');
    if(video.classList.contains(name)){
        video.classList.add('active');
    }
   });
   //changing background name when click images
   models.forEach(model=>{
    model.classList.remove('active');
    if(model.classList.contains(name)){
        model.classList.add('active');
    }
    });

    //changing trailer video with mapping
    trailers.forEach(video=>{
        trailers.classList.remove('active');
        if(trailers.classList.contains(name)){
            trailers.classList.add('active');
        }
        });
    }
         // change the play and pause button on click event
         function togglePlay(){
            const play=document.querySelector('.play');
            const pause=document.querySelector('.pause');
            play.classList.toggle('.active');
            pause.classList.toggle('.active');
        }
        //video pause code
        function pauseVideo(){
            const bgVideoList=document.querySelectorAll('.bg-video');
            bgVideoList.forEach(video =>{
                video.pause();
            });
            togglePlay();
        }
       
        function playVideo(){
            const bgVideoList=document.querySelectorAll('.bg-video');
            bgVideoList.forEach(video =>{
                video.play();
            });
            togglePlay();
        }
        
   
