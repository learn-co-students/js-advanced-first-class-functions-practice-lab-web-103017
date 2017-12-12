// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(x => console.log(x.name))
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(x) {
    if (x.hometown === location) {
      console.log(x.name);
    };
  })
}

function driversByRevenue(driver){
  let newobj = driver.slice().sort(function(a,b){return a.revenue - b.revenue})
  return newobj
}


function driversByName(driver){
  let newobj = driver.slice().sort((a,b) => a.name.localeCompare(b.name));
  return newobj
}

function totalRevenue(driver){
  let arr = []
  driver.forEach(x => arr.push(x.revenue))
  return arr.reduce(function (a, b) {
      return a + b;
  }, 0);
}

function averageRevenue(driver){
  return totalRevenue(driver)/driver.length
}
