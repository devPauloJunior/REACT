import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [ data, setData ] = useState(null)
    const [ config, setConfig ] = useState(null)
    const [ method, setMethod ] = useState(null)
    const [ itemId, setItemId ] = useState(null)
    const [ callFetch, setCallFetch ] = useState(false)
    const [ error, setError ] = useState(false)

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            setMethod('POST')
        } else if (method === 'DELETE') {
            setConfig({
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setMethod('DELETE')
            setItemId(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                
                setData(json)
                setMethod(null)
                setError(null)
            } catch (error) {
                console.log(error.message)
                setError('Houve um erro ao carregar os dados!')
            }
        }
        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST') {
                let fetchOpttions = [ url, config]
                const res = await fetch(...fetchOpttions)
                const json = await res.json()
                setCallFetch(json)
            } else if ( method === 'DELETE' ) {
                const deleteUrl = `${url}/${itemId}`
                const res = await fetch(deleteUrl, config)
                const json =  await res.json()
                setCallFetch(json)
            }
        }
        httpRequest()
    }, [config])

    console.log(config)

    return { data, httpConfig, error }

}