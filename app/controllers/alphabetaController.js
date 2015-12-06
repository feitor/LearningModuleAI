app.controller('alphabetaController', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {

 
    $scope.code = [
      "function alphabeta(node, depth, α, β, maximizingPlayer)",
      "\t if depth = 0 or node is a terminal node",
      "\t \t return the heuristic value of node",
      "\t if maximizingPlayer",
      "\t \t v := -∞",
      "\t \t for each child of node",
      "\t \t \t v := max(v, alphabeta(child, depth - 1, α, β, FALSE))",
      "\t \t \t α := max(α, v)",
      "\t \t \t if β ≤ α",
      "\t \t \t \t break (* β cut-off *)",
      "\t \t return v",
      "\t else",
      "\t \t v := +∞",
      "\t \t for each child of node",
      "\t \t \t v := min(v, alphabeta(child, depth - 1, α, β, TRUE))",
      "\t \t \t β := min(β, v)",
      "\t \t \t if β ≤ α",
      "\t \t \t \t break (* α cut-off *)",
      "\t \t return v"
    ]

    $scope.questions = [
        { line: 5, question: "what will the value of α be after the next step ?", answer: 10 },
        { line: 24, question: "what is the value of the evaluation of the current node ", answer: 10 },
        { line: 29, question: "Wich line will you return to ? ", answer: 14 },
        { line: 34, question: "what will the depth value be after the returning ? ", answer: 3 },
        { line: 48, question: "what is the value of the evaluation of the current node ?", answer: -10 },
        { line: 52, question: "Can you cut of this node ? (y/n)", answer: "y" },
        { line: 54, question: "Wich line will you return to ? ", answer: 6 },

    ]


    $scope.codeUnderligne = [
        0,
        1,
        3,
        4,
        5,
        6,
        7,
        8,

        5,
        6,

        0,
        1,
        3,
        11,
        12,
        13,
        14,

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
        10,

        14,
        15,
        16,
        17,
        18,

        6,
        7,
        8,

        5,
        6,

        0,
        1,
        3,
        11,
        12,
        13,
        14,

        0,
        1,
        2,

        14,
        15,
        16,
        17,
        18,

        6,
        7,
        8,
        10

    ];

    $scope.images = [];
    for (var i = 0; i < $scope.codeUnderligne.length; i++) {
        $scope.images.push("app/images/alphabeta/" + i + ".png")
    }
    

}])