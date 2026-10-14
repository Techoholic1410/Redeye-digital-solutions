const b=document.querySelector('.burger'),u=document.querySelector('nav ul');
b&&b.addEventListener('click',()=>u.classList.toggle('open'));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const f=document.getElementById('enquiry');
f&&f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);
const body=`Name: ${d.get('name')}\nPhone: ${d.get('phone')}\nService: ${d.get('service')}\n\n${d.get('message')}`;
location.href=`mailto:hello@redeyedigital.in?subject=${encodeURIComponent('New enquiry from '+d.get('name'))}&body=${encodeURIComponent(body)}`});
