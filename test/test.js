var request = require('supertest');
var app = require('../server');

describe('Requests to root path', function () {
    it('Returns a 200 status code', function (done) {
        request(app)
            .get('/')
            .expect(200,done);
    });

    it('Returns a HTML template', function (done) {
        request(app)
            .get('/')
            .expect('Content-type',/html/)
            .expect(200,done);            
    });
});