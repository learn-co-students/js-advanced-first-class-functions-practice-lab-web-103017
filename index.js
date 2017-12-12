// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver){console.log(driver.name)})
};

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (driver){
    if (driver.hometown == location) {
      console.log(driver.name);
    };
  });
};

function driversByRevenue(driver) {
  let arr = [...driver]
  arr.sort(function(a,b){return a.revenue - b.revenue})
  return arr
};

function driversByName(driver) {
  let arr = [...driver]
  return arr.sort(function(a,b){return a.name.localeCompare(b.name)})
};

function totalRevenue(driver) {
  let arr = []
  driver.forEach(function (driver) {
    arr.push(driver.revenue)
  })
  return arr.reduce(function(a,b){return a + b
  })
};

function averageRevenue(driver) {
  return totalRevenue(driver) / driver.length
};
