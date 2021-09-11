// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	$(".burger").click(function(){
		$(".burgeropen").removeClass("dnone");
		$(".burgeropen").addClass("dblock");
	});
	$(".close").click(function(){
		$(".burgeropen").removeClass("dblock");
		$(".burgeropen").addClass("dnone");
	});
	$(".burgerli").click(function(){
		$(".burgeropen").removeClass("dblock");
		$(".burgeropen").addClass("dnone");
	});
	
	$(".burgeropen__ul").click(function(){
		$(".burgeropen").removeClass("dblock");
		$(".burgeropen").addClass("dnone");
	});
	
	$('.portfolio__items').slick({
		infinite: false,
		arrows: true,
		dots: false,
		prevArrow: '<div class="ArrowPrev"></div>',
		nextArrow: '<div class="ArrowNext"></div>',
		appendArrows: $(".nav"),
		slidesToShow: 5.1,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1663,
			  settings: {
				slidesToShow: 4.1,
				slidesToScroll: 1,
			  }
			},
			{
				breakpoint: 1025,
				settings: {
				  slidesToShow: 3.1,
				  slidesToScroll: 1,
				}
			  },
			  {
				breakpoint: 652,
				settings: {
				  slidesToShow: 2.1,
				  slidesToScroll: 1,
				}
			  },
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	  });

	  if($(window).width() <=415){
		$('.tariffs__items').slick({
			infinite: false,
			arrows: false,
			dots: false,
			slidesToShow: 1.1,
			slidesToScroll: 1,
		  });
		}

	  let acc = document.querySelectorAll(".accordion");
	  let panels = document.querySelectorAll(".panel");
	  var i;
	  
	//   for (i = 0; i < acc.length; i++) {
	// 	  acc[i].addEventListener("click", function() {
	// 		  /* Toggle between adding and removing the "active" class,
	// 		  to highlight the button that controls the panel */
	// 		  this.classList.toggle("active");
	// 		  /* Toggle between hiding and showing the active panel */
	// 		  var panel = this.nextElementSibling;
	// 		  if (panel.style.display === "block") {
	// 			  panel.style.display = "none";
	// 		  } else {
	// 			  panel.style.display = "block";
	// 		  }
	// 	  });
	//   }

	for(let item of acc){
		item.addEventListener('click', (e)=>{
			let el = e.currentTarget,
				panel  = el.nextElementSibling
				if(!el.classList.contains('active')){
					removeClass(acc,'active')
					panels.forEach(i=>{
						i.style.display ='none'
					})
					el.classList.add('active')
					panel.style.display = 'block'
				}else{
					removeClass(acc,'active')
					panels.forEach(i=>{
						i.style.display ='none'
					})
					

				}
		})

	}

	function removeClass(item,cl){
		item.forEach(i=>{
			i.classList.remove(cl)
		})
	}
})
