import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import helper from '../../helper/query.js';

gsap.registerPlugin(ScrollTrigger);

//#region reusable animations
const scolllAnimationHandler = (section, target, start, end, scrub, markers) => {

    let tl = gsap.timeline({paused: true, defaults:{
        overwrite: "auto"
    }});
    const scrollTriggerObj = {
        trigger: target,
        start: start, 
        end: end,
        scrub: scrub,
        markers: markers,
        invalidateOnRefresh: true,

        onEnter: () => {
            onEnter(tl, section);
        }, 
        onLeave: () => {
            onLeave(tl, section);
        },
        onEnterBack: () => {
            onEnterBack(tl, section);
        }, 
        onLeaveBack: () => {
            onLeaveBack(tl, section);
        }
    }
    
    if(section === "blogPost"){
        blogPost_animate(tl)
        ScrollTrigger.create(scrollTriggerObj)
    }

} //scroll trigger handler for reuse

const upDownInfinite_animate = (tl, target, yPercent, ease, label) => {
    tl.to(target, { stagger: .7, yPercent: yPercent, yoyo: true, repeat: -1, ease: ease}, label);
} //infinite animation for arrows

const switchColorInifinite_animate = (tl, target, shadow, color, ease, label) => {
    tl.to(target, { stagger: .7, boxShadow: shadow,color: color, ease: ease, yoyo: true, repeat: -1}, label);
} //inifinite switching colors
//#endregion

//#region type two scroll trigger animations
const onEnter = (tl, section) =>{
    if(section === "blogPost"){
        tl.play();
    }
}
const onLeave = (tl, section) =>{
    if(section === "blogPost"){
        tl.reverse();
    }
}
const onEnterBack = (tl, section) =>{
    if(section === "blogPost"){
        tl.play();
    } 
}
const onLeaveBack = (tl, section) =>{
    if(section === "blogPost"){
        tl.reverse();
    }
}
//#endregion

//#region blog post section animations
 const blogPost_animate = (tl) => {
     
    tl.to(helper.blogPostHolder(), { autoAlpha: 1, y: 0});
 }
//#endregion

const scrollTrigger = () => {
    ScrollTrigger.matchMedia({
        "all": () => {

            helper.blogPostHolder().forEach((item, i) => {
                scolllAnimationHandler('blogPost',item,'top+=100 center', 'bottom-=100 center', false, true);
            })
           
        }
    })
}

export default scrollTrigger;