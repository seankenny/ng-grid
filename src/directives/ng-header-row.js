﻿ngGridDirectives.directive('ngHeaderRow', ['$compile', function($compile) {
    var ngHeaderRow = {
        scope: false,
        compile: function () {
            return {
                pre: function ($scope, iElement) {
                    if (iElement.children().length == 0) {
                        if ($scope.headerRowTemplate.then) {
                            $scope.headerRowTemplate.then(function (resp) {
                                iElement.append($compile(resp.data)($scope));
                            });
                        } else {
                            iElement.append($compile($scope.headerRowTemplate)($scope));
                        }
                    }
                }
            };
        }
    };
    return ngHeaderRow;
}]);