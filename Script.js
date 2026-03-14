/* ================================================
   Heritage Shapes — Main JavaScript
   Printing · Packaging · Branding
   heritageshapes.com
================================================ */

/* ── LOADER ── */
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('loader').classList.add('done');
    startHeroAnim();
    runCounters(document.querySelectorAll('.hero-l .cu'));
  },2000);
});

/* ── HERO ANIMATION ── */
function startHeroAnim(){
  // eyebrow line
  const line=document.getElementById('heroLine');
  const eyeSpan=document.getElementById('heroEyeSpan');
  line.style.width='24px'; line.style.marginRight='12px';
  eyeSpan.style.opacity='1'; eyeSpan.style.transform='none';
  // hero words
  setTimeout(()=>{
    document.querySelectorAll('.hero-word span').forEach((s,i)=>{
      s.style.transitionDelay=(0.6+i*0.12)+'s';
      s.style.transform='translateY(0)';
    });
  },100);
  // sub & btns
  setTimeout(()=>{
    document.getElementById('heroSub').style.opacity='1';
    document.getElementById('heroSub').style.transform='none';
  },1400);
  setTimeout(()=>{
    document.getElementById('heroBtns').style.opacity='1';
    document.getElementById('heroBtns').style.transform='none';
  },1600);
  setTimeout(()=>{
    document.getElementById('heroStats').style.opacity='1';
  },1800);
  // hero right arches
  ['ha1','ha2','ha3','ha4'].forEach((id,i)=>{
    setTimeout(()=>document.getElementById(id).classList.add('show'),500+i*160);
  });
  setTimeout(()=>{
    document.getElementById('heroBadge').classList.add('show');
    document.getElementById('heroRBrand').classList.add('show');
  },1500);
}

/* ── CURSOR ── */
const dot=document.getElementById('cdot'), ring=document.getElementById('cring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  dot.style.left=mx+'px'; dot.style.top=my+'px';
});
(function animR(){
  rx+=(mx-rx)*.1; ry+=(my-ry)*.1;
  ring.style.left=Math.round(rx)+'px'; ring.style.top=Math.round(ry)+'px';
  requestAnimationFrame(animR);
})();

/* ── SCROLL ── */
window.addEventListener('scroll',()=>{
  const s=window.scrollY, dh=document.body.scrollHeight-window.innerHeight;
  document.getElementById('spb').style.width=(s/dh*100)+'%';
  document.getElementById('nav').classList.toggle('scrolled',s>60);
  document.getElementById('btt').classList.toggle('show',s>500);
  revealCheck();
});

/* ── REVEAL ── */
function revealCheck(){
  document.querySelectorAll('[data-reveal]:not(.in)').forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight*0.86){
      el.classList.add('in');
      // trigger counters in this element
      el.querySelectorAll('.cu').forEach(c=>runCounter(c));
    }
  });
}
setTimeout(revealCheck,200);

/* ── COUNTERS ── */
function runCounters(els){els.forEach(runCounter);}
function runCounter(el){
  if(el.dataset.done) return;
  el.dataset.done=1;
  const target=+el.dataset.t;
  let cur=0; const step=target/55;
  const t=setInterval(()=>{
    cur=Math.min(cur+step,target);
    el.textContent=Math.round(cur);
    if(cur>=target)clearInterval(t);
  },18);
}

/* ── NAV ── */
function toggleMenu(){
  const m=document.getElementById('mobMenu');
  const h=document.getElementById('ham');
  m.classList.toggle('open'); h.classList.toggle('open');
}
function closeMenu(){
  document.getElementById('mobMenu').classList.remove('open');
  document.getElementById('ham').classList.remove('open');
}

/* ── FORM ── */
function submitForm(){
  document.getElementById('conForm').style.display='none';
  document.getElementById('fSuccess').classList.add('show');
}