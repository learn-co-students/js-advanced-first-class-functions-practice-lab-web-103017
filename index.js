// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
  console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown=== location ){
     console.log(driver.name)
    }
  });
}

function driversByRevenue(drivers){
  let newDrivers = [...drivers]
  const numsort = function(a,b){return a.revenue - b.revenue};
  return newDrivers.sort(numsort);
}

function driversByName(drivers){
  let newDrivers = [...drivers]
  return newDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers){
  const sum = function(agg, b){return agg + b.revenue};
  return drivers.reduce(sum, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
