function findMatching(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function(driver) {
    return driver[0] === name[0]
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name === name
  })
}
