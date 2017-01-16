describe("homeService tests", function () {

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
        })
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
    });
})
