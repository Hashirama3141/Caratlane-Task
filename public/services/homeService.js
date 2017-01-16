(function (app) {

    app.service('homeService', homeService);

    homeService.$inject = ['$http', '$log', '$q'];
    function homeService($http, $log, $q) {
        var self = this;

        self.getMessages = function () {
            return $http({
                method: 'GET',
                url: '/messages',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(getMessagesComplete)
                .catch(getMessagesFailed);
        };

        function getMessagesComplete(response) {
            return response.data;
        }

        function getMessagesFailed(error) {
            $log.error('XHR Failed for getMessages.' + error.data);
            return $q.reject(error);
        }
    };

})(angular.module("contactUs"));