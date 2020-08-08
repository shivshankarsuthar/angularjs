var app = angular.module("myapp",[]);
app.controller('myctrl',function($scope){
    $scope.items = ["Apple","Banana","Cat","Dog"];
    $scope.text="";
    $scope.addItem = function(){
        if($scope.text != ""){
            $scope.items.push($scope.text);
            $scope.text = "";
        }
    }
    $scope.deleteit = function(index){
        $scope.items.splice(index,1);
    }
});
