import vue from 'vue';





export let CBody=vue.component('template-body', {
    props: ['page'], // simple syntax
    compiled: function () {
      console.log(this.page)    // -> 100
    },
    template: 'body'
  });


export let CNavbar=vue.component('template-navbar', {
    props: ['page'], // simple syntax
    compiled: function () {
      console.log(this.page)    // -> 100
    },
    template: '<nav>\
    <div class="nav-wrapper">\
      <a href="#" data-activates="slide-out" class="brand-logo"><i style="float:left" class="mdi-navigation-menu"></i>{{page}}</a>\
      <ul id="nav-mobile" class="right hide-on-med-and-down">\
        <li><a href="sass.html">Sass</a></li>\
        <li><a href="badges.html">Components</a></li>\
        <li><a href="collapsible.html">JavaScript</a></li>\
      </ul>\
    </div>\
  </nav>'
  });

  export let CSidebar=vue.component('template-sidebar', {
      props: ['page'], // simple syntax
      compiled: function () {
        console.log(this.page)    // -> 100
      },
      template: '{{page}}<br><ul id="slide-out" class="side-nav">\
    <li><a href="#!">First Sidebar Link</a></li>\
    <li><a href="#!">Second Sidebar Link</a></li>\
  </ul>'
    });



export let CLayout=vue.component('template-layout', {
    props: ['page'], // simple syntax
    compiled: function () {
      console.log(this.page)    // -> 100
    },
    template: '<template-navbar page="{{page}}"></template-navbar><template-sidebar page="{{page}}"></template-sidebar><template-body page="{{page}}"></template-body><template-footer page="{{page}}" /></template-footer>',
    attached: function(){

      $(".brand-logo").sideNav();
compilepage(this.page)
    }
  });



  export let CFooter=vue.component('template-footer', {
      props: ['page'], // simple syntax
      compiled: function () {
        console.log(this.page)    // -> 100
      },
      template: 'footer'
    });



  function compilepage(page){
console.log(page);

    local_public_DB.allDocs({include_docs:true}).then(function(doc){

console.log(doc);

    //  demo.title=doc.title;

    })



  }
