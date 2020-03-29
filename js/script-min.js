"use strict";function takeOnlyNumber(e){var t=0;return""!==e&&(t=+e.match(/\d{1,}/)[0]),t}!function(){var t=document.querySelector(".feedback-overlay"),e=document.querySelector(".write-us"),n=document.querySelector(".modal-feedback__form-close");e.addEventListener("click",function(e){e.preventDefault(),t.classList.remove("hidden"),n.addEventListener("click",function(){t.classList.add("hidden")})})}(),function(){var e=document.querySelector(".hamburger"),t=document.querySelector(".main-nav__menu-list"),n=Array.prototype.slice.call(document.querySelectorAll(".main-nav__link")),r=document.querySelector(".main-nav__menu-hamburger-wrap");function i(e){e.classList.remove("dis-block")}e.addEventListener("click",function(){t.classList.contains("dis-block")?i(t):t.classList.add("dis-block")}),window.addEventListener("resize",function(){t.classList.contains("dis-block")&&i(t)}),window.addEventListener("scroll",function(){50<window.pageYOffset&&t.clientWidth<=240?r.classList.add("pos-fixed"):r.classList.remove("pos-fixed")}),n.forEach(function(e){e.addEventListener("click",function(){i(t)})})}(),document.querySelector(".to-top").addEventListener("click",function(e){e.preventDefault();var t=window.pageYOffset,n=t/100,r=setInterval(function(){t-=n,window.scrollTo(0,t),t<20&&clearInterval(r)},5)}),function(){var e=document.querySelector(".main-content__news-slider-wrap"),t=Array.prototype.slice.call(e.querySelectorAll(".main-content__news-item"));t.forEach(function(c){var e=c.querySelector(".main-content__news-item-text"),t=e.innerText;if(200<t.length){var l=e.innerHTML,n=t.substr(0,200),r=n.lastIndexOf(" "),i=n.substr(0,r);e.innerText=i;var o=c.querySelector(".main-content__news-item-read-more"),a=document.querySelector(".main-content__news-preview-item"),s=a.querySelector(".main-content__news-preview-item-img"),d=a.querySelector(".main-content__news-preview-item-title h3"),u=a.querySelector(".main-content__news-preview-item-title"),m=a.querySelector(".main-content__news-preview-item-text"),y=a.querySelector("time"),v=document.querySelector(".main-content__news-preview-close"),_=document.querySelector(".main-content__news-preview-overlay");o.classList.remove("hidden"),o.addEventListener("click",function(){_.classList.remove("hidden");var e=c.querySelector(".main-content__news-item-img").getAttribute("src"),t=c.querySelector(".main-content__news-item-title h3").innerText,n=c.querySelector(".main-content__news-item-title").getAttribute("href"),r=c.querySelector("time").getAttribute("datetime"),i=c.querySelector("time").innerText;s.setAttribute("src",e),d.innerText=t,u.setAttribute("href",n),m.innerHTML=l,y.setAttribute("datetime",r),y.innerText=i,v.addEventListener("click",function e(){_.classList.add("hidden"),v.removeEventListener("click",e)})})}})}(),function(){var e=document.querySelector(".main-content__news"),t=e.querySelector(".main-content__news-control--left"),n=e.querySelector(".main-content__news-control--right"),r=(e.querySelector(".main-content__news-list-wrap"),e.querySelector(".main-content__news-list")),i=Array.prototype.slice.call(e.querySelectorAll(".main-content__news-item"));r.style.transitionDuration="800ms",window.addEventListener("resize",function(){r.style.transform="translateX(0)"}),n.addEventListener("click",function(){var e=i[0].clientWidth,t=i.length*e-e,n=takeOnlyNumber(r.style.transform);r.style.transform=n<t?"translateX(-"+(n+e)+"px)":"translateX(-0px)"}),t.addEventListener("click",function(){var e=i[0].clientWidth,t=i.length*e-e,n=takeOnlyNumber(r.style.transform);r.style.transform=0===n?"translateX(-"+t+"px)":"translateX(-"+(n-e)+"px)"})}(),function(){var e=document.querySelector(".main-content__gallery"),c=Array.prototype.slice.call(e.querySelectorAll(".main-content__gallery-slider-item")),l=e.querySelector(".main-content__gallery-preview-overlay"),o=e.querySelector(".main-content__gallery-preview img"),a=e.querySelector(".main-content__gallery-preview-close");c.forEach(function(i){i.addEventListener("click",function(){l.classList.remove("hidden");var e=i.children[0].getAttribute("src"),t=e.split("."),n=t[0]+"-big."+t[1];o.setAttribute("src",e);var r=new Image;r.src=n,r.onload=function(){o.setAttribute("src",n)},a.addEventListener("click",function e(){l.classList.add("hidden"),o.removeAttribute("src"),a.removeEventListener("click",e)})})});var t=e.querySelector(".main-content__gallery-slider-control--left"),n=e.querySelector(".main-content__gallery-slider-control--right"),s=e.querySelector(".main-content__gallery-slider-list-wrap"),d=e.querySelector(".main-content__gallery-slider-list");d.style.transitionDuration="800ms",window.addEventListener("resize",function(){d.style.transform="translateX(0)"}),n.addEventListener("click",function(){var e=s.clientWidth,t=c[0].clientWidth,n=e/Math.round(e/t),r=c.length*n-e,i=takeOnlyNumber(d.style.transform);d.style.transform=i<r?"translateX(-"+(i+n)+"px)":"translateX(-0px)"}),t.addEventListener("click",function(){var e=s.clientWidth,t=c[0].clientWidth,n=e/Math.round(e/t),r=c.length*n-e,i=takeOnlyNumber(d.style.transform);d.style.transform=0===i?"translateX(-"+r+"px)":"translateX(-"+(i-n)+"px)"})}(),window.addEventListener("load",function(){if(!sessionStorage.getItem("delivery")){var e=document.getElementById("delivery");e.classList.remove("visually-hidden");var t=document.getElementById("delivery-close"),n=function(){e.classList.add("visually-hidden"),sessionStorage.setItem("delivery","setted"),t.removeEventListener("click",n)};t.addEventListener("click",n)}});
