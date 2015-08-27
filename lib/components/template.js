import vue from 'vue';




export let CBody=vue.component('template-body', {
    props: ['page'], // simple syntax
    compiled: function () {
    },
    template: 'body'
  });


export let CNavbar=vue.component('template-navbar', {
    props: ['page'], // simple syntax
    compiled: function () {
      console.log(this.page)
    },
    template: '<nav>\
    <div class="nav-wrapper">\
      <a href="#" data-activates="slide-out" class="brand-logo"><i style="float:left" class="mdi-navigation-menu"></i>{{page.title}}</a>\
      <ul id="nav-mobile" class="right hide-on-med-and-down">\
        <li><a href="sass.html">Sass</a></li>\
        <li><a href="badges.html">Components</a></li>\
        <li><a href="collapsible.html">JavaScript</a></li>\
      </ul>\
    </div>\
  </nav>'
  });

  export let CSidebar=vue.component('template-sidebar', {
      props: ['page'],
      data:function () {
    return {
      title:this.page.title,
      listing: [
          {
            title: 'Listing title number one',
            description: 'Description 1'
          },
          {
            title: 'Listing title number two',
            description: 'Description 2'
          }
        ]
     }
   }, // simple syntax
      compiled: function () {
      },
      template: '<ul id="slide-out" class="side-nav">\
    <li><a href="#!">{{title}}</a></li>\
    <li><a href="#!">Second Sidebar Link</a></li>\
  </ul>'
    });



let Template=vue.component('template-app',{
  props: ['page'], // simple syntax

  template:'\
  <template-sidebar page="{{page}}"></template-sidebar>\
  <template-navbar page="{{page}}"></template-navbar>\
  <template-body route="{{page.route}}"></template-body>\
  <template-footer page="{{page}}" /></template-footer>',



})

export let CLayout=vue.component('template-layout', {
    props: ['path','query','params'], // simple syntax
    compiled: function () {

      this.name=this.path.replace('/','');

    },

    template: '<div id="layout"></div>',
    attached: function(){
      var Page= new vue({
        el: '#layout',
        data: {
          title:this.name,

          route:{path:this.path,query:this.query,params:this.params}
        },
        template: '<template-app page="{{$data}}"></template-app>',

      })
      window.Page=Page;

      console.log(this.route)    // -> 100
      $(".brand-logo").sideNav();
compilepage(this.page)
    }
  });


  export let CFooter=vue.component('template-footer', {
      props: ['page'], // simple syntax
      compiled: function () {
      },
      template: 'footer'
    });



  function compilepage(page){

    local_public_DB.allDocs({include_docs:true}).then(function(doc){

console.log(doc.rows[0].doc.title);
Page.title=doc.rows[0].doc.title;
    //  demo.title=doc.title;

    })



  }
