var chai = require('chai');
var supertest = require('supertest');

var app = require('../app');

var should = chai.should();

describe('Sending a GET to /api/v1/health', function() {
	describe('should succeed', function() {
		it('in getting the health JSON object.', function(done) {
			supertest(app)
				.get('/api/v1/health')
				.expect(200)
				.end(function(err, res){
					if(err) return done(err);

					res.body.status.should.be.equal('running');

					done();
				});
		});
	});
});