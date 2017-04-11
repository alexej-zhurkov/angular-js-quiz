/**
 * Created by alexey on 11.04.17.
 */
(function () {
    'use strict';

    angular
        .module('quizApp')
        .directive('quizAppItem', [
            quizAppItem
        ]);

    function quizAppItem() {
        return {
            restrict: 'A',
            replace: false,
            require: '^quizAppList',
            scope: {
                item: '='
            },
            templateUrl: 'components/toDoItem.directive.html',
            link: function (scope, element, attrs, ctrl) {
                scope.removeItem = function () {
                    ctrl.removeItem(scope.item);
                }
            }
        }
    }
})();
