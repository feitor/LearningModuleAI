app.controller('greedyController', ['$scope', function ($scope) {
    $scope.code = [
        "function greedy(currentNode)",
        "\t bestValue = -∞",
        "\t for each child of currentNode",
        "\t \t val = evaluation of the state // -10, 0 or +10",
        "\t \t bestValue=max(bestValue,val)",
        "\t return bestValue"
    ]

    $scope.codeUnderligne = [
        0,
        1,

        2,
        3,
        4,

        2,
        3,
        4,

        2,
        3,
        4,

        5
    ];

    $scope.images = [];
    for (var i = 0; i < $scope.codeUnderligne.length; i++) {
        $scope.images.push("app/images/greedy/" + i + ".png")
    }
}])