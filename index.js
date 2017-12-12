// Code your solution in this file!
const logDriverNames = function(driver){
  for(i = 0; i < driver.length; i++){
    console.log(driver[i].name)
  }
}

const logDriversByHometown = function(driver, hometown){
  for(i = 0; i < driver.length; i++){
    if(driver[i].hometown == hometown){
      console.log(driver[i].name)
    }
  }
}

const driversByRevenue = function(drivers){
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
}

const driversByName = function(drivers){
  return drivers.slice().sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
}

const totalRevenue = function(drivers){
  const r = []
  const a = drivers.filter(function(obj){
    r.push(obj.revenue)
  });

  return r.reduce(function getSum(a, b) {
    console.log(a)
    return a + b;
  });
}

const averageRevenue = function(drivers){
  const r = []
  const a = drivers.filter(function(obj){
    r.push(obj.revenue)
  });

  const total = r.reduce(function getSum(a, b) {
    console.log(a)
    return a + b;
  });

  return total/r.length

}
