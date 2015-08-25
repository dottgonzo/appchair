

import vue from 'vue';


export let CNavbar=vue.component('template-navbar', {

  props: ['page'], // simple syntax

  template: '<nav>\
  <div class="nav-wrapper">\
  <a href="#" data-activates="slide-out" class="brand-logo">\
  <i style="float:left;margi-right:15px" class="mdi-navigation-menu"></i>{{page}}\
  </a>\
  <ul id="nav-mobile" class="right hide-on-med-and-down">\
  <li><a v-link="/">Home</a></li><li><a href="badges.html">Components</a></li>\
  <li><a href="collapsible.html">JavaScript</a></li>\
  </ul>\
  </div></nav>'

 });





 export let CSidebar=vue.component('template-sidebar', {

   props: ['page'], // simple syntax

   template: '<ul id="slide-out" class="side-nav">\
         <li><a href="#!">First Sidebar Link</a></li>\
         <li><a href="#!">Second Sidebar Link</a></li>\
       </ul>'

  });



  export let CLayout=vue.component('template-layout', {

    props: ['page'], // simple syntax

    template: '<template-sidebar page="{{page}}"></template-sidebar><template-navbar page="{{page}}"></template-navbar>',
    attached: function () {
  $(".brand-logo").sideNav();
  compilepage("{{page}}");
    }

   });


   function compilepage(page){

console.log(page)
     local_public_DB.allDocs({include_docs:true}).then(function(docs){
   console.log(docs);
   for (var i=0; i<docs.rows.lenght;i++){
   let doc=docs.rows[i];
   //      demo.title=doc.title;



   }
       })
   }
