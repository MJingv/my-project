<template>
  <div @click="resetComponent">
  <div class="app-head">
    <div class="app-head-inner">
    <router-link :to="{path:'/'}">
       <img id="index-logo" src="../assets/logo.png"
          height="70" width="70" >
    </router-link>
      <div class="head-nav">
        <ul class="nav-list">
          <li>{{username}}</li>
          <li v-if="username===''" @click="logClick">登录</li>
          <li  class="nav-pile">|</li>
          <li v-if="username===''" @click="regClick">注册</li>
          <li v-if="username!==''" @click="quit">退出</li>
          <li class="nav-pile">|</li>
          <li @click="aboutClick">关于</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="app-content">
    <router-view></router-view>
  </div>
  <div class="app-foot">
    <p>@2017 M_Jehol</p>
  </div>
<!-- dialot start -->
  <my-dialog 
  :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
    about
  </my-dialog>

  <my-dialog 
  :is-show="isShowLogDialog"
   @on-close="closeDialog('isShowLogDialog')">
    <log-form @has-log="onSuccessLog"></log-form>
  </my-dialog>

  <my-dialog 
  :is-show="isShowRegDialog"
   @on-close="closeDialog('isShowRegDialog')">
    <reg-form></reg-form>
  </my-dialog>

<!-- dialog end -->
</div>


</template>

<script>
import Dialog from './base/dialog.vue'
import LogForm from './logForm.vue'
import RegForm from './regForm.vue'

import {eventBus} from '../eventBus.js'
export default {
  components:{
    MyDialog:Dialog,LogForm,RegForm
    },

  data () {
    return {
      isShowAboutDialog:false,
      isShowLogDialog:false,
      isShowRegDialog:false,
      username:''
    }
  },
  methods:{
    aboutClick(){
    this.isShowAboutDialog=true
      
    },
    logClick(){
      this.isShowLogDialog=true
    },
    regClick(){
      this.isShowRegDialog=true
    },
    closeDialog(attr){
      this[attr]=false
    },
    onSuccessLog(data){
      this.username=data.username
      this.closeDialog('isShowLogDialog')

    },
    quit(){
      this.username=''
    },
    resetComponent(){
      eventBus.$emit('reset-component')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height: 1.5em;
    font-family:"微软雅黑","黑体";
    
}

:focus {
  outline: 1;
}

article,aside,canvas,details,figcaption,figure,
footer,header,hgroup,menu,nav,section,summary { 
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    border:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted #000;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

hr {
    display:block;
    height:1px;
    border:0;   
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

.app-head{
  background: #363636;
  color:#b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner{
  width: 1200px;
  margin-top:20px;
}
.head-nav{
  float: right;
}
.head-nav ul{
  overflow: hidden;
}
.head-nav li{
  cursor:pointer;
  float:left;
}
.nav-pile{
  padding:0 15px;
}
.nav-list{
  list-style:none;
}
.app-foot{
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear:both;
  margin-top:30px 
}
.container{
  width: 1200px;
  margin: 0 auto;
}
#index-logo{
  margin: 10px 100px;
}

</style>
