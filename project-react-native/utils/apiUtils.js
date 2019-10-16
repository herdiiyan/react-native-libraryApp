export async function filterFetch(url, options) {
    return await fetch(url, options).then(respone => {
        if (!respone.ok) {
            throw new Error(respone.statusText || 'Unknown Server')
        }
        return respone.json()
    }).then(json => {
        if (json.responseStatus.responseCode != '00') {
            throw new Error(json.responseStatus.responseDesc || 'Unknown Server')
        }
        return json.data
    })
}