const getUsersApiData = fetch('http://localhost:3001/api/v1/users')
.then(response => response.json())
.catch(err => console.log(err))

const getSleepApiData = fetch('http://localhost:3001/api/v1/sleep')
.then(response => response.json())
.catch(err => console.log(err))

const getHydrationApiData = fetch('http://localhost:3001/api/v1/hydration')
.then(response => response.json())
.catch(err => console.log(err))

const getActivityData = fetch('http://localhost:3001/api/v1/activity')
.then(response => response.json())
.catch(err => console.log(err))

export { getUsersApiData, getSleepApiData, getHydrationApiData, getActivityData}