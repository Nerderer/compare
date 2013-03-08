function CompareCtrl($scope) {

	var selectedProducts = [];

	// allProducts is loaded from all_products.js.
	// This is just for demo purposes, and should probably be a more dynamic list in a real scenario.
	$scope.allProducts = allProducts;

	$scope.compareList = [];

	$scope.updateGroup = function () {
		$scope.compareList = compare.getListGroupBy(selectedProducts, $scope.groupBy, '-');
	};

	$scope.addToCompareList = function (item) {
		selectedProducts.push(item);
		$scope.updateGroup();
	};
}