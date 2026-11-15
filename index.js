import{a as w,S as v,i as n}from"./assets/vendor-CCs7xRmH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const S="58634550-4af4a99041819fe6024758e1d";async function d(o,t){return(await w.get("https://pixabay.com/api/",{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".load-more"),P=new v(".gallery a",{captionsData:"alt",captionDelay:250});function m(o){const t=o.map(r=>`
<li class="gallery-item">
<a href="${r.largeImageURL}">
<img
  src="${r.webformatURL}"
  alt="${r.tags}"
/>
</a>

<div class="info">
<p><b>Likes</b>${r.likes}</p>
<p><b>Views</b>${r.views}</p>
<p><b>Comments</b>${r.comments}</p>
<p><b>Downloads</b>${r.downloads}</p>
</div>
</li>
`).join("");u.insertAdjacentHTML("beforeend",t),P.refresh()}function q(){u.innerHTML=""}function y(){f.classList.remove("is-hidden")}function g(){f.classList.add("is-hidden")}function M(){h.classList.remove("is-hidden")}function p(){h.classList.add("is-hidden")}const L=document.querySelector(".form"),$=document.querySelector(".load-more");let c="",a=1;const b=15;L.addEventListener("submit",B);$.addEventListener("click",E);async function B(o){if(o.preventDefault(),c=o.currentTarget.elements["search-text"].value.trim(),!c){n.warning({message:"Please enter a search query!"});return}a=1,q(),p(),y();try{const t=await d(c,a);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(t.hits);const r=Math.ceil(t.totalHits/b);a<r?M():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong!"})}finally{g()}L.reset()}async function E(){a+=1,y();try{const o=await d(c,a);m(o.hits);const t=Math.ceil(o.totalHits/b);a>=t&&(p(),n.info({message:"We're sorry, but you've reached the end of search results."}));const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong!"})}finally{g()}}
//# sourceMappingURL=index.js.map
