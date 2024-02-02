import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const refs = {
  formEl: document.querySelector('.js-search-form'),
  heroEl: document.querySelector('.js-hero-container'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const name = e.target.elements.query.value;

  searchImage(name).then(data => {
    renderImage(data);
  });
});

function searchImage(picture) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com/api/';
  const PARAMS = `?hero=${superhero}`;
  const url = BASE_URL + PARAMS;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}


function imageTemplate(image) {
    return `<div class="random-card card"
<div class="image-container"> 
<img src="${image.lg}" alt="#" class="random-image"/>
</div>
<div class="image-body">
<h4 class="image-name">${image.name}</h4>
<p class="image-bio">
${likes}, ${views}, ${comments}, ${downloads}
</p>
</div>
</div>`;
}


