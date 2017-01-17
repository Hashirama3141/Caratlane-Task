var request = require('supertest');
var app = require('../server');

describe('Requests to various routes', function () {
    it('Returns a 200 status code', function (done) {
        request(app)
            .get('/')
            .expect(200, done);
    });

    it('Returns a HTML template', function (done) {
        request(app)
            .get('/')
            .expect('Content-type', /html/)
            .expect(200, done);
    });
});
describe('get messages', function () {
    it('Returns a 200 response on get /messages', function (done) {
        request(app)
            .get('/messages')
            .expect('Content-type', /json/)
            .expect(200, done);
    });

});

describe('post messages', function () {
    var message = {
        name: 'QQQ',
        email: 'sdf@gmail.com',
        description: 'sdfsdf'
    };
    it('Returns a 201 response on post new message', function (done) {
        request(app)
            .post('/messages')
            .send(message)
            .expect(message.name, done);
    });
});
