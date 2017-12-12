// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.forEach(function(driver){console.log(driver.name)})
}

function logDriversByHometown(drivers, location){
  const hometownMatch = drivers.filter(function(driver){
    return driver.hometown === location
  });
  return hometownMatch.forEach(function(driver){console.log(driver.name)})
}

function driversByRevenue(drivers){
  const newDrivers = [...drivers]
  return newDrivers.sort(function(a,b){return a.revenue - b.revenue})
}

function driversByName(drivers){
  const newDrivers = [...drivers]
  return newDrivers.sort(function(a,b){return a.name.localeCompare(b.name)})
}

function totalRevenue(drivers){
  return drivers.reduce(function(agg, el, i, arr){return agg += el.revenue},0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
