import gsap from 'gsap';
// helper
import helper from '../../helper/query.js';

const animation = ( tl) => {
    let heroImg = helper.heroImg();
    let heroStatus = helper.heroStatus();
    let heroH2 = helper.heroH2();
    let heroInfoOne = helper.heroInfoOne();
    let heroInfoTwo = helper.heroInfoTwo();

    let activeColor = '#016685';
    let semiActiveColor = '#B5AAAA';
    let notActiveColor = '#E5DBDB';
    let label = 'status';

    tl.to(heroImg, {y: 0});
    tl.to(heroStatus, {autoAlpha: 1}, label);
    tl.to(heroH2, {color: notActiveColor}, label);
    tl.to(heroInfoOne, {color: activeColor}, label);
    tl.to(heroInfoTwo, {color: semiActiveColor}, label);
}

const heroAnimate = () => {
    let clicked = false;

    let statusBtn = helper.statusBtn();
    let contactBtn = helper.contactBtn();

    let tl = gsap.timeline({paused: true, defaults:{
        duration: .3
    }}); // init gsap timeline
    
    animation(tl);
 
    statusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle('active');
        contactBtn.classList.toggle('active');
        clicked = !clicked;
        if(clicked === true){
            tl.play();
        }else{
            tl.reverse();
        }
    });
}

export default heroAnimate;