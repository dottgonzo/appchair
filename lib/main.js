import $ from 'jquery';
import materialize from 'materialize';

import moment from 'moment';

import PouchDB from 'pouchdb';
import relationalPouch from 'relational-pouch'
PouchDB.plugin(relationalPouch);

const local_public_DB=new PouchDB('local_public');
const local_private_DB=new PouchDB('local_private');

window.local_public_DB = local_public_DB; //debug only
window.local_private_DB = local_private_DB; //debug only

import vue from 'vue';
import VueRouter from 'vue-router';
vue.use(VueRouter);




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



var vm = new vue({ /* options */ });
