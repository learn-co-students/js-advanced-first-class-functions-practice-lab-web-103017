function logDriverNames(driver) {
  driver.forEach(function(el) {
    console.log(el.name);
  });
};

function logDriversByHometown(driver, location) {
  driver.forEach( function(el) {
    if (el.hometown === location) {
      console.log(el.name);
    };
  });
};

function driversByRevenue(driver) {
  return sorted = driver.slice().sort(function(a, b){return a.revenue - b.revenue});
};

function driversByName(driver) {
  return driver.slice().sort(function(a,b) { 
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(driver) { 
  const revenues = ((driver).map(function(el){
    return el.revenue
  }))
  return revenues.reduce((a,b) =>
     a + b);
}

function averageRevenue(driver) {
  const sum = totalRevenue(driver);
  const avg = sum / driver.length;
  return avg
}













