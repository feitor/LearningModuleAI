app.directive('ngDebuger', function () {
    var controller = ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.currentPtr = 0;
        $scope.questionPtr = 0;
        $scope.submitAnswer = function () {
            var asw = isNaN($scope.answer) ? $scope.answer : parseInt($scope.answer);

            if(asw === $scope.questions[$scope.questionPtr].answer)
            {
                $scope.questionPtr++;
                $scope.currentPtr++;
               
                $scope.message = "Well done !!"
                $timeout(function(){
                    $scope.message = "";
                }, 1000);
                $scope.answer = "";
            }
            else {

                $scope.message = "Nop, Try again !"
            }
        }
    }];
    return {
        restrict: 'E',
        scope: {
            code: '=',
            codeUnderligne: '=',
            images: '=',
            questions: '='
        },
        templateUrl: 'app/views/debuger.html',
        controller: controller


    }
})
