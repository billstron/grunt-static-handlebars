'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.static_handlebars = {
    setUp: function(done) {
        // setup here if necessary
        done();
    },
    renderDeepTemplateDirectoryCashcow: function(test){
        test.expect(1);

        var actual = grunt.file.read('tmp/renderDeepTemplateDirectory/products/cashcow/index.html');
        var expected = grunt.file.read('test/expected/renderDeepTemplateDirectory/products/cashcow/index.html');
        test.equal(actual, expected, 'should describe what to expect at /cashcow/index.html');

        test.done();
    },
    renderDeepTemplateDirectoryAbout: function(test){
        test.expect(1);

        var actual = grunt.file.read('tmp/renderDeepTemplateDirectory/products/cashcow/about/index.html');
        var expected = grunt.file.read('test/expected/renderDeepTemplateDirectory/products/cashcow/about/index.html');
        test.equal(actual, expected, 'should describe what to expect at /cashcow/about/index.html');

        test.done();
    },
    renderDeepTemplateDirectoryCuttingEdge: function(test){
        test.expect(1);

        var actual = grunt.file.read('tmp/renderDeepTemplateDirectory/products/cuttingedge/index.html');
        var expected = grunt.file.read('test/expected/renderDeepTemplateDirectory/products/cuttingedge/index.html');
        test.equal(actual, expected, 'should describe what to expect at /cuttingedge/index.html');

        test.done();
    },
    renderFixedTemplate: function(test){
        test.expect(1);

        var actual = grunt.file.read('tmp/renderFixedTemplate/index.html');
        var expected = grunt.file.read('test/expected/renderFixedTemplate/index.html');
        test.equal(actual, expected, 'should describe what to expect at /index.html');

        test.done();
    },
    renderFixedTemplateWithOtherContext: function(test){
        test.expect(1);

        var actual = grunt.file.read('tmp/renderFixedTemplateWithOtherContext/index.html');
        var expected = grunt.file.read('test/expected/renderFixedTemplateWithOtherContext/index.html');
        test.equal(actual, expected, 'should describe what to expect at /index.html');

        test.done();
    },
    renderPlainHtml: function(test){
        test.expect(1);

        var actual = grunt.file.read('tmp/renderPlainHtml/justastaticfile.html');
        var expected = grunt.file.read('test/expected/renderPlainHtml/justastaticfile.html');
        test.equal(actual, expected, 'should describe what to expect at /justastaticfile.html');

        test.done();
    },
    renderTemplateDirectory: function(test){
        test.expect(3);

        var actual = grunt.file.read('tmp/renderTemplateDirectory/ourpeople.html');
        var expected = grunt.file.read('test/expected/renderTemplateDirectory/ourpeople.html');
        test.equal(actual, expected, 'should describe what to expect at /ourpeople.html');

        actual = grunt.file.read('tmp/renderTemplateDirectory/ourproducts.html');
        expected = grunt.file.read('test/expected/renderTemplateDirectory/ourproducts.html');
        test.equal(actual, expected, 'should describe what to expect at /ourproducts.html');

        actual = grunt.file.read('tmp/renderTemplateDirectory/ourservice.html');
        expected = grunt.file.read('test/expected/renderTemplateDirectory/ourservice.html');
        test.equal(actual, expected, 'should describe what to expect at /ourservice.html');

        test.done();
    },
    useHelpers: function(test){
        test.expect(1);

        var actual = grunt.file.read('tmp/useHelpers/index.html');
        var expected = grunt.file.read('test/expected/useHelpers/index.html');
        test.equal(actual, expected, 'should describe what to expect at /index.html');

        test.done();
    },
    usePartials: function(test){
        test.expect(1);

        var actual = grunt.file.read('tmp/usePartials/index.html');
        var expected = grunt.file.read('test/expected/usePartials/index.html');
        test.equal(actual, expected, 'should describe what to expect at /index.html');

        test.done();
    },
    usePartialsAndHelpers: function(test){
        test.expect(1);

        var actual = grunt.file.read('tmp/usePartialsAndHelpers/index.html');
        var expected = grunt.file.read('test/expected/usePartialsAndHelpers/index.html');
        test.equal(actual, expected, 'should describe what to expect at /index.html');

        test.done();
    },
    renderMultiTemplates: function(test){
        test.expect(6);

        var actual = grunt.file.read('tmp/renderMultiTemplates/sub1/ourpeople.html');
        var expected = grunt.file.read('test/expected/renderMultiTemplates/sub1/ourpeople.html');
        test.equal(actual, expected, 'should describe what to expect at /sub1/ourpeople.html');

        actual = grunt.file.read('tmp/renderMultiTemplates/sub1/ourproducts.html');
        expected = grunt.file.read('test/expected/renderMultiTemplates/sub1/ourproducts.html');
        test.equal(actual, expected, 'should describe what to expect at /sub1/ourproducts.html');

        actual = grunt.file.read('tmp/renderMultiTemplates/sub1/ourservice.html');
        expected = grunt.file.read('test/expected/renderMultiTemplates/sub1/ourservice.html');
        test.equal(actual, expected, 'should describe what to expect at /sub1/ourservice.html');

        actual = grunt.file.read('tmp/renderMultiTemplates/sub2/ourpeople.html');
        expected = grunt.file.read('test/expected/renderMultiTemplates/sub2/ourpeople.html');
        test.equal(actual, expected, 'should describe what to expect at /sub2/ourpeople.html');

        actual = grunt.file.read('tmp/renderMultiTemplates/sub2/ourproducts.html');
        expected = grunt.file.read('test/expected/renderMultiTemplates/sub2/ourproducts.html');
        test.equal(actual, expected, 'should describe what to expect at /sub2/ourproducts.html');

        actual = grunt.file.read('tmp/renderMultiTemplates/sub2/ourservice.html');
        expected = grunt.file.read('test/expected/renderMultiTemplates/sub2/ourservice.html');
        test.equal(actual, expected, 'should describe what to expect at /sub2/ourservice.html');

        test.done();
    },
};
