describe('homeController Tests', function () {
    var $controller, homeService;
        beforeEach(angular.mock.module("contactUs"));
        beforeEach(angular.mock.inject(function (_$controller_, _homeService_) {
            $controller = _$controller_;
            homeService = _homeService_;
        }));

        var controller;
        beforeEach(function () {
            controller = $controller('homeController', { homeService: homeService });
        });
    describe('Verify if all functionalities are implemented', function () {        

        it('Check if homeController is defined', function () {
            expect(controller).toBeDefined();
        });

        it('Check if submitForm is defined', function () {
            expect(controller.submitForm).toBeDefined();
        });
    });
})