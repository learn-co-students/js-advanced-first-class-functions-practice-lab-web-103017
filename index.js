const logDriverNames = function (array) {
	return array.forEach(function(driver) {
		console.log(driver.name)
	})
}

const logDriversByHometown = function (array, location) {
	array.forEach(function (driver) {
		if (driver.hometown === location) {
			console.log(driver.name)
		}
	})
}

const driversByRevenue = function (array) {
	return array.slice().sort(function (a,b) {
		return a.revenue - b.revenue
	})
}

const driversByName = function (array) {
	return array.slice().sort(function (a,b) {
		return a.name.localeCompare(b.name)
	})
}

const totalRevenue = function (array) {
	return array.reduce(function (acc, currval) {
		return acc + currval.revenue
	}, 0)
}

const averageRevenue = function (array) {
	let sum = array.reduce(function (acc, currval) {
		return acc + currval.revenue
	}, 0)
	return sum/array.length
}
