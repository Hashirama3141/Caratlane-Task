(function (app) {
    'use strict';

    app.controller('homeController', homeController);

    homeController.$inject = [homeService];

    function homeController(homeService) {
        var vm = this;
        vm.messages = [
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

        //activate();

        function activate() {
            homeService
                .getMessages()
                .then(function (_messages) {
                    vm.messages = _messages;
                })
        }
    };
})(angular.module('contactUs'));