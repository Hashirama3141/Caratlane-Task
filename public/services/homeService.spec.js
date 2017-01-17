describe("homeService tests", function () {

    var messages = [
        {
            name: 'Ramkuamr',
            email: 'ranja@fjkds.com',
            message: 'ssdfglndfsgQazsds asdf asdfasdf sdfglndfsgQazsds asdf asdfasdf sdfglndfsgQazsds asdf asdfasdf dfglndfsgQazsds asdf asdfasdf ',
            date: new Date()
        },
        {
            name: 'Ramkuamr',
            email: 'ranja@fjkds.com',
            message: 'ssdfglndfsgQazsds asdf asdfasdf sdfglndfsgQazsds asdf asdfasdf sdfglndfsgQazsds asdf asdfasdf dfglndfsgQazsds asdf asdfasdf ',
            date: new Date()
        },
        {
            name: 'Ramkuamr',
            email: 'ranja@fjkds.com',
            message: 'ssdfglndfsgQazsds asdf asdfasdf sdfglndfsgQazsds asdf asdfasdf sdfglndfsgQazsds asdf asdfasdf dfglndfsgQazsds asdf asdfasdf ',
            date: new Date()
        },
        {
            name: 'Ramkuamr',
            email: 'ranja@fjkds.com',
            message: 'ssdfglndfsgQazsds asdf asdfasdf sdfglndfsgQazsds asdf asdfasdf sdfglndfsgQazsds asdf asdfasdf dfglndfsgQazsds asdf asdfasdf ',
            date: new Date()
        },
    ];

    beforeEach(angular.mock.module("contactUs"));

    var homeService, httpBackend;
    beforeEach(angular.mock.inject(function (_homeService_, _$httpBackend_) {
        homeService = _homeService_;
        httpBackend = _$httpBackend_;
    }));

    describe('Check if all functionalities are implemented', function () {
        it('check if homeService is defined', function () {
            expect(homeService).toBeDefined();
        });

        it('check if getMessages is defined', function () {
            expect(homeService.getMessages).toBeDefined();
        });

        it('check if saveMessage is defined', function () {
            expect(homeService.saveMessage).toBeDefined();
        });

    });

    describe('getMessages Tests', function () {
        it('Verify if correct url is invoked on call', function () {
            httpBackend.expectGET('/messages');
            httpBackend.when("GET", '/messages')
                .respond({});
            var response;
            homeService.getMessages().then(function (_response) {
                response = _response;
            });
            httpBackend.flush();
            expect(Object.keys(response).length).toBe(0);
        });

        it('Verify if expected data is invoked on call', function () {

            httpBackend.expectGET('/messages');
            httpBackend.when("GET", '/messages')
                .respond(messages);
            var response;
            homeService.getMessages().then(function (_response) {
                response = _response;
            });
            httpBackend.flush();
            expect(Object.keys(response).length).toBe(messages.length);
            expect(response[2]).toEqual(messages[2]);
        });
    });

    describe('saveMessage Tests', function () {
        it('Verify if correct url is invoked on call', function () {
            httpBackend.expectPOST('/messages');
            httpBackend.when("POST", '/messages')
                .respond({});
            var response;
            homeService.saveMessage({}).then(function (_response) {
                response = _response;
            });
            httpBackend.flush();
            expect(Object.keys(response).length).toBe(0);
        });

        it('Verify if expected data is invoked on call', function () {

            httpBackend.expectPOST('/messages');
            httpBackend.when("POST", '/messages')
                .respond({
                    name: 'test1',
                    email: 'test',
                    description: 'test'
                });
            var response;
            homeService.saveMessage({}).then(function (_response) {
                response = _response;
            });
            httpBackend.flush();
            console.log(response);
            expect(response.name).toBe('test1');
        });
    });

})
