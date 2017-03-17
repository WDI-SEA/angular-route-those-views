var app = angular.module("YugiFactory", ["ngResource"]);

app.factory("YugiFactory", ["$resource", function($resource){
    var url = "http://yugiohprices.com/api/top_100_cards?";

    return $resource(url, {}, {
        query: { isArray: false }
    })
}])