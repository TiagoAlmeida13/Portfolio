<template>
  <div class="container">
      <h1>Alguns dos meus projetos:</h1>
      <div class="card">
        <a href="#">
            <div class="project project-1">
                <h2><i class="fab fa-js-square"></i> - Calculadora</h2>
                <p>Calculadora criada em Javascript com as operações de soma, <br> 
                    divisão, subtração e multiplicação.</p>
            </div>
        </a>
        <a href="#">
            <div class="project project-2">
                <h2><i class="fab fa-html5"></i> - Health Track</h2>
                <p>Trabalho acadêmico, feito em HTML5, Javascript, CSS, Jquery.</p>
            </div>
        </a>
        <a href="#">
            <div class="project project-3">
                <h2><i class="fab fa-css3-alt"></i> - Slider animado</h2>
                <p>Exemplo de slider com animação de transição de imagens usando apenas CSS3</p>
            </div>
        </a>
        <a href="#">
            <div class="project project-4">
                <h2><i class="fab fa-js-square"></i> - FlappyBird</h2>
                <p>Réplica do jogo Flappy Bird usando Javascript, HTML e CSS.</p>
            </div>
        </a>
        <a href="#">
            <div class="project project-5">
                <h2><i class="fab fa-vuejs"></i> - Site Portfólio</h2>
                <p>Projeto deste site de portfólio em Vue.JS, vue-router.</p>
            </div>
        </a>
        <div class="project project-6">
            <h2>Para ver outros projetos,</h2>
            <p>acesse o <a href="https://github.com/tiagoalmeida13"><span>meu github clicando aqui. <i class="fab fa-github"></i></span></a></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container{
    position: relative;
    z-index: 5;
}

.card{
    width: 80%;
    height: 25rem;
    margin-top: 15px;
    position: absolute;
    left: 10%;
    display: grid;
    grid-template-columns: 3fr 3fr;
    justify-content: space-around;
    align-items: center;
}

.project{
    border: 1px solid gray;
    border-radius: 10px;
    width: 500px;
    height: 120px;
    margin-bottom: 20px;
    color: white;
    line-height: 1.6rem;
    
}

.card a, .project a{
    text-decoration: none;
}

.project p{
    margin-top: 5px;
    font-weight: 300;
}

h1{
    color: white;
}

</style>