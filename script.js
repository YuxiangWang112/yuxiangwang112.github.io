const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));

const button=document.querySelector('.lang');
let lang='en';
try{lang=localStorage.getItem('site-lang-v2')||'en'}catch(error){}

function setLang(value){
  lang=value;
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-zh][data-en]').forEach(el=>el.innerHTML=el.dataset[lang]);
  if(button)button.textContent=lang==='zh'?'EN':'中';
  try{localStorage.setItem('site-lang-v2',lang)}catch(error){}
}

if(button)button.addEventListener('click',()=>setLang(lang==='zh'?'en':'zh'));
setLang(lang);
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const revealPage=()=>document.documentElement.classList.remove('page-loading');
if(document.fonts&&document.fonts.ready){
  document.fonts.ready.then(revealPage,revealPage);
}else{
  revealPage();
}
