import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

    const { data: images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            
            {isLoading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">
                {
                    images.map((image) => {
                        return <GifGridItem key={image.id} {...image} />
                    })
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid