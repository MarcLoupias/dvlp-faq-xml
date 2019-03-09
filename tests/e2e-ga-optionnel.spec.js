'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const fsp = require('fs').promises;
const { executeCliSync } = require('../test-utils');

describe('command :: "md-file-converter convert \'../../../dist\' \'tests/actual-files/ga-optionnel/**/*.md\' --filename \'map-reduce-to-xml\'"', function () {
    let result;

    beforeEach(function() {
        result = executeCliSync(['convert', '../../../dist', 'tests/actual-files/ga-optionnel/**/*.md', '--filename', 'map-reduce-to-xml']);
        expect(result.stdout).to.include('map-reduce-to-xml.xml');
    });

    it('should output a final xml file with a content equal to tests/expected-files/ga-optionnel/faq-dvp-format.xml content', async () => {
        const results = await Promise.all([
            fsp.readFile('map-reduce-to-xml.xml', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/ga-optionnel/faq-dvp-format.xml', { encoding: 'utf-8' })
        ]);
        expect(results[0]).to.equal(results[1]);
    });

    afterEach(function() {
        fs.unlinkSync('map-reduce-to-xml.xml');
    });
});
