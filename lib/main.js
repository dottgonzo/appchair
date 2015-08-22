import $ from 'jquery';
import materialize from 'materialize';

import moment from 'moment';

import PouchDB from 'pouchdb';
import relationalPouch from 'relational-pouch'
PouchDB.plugin(relationalPouch);


const local_public_DB=new PouchDB('local_public');
const local_private_DB=new PouchDB('local_private');

const username = 'admin';
const passw = 'admin';
const remote_private_dbname = 'privatedbtest'; // to be set

const remote_port = '5984';
const remote_host = 'localhost';
const remote_protocol = 'http';
const remote_public_dbname = 'publicdbtest';


const remote_public_DB = remote_protocol+'://'+username+':'+passw+'@'+remote_host+':'+remote_port+'/'+remote_public_dbname;
const remote_private_DB = remote_protocol+'://'+username+':'+passw+'@'+remote_host+':'+remote_port+'/'+remote_private_dbname;



local_public_DB.replicate.from(remote_public_DB, {
  live: true,
  retry: true
}).on('change', function (info) {
  compilepage();
}).on('paused', function () {
  // replication paused (e.g. user went offline)
}).on('active', function () {
  // replicate resumed (e.g. user went back online)
}).on('denied', function (info) {
  // a document failed to replicate, e.g. due to permissions
}).on('complete', function (info) {
compilepage();
}).on('error', function (err) {
  // handle error
});



local_private_DB.sync(remote_private_DB, {
  live: true,
  retry: true
}).on('change', function (info) {
  compilepage();
}).on('paused', function () {
  // replication paused (e.g. user went offline)
}).on('active', function () {
  // replicate resumed (e.g. user went back online)
}).on('denied', function (info) {
  // a document failed to replicate, e.g. due to permissions
}).on('complete', function (info) {
  // handle complete
}).on('error', function (err) {
  // handle error
});



window.PouchDB = PouchDB; //debug only
window.local_public_DB = local_public_DB; //debug only
window.local_private_DB = local_private_DB; //debug only

import vue from 'vue';
import VueRouter from 'vue-router';
vue.use(VueRouter);


window.demo = demo; //debug only


// Define some components
var Foo = vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = vue.extend({
    template: '<p>This is bar!</p>'
})

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = vue.extend({})

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');


var demo = new vue({
  el: '#demo',
  data: {
    title: 'todos'
  }
})


  compilepage();

function compilepage(){

  local_public_DB.get('test',{include_docs:true}).then(function(doc){
console.log(doc);
    demo.title=doc.title;

  })



}
