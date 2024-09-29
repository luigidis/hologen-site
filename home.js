import './assets/css/home.css'
import renderSito from './assets/imgs/render_sito.jpg';


document.querySelector('#app').innerHTML = `
<div class="container-jumbotron">
    <h1 class=title>HoloGen</h1>
    <h2 class=subtitle>Coming Soon</h2>
    <img src="${renderSito}" alt="Jumbotron Image" class="jumbotron-img">
    <div class="progress-bar">
        <div class="progress"></div>
    </div>
</div>
`;