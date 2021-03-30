<template>
  <div class="about-me">
      <div class="card">
        <p>Olá, sou o Tiago, nascido e criado em São Paulo, SP.
        Sou apaixonado por tecnologia e tudo que a envolva, 
        comecei a estudar Sistemas de informação pela Uninove em 2013/14, 
        porém, devido a alguns problemas pessoais tive que trancar a faculdade e 
        em 2019 tive a oportunidade de voltar a estudar, desta vez, análise e 
        desenvolvimento de sistemas na FIAP e conclui o curso em 2020.
        Venho aprimorando meus conhecimentos em HTML, CSS, Javascript e 
        Vue.JS como desenvolvedor front-end, buscando me aperfeiçoar e desenvolver 
        melhor os desafios propostos no dia a dia.
        </p>
        
        <img class="perfil" src="../assets/portfolio-image.png" alt="">
      </div>
      <div class="social-media">
        <a href="https://www.linkedin.com/in/tiago-machadoalmeida/"><img src="../assets/linkedin.png" alt=""></a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.card {
  z-index: 5;
  display: flex;
  position: absolute;
  left: 15%;
  margin-top: 50px;
  color: white;
  width: 70%;
  text-align: left;
}

.card p{
  font-weight: 300;
  line-height: 2rem;
}

.perfil{
  position: relative;
  width: 30%;
  border-radius: 50%;
}

.social-media{
  z-index: 5;
  position: absolute;
  bottom: 10%;
  left: 45%;
}
.social-media img{
  width: 5rem;
}

</style>