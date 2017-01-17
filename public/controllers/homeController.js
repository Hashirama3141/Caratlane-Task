(function (app) {
    'use strict';

    app.controller('homeController', homeController);

    homeController.$inject = ['homeService'];

    function homeController(homeService) {
        var vm = this;

        function clearFields() {
            vm.message = {
                name: '',
                email: '',
                description: ''
            };

        }
        vm.showDetailsPage = false;
        vm.saveSuccessful = false;
        vm.saveFailed = false;
        vm.showLoader = false;

        activate();

        vm.submitForm = submitForm;

        function submitForm(isValid) {
            if (isValid) {
                vm.showLoader = true;
                homeService.saveMessage(vm.message)
                    .then(function (isSaved) {
                        vm.showLoader = false;
                        if (!isSaved) {
                            vm.saveSuccessful = false;
                            vm.saveFailed = true;
                        }
                        else {
                            vm.saveSuccessful = true;
                            vm.saveFailed = false;
                        }
                        clearFields();
                    }, function (err) {
                        vm.showLoader = false;
                        vm.saveSuccessful = false;
                        vm.saveFailed = true;
                    });
            }
        }

        function activate() {
            homeService
                .getMessages()
                .then(function (_messages) {
                    vm.messages = _messages;
                })
        }
    };
})(angular.module('contactUs'));