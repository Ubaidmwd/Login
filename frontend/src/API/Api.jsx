export const APICall = async (endpoint,body,method)=> {
    const res = await fetch(endpoint, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization":localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    })
    
    console.log(res)
    return await res.json()

}
export const APICall2 = async (endpoint,method)=> {
    // console.log(method)
    const res = await fetch(endpoint, {
        method: method,
        headers: {
            'Accept': 'application/json',
            "Authorization":localStorage.getItem('token')
        }
    })
    return await res.json()

}