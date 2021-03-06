/**
 * Created by sheldon on 2016/3/25.
 */
'use strict';

define(function (require, exports, module) {
    module.exports = function (app) {
        require('services/bridgeService.js')(app);
        require('services/indexService.js')(app);
        require('services/groupBuyService.js')(app);
        app.register.controller('GroupBuyListCtrl', ['$scope', '$location', 'Bridge', 'Index', 'City', 'GroupBuy',
            function ($scope, $location, Bridge, Index, City, GroupBuy) {

                $scope.initChoose = function () {
                    $scope.selectProjectName = '全部项目';
                    $scope.selectCityName = '全国';
                    $scope.selectSortName = '智能排序';
                    $scope.selectedCity = 0;
                    $scope.selectedType = 0;
                    $scope.selectedSort = '';

                    Index.get().$promise.then(function (res) {
                        if (res.result == 0) {
                            $scope.projects = res.data.showIndexResponse.itemCategoryList;
                        }
                        console.log(res);
                    }).catch(function (err) {
                        console.log(err)
                    });
                    City.query().$promise.then(function (res) {
                        if (res.result == 0) {
                            $scope.citys = res.data.citySelectResponse;
                        }
                        console.log(res);
                    }).catch(function (err) {
                        console.log(err)
                    })
                };

                $scope.initList = function () {
                    GroupBuy.list().query({
                        cityId: $scope.selectedCity,
                        typeId: $scope.selectedType,
                        sortByDesc: $scope.selectedSort
                    }).$promise.then(function (res) {
                        $scope.goods = res.data.teamBuyGoodsList;
                        console.log(res);
                    }).catch(function (err) {
                        console.log(err)
                    })
                };

                $scope.initChoose();

                $scope.initList();

                $scope.$parent.selectState = 0;

                $scope.goToDetail = function (x) {
                    Bridge.jumpTo(encodeURI($location.absUrl().split('#')[0] + '#/groupbuy/detail?goodsId=' + x), '拼团详情');
                };

                $scope.setProject = function (x,name) {
                    $scope.selectedType = x;
                    $scope.selectProjectName = name;
                    $scope.$parent.selectState = 0;
                    $scope.initList();

                };

                $scope.setCity = function (x,name) {
                    $scope.selectedCity = x;
                    $scope.selectCityName = name;
                    $scope.$parent.selectState = 0;
                    $scope.initList();
                };

                $scope.setSort = function (x,name) {
                    $scope.selectedSort = x;
                    $scope.selectSortName = name;
                    $scope.$parent.selectState = 0;
                    $scope.initList();
                }

            }]);
    }
});