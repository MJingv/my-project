<template>
  <div>
    <div class="dialog-wrap" >
      <div class="dialog-cover"
       v-if="isShow" @click="closeMyself"></div>
    <transition name="drop">
      <div class="dialog-content" v-if="isShow">
        <p class="dialog-close" @click="closeMyself">X</p>
        <slot>empty</slot>
      </div>
    </transition>

    </div>
    
  </div>
</template>

<script>
export default {
props:{
  isShow:{
    type:Boolean,
    default:false
  }
},
methods:{
  closeMyself(){
    this.$emit('on-close')
  }
}
}
</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}

.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: white;
  opacity: .6;
  filter: blur(25px);
  position: fixed;
  z-index: 5;
  top: 15%;
  left: 0;
  width: 100%;
  height: 50%;

}
.dialog-content {
  width: 400px;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: 
 linear-gradient(-45deg,transparent,white);

  border-radius: .5em;

  top: 20%;
  left: 60%;
  margin-left: -25%;
  z-index: 10;
  border: 0px solid #464068;
  padding: 2%;
  line-height: 1.6;
 
}
.dialog-content::before{
  content: "";
  position: absolute;

  bottom: 0;right: 0;
  width: 5em;height: 3em;
  border-radius: 20%;
  background: linear-gradient(to right bottom, #3DB577 45%,transparent 50%)no-repeat  ;
  transform: rotate(-15deg);
  transform-origin:bottom left; 
  box-shadow: -.8em -.8em 2em  rgba(0, 0, 0, .2);


}

.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}

</style>
