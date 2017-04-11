/**
 * Created by alexey on 11.04.17.
 */
(function () {
    'use strict';

    angular
        .module('quizApp')
        .factory('quizService', [
            quizService
        ]);

    function quizService() {
        var initData = [
            {
                message: "Ride on bicycle",
                checked: false
            },
            {
                message: "Swimming",
                checked: false
            },
            {
                message: "Run in forest with controls",
                checked: false
            }
        ];

        var getInitData = function () {
            return initData;
        };

        return {
            getInitData: getInitData
        }
    }
})();
