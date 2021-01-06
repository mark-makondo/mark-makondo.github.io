import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

// note: instead of querySelectorAll, gsap.utils.toArray is used for ie9 support for using foreach
const contentPageAnimations = () => { 

  // #region master timeline animation constructor
  class Animate{
    constructor(selector, yoyo, repeat, duration){
      this.element = selector;

      if(duration == null || duration == ""){
        this.newDuration = .5
      }else{
        this.newDuration = duration;
      }

      // used for returning individual animations
      this.master = gsap.timeline({paused:true, reversed:true, yoyo: yoyo, repeat: repeat, 
        defaults:{
          duration: this.newDuration
        }
      });
    }

    fillAnimateByOffset(el, offset, label){
      this.master.to(el,{
        attr: { offset: offset },
        ease: "none",
        overwrite:"auto"
      }, label)
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

    rotateSymbol(el, rotate, label){
      this.master.fromTo(el, {rotate: 0}, {
        // duration:.2,
        rotate:rotate,
        ease: "none",
        overwrite: "auto"
      }, label)
    
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

    changeColor(el, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor, label){
      this.master.fromTo(el, {background:fromBgColor ,color: fromColor, borderColor: fromborderColor}, {
        duration:.2,
        background: toBgColor,
        color: toColor,
        borderColor: toborderColor,
        overwrite: "auto",
      }, label)
    
      return this.master;
    }

    lineWidthChangeTo(el, widthFrom, widthTo, disp){
      this.master.fromTo(el, {width: widthFrom, display: "none", autoAlpha: 0}, {
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
        .add(this.moveDown(btnPos, yPercent), "same")

      return this.master;
    }

    changeColorAndLineWidth(
      line, body, widthFrom, widthTo, disp, lineDisp
    ){
      this.master
        .add(this.lineWidthChangeTo(line, widthFrom, widthTo, lineDisp),0)
        .add(this.setDisplay(body, disp),0)
      
      return this.master;
    }

    changeColorAndRotate = (btn, symb, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor, rotate) => {
      this.master
        .add(this.changeColor(btn, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor, "ccar")) 
        .add(this.rotateSymbol(symb, rotate, "ccar"))

      return this.master;
    }

    fillAnimateTimeline(el1, el2, el3, el4, el5, offset1, offset2, offset3, offset4, offset5,
      el_perc1,el_perc2,el_perc3,el_perc4,el_perc5){

      let el__list  = [el1,el2,el3,el4,el5];
      let el__percs = [el_perc1,el_perc2,el_perc3,el_perc4,el_perc5];
      let offset;
      let i;
      let convertStringToNumber;
      let replacePercentWithNone;

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

        // convert string % to actual number because percentAnimate will not accept string values
        replacePercentWithNone = offset.replace("%",'');
        convertStringToNumber = replacePercentWithNone*1;

        this.master
          .add("fillLabel")
          .add(this.fillAnimateByOffset(el__list[i], offset, "fillLabel" ))
          .add(this.percentAnimate(el__percs[i], convertStringToNumber, "fillLabel") )

      }
      return this.master;
    }
     
    percentAnimate(el, perTarget, label){
      let percentBase = {percent: 0};
      let percentTarget = perTarget;

      this.master
        .to(percentBase, { 
          percent:percentTarget,
          roundProps:"percent", 
          onUpdate: () =>{
            el.innerHTML=percentBase.percent+"%"
          }
        }, label)

      return this.master;
    }

    movingXaxis (fromPercent, toPercent, label){
      this.master
        .fromTo(this.element, {xPercent: fromPercent}, {
          xPercent: toPercent,
          ease: "none"
        },label)

      return this.master
    }

    movingXRotate (fromtPercent, toPercent, rotate) {
      this.master
        .add( this.movingXaxis(fromtPercent, toPercent, "mxr") )
        .add( this.rotateSymbol(this.element, rotate, "mxr") )

      return this.master
    }

  }
  //#endregion

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
        customHrAbout = document.querySelector(".custom-hr-about"),
        sectionAboutHr = document.querySelector("#hr__aboutTwo"),
        sectionSkillHr = document.querySelector("#hr__skills"),
        sectionProjectHr = document.querySelector("#hr__projects"),

        bodyContents = document.querySelectorAll(".bodyC"),
        bodyContInside = document.querySelectorAll(".g-body-cont"),
        sectionAbout= document.querySelector(".body__aboutTwo"),
        sectionSkill = document.querySelector(".body__skills"),
        sectionProject = document.querySelector(".body__projects"),

        sectionSkillGroupedSvg = document.querySelector(".rect__skills__cont"), 
        sectionSkillPercOne = document.querySelector("#skill__perc1"),
        sectionSkillPercTwo = document.querySelector("#skill__perc2"),
        sectionSkillPercThree = document.querySelector("#skill__perc3"),
        sectionSkillPercFour = document.querySelector("#skill__perc4"),
        sectionSkillPercFive = document.querySelector("#skill__perc5"),
        sectionSkillCircle = document.querySelectorAll(".skill__circle"),

        footerContainer = document.querySelector(".body__footer__container"),
        footerSayhello = document.querySelector(".contentPage__data__footer__boxOne"),
        footerEmailCont = document.querySelector(".contentPage__data__footer__boxTwo");


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

  // section two skills animation
  const skillsAnimateFunction = () => {
    let basic   = document.querySelectorAll("#theGradientRect01 stop"),
        reactjs = document.querySelectorAll("#theGradientRect02 stop"),
        laravel = document.querySelectorAll("#theGradientRect03 stop"),
        mongodb = document.querySelectorAll("#theGradientRect04 stop"),
        mysql   = document.querySelectorAll("#theGradientRect05 stop");

    let basic__perc     = "80%",
        reactjs__perc   = "70%",
        laravel__perc   = "50%",
        mongodb__perc   = "40%",
        mysql__perc     = "60%";

    let fillAnimate = new Animate("", false, 0, .4);
    let fill = fillAnimate.fillAnimateTimeline(
      basic, reactjs, laravel, mongodb, mysql, 
      basic__perc, reactjs__perc, laravel__perc, mongodb__perc, mysql__perc,
      sectionSkillPercOne,sectionSkillPercTwo,sectionSkillPercThree,sectionSkillPercFour,sectionSkillPercFive
    )

    fillAnimate.master.paused(false);

   return fill;
  }

  // animation handlers
  const onClickHoverHandler = () => {

    // #region event listener for get started button
    // get started button
    let buttonAnimate = new Animate("", false, 0, .5 )
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
      let targetBody, targetHr; 

      if(el.classList.contains("aboutTwo")){
        targetBody = sectionAbout;
        targetHr = sectionAboutHr;
      }else if(el.classList.contains("skills")){
        targetBody = sectionSkill;
        targetHr = sectionSkillHr;
      }else if(el.classList.contains("projects")){
        targetBody = sectionProject;
        targetHr = sectionProjectHr
      }

      // animation
      let buttonAnimate = new Animate();
      let ba_animate = buttonAnimate.changeColorAndLineWidth(
        targetHr,targetBody, fromLineWidth, toLineWidth, unset, unset
      );

      // fill animation
      let skillAnimate = skillsAnimateFunction();

      // skill circle perma animation
      let skillCircleAnimate = new Animate(sectionSkillCircle,true,-1, 8);
      let sca = skillCircleAnimate.movingXRotate(-50, 50, 365);


      let tl__skill = gsap.timeline({paused:true, reversed:true})
        .add( ba_animate.play() )
        .add( skillAnimate.pause() )
        .add( sca.paused() )

      el.addEventListener("click", (e)=>{
        e.preventDefault();
        el.classList.toggle("clicked");
        el.classList.toggle("active__onClick");
       
        // animation for section about two
        if(el.classList.contains(aboutTwo)){
          sectionAbout.classList.toggle("clicked");
        }
        // animation for section skills
        if(el.classList.contains(skills)){
          sectionSkill.classList.toggle("clicked");
          let skillSvgContainer = getComputedStyle(sectionSkillGroupedSvg)

          if(skillSvgContainer.display == "none"){
            skillAnimate.clear();
            skillAnimate.invalidate();
            sca.clear();
            sca.invalidate();
          }else{
            skillAnimate.play();
            sca.play()
          }

        }
        // animation for section projects
        if(el.classList.contains(projects)){
          sectionProject.classList.toggle("clicked");
        }

        tl__skill.reversed() ? tl__skill.play() : tl__skill.reverse();
      })
    })
    // #endregion

    //#region footer
    // box one
    let sayhello = new Animate();
    let showContact = sayhello.setDisplay(footerEmailCont, unset);
    let logo__madSvg = document.querySelector("#mad");

    footerSayhello.addEventListener("click", ()=> {
      footerSayhello.classList.toggle("active__onClick");
      logo__madSvg.classList.toggle("stroke-red");
      
      showContact.reversed() ? showContact.play() : showContact.reverse();
    })
    //#endregion
  }

  const animationPermanentOn = () => {
    let aboutOne__permaAnimate = new Animate(customHrAbout,true, -1, 2);
    aboutOne__permaAnimate.movingXaxis(-25, 25).play();
  }

  const allContentPageAnimations = () =>{
    animationPermanentOn();
    onClickHoverHandler();
  }

  return(
    allContentPageAnimations()
  );

}

export default contentPageAnimations;