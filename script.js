const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
addEventListener('load',()=>setTimeout(()=>$('#loader').classList.add('off'),900));
const words=['AI & FRONTEND DEVELOPER · CSE · 2027','REACT.JS · JAVASCRIPT · PYTHON','AI ENTHUSIAST'];let wi=0,ci=0,del=false;
(function t(){const w=words[wi];$('#type').textContent=w.slice(0,ci);if(!del&&ci++==w.length){del=true;return setTimeout(t,1600)}if(del&&--ci<0){del=false;ci=0;wi=(wi+1)%words.length}setTimeout(t,del?30:70)})();
const S=[['React.js','web','Component-driven UIs, hooks and state management for interactive apps.',85],['JavaScript','web','Modern ES6+, async code and DOM-driven interactivity.',88],['HTML & CSS','web','Semantic markup, responsive layouts and animations.',90],['Python','ai','Scripting and analysis for data science workflows.',80],['Machine Learning','ai','Applying ML frameworks to build intelligent features.',72],['Data Analytics','ai','Cleaning, exploring and visualising data for insight.',78],['Microsoft Excel','ai','Spreadsheet analysis, formulas and reporting.',80],['Node.js','back','Server-side JavaScript and REST endpoints.',70],['MySQL','back','Relational schemas and queries for app data.',72],['Google OAuth & Razorpay','back','Sign-in and payment integrations in a real project.',68]];
const lab={web:'web',ai:'ai & data',back:'backend & tools'};
$('#skg').innerHTML=S.map(s=>`<div class="card sk rv" data-c="${s[1]}"><small class="mono">${lab[s[1]]}</small><h3 style="margin-top:6px">${s[0]}</h3><p>${s[2]}</p><div class="bar2"><i data-w="${s[3]}"></i></div></div>`).join('');
$('#tabs').onclick=e=>{const b=e.target.closest('.tab');if(!b)return;$$('.tab').forEach(x=>x.classList.toggle('on',x==b));$$('.sk').forEach(c=>c.classList.toggle('hide',b.dataset.f!='all'&&c.dataset.c!=b.dataset.f))};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('.bar2 i').forEach(i=>i.style.width=i.dataset.w+'%');io.unobserve(e.target)}}),{threshold:.15});
$$('.rv').forEach(el=>io.observe(el));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,n=+el.dataset.n,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1500,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0);co.unobserve(el)}));
$$('[data-n]').forEach(el=>co.observe(el));
const secs=$$('section');
addEventListener('scroll',()=>{const h=document.documentElement;$('#bar').style.width=scrollY/(h.scrollHeight-innerHeight)*100+'%';let cur='';secs.forEach(s=>{if(scrollY>=s.offsetTop-160)cur=s.id});$$('.links a').forEach(a=>a.classList.toggle('act',a.getAttribute('href')=='#'+cur))},{passive:true});
addEventListener('pointermove',e=>{const g=$('#glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
const tl=$('#tilt');if(tl){tl.addEventListener('pointermove',e=>{const r=tl.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tl.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg)`});
tl.addEventListener('pointerleave',()=>tl.style.transform='');}
const heroArt=$('#heroArt');if(heroArt){heroArt.addEventListener('pointermove',e=>{const r=heroArt.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;const card=heroArt.querySelector('.portrait-card');card.style.transform=`perspective(1000px) rotateY(${x*16}deg) rotateX(${-y*16}deg) translateY(-10px)`;});heroArt.addEventListener('pointerleave',()=>{const card=heroArt.querySelector('.portrait-card');card.style.transform='';});}
$('#menu').onclick=()=>$('#links').classList.toggle('open');
$$('.links a').forEach(a=>a.onclick=()=>$('#links').classList.remove('open'));
$('#copy').onclick=async()=>{try{await navigator.clipboard.writeText($('#msg').textContent)}catch(e){}
 $('#toast').classList.add('on');setTimeout(()=>$('#toast').classList.remove('on'),2200);window.open('https://www.linkedin.com/in/rakeshsl','_blank','noopener')};
