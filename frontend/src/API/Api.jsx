export const APICall = async (endpoint,body,method,token = '')=> {
    const res = await fetch(endpoint, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)

    })
    console.log(res)
    return await res.json()

}