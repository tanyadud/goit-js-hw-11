import{S as d,i as m}from"./assets/vendor-f33cd494.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".search-input"),g="https://pixabay.com/api/",i={key:"45266338-df116589a90e1c76fc0e83bf8",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:18};function b(){f.innerHTML="",y.style.display="inline-block",i.q=h.value.trim();const o=new URLSearchParams(i).toString();return fetch(`${g}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const S="/goit-js-hw-11/assets/error-e52ac067.svg",$=document.querySelector(".gallery"),c=document.querySelector(".loader"),q=new d(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250});function w(o){if(o.hits.length===0){L("Sorry, there are no images matching your search query. Please try again!"),c.style.display="none";return}const r=o.hits.map(({largeImageURL:a,webformatURL:n,tags:e,likes:t,views:s,comments:u,downloads:p})=>`
          <li class="gallery-item">
            <a href="${a}">
              <img class="gallery-image" src="${n}" alt="${e}">
              <div class="img-desc">
                <span><b>Likes:</b> <br/>${t}</span>
                <span><b>Views:</b> <br/>${s}</span>
                <span><b>Comments:</b> <br/>${u}</span>
                <span><b>Downloads:</b> <br/>${p}</span>
              </div>
            </a>
          </li>
          `).join("");$.insertAdjacentHTML("afterbegin",r),c.style.display="none",q.refresh()}function L(o){m.show({position:"topRight",iconUrl:S,messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0,closeOnEscape:!0,message:o})}const l=document.querySelector(".form"),v=document.querySelector(".search-input");l.addEventListener("submit",o=>{if(o.preventDefault(),v.value.trim())b().then(r=>w(r)).catch(r=>showErrorMsg(r.toString())).finally(()=>l.reset());else return});
//# sourceMappingURL=commonHelpers.js.map
