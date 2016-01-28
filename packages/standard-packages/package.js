Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-CollectionFS.git',
  name: 'chriscinelli:standard-packages',
  version: '0.5.9',
  summary: 'Filesystem for Meteor, collectionFS'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // Rig the collectionFS package v2
  api.imply([
    // Base util rigs the basis for the FS scope and some general helper mehtods
    'chriscinelli:base-package@0.0.30',
    // Want to make use of the file object and its api, yes!
    'chriscinelli:file@0.1.17',
    // Add the FS.Collection to keep track of everything
    'chriscinelli:collection@0.5.5',
    // Support filters for easy rules about what may be inserted
    'chriscinelli:collection-filters@0.2.4',
    // Add the option to have ddp and http access point
    'chriscinelli:access-point@0.1.49',
    // We might also want to have the server create copies of our files?
    'chriscinelli:worker@0.1.4',
    // By default we want to support uploads over HTTP
    'chriscinelli:upload-http@0.0.20',
  ]);

});

Package.onTest(function (api) {
  api.use('chriscinelli:standard-packages');
  api.use('test-helpers@1.0.0', 'server');
  api.use([
    'tinytest@1.0.0',
    'underscore@1.0.0',
    'ejson@1.0.0',
    'ordered-dict@1.0.0',
    'random@1.0.0',
    'tracker@1.0.3'
  ]);

  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});
