import{S as f,i as m}from"./assets/vendor-f33cd494.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d=document.querySelector(".search-input"),y="https://pixabay.com/api/",c={key:"45266338-df116589a90e1c76fc0e83bf8",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:18};function h(){c.q=d.value.trim();const o=new URLSearchParams(c).toString();return fetch(`${y}?${o}`)}const g="/goit-js-hw-11/assets/error-e52ac067.svg",b=document.querySelector(".gallery"),S=new f(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250});function w(o){const t=o.hits.map(({largeImageURL:a,webformatURL:n,tags:e,likes:r,views:s,comments:u,downloads:p})=>`
          <li class="gallery-item">
            <a href="${a}">
              <img class="gallery-image" src="${n}" alt="${e}">
              <div class="img-desc">
                <span><b>Likes:</b> <br/>${r}</span>
                <span><b>Views:</b> <br/>${s}</span>
                <span><b>Comments:</b> <br/>${u}</span>
                <span><b>Downloads:</b> <br/>${p}</span>
              </div>
            </a>
          </li>
          `).join("");b.insertAdjacentHTML("afterbegin",t),S.refresh()}function L(o){m.show({position:"topRight",iconUrl:g,messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0,closeOnEscape:!0,message:o})}const l=document.querySelector(".form"),$=document.querySelector(".search-input"),q=document.querySelector(".gallery"),i=document.querySelector(".loader");l.addEventListener("submit",o=>{o.preventDefault(),$.value.trim()&&(q.innerHTML="",i.style.display="inline-block",h().then(t=>{if(!t.ok)throw new Error;return t.json()}).then(t=>{if(t.hits.length)w(t),i.style.display="none";else throw new Error}).catch(()=>{L("Sorry, there are no images matching your search query. Please try again!"),i.style.display="none"}).finally(()=>l.reset()))});
//# sourceMappingURL=commonHelpers.js.map
