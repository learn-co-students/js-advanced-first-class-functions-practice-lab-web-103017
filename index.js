// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function(driver){
    if (driver.hometown === town) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  let driversCopy = drivers.slice()
  return driversCopy.sort(function(a, b){
      return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  let driversCopy2 = drivers.slice()

  function compare(a,b){
    if (a.name[0] > b.name[0]) {
        return 1
    }
    else if (a.name[0] < b.name[0]) {
        return -1
    } else {
      return 0
    }
  }
  return driversCopy2.sort(compare)

}

function totalRevenue(drivers) {
  return drivers.reduce(function(acc, driver){
    return acc + driver.revenue
  }, 0)
}

function averageRevenue(drivers) {
    let revs = drivers.map(function(driver){return driver.revenue})
    sum = revs.reduce(function(total, num){return total + num})
    return sum / revs.length
}
