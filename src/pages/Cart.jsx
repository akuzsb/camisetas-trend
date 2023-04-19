import { CartContainer } from "../components"
import { useCartContext } from "../context/CartContext"

export const Cart = () => {
    const {itemCount} = useCartContext()
    
    return (
        <div className="container">
            <CartContainer itemCount={itemCount} />
        </div>
    )
}