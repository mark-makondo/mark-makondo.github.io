 // variable
 let targetBody = item.querySelectorAll(".bodyC"),
 targetHr = item.querySelectorAll(".custom-hr"),
 targetBtn = item.querySelectorAll(".btn__position");

// timeline
let tml__hover = gsap.timeline({paused:true,
defaults:{ duration:.1}
});
let tml__click = gsap.timeline({paused:true, reversed:true,
defaults:{ duration:.3, }
});

tml__click.add( clickAnimate(targetHr,targetBtn,targetBody) );
tml__hover.add( hoverAnimate(targetBtn) );

// click animation
item.addEventListener("click", (e) => {
e.preventDefault();
item.classList.toggle("clicked");

tml__click.reversed() ? tml__click.play() : tml__click.reverse()
})

// hover enter animation
item.addEventListener("mouseenter", (e) => {
e.preventDefault();
if(item.classList.contains("clicked")){
 return;
}
tml__hover.play();
})

// hover leave animation
item.addEventListener("mouseleave", (e)=>{
e.preventDefault();

if(item.classList.contains("clicked")){
 return;
}
tml__hover.reverse();
})



startButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    tl = gsap.timeline
    // add active class
    startButton.classList.toggle("active__onClick");
    startButton_Symbol.classList.toggle("active__getStarted__symbol");
  })


  item.addEventListener("click", (e) => {
    e.preventDefault();
    item.classList.toggle("clicked");

  }) 

  let flag__startButton
  let flag__body

  if(flag__startButton && flag__body){
    tl  
        .add
        .add
  }

  