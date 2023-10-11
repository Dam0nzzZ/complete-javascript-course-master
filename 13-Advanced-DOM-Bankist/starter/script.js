'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');
const sectionSignUp = document.querySelector('.section--sign-up');
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav_links = document.querySelector('.nav__links');

///////////////////////////////////////
// Modal window
const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

/////////////////////////////
//add cookie message
/*
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
    'We use cookied for improve ...<button class="btn btn--close-cookie">Got it!</button>';

header.after(message);

document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
        message.remove();
    });
    */

///////////////////////////////
//navigation
//navigate
nav_links.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e);
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        console.log(document.querySelector(id));
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});
//hover effect
const nav = document.querySelector('.nav');
const handleHover = function (e, opacity) {
    // console.log(e.target, this);
    if (e.target.classList.contains('nav__link')) {
        //当鼠标移至link时才有透明度变化
        const link = e.target;
        const sibling = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        sibling.forEach(el => {
            if (el !== link) {
                el.style.opacity = this;
            }
        });
        logo.style.opacity = this;
    }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation
/*
const initalRecord = section1.getBoundingClientRect();
console.log(initalRecord);
window.addEventListener('scroll', function (e) {
    if (this.scrollY > initalRecord.top) {
        nav.classList.add('sticky');
        // message.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});
*/
const navHeight=nav.getBoundingClientRect().height;
const obsOption={
    threshold:0,
    root:null,
    rootMargin:`-${navHeight}px`
};
const obsCallBack=function(entires){//entries为每一个threshold的监听情况
    const entry=entires[0];
    if(entry.isIntersecting) nav.classList.remove('sticky');
    else if(!entry.isIntersecting) nav.classList.add('sticky')
}

const headerObserver=new IntersectionObserver(obsCallBack,obsOption);
headerObserver.observe(header);

////////////////////////////
//section reveal

const revealCallBack=function(entries,observer){
    const entry=entries[0];
    // const targetId=entry.target.id;
    console.log(entry);
    if(!entry.isIntersecting) return ;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}
const sectionObserver=new IntersectionObserver(revealCallBack,{threshold:0.1});
document.querySelectorAll('.section').forEach(section=>{
    section.classList.add('section--hidden');
    sectionObserver.observe(section);
})


/////////////////////////////
//botton learn more
/*
message.style.backgroundColor='#37383d';
message.style.width='120%';
console.log(message.style);
console.log(getComputedStyle(message).backgroundColor);

message.style.height=Number.parseFloat(getComputedStyle(message).height)+30+'px';
const logo=document.querySelector('.nav__logo');
console.log(logo,logo.className);

console.log(logo.dataset);
*/
btnScrollTo.addEventListener('click', function (e) {
    const s1record = section1.getBoundingClientRect();
    // s1ToTop=s1ToTop<s1record.top?s1record.top:s1ToTop;
    const s1ToTop = section1.offsetTop;
    const s1ToLeft = section1.offerLeft;
    console.log(s1ToTop);
    console.log('current X/Y', scrollX, scrollY);
    // window.scrollTo(s1ToLeft,s1ToTop);
    // window.scrollTo(s1record.left+scrollX,s1record.top+scrollY);
    // window.scrollTo({
    //   left:s1record.left+scrollX,
    //   top:s1record.top+scrollY,
    //   behavior:'smooth'
    // });
    section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////
//section 2 function
const operations = document.querySelector('.operations');
const allContent = document.querySelectorAll('.operations__content');
const allTab = document.querySelectorAll('.operations__tab');

operations.addEventListener('click', function (e) {
    e.preventDefault();
    const clicked = e.target.closest('.operations__tab');
    // console.log(clicked);
    if (!clicked) return;
    //remove active classes
    allContent.forEach(ele =>
        ele.classList.remove('operations__content--active')
    );
    allTab.forEach(ele => ele.classList.remove('operations__tab--active'));

    //activate tab and content
    clicked.classList.add('operations__tab--active');
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});
//////////////////////
