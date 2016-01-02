var chai = require('chai');
var supertest = require('supertest');

var app = require('../app');

var should = chai.should();

describe('Sending a GET to /', function() {
	describe('should succeed', function() {
		it('in getting some text', function(done) {
			supertest(app)
				.get('/')
				.expect(200)
				.end(function(err, res){
					if(err) return done(err);

					res.text[0].should.be.equal('<');

					done();
				});
		});
	});
});