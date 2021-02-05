import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const smoothScroll = (target) => {
    target.forEach((item, i) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            let href = item.getAttribute("href");
            gsap.to(window, {duration: 1, scrollTo:href, overwrite: "auto", ease:"Power4.easeOut"});
        })
    })
    
}

export default smoothScroll;