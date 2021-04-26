<template>
  <div class="title-card">
      <img class="logo" src="../assets/title-portfolio.png" alt="">
  </div>
</template>

<script>
</script>

<style scoped>
.title-card img{
  z-index: 5;
}

.title-card img.logo{
    z-index: 10;
    position: absolute;
    height: 480px;
    left: 20%;
    background: transparent;
    -webkit-user-drag: none;
}
</style>