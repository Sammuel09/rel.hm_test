export const jsonGet = (json, query) => {
  // TASK 1: 
  // Write a function that returns the appropriate value in a JSON object
  // matching the given string representation of the query.
  // Example:
  // const a = {
  //    user: {
  //      id: 'a',
  //      name: {
  //        firstName: "James",
  //        lastName: "Ibori"
  //      },
  //      location: {
  //        city: "Ikoyi",
  //        state: "Lagos",
  //        address: "One expensive house like that"
  //      }
  //    }
  // }
  // const fullName = {`${jsonGet(a, 'user.name.firstName')} ${jsonGet(a, 'user.name.lastName')}` 
  // const address = jsonGet(a, 'user.location.address')

  // ============== CODE GOES BELOW THIS LINE :) ==============
  
  // utility function to query a json object
  // const searchQuery = 'user.location.state'
  // searchQuery.split('.').forEach(
  //   function(searchQuery){
  //     json = json[searchQuery]
  //   }
  // )

  // filter by name, address or type
  // here json comes in as an array from the api data
  // query is the user's search value 
  return json.filter(
    (item) => {
      return item.name.toLowerCase().match(query.toLowerCase()) || 
      item.location.address.toLowerCase().match(query.toLowerCase()) ||
      item.type.toLowerCase().match(query.toLowerCase())
    }
  )
};