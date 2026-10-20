(function(){
var d=document,h=d.documentElement,intro=d.getElementById('intro');
function done(){if(!intro)return;h.classList.remove('intro-on');h.classList.add('intro-done');try{sessionStorage.setItem(intro.dataset.key,'1')}catch(e){}setTimeout(function(){intro&&intro.remove();intro=null},700)}
if(intro){if(h.classList.contains('intro-on')){var t=setTimeout(done,+intro.dataset.ms||2100);['click','keydown','touchstart'].forEach(function(ev){window.addEventListener(ev,function(){clearTimeout(t);done()},{once:true})})}else intro.remove()}
var hd=d.querySelector('.site-head');function sc(){hd.classList.toggle('shrunk',scrollY>40)}addEventListener('scroll',sc,{passive:true});sc();
var b=d.querySelector('.menu-btn'),n=d.getElementById('mnav');b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);n.classList.toggle('open',!o);d.body.classList.toggle('locked',!o)});
n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){b.click()})});
if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});d.querySelectorAll('.rv').forEach(function(el){io.observe(el)})}else d.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')});
})();
