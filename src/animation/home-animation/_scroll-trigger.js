import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import helper from '../../helper/query.js';

gsap.registerPlugin(ScrollTrigger);

//#region reusable animations
const scolllAnimationHandler = (section, target, start, end, scrub, markers, toggleActions, targetEnd) => {
   
    let tl = gsap.timeline({
        defaults:{
            overwrite: 'auto'
        },
        scrollTrigger:{
            trigger: target,
            endTrigger: targetEnd,
            start: start, 
            end: end,
            scrub: scrub,
            markers: markers,
            invalidateOnRefresh: true,
            toggleActions: toggleActions
        }
    })
    
    if(section === 'hero'){
        heroSection_animate(tl);
    }else if(section === 'skill'){
        skillSection_animate(tl);
    }else if(section === 'project'){
        projectSection_animate(tl);
    }else if(section === 'footer'){
        footerSection_animate(tl);
    }
} //scroll trigger handler for reuse

const upDownInfinite_animate = (tl, target, yPercent, ease, label) => {
    tl.to(target, { stagger: .7, yPercent: yPercent, yoyo: true, repeat: -1, ease: ease}, label);
} //infinite animation for arrows

const rotateInfinite_animate = (tl, target, rotate, ease, label) => {
    tl.to(target, { duration: 5, rotate: rotate , repeat: -1, ease: ease}, label);
} //infinite rotation

const switchColorInifinite_animate = (tl, target, shadow, color, ease, label) => {
    tl.to(target, { stagger: .7, boxShadow: shadow,color: color, ease: ease, yoyo: true, repeat: -1}, label);
} //inifinite switching colors

//#endregion

//#region hero section animations
const heroSection_animate = (tl) => {
    let ease = "power1.inOut";
    let yPercent = -20;
    let label = 'hero';
    let info = [helper.heroH2(), helper.heroInfoOne(), helper.heroInfoTwo()];

    gsap.set(helper.heroImgCont(), {scale: 0});
    gsap.set(info, {xPercent: -200});
    gsap.set(helper.heroBtns(), {autoAlpha: 0});

    tl.to(helper.heroImgCont(), {duration: .5, scale: 1}, label);
    tl.to(info, {stagger: .3, xPercent: 0}, `${label}+=.5`);
    tl.to(helper.heroBtns(), {autoAlpha: 1});
    upDownInfinite_animate(tl, helper.heroArrow(), yPercent, ease, label);
}
//#endregion

//#region skill section animations
const skillSection_animate = (tl) => {
    let label = 'inifinite'
    let rotate = 360;
    let yPercent = -10;
    let color = 'white';
    let shadow = '0px 3px 8px #00000025';

    rotateInfinite_animate(tl, helper.skillSvgCircLines(), rotate, 'none', label);
    upDownInfinite_animate(tl, helper.skillHolder(), yPercent, 'power1.inOut', label);
    switchColorInifinite_animate(tl, helper.skillHolder(), shadow, color, 'none', label);
}
//#endregion

//#region project section animations
const projectSection_animate = (tl) => {
    let label = 'infinite';
    gsap.set(helper.projectHolder(), {autoAlpha: 0, yPercent: -10, xPercent: -10});
    tl.to(helper.projectHolder(), {stagger: .2, yPercent: 0, xPercent: 0, autoAlpha: 1, ease: 'power1.inOut'},label);
}
//#endregion

//#region footer secction animations
const footerSection_animate = (tl) => {
    let ease = "power1.inOut";
    let yPercent = -20;
    let label = 'footer';
    upDownInfinite_animate(tl, helper.footerArrow(), yPercent, ease, label);
}
//#endregion

const scrollTrigger = () => {
    ScrollTrigger.matchMedia({
        "all": () => {
            let customOne_action = 'play reverse play reset';
            let customTwo_action = 'play pause play pause';

            scolllAnimationHandler('hero',helper.hero(),'top center', 'bottom-=100 center', false, true, customOne_action);
            scolllAnimationHandler('skill', helper.skill(),'top center', 'bottom center', false, false, customTwo_action); 
            scolllAnimationHandler('project', helper.project(),'top center', 'bottom center', false, false, customOne_action);
            scolllAnimationHandler('footer',helper.footer(),'top center', 'bottom-=100 center', false, false, customOne_action);
        }
    })
}

export default scrollTrigger;