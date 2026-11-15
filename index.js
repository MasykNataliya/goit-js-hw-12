import{a as d,S as f,i}from"./assets/vendor-CJlb0A6o.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="58634550-4af4a99041819fe6024758e1d";function m(n){return d.get("https://pixabay.com/api/",{params:{key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const o=n.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${e.likes}</p>
            <p><b>Views</b> ${e.views}</p>
            <p><b>Comments</b> ${e.comments}</p>
            <p><b>Downloads</b> ${e.downloads}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function g(){c.innerHTML=""}function b(){l.classList.remove("is-hidden")}function L(){l.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(n){n.preventDefault();const o=n.currentTarget.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search query!",position:"topRight"});return}g(),b(),m(o).then(e=>{if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e.hits)}).catch(e=>{i.error({message:"Something went wrong. Try again later.",position:"topRight"}),console.log(e)}).finally(()=>{L()}),u.reset()}
//# sourceMappingURL=index.js.map
