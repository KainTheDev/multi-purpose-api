(async () => {
    const endpointsContainer = document.getElementById('endpoints')
    const response = await fetch('/functions/allEndpoints')
    const data = await response.json()
    const endpoints = data.endpoints
    endpointsContainer.innerHTML = endpoints.map(endpoint =>
        `<div><a href="/api/${endpoint}" target="_blank">${endpoint}</a></div>`
    ).join('')
    console.log(endpointsContainer.innerHTML)
})()