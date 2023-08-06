import React, { useEffect } from 'react'
import getGifs from '../helpers/getGifs'

const useFetchGifs = (category) => {
    const [state, setState] = React.useState({
        data: [],
        isLoading: true
    })

    const getImages = async () => {
        const newImages = await getGifs(category)
        setState({
            data: newImages,
            isLoading: false
        })
    }

    useEffect(() => {
        getImages()
    }, []);

    return state
}




export default useFetchGifs