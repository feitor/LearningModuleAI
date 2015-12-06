app.controller('minmaxController', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {

    $scope.depth = parseInt($routeParams.depth);
    $scope.code = [
      "function minimax(node, depth, maximizingPlayer)",
      "\t if depth = 0 or node is a terminal node",
      "\t \t return the heuristic value of node",
      "\t if maximizingPlayer",
      "\t \t bestValue := -∞",
      "\t \t for each child of node",
      "\t \t \t val := minimax(child, depth - 1, FALSE)",
      "\t \t \t bestValue := max(bestValue, val)",
      "\t \t return bestValue",
      "\t else",
      "\t \t bestValue := +∞",
      "\t \t for each child of node",
      "\t \t \t val := minimax(child, depth - 1, TRUE)",
      "\t \t \t bestValue := min(bestValue, val)",
      "\t \t return bestValue"
    ]

    var codeBase = [
         0,
         1,
         3,
         4,
         5,
         6,

         0,
         1
    ]
    var codeDiv;
    switch ($scope.depth) {
        case 1:
            $scope.questions = [
        { line: 0, question: "Enter 0", answer: 0 }
            ]
            codeDiv = [
               2
            ]
            break;
        case 2:
            $scope.questions = [
        { line: 0, question: "Enter 0", answer: 0 }
            ]
            codeDiv = [
                3,
                9,
                10,
                11,
                12,

                0,
                1,
                2,

                12,
                13,

                11,
                12,

                0,
                1,
                2,

                12,
                13,
                14
            ]
            break;
        case 3:
            $scope.questions = [
        { line: 0, question: "Enter 0", answer:0 }
            ]
            codeDiv = [
                3,
                9,
                10,
                11,
                12,

                0,
                1,
                2,

                12,
                13,

                11,
                12,

                0,
                1,
                3,
                4,
                5,
                6,

                0,
                1,
                2,

                6,
                7,
                8,

                12,
                13,
                14
            ]
            break;
    }
    var endCode = [
        6,
        7,

        5,
        6,
        7,

        5,
        6,
        7,
        8
    ]
    $scope.codeUnderligne = codeBase.concat(codeDiv, endCode);
    $scope.images = [];
    for (var i = 0; i < $scope.codeUnderligne.length; i++) {
        $scope.images.push("app/images/minmax/" + $scope.depth + "/" + i + ".png")
    }
    $scope.loadData = function (depth) {
        $location.path('minmax/' + depth)
    }

}])