var app = angular.module('Lab');

app.controller('mainCtrl', function($scope){
    console.log('mainCtrl is here');

    $scope.params = {
    	t: 12,
    	r: 3,
    	l: 1,
    	deltaT: 0
    };

    $scope.flotPoints = [{ data: [], yaxis: 1, label: "sin" }];

    $scope.flotOptions = {
        yaxis: {
            min: -20,
            max: 20,
            ticks: 20
        },
        grid: { hoverable: true, clickable: true },
        mousedownCallback: function (point) {
            console.log(point);
        }
    };

    $scope.sliderOptions = {
            min: 0,
            max: 1,
            step: 0.01,
            precision: 2,
            orientation: 'horizontal',  // vertical
            handle: 'round', //'square', 'triangle' or 'custom'
            tooltip: 'show', //'hide','always'
            tooltipseparator: ':',
            tooltipsplit: false,
            enabled: true,
            naturalarrowkeys: false,
            range: false,
            ngDisabled: false,
            reversed: false,
            value: 0 
        };

    var plot = function (params) {
        var points = [],
            l = +params.l,
            r = +params.r,
            t = +params.deltaT;
        for (var i = l; i <= r; i += 0.1) {
           points.push([i, Math.sin(i) * t + 2 * Math.cos(i)]);
        }
        return points;
    };


    $scope.addParams = function (data) {

        // show slider
        $scope.showChart = true;
        
        // change t 
        $scope.sliderOptions.max = $scope.params.t;

        // plot with start delta t
        $scope.flotPoints[0].data = plot($scope.params);
    };

    $scope.sliding = function () {
	   	$scope.params.deltaT = $scope.sliderOptions.value;
        $scope.flotPoints[0].data = plot($scope.params); 
    };

});