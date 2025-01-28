import{a as L,S as b,i as u}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p=(r,t)=>{const o=new URLSearchParams({q:r,key:"48271312-da0ca2419705a10e0da77e3e9",image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});return L.get(`https://pixabay.com/api/?${o}`,o)},f=r=>`
    <li class="gallery-card">
      <a class="gallery-link"  href="${r.largeImageURL}">
        <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" /> 
        <ul class="text-info">
          <li class="image-info">
            <h4>Likes</h4>
            <p>${r.likes}</p>
          </li>
          <li class="image-info">
            <h4>Views</h4>
            <p>${r.views}</p>
          </li>
          <li class="image-info">
            <h4>Comments</h4>
            <p>${r.comments}</p>
          </li>
          <li class="image-info">
            <h4>Downloads</h4>
            <p>${r.downloads}</p>
        </ul>
        </a>
    </li>
  `,h=document.querySelector(".searchForm"),m=document.querySelector(".gallery"),l=document.querySelector(".load-more-btn");let g="";const c=document.querySelector(".loader"),w=new b(".gallery a");let i=1,n="",v=15;l.classList.add("is-hidden");const S=async r=>{try{if(r.preventDefault(),n=h.elements[0].value.trim(),n===""){u.error({title:"",message:"Please enter your request",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"});return}i=1,l.classList.add("is-hidden"),c.classList.add("show-loader");const{data:t}=await p(n,i);if(t.total===0){u.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"}),m.innerHTML="",h.reset();return}t.totalHits>1&&(l.classList.remove("is-hidden"),l.addEventListener("click",y));const o=t.hits.map(a=>f(a)).join("");m.innerHTML=o,w.refresh()}catch(t){console.log(t)}finally{c.classList.remove("show-loader")}};h.addEventListener("submit",S);const y=async r=>{try{const t=document.querySelector(".endResults");c.classList.add("show-loader"),i+=1;const{data:o}=await p(n,i),a=o.hits.map(s=>f(s)).join("");m.insertAdjacentHTML("beforeend",a),c.classList.remove("show-loader"),g=document.querySelector(".gallery-card").getBoundingClientRect();let e=g.height;window.scrollBy({top:e*2,behavior:"smooth"}),i*v>=o.totalHits&&(l.classList.add("is-hidden"),u.show({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"}),l.removeEventListener("click",y))}catch(t){console.log(t)}};
//# sourceMappingURL=index.js.map
