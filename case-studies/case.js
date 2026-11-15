document.documentElement.classList.remove('no-js');
var sp=document.getElementById('scrollProgress');
window.addEventListener('scroll',function(){var h=document.documentElement.scrollHeight-window.innerHeight;if(sp)sp.style.width=(h>0?window.scrollY/h*100:0)+'%';},{passive:true});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px -40px 0px'});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});}
else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('visible');});}
