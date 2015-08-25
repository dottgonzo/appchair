

import vue from 'vue';


export let CP=vue.component('param-string', {
    props: ['string'], // simple syntax
    compiled: function () {
      console.log(this.string)    // -> 100
    },
    template: '{{string}}'
  });
