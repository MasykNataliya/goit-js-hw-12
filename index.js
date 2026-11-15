import{a as v,S,i as n}from"./assets/vendor-CCs7xRmH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const P="58634550-4af4a99041819fe6024758e1d";async function u(o,r){return(await v.get("https://pixabay.com/api/",{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const r=o.map(e=>`
<li class="gallery-item">
  <a href="${e.largeImageURL}">
    <img
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>

  <div class="info">
    <p><b>Likes</b>${e.likes}</p>
    <p><b>Views</b>${e.views}</p>
    <p><b>Comments</b>${e.comments}</p>
    <p><b>Downloads</b>${e.downloads}</p>
  </div>
</li>
`).join("");f.insertAdjacentHTML("beforeend",r),q.refresh()}function M(){f.innerHTML=""}function g(){h.classList.remove("is-hidden")}function p(){h.classList.add("is-hidden")}function L(){m.classList.remove("is-hidden")}function l(){m.classList.add("is-hidden")}const b=document.querySelector(".form"),$=document.querySelector(".load-more");let c="",a=1;const w=15;b.addEventListener("submit",B);$.addEventListener("click",E);async function B(o){if(o.preventDefault(),c=o.currentTarget.elements["search-text"].value.trim(),!c){n.warning({message:"Please enter a search query!"});return}a=1,M(),l(),g();try{const r=await u(c,a);if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(r.hits);const e=Math.ceil(r.totalHits/w);a<e?L():(l(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Something went wrong!"})}finally{p()}b.reset()}async function E(){a+=1,l(),g();try{const o=await u(c,a);y(o.hits);const r=Math.ceil(o.totalHits/w);a>=r?(l(),n.info({message:"We're sorry, but you've reached the end of search results."})):L();const e=document.querySelector(".gallery-item");if(e){const i=e.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}catch{n.error({message:"Something went wrong!"})}finally{p()}}
//# sourceMappingURL=index.js.map
