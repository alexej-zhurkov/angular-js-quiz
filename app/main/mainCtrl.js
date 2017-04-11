/**
 * Created by alexey on 11.04.17.
 */
(function () {
    'use strict';

    angular
        .module('quizApp')
        .controller('MainCtrl', [
            'quizService',
            MainCtrl
        ]);

    function MainCtrl(quizService) {
        var vm = this;
        vm.data = quizService.getInitData();
    }
})();
