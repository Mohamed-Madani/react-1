import Product from './Product'

function Image () {
    return (
        <div>
            <img src={Product.image} alt={Product.name} />
        </div>
    )
}

export default Image