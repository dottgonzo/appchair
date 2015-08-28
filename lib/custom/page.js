function compilepage(){



  console.log(Page.route.path)





  local_public_DB.allDocs({include_docs:true}).then(function(doc){

console.log(doc.rows[0].doc.title);
//Page.title=doc.rows[0].doc.title;
  //  demo.title=doc.title;

  })



}
