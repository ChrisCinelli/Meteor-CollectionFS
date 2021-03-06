Package.describe({
  name: 'chriscinelli:upload-http',
  version: '0.0.21',
  summary: 'CollectionFS, HTTP File Upload',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'chriscinelli:base-package@0.0.30',
    'chriscinelli:tempstore@0.1.4',
    'chriscinelli:file@0.1.16',
    'chriscinelli:access-point@0.1.49',
    'chriscinelli:power-queue@0.9.11',
    'chriscinelli:reactive-list@0.0.9',
    'aldeed:http'
  ]);

  api.addFiles([
    'upload-http-common.js',
    'upload-http-client.js'
  ], 'client');

  api.addFiles([
    'upload-http-common.js'
  ], 'server');
});

// Package.onTest(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.addFiles('tests/server-tests.js', 'server');
//   api.addFiles('tests/client-tests.js', 'client');
// });
