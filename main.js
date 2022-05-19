// show sidebar
const  navMenu = document.getElementById('navbar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close')


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
	navToggle.addEventListener("click", () =>{
		navMenu.classList.add('show-navbar')
	})
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
	navClose.addEventListener("click", () =>{
		navMenu.classList.remove('show-navbar')
	})
}

var typed = new Typed(".typing",{
    strings:["","Web Designer", "web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// Mixitup filter portfolio
let mixerPortfolio = mixitup('.work_container', {
	selectors: {
		target: '.work_card'
	},
	animation:{
		duration:300
	}
});
// link Active
const linkWork = document.querySelectorAll('.work_item')

function activeWork() {
	linkWork.forEach(L=> L.classList.remove('active_work'))
	this.classList.add('active_work')

}
linkWork.forEach(L=> L.addEventListener("click", activeWork))



/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
	if(e.target.classList.contains("work_button")) {
		togglePortfolioPopup();
		portfolioItemDetails(e.target.parentElement);
	}
})
function togglePortfolioPopup() {
	document.querySelector(".portfolio_popup").classList.toggle("open");

}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
	document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
	document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
	document.querySelector(".portfolio_popup-subtitle-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}

const modalViews = document.querySelectorAll('.services_modal'),
      modelBtns = document.querySelectorAll('.services_button'),
	  modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick) {
	modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
	modelBtn.addEventListener('click', () => {
		modal(i)
	})
})

modalCloses.forEach((modalClose) => {
   modalClose.addEventListener("click", () =>{
	  modalViews.forEach((modalView) =>{
		  modalView.classList.remove('active-modal')
	  }) 
   })
})


const inputs = document.querySelectorAll(".input");

function focusFunc() {
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function blurFunc() {
	let parent = this.parentNode;
	if(this.value == "") {
		parent.classList.remove("focus")
	}
}

inputs.forEach((input) => {
 	input.addEventListener("focus", focusFunc);
	 input.addEventListener("blur", blurFunc);
})



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

//add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
	//get current scroll position
	let scrollY = window.pageYOffset;
	//Now we loop through sections to get height, top and ID values for each
	  sections.forEach(current => {
		  const sectionHeight = current.offsetHeight;
		  const sectionTop = current.offsetTop - 50,
		  sectionId = current.getAttribute("id");
	   //    --if our current scroll position enters the space where current section on screen is,add.active close to
	   // to know which link needs on active class, we use sectionId variable we are getting while leaping through
	   // sections as an selector3
	   if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
	   {
		   document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
	   }
	   else
	   {
		   document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
	   }
	  })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

	  tabs.forEach(tab =>{
		  tab.addEventListener("click", () => {
			const target = document.querySelector(tab.dataset.target)
			
			tabContent.forEach(tabContent => {
				tabContent.classList.remove('skills_active')
			})
			target.classList.add('skills_active')


			tabs.forEach(tab => {
				tab.classList.remove('skills_active')
			})
			tab.classList.add('skills_active')
		  })
	  })