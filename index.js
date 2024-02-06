
//  ============== show menu 

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose =  document.getElementById('nav-close')
    
    // ============menu show 
    
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

// ===================hide menu
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))


//  ============change background headder  ======= 

const scrollHeader = () =>{
    const header = document.getElementById('header')


    this. scrollY >=  50 ? header.classList.remove('bg-header')
                     : header.classList.add('bg-header')
}

window.addEventListener('scroll',scrollHeader)

//==========   show scroll up ===   


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ?scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')

}


window.addEventListener('scroll',scrollUp)


/*=======  scroll section  active link =======*/


const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')

        }else{
            sectionsClass.classList.remove('active-link')
        }
              
            
    })
}

window.addEventListener('scroll',scrollActive)







