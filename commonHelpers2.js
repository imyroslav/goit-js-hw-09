import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),m=()=>{const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))},l=()=>{const t=localStorage.getItem("feedback-form-state");if(t){const{email:a,message:s}=JSON.parse(t);e.elements.email.value=a,e.elements.message.value=s}};e.addEventListener("input",m);window.addEventListener("load",l);e.addEventListener("submit",t=>{t.preventDefault(),localStorage.removeItem("feedback-form-state"),(e.elements.email.value===""||e.elements.message.value==="")&&alert("Please enter your message"),console.log({email:e.elements.email.value.trim(),message:e.elements.message.value.trim()}),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
