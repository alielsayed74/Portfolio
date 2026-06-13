// Change mood
var theme = document.getElementById('theme-toggle-button')
var main = document.querySelector('html')

theme.addEventListener('click', function(){
    main.classList.toggle('dark')
})

// nav activation
function changeNav(link){
  var links = document.querySelectorAll(".nav-item")
  for (var i = 0; i < links.length; i++){
    links[i].classList.remove("active")
  }
  link.classList.add("active")
}

// sidebar
var sideBar = document.querySelector('#settings-sidebar')
var Gear = document.querySelector('#settings-toggle')
var Close = document.querySelector('#close-settings')

if(Gear) {
    Gear.addEventListener('click', function(){
        if(window.innerWidth > 640){
        sideBar.style.right = '300px'
        Gear.style.right = '300px'
        }else{
        sideBar.style.right = '240px'
        Gear.style.right = '240px'
        }
      })
}
console.log(Close, sideBar);

if(Close) {
    Close.addEventListener('click', function(){
        sideBar.style.right = '0px'
        Gear.style.right = '0px'
    })
}

// change font
var btnAlex = document.querySelector('#font-alexandria')
var btnTajawal = document.querySelector('#font-tajawal')
var btnCairo = document.querySelector('#font-cairo')
var Body = document.body

function resetAll() {
    Body.classList.remove('font-alexandria', 'font-tajawal', 'font-cairo')
    btnAlex.classList.remove('active')
    btnTajawal.classList.remove('active')
    btnCairo.classList.remove('active')
    
}

btnAlex.addEventListener('click', function() {
    resetAll()
    Body.classList.add('font-alexandria')
    btnAlex.classList.add('active')
})

btnTajawal.addEventListener('click', function() {
    resetAll()
    Body.classList.add('font-tajawal')
    btnTajawal.classList.add('active')
})

btnCairo.addEventListener('click', function() {
    resetAll()
    Body.classList.add('font-cairo')
    btnCairo.classList.add('active')
})

// back to top
var scroll = document.getElementById("scroll-to-top")

window.onscroll = function() {
  if(window.scrollY > 650){

    scroll.classList.add("opacity-100", "visible")
    scroll.classList.remove("opacity-0", "invisible")
  }else{
    scroll.classList.add("opacity-0", "invisible")
    scroll.classList.remove("opacity-100", "visible")
  }
}

scroll.onclick = function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

// swap between tabs 
function changeActive(clickedButton){
  var myButtons = document.querySelectorAll(".portfolio-filter")
  
  for(var i = 0; i < myButtons.length; i++){
    myButtons[i].classList.remove("active")
    myButtons[i].classList.remove("bg-linear-to-r", "from-primary", "to-secondary", "text-white", "hover:shadow-lg", "hover:shadow-primary/50")
    myButtons[i].classList.add("bg-white", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300", "border", "border-slate-300", "dark:border-slate-700")
  }

  clickedButton.classList.add("active")
  clickedButton.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300", "border", "border-slate-300", "dark:border-slate-700")
  clickedButton.classList.add("bg-linear-to-r", "from-primary", "to-secondary", "text-white", "hover:shadow-lg", "hover:shadow-primary/50")

  var value = clickedButton.getAttribute("data-filter")
  var items = document.querySelectorAll(".portfolio-item")

  for (var j = 0; j < items.length; j++){
    var itemCategory = items[j].getAttribute("data-category")

    if (value == "all" || value == itemCategory) {
      items[j].classList.remove("hidden")
      items[j].classList.add("block")
    }else{
      items[j].classList.remove("block")
      items[j].classList.add("hidden")
    }
  }
}

//  dots slider
function changeTestimonial(index){
  var indicators = document.querySelectorAll(".carousel-indicator")
  var carousel = document.getElementById("testimonials-carousel")

  for (var i = 0; i < indicators.length; i++){
    indicators[i].classList.remove("bg-accent")
    indicators[i].classList.add("bg-slate-400", "dark:bg-slate-600")
  }
  indicators[index].classList.remove("bg-slate-400", "dark:bg-slate-600")
  indicators[index].classList.add("bg-accent")
  
  var step = window.innerWidth >= 1024? 33.33 : (window.innerWidth >= 640? 50 : 100)
  var movePercentage = index * step
  carousel.style.transform = "translateX(" + movePercentage + "%)"
}

//  slider 
var carousel = document.getElementById("testimonials-carousel")
var indicators = document.querySelectorAll(".carousel-indicator")
var totalItems = indicators.length
var currentIndex = 0

function updateSlider() {
  for (var i = 0; i < indicators.length; i++){
    indicators[i].classList.remove("bg-accent")
    indicators[i].classList.add("bg-slate-400", "dark:bg-slate-600")
  }
  indicators[currentIndex].classList.remove("bg-slate-400", "dark:bg-slate-600")
  indicators[currentIndex].classList.add("bg-accent")

  var step = window.innerWidth >= 1024? 33.33 : (window.innerWidth >= 640? 50 : 100)
  var movePercentage = currentIndex*step
  carousel.style.transform = "translateX(" + movePercentage + "%)"
}

function nextCard() {
  currentIndex = currentIndex+1
  if (currentIndex >= totalItems) {
    currentIndex=0
  }
  updateSlider()
}

function prevCard(){
  currentIndex = currentIndex-1
  if (currentIndex<0){
    currentIndex = totalItems-1
  }
  updateSlider()
}