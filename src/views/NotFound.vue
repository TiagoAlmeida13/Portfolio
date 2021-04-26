<template>
  <div class="teste">
      <img src="../assets/deadpool.png" alt="">
      <p>Infelizmente a página que você tentou 
        <br>acessar não existe ou esta com erro.
        <br><router-link to="/">Clique aqui para voltar.</router-link>
        
      </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .teste{
      z-index: 5;
      position: relative;
      color: white;
  }

  .teste img{
    width: 20%;
  }
</style>