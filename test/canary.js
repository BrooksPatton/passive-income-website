var chai = require('chai');

var should = chai.should();

describe('canary test', function() {
	it('should pass', function() {
		[].should.be.a('array');
	});
});