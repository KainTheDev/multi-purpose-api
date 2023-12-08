(async () => {
    const hyperlink = (document.getElementsByClassName('hyperlink'))[0]
    hyperlink.addEventListener('mousedown', () => {
        open(hyperlink.id)
    })
    const response = await fetch('/functions/allEndpoints')
    const data = await response.json()
    const endpoints = data.endpoints
    const endpointsContainer = document.getElementById('endpoints')
    for (const endpoint of endpoints) {
        const endpointElement = document.createElement('h4');
        endpointElement.innerHTML = endpoint
        endpointsContainer.appendChild(endpointElement)
    }
})()