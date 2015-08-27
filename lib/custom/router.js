
import vue from 'vue';
import VueRouter from 'vue-router';

import '../components/template';






vue.use(VueRouter);

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = vue.extend({

});

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter();

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/': {
        component: {
        template:'<template-layout query="{{$route.query}}" path="{{$route.path}}" params="{{$route.params}}"></template-layout>'
      }
    },
    '/bar': {
        component: {
        template:'<template-layout query="{{$route.query}}" path="{{$route.path}}" params="{{$route.params}}"></template-layout>'
      }
    },
    '/api/template/:page': {
        component: {
          template:'<div id="api">{"ciao":"bao"}</div>'
        }
    }
})

router.afterEach(function (transition) {
console.log('ddddd')

})
// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');





/*
var demo = new vue({
  el: '#demo',
  data: {
    title: 'todos'
  }
})
*/

window.Router=router;

window.App=App;

function seed(){
var arr=[];
  for(var i=0;i<10000;i++){

  arr.push({name:"ciao",date:"",note:""})


  }



  }
