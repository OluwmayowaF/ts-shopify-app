const baseUrl = "https://f8cdf430c8e4.ngrok.io"
// const baseUrl = "https://dev2.tracksend.co",

const sendToTracksendUrl = '/api/shopifyevents'
const sendToTracksend = async (action, data, shop) => {
    const resp = await fetch(`${baseUrl}${sendToTracksendUrl}`, {
        method: 'POST',
        body: JSON.stringify({
            shop, action, data
        })
    })
    const result = await resp.json();    
}

module.exports = sendToTracksend;