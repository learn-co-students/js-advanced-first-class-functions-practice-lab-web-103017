// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown == hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  let sortedDrivers = [...drivers]
  return sortedDrivers.sort(function(a, b ) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  let sortedDrivers = [...drivers];
  return sortedDrivers.sort(function(a,b) {return a.name.localeCompare(b.name)});
}

function totalRevenue(drivers) {
  // let revenues = drivers.map(function(driver) {
  //   return driver.revenue;
  // })
  return drivers.reduce(function(acc, num) {
    return acc + num.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return (totalRevenue(drivers))/(drivers.length)
}
