System.config({
  baseURL: ".",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "blacklist": []
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "lib/main.js",
      "github:components/jquery@2.1.4.js",
      "github:Dogfalo/materialize@0.97.0.js",
      "github:moment/moment@2.10.6.js",
      "npm:pouchdb@4.0.0.js",
      "npm:vue@0.12.10.js",
      "npm:relational-pouch@1.3.2.js",
      "npm:vue-router@0.5.1.js",
      "github:components/jquery@2.1.4/jquery.js",
      "github:Dogfalo/materialize@0.97.0/dist/js/materialize.js",
      "github:moment/moment@2.10.6/moment.js",
      "npm:pouchdb@4.0.0/lib/index.js",
      "npm:vue@0.12.10/src/vue.js",
      "npm:vue-router@0.5.1/lib/index.js",
      "npm:relational-pouch@1.3.2/lib/index.js",
      "npm:pouchdb@4.0.0/lib/setup.js",
      "npm:pouchdb@4.0.0/lib/deps/ajax/prequest-browser.js",
      "npm:pouchdb@4.0.0/lib/utils.js",
      "npm:pouchdb@4.0.0/lib/deps/errors.js",
      "npm:pouchdb@4.0.0/lib/replicate/index.js",
      "npm:pouchdb@4.0.0/lib/version-browser.js",
      "npm:pouchdb@4.0.0/lib/sync.js",
      "npm:pouchdb@4.0.0/lib/adapters/http/index.js",
      "npm:pouchdb@4.0.0/lib/mapreduce/index.js",
      "npm:pouchdb@4.0.0/lib/adapters-browser.js",
      "npm:vue@0.12.10/src/util/index.js",
      "npm:vue@0.12.10/src/api/global.js",
      "npm:vue@0.12.10/src/directives/index.js",
      "npm:vue@0.12.10/src/element-directives/index.js",
      "npm:vue@0.12.10/src/filters/index.js",
      "npm:vue@0.12.10/src/instance/init.js",
      "npm:vue@0.12.10/src/instance/events.js",
      "npm:vue@0.12.10/src/instance/scope.js",
      "npm:vue@0.12.10/src/instance/compile.js",
      "npm:vue@0.12.10/src/instance/misc.js",
      "npm:vue@0.12.10/src/api/data.js",
      "npm:vue@0.12.10/src/api/dom.js",
      "npm:vue@0.12.10/src/api/events.js",
      "npm:vue@0.12.10/src/api/child.js",
      "npm:vue@0.12.10/src/api/lifecycle.js",
      "npm:babel-runtime@5.8.20/helpers/interop-require-default.js",
      "npm:vue-router@0.5.1/lib/util.js",
      "npm:vue-router@0.5.1/lib/router/index.js",
      "npm:vue-router@0.5.1/lib/router/api.js",
      "npm:vue-router@0.5.1/lib/router/internal.js",
      "npm:vue-router@0.5.1/lib/directives/view.js",
      "npm:vue-router@0.5.1/lib/directives/link.js",
      "npm:vue-router@0.5.1/lib/override.js",
      "npm:relational-pouch@1.3.2/pouch-utils.js",
      "npm:uniq@1.0.1.js",
      "npm:relational-pouch@1.3.2/lib/collections.js",
      "npm:relational-pouch@1.3.2/lib/uuid.js",
      "github:Dogfalo/materialize@0.97.0/dist/css/materialize.css!github:systemjs/plugin-css@0.1.13.js",
      "npm:pouchdb@4.0.0/lib/deps/env/hasLocalStorage-browser.js",
      "npm:pouchdb@4.0.0/lib/constructor.js",
      "github:jspm/nodelibs-events@0.1.1.js",
      "npm:pouchdb@4.0.0/lib/deps/ajax/ajax-core.js",
      "npm:argsarray@0.0.1.js",
      "npm:pouchdb-collections@1.0.1.js",
      "npm:pouchdb-extend@0.1.2.js",
      "npm:inherits@2.0.1.js",
      "npm:debug@2.2.0.js",
      "npm:vuvuzela@1.0.1.js",
      "npm:pouchdb@4.0.0/lib/merge.js",
      "npm:pouchdb@4.0.0/lib/deps/uuid.js",
      "npm:pouchdb@4.0.0/lib/deps/docs/parseDoc.js",
      "npm:pouchdb@4.0.0/lib/deps/pick.js",
      "npm:pouchdb@4.0.0/lib/deps/binary/binaryStringToBlobOrBuffer-browser.js",
      "npm:pouchdb@4.0.0/lib/deps/binary/base64.js",
      "npm:pouchdb@4.0.0/lib/deps/promise.js",
      "npm:pouchdb@4.0.0/lib/deps/call.js",
      "npm:pouchdb@4.0.0/lib/deps/toPromise.js",
      "npm:pouchdb@4.0.0/lib/changesHandler.js",
      "npm:pouchdb@4.0.0/lib/deps/once.js",
      "npm:pouchdb@4.0.0/lib/deps/ajax/explain404-browser.js",
      "npm:pouchdb@4.0.0/lib/deps/parseUri.js",
      "npm:pouchdb@4.0.0/lib/replicate/replicate.js",
      "npm:pouchdb@4.0.0/lib/replicate/replication.js",
      "npm:pouchdb@4.0.0/lib/deps/ajax/multipart.js",
      "npm:pouchdb@4.0.0/lib/deps/binary/blobOrBufferToBase64-browser.js",
      "npm:pouchdb@4.0.0/lib/deps/binary/base64StringToBlobOrBuffer-browser.js",
      "npm:pouchdb@4.0.0/lib/mapreduce/taskqueue.js",
      "github:jspm/nodelibs-process@0.1.1.js",
      "npm:pouchdb@4.0.0/lib/mapreduce/create-view.js",
      "npm:pouchdb@4.0.0/lib/mapreduce/evalfunc.js",
      "npm:pouchdb-collate@1.2.0.js",
      "npm:pouchdb@4.0.0/lib/mapreduce/utils.js",
      "npm:vue@0.12.10/src/util/env.js",
      "npm:pouchdb@4.0.0/lib/adapters/idb/index.js",
      "npm:vue@0.12.10/src/util/lang.js",
      "npm:pouchdb@4.0.0/lib/adapters/websql/index.js",
      "npm:vue@0.12.10/src/util/dom.js",
      "npm:vue@0.12.10/src/util/component.js",
      "npm:vue@0.12.10/src/util/options.js",
      "npm:vue@0.12.10/src/util/debug.js",
      "npm:vue@0.12.10/src/config.js",
      "npm:vue@0.12.10/src/parsers/path.js",
      "npm:vue@0.12.10/src/compiler/index.js",
      "npm:vue@0.12.10/src/parsers/text.js",
      "npm:vue@0.12.10/src/parsers/template.js",
      "npm:vue@0.12.10/src/parsers/directive.js",
      "npm:vue@0.12.10/src/parsers/expression.js",
      "npm:vue@0.12.10/src/directives/text.js",
      "npm:vue@0.12.10/src/directives/html.js",
      "npm:vue@0.12.10/src/directives/attr.js",
      "npm:vue@0.12.10/src/directives/show.js",
      "npm:vue@0.12.10/src/directives/class.js",
      "npm:vue@0.12.10/src/directives/el.js",
      "npm:vue@0.12.10/src/directives/ref.js",
      "npm:vue@0.12.10/src/directives/cloak.js",
      "npm:vue@0.12.10/src/directives/style.js",
      "npm:vue@0.12.10/src/directives/transition.js",
      "npm:vue@0.12.10/src/directives/on.js",
      "npm:vue@0.12.10/src/directives/model/index.js",
      "npm:vue@0.12.10/src/directives/repeat.js",
      "npm:vue@0.12.10/src/directives/if.js",
      "npm:vue@0.12.10/src/directives/component.js",
      "npm:vue@0.12.10/src/directives/prop.js",
      "npm:vue@0.12.10/src/element-directives/content.js",
      "npm:vue@0.12.10/src/element-directives/partial.js",
      "npm:vue@0.12.10/src/filters/array-filters.js",
      "npm:vue@0.12.10/src/observer/index.js",
      "npm:vue@0.12.10/src/observer/dep.js",
      "npm:vue@0.12.10/src/watcher.js",
      "npm:vue@0.12.10/src/directive.js",
      "npm:vue@0.12.10/src/transition/index.js",
      "npm:vue-router@0.5.1/lib/history/hash.js",
      "npm:vue-router@0.5.1/lib/history/abstract.js",
      "npm:babel-runtime@5.8.20/helpers/class-call-check.js",
      "npm:route-recognizer@0.1.9.js",
      "npm:vue-router@0.5.1/lib/route.js",
      "npm:vue-router@0.5.1/lib/history/html5.js",
      "npm:vue-router@0.5.1/lib/transition.js",
      "npm:uniq@1.0.1/uniq.js",
      "npm:lie@2.9.1.js",
      "npm:pouchdb@4.0.0/lib/deps/env/isChromeApp-browser.js",
      "npm:pouchdb@4.0.0/lib/taskqueue.js",
      "npm:pouchdb@4.0.0/lib/deps/ajax/request-browser.js",
      "npm:pouchdb@4.0.0/lib/adapter.js",
      "github:jspm/nodelibs-events@0.1.1/index.js",
      "npm:pouchdb@4.0.0/lib/deps/ajax/applyTypeToBuffer-browser.js",
      "npm:pouchdb@4.0.0/lib/deps/ajax/defaultBody-browser.js",
      "npm:argsarray@0.0.1/index.js",
      "npm:pouchdb-extend@0.1.2/index.js",
      "npm:inherits@2.0.1/inherits_browser.js",
      "npm:pouchdb-collections@1.0.1/index.js",
      "npm:vuvuzela@1.0.1/index.js",
      "npm:debug@2.2.0/browser.js",
      "npm:pouchdb@4.0.0/lib/deps/binary/binaryStringToArrayBuffer.js",
      "npm:pouchdb@4.0.0/lib/deps/binary/blob.js",
      "npm:pouchdb@4.0.0/lib/replicate/generateReplicationId.js",
      "npm:pouchdb@4.0.0/lib/deps/binary/buffer-browser.js",
      "npm:pouchdb@4.0.0/lib/replicate/getDocs.js",
      "npm:pouchdb@4.0.0/lib/replicate/backoff.js",
      "npm:pouchdb@4.0.0/lib/replicate/checkpointer.js",
      "npm:pouchdb@4.0.0/lib/deps/ajax/createBlobOrBufferFromParts-browser.js",
      "npm:pouchdb@4.0.0/lib/deps/ajax/createMultipartPart-browser.js",
      "github:jspm/nodelibs-process@0.1.1/index.js",
      "npm:pouchdb@4.0.0/lib/deps/binary/readAsBinaryString.js",
      "npm:pouchdb@4.0.0/lib/mapreduce/upsert.js",
      "npm:pouchdb@4.0.0/lib/mapreduce/md5-browser.js",
      "npm:pouchdb@4.0.0/lib/deps/docs/isDeleted.js",
      "npm:pouchdb@4.0.0/lib/deps/docs/isLocalId.js",
      "npm:pouchdb-collate@1.2.0/lib/index.js",
      "npm:pouchdb@4.0.0/lib/adapters/idb/constants.js",
      "npm:pouchdb@4.0.0/lib/adapters/idb/utils.js",
      "npm:pouchdb@4.0.0/lib/adapters/idb/blobSupport.js",
      "npm:pouchdb@4.0.0/lib/adapters/idb/bulkDocs.js",
      "npm:pouchdb@4.0.0/lib/adapters/idb/allDocs.js",
      "npm:pouchdb@4.0.0/lib/deps/parseHex.js",
      "npm:pouchdb@4.0.0/lib/adapters/websql/constants.js",
      "npm:pouchdb@4.0.0/lib/adapters/websql/utils.js",
      "npm:pouchdb@4.0.0/lib/adapters/websql/bulkDocs.js",
      "npm:vue@0.12.10/src/cache.js",
      "npm:vue@0.12.10/src/compiler/compile.js",
      "npm:vue@0.12.10/src/compiler/transclude.js",
      "npm:vue@0.12.10/src/directives/model/text.js",
      "npm:vue@0.12.10/src/transition/transition.js",
      "npm:vue@0.12.10/src/directives/model/radio.js",
      "npm:vue@0.12.10/src/directives/model/select.js",
      "npm:vue@0.12.10/src/directives/model/checkbox.js",
      "npm:vue@0.12.10/src/observer/array.js",
      "npm:vue@0.12.10/src/observer/object.js",
      "npm:vue@0.12.10/src/batcher.js",
      "npm:route-recognizer@0.1.9/dist/route-recognizer.js",
      "npm:vue-router@0.5.1/lib/pipeline.js",
      "npm:babel-runtime@5.8.20/helpers/create-class.js",
      "npm:babel-runtime@5.8.20/core-js/object/define-property.js",
      "npm:lie@2.9.1/lib/index.js",
      "npm:pouchdb@4.0.0/lib/deps/binary/readAsArrayBuffer.js",
      "npm:pouchdb@4.0.0/lib/deps/upsert.js",
      "npm:pouchdb@4.0.0/lib/changes.js",
      "npm:events@1.0.2.js",
      "npm:debug@2.2.0/debug.js",
      "npm:pouchdb@4.0.0/lib/deps/binary/arrayBufferToBinaryString.js",
      "npm:process@0.10.1.js",
      "npm:pouchdb@4.0.0/lib/deps/md5-browser.js",
      "npm:pouchdb@4.0.0/lib/deps/docs/preprocessAttachments.js",
      "npm:pouchdb-collate@1.2.0/lib/utils.js",
      "npm:pouchdb-upsert@1.1.3.js",
      "npm:spark-md5@0.0.5.js",
      "npm:pouchdb@4.0.0/lib/deps/docs/processDocs.js",
      "npm:vue@0.12.10/src/compiler/compile-props.js",
      "npm:vue@0.12.10/src/transition/queue.js",
      "npm:lie@2.9.1/lib/promise.js",
      "npm:lie@2.9.1/lib/resolve.js",
      "npm:lie@2.9.1/lib/reject.js",
      "npm:core-js@1.1.1/library/fn/object/define-property.js",
      "npm:lie@2.9.1/lib/race.js",
      "npm:lie@2.9.1/lib/all.js",
      "npm:pouchdb@4.0.0/lib/evalFilter.js",
      "npm:pouchdb@4.0.0/lib/evalView.js",
      "npm:pouchdb@4.0.0/lib/deps/docs/normalizeDdocFunctionName.js",
      "npm:pouchdb@4.0.0/lib/deps/docs/parseDdocFunctionName.js",
      "npm:events@1.0.2/events.js",
      "npm:ms@0.7.1.js",
      "npm:process@0.10.1/browser.js",
      "npm:spark-md5@0.0.5/spark-md5.js",
      "npm:pouchdb-upsert@1.1.3/index.js",
      "npm:lie@2.9.1/lib/unwrap.js",
      "npm:pouchdb@4.0.0/lib/deps/docs/updateDoc.js",
      "npm:lie@2.9.1/lib/states.js",
      "npm:lie@2.9.1/lib/INTERNAL.js",
      "npm:lie@2.9.1/lib/resolveThenable.js",
      "npm:lie@2.9.1/lib/queueItem.js",
      "npm:lie@2.9.1/lib/handlers.js",
      "npm:core-js@1.1.1/library/modules/$.js",
      "npm:ms@0.7.1/index.js",
      "npm:lie@2.9.1/lib/tryCatch.js",
      "npm:immediate@3.0.5.js",
      "npm:immediate@3.0.5/lib/index.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.22",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "clean-css": "npm:clean-css@3.3.9",
    "core-js": "npm:core-js@1.1.1",
    "jquery": "github:components/jquery@2.1.4",
    "materialize": "github:Dogfalo/materialize@0.97.0",
    "moment": "github:moment/moment@2.10.6",
    "pouchdb": "npm:pouchdb@4.0.0",
    "relational-pouch": "npm:relational-pouch@1.3.2",
    "vue": "npm:vue@0.12.10",
    "vue-router": "npm:vue-router@0.5.1",
    "github:Dogfalo/materialize@0.97.0": {
      "css": "github:systemjs/plugin-css@0.1.13",
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.4.3"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:abstract-leveldown@0.12.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@3.0.0"
    },
    "npm:abstract-leveldown@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:accepts@1.2.12": {
      "mime-types": "npm:mime-types@2.1.5",
      "negotiator": "npm:negotiator@0.5.3"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asn1.js@2.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.8.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:bl@0.8.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserify-aes@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.2",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.3": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.4.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.3.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:clone@0.1.19": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:content-disposition@0.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:cookie-signature@1.0.6": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-js@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.3",
      "browserify-sign": "npm:browserify-sign@3.0.3",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:d64@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deferred-leveldown@0.2.0": {
      "abstract-leveldown": "npm:abstract-leveldown@0.12.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:depd@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:destroy@1.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:double-ended-queue@2.0.0-0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:errno@0.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "prr": "npm:prr@0.0.0"
    },
    "npm:es3ify@0.1.4": {
      "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
      "jstransform": "npm:jstransform@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@3001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:etag@1.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:express@4.13.3": {
      "accepts": "npm:accepts@1.2.12",
      "array-flatten": "npm:array-flatten@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "content-disposition": "npm:content-disposition@0.5.0",
      "content-type": "npm:content-type@1.0.1",
      "cookie": "npm:cookie@0.1.3",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.0.1",
      "escape-html": "npm:escape-html@1.0.2",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@0.4.0",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "merge-descriptors": "npm:merge-descriptors@1.0.0",
      "methods": "npm:methods@1.1.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "on-finished": "npm:on-finished@2.3.0",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-to-regexp": "npm:path-to-regexp@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "proxy-addr": "npm:proxy-addr@1.0.8",
      "qs": "npm:qs@4.0.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "range-parser": "npm:range-parser@1.0.2",
      "send": "npm:send@0.13.0",
      "serve-static": "npm:serve-static@1.10.0",
      "type-is": "npm:type-is@1.6.7",
      "utils-merge": "npm:utils-merge@1.0.0",
      "vary": "npm:vary@1.0.1"
    },
    "npm:falafel@1.2.0": {
      "acorn": "npm:acorn@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "foreach": "npm:foreach@2.0.5",
      "isarray": "npm:isarray@0.0.1",
      "object-keys": "npm:object-keys@1.0.7"
    },
    "npm:finalhandler@0.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "escape-html": "npm:escape-html@1.0.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:http-errors@1.3.1": {
      "inherits": "npm:inherits@2.0.1",
      "statuses": "npm:statuses@1.2.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:idb-wrapper@1.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:immediate@3.0.5": {
      "inline-process-browser": "npm:inline-process-browser@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "unreachable-branch-transform": "npm:unreachable-branch-transform@0.3.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-process-browser@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "falafel": "npm:falafel@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through2": "npm:through2@0.6.5"
    },
    "npm:isbuffer@0.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:jstransform@3.0.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:level-fix-range@2.0.0": {
      "clone": "npm:clone@0.1.19"
    },
    "npm:level-hooks@4.5.0": {
      "string-range": "npm:string-range@1.2.2"
    },
    "npm:level-js@2.2.1": {
      "abstract-leveldown": "npm:abstract-leveldown@0.12.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "idb-wrapper": "npm:idb-wrapper@1.5.0",
      "isbuffer": "npm:isbuffer@0.0.0",
      "ltgt": "npm:ltgt@1.0.2",
      "typedarray-to-buffer": "npm:typedarray-to-buffer@1.0.4",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@2.1.2"
    },
    "npm:level-sublevel@5.2.3": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "level-fix-range": "npm:level-fix-range@2.0.0",
      "level-hooks": "npm:level-hooks@4.5.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "string-range": "npm:string-range@1.2.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@2.0.6"
    },
    "npm:levelup@0.18.6": {
      "bl": "npm:bl@0.8.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deferred-leveldown": "npm:deferred-leveldown@0.2.0",
      "errno": "npm:errno@0.1.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "prr": "npm:prr@0.0.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@3.0.0"
    },
    "npm:lie@2.9.1": {
      "immediate": "npm:immediate@3.0.5",
      "inline-process-browser": "npm:inline-process-browser@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "unreachable-branch-transform": "npm:unreachable-branch-transform@0.2.3"
    },
    "npm:localstorage-down@0.6.3": {
      "abstract-leveldown": "npm:abstract-leveldown@0.12.3",
      "argsarray": "npm:argsarray@0.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "d64": "npm:d64@1.0.0",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tiny-queue": "npm:tiny-queue@0.2.0"
    },
    "npm:ltgt@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:memdown@1.0.0": {
      "abstract-leveldown": "npm:abstract-leveldown@2.4.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "functional-red-black-tree": "npm:functional-red-black-tree@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "ltgt": "npm:ltgt@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:miller-rabin@1.1.1": {
      "bn.js": "npm:bn.js@0.15.2",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.17.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.5": {
      "mime-db": "npm:mime-db@1.17.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:object-keys@0.2.0": {
      "foreach": "npm:foreach@2.0.5",
      "indexof": "npm:indexof@0.0.1",
      "is": "npm:is@0.2.7"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@3.0.1": {
      "asn1.js": "npm:asn1.js@2.2.0",
      "browserify-aes": "npm:browserify-aes@1.0.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parseurl@1.3.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pouchdb-upsert@1.1.3": {
      "es3ify": "npm:es3ify@0.1.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lie": "npm:lie@2.9.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:pouchdb@4.0.0": {
      "argsarray": "npm:argsarray@0.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "debug": "npm:debug@2.2.0",
      "double-ended-queue": "npm:double-ended-queue@2.0.0-0",
      "es3ify": "npm:es3ify@0.1.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "express": "npm:express@4.13.3",
      "inherits": "npm:inherits@2.0.1",
      "level-js": "npm:level-js@2.2.1",
      "level-sublevel": "npm:level-sublevel@5.2.3",
      "levelup": "npm:levelup@0.18.6",
      "lie": "npm:lie@2.9.1",
      "localstorage-down": "npm:localstorage-down@0.6.3",
      "memdown": "npm:memdown@1.0.0",
      "miller-rabin": "npm:miller-rabin@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pouchdb-collate": "npm:pouchdb-collate@1.2.0",
      "pouchdb-collections": "npm:pouchdb-collections@1.0.1",
      "pouchdb-extend": "npm:pouchdb-extend@0.1.2",
      "pouchdb-upsert": "npm:pouchdb-upsert@1.1.3",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "repl": "github:jspm/nodelibs-repl@0.1.0",
      "spark-md5": "npm:spark-md5@0.0.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "through2": "npm:through2@0.4.2",
      "vuvuzela": "npm:vuvuzela@1.0.1"
    },
    "npm:process@0.11.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:proxy-addr@1.0.8": {
      "forwarded": "npm:forwarded@0.1.0",
      "ipaddr.js": "npm:ipaddr.js@1.0.1"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.32": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.11",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4"
    },
    "npm:relational-pouch@1.3.2": {
      "argsarray": "npm:argsarray@0.0.1",
      "es3ify": "npm:es3ify@0.1.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "lie": "npm:lie@2.9.1",
      "pouchdb-extend": "npm:pouchdb-extend@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:send@0.13.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.0.1",
      "destroy": "npm:destroy@1.0.3",
      "escape-html": "npm:escape-html@1.0.2",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.3.1",
      "mime": "npm:mime@1.3.4",
      "ms": "npm:ms@0.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.0.2",
      "statuses": "npm:statuses@1.2.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:serve-static@1.10.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "escape-html": "npm:escape-html@1.0.2",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.13.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:sha.js@2.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:statuses@1.2.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.33"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through2@0.4.2": {
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@2.1.2"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.1"
    },
    "npm:type-is@1.6.7": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.5"
    },
    "npm:typedarray-to-buffer@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:unreachable-branch-transform@0.2.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
      "recast": "npm:recast@0.10.32",
      "through2": "npm:through2@0.6.5"
    },
    "npm:unreachable-branch-transform@0.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
      "recast": "npm:recast@0.10.32",
      "through2": "npm:through2@0.6.5"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:vue-router@0.5.1": {
      "babel-runtime": "npm:babel-runtime@5.8.20",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "route-recognizer": "npm:route-recognizer@0.1.9"
    },
    "npm:vue@0.12.10": {
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:xtend@2.0.6": {
      "is-object": "npm:is-object@0.1.2",
      "object-keys": "npm:object-keys@0.2.0"
    },
    "npm:xtend@2.1.2": {
      "object-keys": "npm:object-keys@0.4.0"
    }
  }
});
