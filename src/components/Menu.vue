<template>
  <div class="menu">
    <div class="dashboard">
      <div class="btn-estilo">
        <router-link to="/about"><button href="#" class="btn-menu">Sobre</button></router-link>        
      </div>
      <div class="btn-estilo">
        <router-link to="/"><button href="#" class="btn-menu">Portfólio</button></router-link>
        
      </div>>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style >
*::before,
*::after {
  box-sizing: border-box;
}

.dashboard {
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}


button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  width: 15rem;
  z-index: 4;
}
button.btn-menu {
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 0.75em;
} 

button.btn-menu::before{
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  border-radius: inherit;
  box-shadow: 0 0 0 2px transparent, 0 0.625em 0 0 transparent;
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), 
    box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.btn-menu:hover{
  background: transparent;
  transform: translate(0, 0.25em);
  
}
button.btn-menu:hover::before{
  box-shadow: 0 0 0 2px transparent, 0 0.5em 0 0 transparent;
  transform: translate3d(0, 0.5em, -1em);
}
button.btn-menu:active{
  background: transparent;
  transform: translate(0em, 0.75em);
}
button.btn-menu:active::before{
  box-shadow: 0 0 0 2px transparent, 0 0 transparent;
  transform: translate3d(0, 0, -1em);
}
</style>
