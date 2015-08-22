import $ from 'jquery';
import moment from 'moment';

import PouchDB from 'pouchdb';
import relationalPouch from 'relational-pouch'
PouchDB.plugin(relationalPouch);

const local_public_DB=new PouchDB('local_public');
const local_private_DB=new PouchDB('local_private');

window.local_public_DB = local_public_DB; //debug only
window.local_private_DB = local_private_DB; //debug only
