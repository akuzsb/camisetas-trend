import {useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
export const CartContainer = ({itemCount}) => {
    
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setCart(itemCount.products)
    }, [itemCount])

    return (
        <div>
      <Table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id}>
              <td>{item.titulo}</td>
              <td>{item.qty}</td>
              <td>${item.precio}</td>
              <td>${item.precio * item.qty}</td>
              <td>
                <Button variant="danger" >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Total:</td>
            <td colSpan={2}>
              ${cart.reduce((total, item) => total + item.precio * item.qty, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
    )
}
