const iconclick = document.querySelector('.fas')
const navlinks = document.querySelector('.nav-links')
const showsec = document.querySelector('#showcase')
const pricing = document.querySelector('#pricing')
const main = document.querySelector('.main')
const togglebtn = document.querySelector('.togglebtn')




togglebtn.addEventListener('click',() => {
    navlinks.classList.toggle('visible')
})




// event delegation//

document.querySelector('.nav-links').addEventListener('click',function(e){
    e.preventDefault()
    console.log(e)
    console.log(e.target)

    if(e.target.classList.contains('nav__link')){
        const sectionid = e.target.getAttribute('href')
        console.log(sectionid)
        document.querySelector(sectionid).scrollIntoView({behavior: 'smooth'})
    }
})

const navanime = (e,opacity) => {
    if(e.target.classList.contains('nav__link')){
        const clicked = e.target
        const place = clicked.closest('.header').querySelectorAll('.nav__link')
        const link = clicked.closest('.header').querySelector('.logo')
        const loged = clicked.closest('.header').querySelector('.logindiv')
    
        place.forEach(ele => {
            if(ele !== clicked){
                ele.style.opacity = opacity
            }
            link.style.opacity = opacity
            loged.style.opacity = opacity
        })
    }
}

const header = document.querySelector('.header')
header.addEventListener('mouseover',function(e){
navanime(e,0.5)
})

header.addEventListener('mouseout',function(e){
navanime(e,1)
    
})

// document.querySelectorAll('.nav__link').forEach((element) =>{
//     element.addEventListener('click',function(e){
//         e.preventDefault()
//         console.log('i am clicked')
//         const sectionid = this.getAttribute('href')
//         console.log(sectionid)
//         document.querySelector(sectionid).scrollIntoView({behavior: 'smooth'})
//     })
// })

// normal way 

// const navlink2 = document.querySelector('.nav-link2')
// const navlink3 = document.querySelector('.nav-link3')
// const navlink4 = document.querySelector('.nav-link4')
// const navlink5 = document.querySelector('.nav-link5')
// const blog = document.querySelector('#blog')
// const fly = document.querySelector('#fly')



// const scrollit = (sec) => {
// sec.scrollIntoView({behavior: 'smooth'})
// } 

// navlink2.addEventListener('click',function(e){
//     e.preventDefault()
//     scrollit(showsec)
// })

// navlink3.addEventListener('click',(e) => {
//     e.preventDefault()
//     scrollit(pricing)

// })

// navlink4.addEventListener('click',(e) => {
//     e.preventDefault()
//     scrollit(blog)

// })

// navlink5.addEventListener('click',(e) => {
//     e.preventDefault()
//     scrollit(fly)

// })
  

// random color generator 

const randomint = (min,max) => Math.floor(Math.random() * (max-min + 1) + min)
const randomColor = () => {
   return `rgba(${randomint(0,255)},${randomint(0,255)},${randomint(0,255)})`
}

console.log(randomColor(0,255))

// document.querySelector('.nav__link').addEventListener('click',function(e){
//     console.log('i am clicked')
//     this.style.backgroundColor = randomColor()

// })

// document.querySelector('.nav-links').addEventListener('click',function(e){
//     console.log('i am clicked')
//     this.style.backgroundColor = randomColor()

// })

// document.querySelector('.header').addEventListener('click',function(e){
//     console.log('i am clicked')
//     this.style.backgroundColor = randomColor()

// })


//intersection observer api

// const obscallback = (entries,obs) => {
//    entries.forEach(entry => {
//        console.log(entry)
//    })
// }

// const obsoptions = {
//     root: null,
//     threshold: [0,0.3]
// }

// const obs = new IntersectionObserver(obscallback,obsoptions)
// obs.observe(pricing)
// const obsfunc = (entries) => {
//   const newent = entries[0];
//   console.log(newent)
//   if(!newent.isIntersecting)header.classList.add('sticky')
//   else header.classList.remove('sticky')
// }

// const obsopt = {
//     root:null,
//     threshold: 0
// }
// const mainobserver = new IntersectionObserver(obsfunc,obsopt)
// mainobserver.observe(main)

const sections = document.querySelectorAll('.section__s')

const secobs = (entries,observer) =>{
    const entry = entries[0]
    console.log(entry)

    if(!entry.isIntersecting) return
    entry.target.classList.remove('section-hidden')
    observer.unobserve(entry.target)
}
const secobsopt ={
    root:null,
    threshold:0.3
}
const sectionObserve = new IntersectionObserver(secobs,secobsopt)

sections.forEach((sections) => {
    sectionObserve.observe(sections)
    sections.classList.add('section-hidden')
})