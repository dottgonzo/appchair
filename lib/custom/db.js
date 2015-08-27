
import './page'
  import PouchDB from 'pouchdb';
  import relationalPouch from 'relational-pouch'
  PouchDB.plugin(relationalPouch);


  const local_public_DB=new PouchDB('local_public');
  const local_private_DB=new PouchDB('local_private');

  const username = 'admin';
  const passw = 'test';
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
