/**
 * Created by alexey on 11.04.17.
 */
(function () {
    'use strict';

    angular
        .module('quizApp')
        .directive('quizAppList', [
            quizAppList
        ]);

    function quizAppList() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                items: '='
            },
            controllerAs: 'vm',
            templateUrl: 'components/toDoList.directive.html',
            controller: function ($scope) {
                var vm = this;
                vm.model = {
                    checked: false,
                    message: ''
                };
                vm.removeItem = function (item) {
                    var index = $scope.items.indexOf(item);
                    if (index > -1) {
                        $scope.items.splice(index, 1);
                    }
                };
                vm.createNewItem = function () {
                    $scope.items.push(vm.model);
                    vm.model = {
                        checked: false,
                        message: ''
                    }
                };
                vm.selectAll = function () {
                    for (var i = 0; i < $scope.items.length; i++) {
                        $scope.items[i].checked = true;
                    }
                };
                vm.removeSelected = function () {
                    for (var i = $scope.items.length - 1; i >= 0; i--) {
                        if ($scope.items[i].checked) {
                            vm.removeItem($scope.items[i]);
                        }
                    }
                };
                vm.deleteAll = function () {
                    $scope.items.splice(0, $scope.items.length);
                };
            }
        }
    }
})();