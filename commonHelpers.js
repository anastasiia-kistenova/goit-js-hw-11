import{i as c}from"./assets/vendor-4d6948b9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const u="42176661-60cd7e02e4c469a287416d2c6",m=document.querySelector(".photo-container-js");function f(s){s.forEach(t=>{const a=`
      <div class="image-card">
        <img src="${t.webformatURL}" alt="${t.tags}">
        <div class="image-details">
          <p class="detail">Likes ${t.likes}</p>
          <p class="detail">Views ${t.views}</p>
          <p class="detail">Comments ${t.comments}</p>
          <p class="detail">Downloads ${t.downloads}</p>
        </div>
      </div>
    `;m.insertAdjacentHTML("beforeend",a)})}function p(s){const t="photo",a="horizontal",o=`https://pixabay.com/api/?${new URLSearchParams({key:u,q:s,image_type:t,orientation:a,safesearch:!0})}`;fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{const l=document.getElementById("gallery");if(l.innerHTML="",parseInt(r.totalHits)>0){const d=r.hits.map(n=>({webformatURL:n.webformatURL,tags:n.tags,likes:n.likes,views:n.views,comments:n.comments,downloads:n.downloads}));f(d)}else c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}).catch(r=>{console.error("Error during fetch:",r.message)})}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".js-search-form").addEventListener("submit",function(s){s.preventDefault();const t=document.querySelector(".input").value;t.trim()!==""?p(t):c.error({message:"Please enter a valid search query.",position:"topRight"}),s.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
