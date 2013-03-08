var compare = (function() {

	var fillArrayWithDefaultValues = function(length, defaultValue) {
		var array = [];
		for(var i = 0; i < length; i++){
			array.push(defaultValue);
		}
		return array;
	};

	var getList = function(objectsToCompare, defaultValue) {
		var compareList  = {};

		for (var i in objectsToCompare) {
			var obj = objectsToCompare[i];

			// Add properties to list
			for(var propertyName in obj) {
				if(typeof(obj[propertyName]) !== 'object') {
					// create new property if it doesn't exist
					if(!compareList[propertyName]) {
						compareList[propertyName] = fillArrayWithDefaultValues(objectsToCompare.length, defaultValue);//new Array(objectsToCompare.length);
					}
					compareList[propertyName][i] = obj[propertyName];
				} else {
					// Handle properties of type 'object' here

					// create new property if it doesn't exist
					if(!compareList[propertyName]) {
						compareList[propertyName] = {};
					}

					for(var attributeName in obj[propertyName]) {
						// create new attribute if it doesn't exist
						if(!compareList[propertyName][attributeName]) {
							compareList[propertyName][attributeName] = fillArrayWithDefaultValues(objectsToCompare.length, defaultValue);//new Array(objectsToCompare.length);
						}
						compareList[propertyName][attributeName][i] = obj[propertyName][attributeName];
					}
				}
			}
		}

		return compareList;
	};

	var getListGroupBy = function(objectsToCompare, groupBy, defaultValue) {
		var groupedCompareList  = [];
		var groups = [];

		for (var i in objectsToCompare) {
			var obj = objectsToCompare[i];

			var groupWasFound = false;
			for(var x in groups) {
				// Insert into existing group
				if(groups[x].groupName === obj[groupBy])
				{
					groups[x].objects.push(obj);
					groupWasFound = true;
					break;
				}
			}

			// Insert into new group
			if(!groupWasFound) {
				var newGroup = {
					groupName: obj[groupBy],
					objects: [obj]
				};
				groups.push(newGroup);
			}
		}

		// Generate grouped compare list
		for(var y in groups) {
			groupedCompareList.push(getList(groups[y].objects, defaultValue));
		}

		return groupedCompareList;
	};

	return {
		getList: getList,
		getListGroupBy: getListGroupBy
	};

})();