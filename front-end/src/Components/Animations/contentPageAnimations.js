import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

// note: instead of querySelectorAll, gsap.utils.toArray is used for ie9 support for using foreach
const contentPageAnimations = () => { 
  // master timeline animation constructor
  class Animate{
    constructor(selector){
      this.element = selector;

      // used for returning inidividual animations
      this.master = gsap.timeline({paused:true, reversed:true, defaults:{
        duration:.3
      }});
    }

    fillAnimateByOffset(el, offset){
      this.master.to(el,{
        attr: { offset: offset },
        ease: "none",
        overwrite:"auto"
      })
      return this.master;
    }

    heightShrink(el) {
  
      this.master.fromTo(el, { height: 0 },{
        height: "auto", 
        ease: "power1.out",
        overwrite: "auto"
      });
  
      return this.master;
    }

    moveDown(el, yPercent){
      this.master.fromTo(el, { yPercent: yPercent, autoAlpha: 0}, {
          duration: 1,
          yPercent: 0,
          stagger: .5,
          autoAlpha: 1,
          ease: "power4.out",
          overwrite: "auto",
        })

      return this.master;
    }

    rotateSymbol(el, rotate){
      this.master.fromTo(el, {rotate: 0}, {
        rotate:rotate,
        ease: "power1.out",
        overwrite: "auto"
      })
    
      return this.master;
    }

    setDisplay(el, disp){
      this.master
        .fromTo(el, { display: "none", autoAlpha: 0 },{
          display: disp, 
          autoAlpha:1,
        })

      return this.master;
    }

    changeColor(el, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor){
      this.master.fromTo(el, {background:fromBgColor ,color: fromColor, borderColor: fromborderColor}, {
        background: toBgColor,
        color: toColor,
        borderColor: toborderColor,
        overwrite: "auto",
      })
    
      return this.master;
    }

    lineWidthChangeTo(el, widthFrom, widthTo, disp){
      this.master.fromTo(el, {width: widthFrom, display: "none", autoAlpha: 0}, {
        duration: 1,
        autoAlpha: 1,
        width: widthTo,
        stagger: .1,
        display: disp,
        overwrite: "auto",
        ease: "bounce.inOut"
      })

      return this.master;
    }

    moveDownLineExpand(btnPos, btnCont, page, body, yPercent,  widthFrom, widthTo, lineDisp, bodyDisp){
      this.master
        .add(this.heightShrink(page), 0)
        .add(this.lineWidthChangeTo(btnCont, widthFrom, widthTo, lineDisp), "same")
        // .add(this.setDisplay(body, bodyDisp), "same")
        .add(this.moveDown(btnPos, yPercent), "same")
     
      
      return this.master;
    }

    changeColorAndLineWidth(
      btn, line, body, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor, widthFrom, widthTo, disp, lineDisp
    ){
      this.master
        .add(this.changeColor(btn, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor),0) 
        .add(this.lineWidthChangeTo(line, widthFrom, widthTo, lineDisp), 0)
        .add(this.setDisplay(body, disp),0)
      
      return this.master;
    }

    changeColorAndRotate = (btn, symb, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor, rotate) => {
      this.master
        .add(this.changeColor(btn, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor), 0) 
        .add(this.rotateSymbol(symb, rotate), 0)

      return this.master;
    }

    fillAnimateTimeline(el1, el2, el3, el4, el5, offset1, offset2, offset3, offset4, offset5){
      let el__list = [el1,el2,el3,el4,el5];
      let offset;
      let i;

      for (i = 0; i < el__list.length; i++) {
        
        if (i == 0 ){
          offset = offset1;
        }else if (i == 1){
          offset = offset2;
        }else if (i == 2){
          offset = offset3;
        }else if (i == 3){
          offset = offset4;
        }else if (i == 4){
          offset = offset5;
        }

        this.master
          .add(this.fillAnimateByOffset(el__list[i], offset), 1)
         
      }
      return this.master;
     
    }
  }

  //#region Global Variables
    // variables queries
    let startButton = document.querySelector(".btn__getStarted"),
        startButton_a = document.querySelector(".btn__getStarted a"),
        startButton_Symbol = document.querySelector(".btn__arrow"),

        pageTrigger =  document.querySelector(".trigger-container"),
        pageCont = document.querySelector(".page__bgCont"),

        sectionLists = document.querySelectorAll(".sect-select"),
        buttonCont = document.querySelectorAll(".btn__container"),

        buttonPos = document.querySelectorAll(".btn__position"),
        sectionAboutBtn = document.querySelector("#aboutTwo"),
        sectionSkillBtn = document.querySelector("#skills"),
        sectionProjectBtn = document.querySelector("#projects"),

        customHr = document.querySelectorAll(".custom-hr"),
        sectionAboutHr = document.querySelector("#hr__aboutTwo"),
        sectionSkillHr = document.querySelector("#hr__skills"),
        sectionProjectHr = document.querySelector("#hr__projects"),

        bodyContents = document.querySelectorAll(".bodyC"),
        bodyContInside = document.querySelectorAll(".g-body-cont"),
        sectionAbout= document.querySelector(".body__aboutTwo"),
        sectionSkill = document.querySelector(".body__skills"),
        sectionProject = document.querySelector(".body__projects");


    // variables non queries
    let aboutTwo = "aboutTwo", 
        skills = "skills",
        projects = "projects";

    // contants used in animation
    let unset = "unset",

        white = "white",
        black = "black",
        lightRed = "rgb(252, 72, 72)",
        lightRed2 = "#a55555",
       
        rotate = "90",
        yPercent = -50,

        fromWidth = "11%",
        fromLineWidth = "0",
        toWidth = "100%",
        toLineWidth = "40vw",

        block = "block",
        flex = "flex";

  //#endregion

  // functions - event listeners
  const onClickHoverHandler = () => {

    // #region event listener for get started button
    // get started button
    let buttonAnimate = new Animate()
    let ba_animate = buttonAnimate.changeColorAndRotate( 
      startButton, startButton_Symbol, black, white, white, black, lightRed, lightRed, rotate
    );
    
    // page sections animations
    let pageAnimate = new Animate()
    let pa_pageContAnimate = pageAnimate.moveDownLineExpand(
      buttonPos, buttonCont, pageTrigger, bodyContInside, yPercent, fromWidth, toWidth, flex, block
    );

    pageAnimate.master.paused(true);
    pageAnimate.master.reversed(false);

    // hover enter
    startButton.addEventListener("mouseenter", (e) => {
      e.preventDefault();

      ba_animate.play();
    })
    // hover leave
    startButton.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      
      ba_animate.reverse();
    })
    // on click
    startButton.addEventListener("click", (e) => {
      e.preventDefault();
      
      // add active class
      startButton.classList.toggle("active__onClick");
      startButton_Symbol.classList.toggle("active__getStarted__symbol");

      if(startButton.classList.contains("active__onClick")){
        pageTrigger.id = 'page'
        startButton_a.setAttribute("href", "#page")

        pa_pageContAnimate.play()

      }else{
        pageTrigger.removeAttribute('id');
        startButton_a.setAttribute("href", "#getStarted")
        // reverse page
        pa_pageContAnimate.reverse()
        // reverse inside if some of them is clicked
        gsap.utils.toArray(".btn__position").forEach(item => {
      
          if(item.classList.contains(aboutTwo) && item.classList.contains("clicked")){
            item.click();
          }
          if(item.classList.contains(skills) && item.classList.contains("clicked")){
            item.click();
          }
          if(item.classList.contains(projects) && item.classList.contains("clicked")){
            item.click();
          }
        })
      }
      gsap.to(window, {duration: 1, scrollTo: startButton_a.getAttribute("href")});
    })

    // #endregion

    // #region event listener for button containers

    gsap.utils.toArray(".btn__position").forEach(el => {
      let targetBody, targetHr, targetBtn;

      if(el.classList.contains("aboutTwo")){
        targetBody = sectionAbout;
        targetHr = sectionAboutHr;
        targetBtn = sectionAboutBtn;

      }else if(el.classList.contains("skills")){
        targetBody = sectionSkill;
        targetHr = sectionSkillHr;
        targetBtn = sectionSkillBtn;

      }else if(el.classList.contains("projects")){
        targetBody = sectionProject;
        targetHr = sectionProjectHr
        targetBtn = sectionProjectBtn;
      }

      // animation
      let buttonAnimate = new Animate();
      let ba_animate = buttonAnimate.changeColorAndLineWidth(
        targetBtn, targetHr,targetBody, 
        lightRed2, white, unset, black, lightRed, lightRed, fromLineWidth, toLineWidth, unset, unset
      );
      
      let skillAnimate = skillsAnimateFunction();

      let tl__skill = gsap.timeline({paused:true, reversed:true})
        .add( ba_animate.play() )
        .add( skillAnimate.pause() )

      el.addEventListener("click", (e)=>{
        e.preventDefault();
        el.classList.toggle("clicked");

        // animation for section about two
        if(el.classList.contains(aboutTwo)){
          sectionAbout.classList.toggle("clicked");
        }
        // animation for section skills
        if(el.classList.contains(skills)){
          sectionSkill.classList.toggle("clicked");

          skillAnimate.play();
        }
        // animation for section projects
        if(el.classList.contains(projects)){
          sectionProject.classList.toggle("clicked");
        }

        tl__skill.reversed() ? tl__skill.play() : tl__skill.reverse();
      })
    })

    // #endregion

  }

  // section two skills animation
  const skillsAnimateFunction = () => {
    let boxOne    = document.querySelectorAll("#theGradientRect01 stop"),
        boxTwo    = document.querySelectorAll("#theGradientRect02 stop"),
        boxThree  = document.querySelectorAll("#theGradientRect03 stop"),
        boxFour   = document.querySelectorAll("#theGradientRect04 stop"),
        boxFive   = document.querySelectorAll("#theGradientRect05 stop");

    let boxOne__perc    = "40%",
        boxTwo__perc    = "20%",
        boxThree__perc  = "40%",
        boxFour__perc   = "10%",
        boxFive__perc   = "70%";

    let fillAnimate = new Animate();
    let fill = fillAnimate.fillAnimateTimeline(
      boxOne, boxTwo, boxThree, boxFour, boxFive, 
      boxOne__perc, boxTwo__perc, boxThree__perc, boxFour__perc, boxFive__perc
    )

    fillAnimate.master.paused(false);

   return fill;
  }

  const allContentPageAnimations = () =>{
    onClickHoverHandler();
  }

  return(
    allContentPageAnimations()
  );

}

export default contentPageAnimations;