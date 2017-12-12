// Code your solution in this file!

logDriverNames = function(drivers) {
  for (let driver of drivers) {
    console.log(driver.name)
  }
}

logDriversByHometown = function(drivers, hometown) {
  for (let driver of drivers) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  }
}

driversByRevenue = function(drivers) {
  output = [...drivers]
  whatever = output.sort(function(a, b){
    return a.revenue - b.revenue
  })
  return whatever
}

driversByName = function(drivers) {
  x = [...drivers];
  return x.sort(function(a,b){
    return a.name.localeCompare(b.name);
  });
}

totalRevenue = function(drivers) {
  newDrivers = [...drivers]
  output = newDrivers.reduce(function(acc, elem){
    return acc + elem.revenue
  }, 0)
  return output
}

averageRevenue = function(drivers) {
  // console.log(Object.keys(drivers).count())
  return totalRevenue(drivers) / Object.keys(drivers).length
}
