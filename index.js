function findMatching(drivers, name) {
   return drivers.filter(match => match.toUpperCase() === name.toUpperCase())}

   function fuzzyMatch(drivers, string){
    return drivers.filter(match => match.startsWith(string))
}

function matchName (drivers, name){
    return drivers.filter(match => match.name === 'Bobby')
}
   