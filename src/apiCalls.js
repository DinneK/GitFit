function getUsersApiData() {
    return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .catch(err => console.log(err))
}

function getSleepApiData() {
    return fetch('http://localhost:3001/api/v1/sleep')
    .then(response => response.json())
    .catch(err => console.log(err))
}

function getHydrationApiData() {
    return fetch('http://localhost:3001/api/v1/hydration')
    .then(response => response.json())
    .catch(err => console.log(err))
}

function getActivitiesData() {
    return fetch('http://localhost:3001/api/v1/activity')
    .then(response => response.json())
    .catch(err => console.log(err))
}

export { getUsersApiData, getSleepApiData, getHydrationApiData, getActivitiesData}