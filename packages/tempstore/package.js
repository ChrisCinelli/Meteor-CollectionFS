 Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-cfs-tempstore.git',
  name: 'chriscinelli:tempstore',
  version: '0.1.5',
  summary: 'CollectionFS, temporary storage'
});

Npm.depends({
  'combined-stream': '0.0.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['chriscinelli:base-package@0.0.30', 'chriscinelli:file@0.1.16']);

  api.use('chriscinelli:filesystem@0.1.2', { weak: true });
  api.use('chriscinelli:gridfs@0.0.30', { weak: true });

  api.use('mongo');

  api.addFiles([
    'tempStore.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.addFiles('tests/server-tests.js', 'server');
// });
