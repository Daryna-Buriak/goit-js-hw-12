import{a as y,S as L,i as d}from"./assets/vendor-tnUJPedx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g=(t,s)=>{const r=new URLSearchParams({q:t,key:"48271312-da0ca2419705a10e0da77e3e9",image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15});return y.get(`https://pixabay.com/api/?${r}`,r)},p=t=>`
    <li class="gallery-card">
      <a class="gallery-link"  href="${t.largeImageURL}">
        <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" /> 
        <ul class="text-info">
          <li class="image-info">
            <h4>Likes</h4>
            <p>${t.likes}</p>
          </li>
          <li class="image-info">
            <h4>Views</h4>
            <p>${t.views}</p>
          </li>
          <li class="image-info">
            <h4>Comments</h4>
            <p>${t.comments}</p>
          </li>
          <li class="image-info">
            <h4>Downloads</h4>
            <p>${t.downloads}</p>
        </ul>
        </a>
    </li>
  `,u=document.querySelector(".searchForm"),h=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");let m="";const b=new L(".gallery a");let l=1,n="",w=15;i.classList.add("is-hidden");const v=async t=>{const s=document.querySelector(".loader");try{if(t.preventDefault(),n=u.elements[0].value.trim(),n===""){d.error({title:"",message:"Please enter your request",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"});return}l=1,i.classList.add("is-hidden"),s.classList.add("show-loader");const{data:r}=await g(n,l);if(r.total===0){d.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"}),h.innerHTML="",u.reset();return}r.totalHits>1&&(i.classList.remove("is-hidden"),i.addEventListener("click",f));const a=r.hits.map(e=>p(e)).join("");h.innerHTML=a,b.refresh()}catch(r){console.log(r)}finally{s.classList.remove("show-loader")}};u.addEventListener("submit",v);const f=async t=>{try{const s=document.querySelector(".endResults"),{data:r}=await g(n,l);l+=1;const a=r.hits.map(o=>p(o)).join("");h.insertAdjacentHTML("beforeend",a),m=document.querySelector(".gallery-card").getBoundingClientRect();let e=m.height;window.scrollBy({top:e*2,behavior:"smooth"}),l*w>=r.totalHits&&(i.classList.add("is-hidden"),d.show({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"}),i.removeEventListener("click",f))}catch(s){console.log(s)}};
//# sourceMappingURL=index.js.map
