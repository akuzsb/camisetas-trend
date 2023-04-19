import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState({qtyItems: 0, products: []});

  const addItem = (product) => {
    console.log(product);
    // setItemCount(product);
    
    // console.log(product);
    // busco si el producto ya está en el carrito
    const productInCart = itemCount.products.some(
      (item) => item.id === product.id
    );
    if (productInCart) {
      const newProducts = itemCount.products.map((item) => {
        if (item.id === product.id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      setItemCount({
        qtyItems: itemCount.qtyItems + 1,
        products: newProducts,
      });
    } else {
      setItemCount( prevdata =>
        ( { 
            ...prevdata,
        qtyItems: prevdata.qtyItems + 1,
        // products: [...prevdata.products, { ...product, qty: 1 }],
        products: [...prevdata.products, { ...product, qty: 1 }],
      } )
      );
    }
  };

  console.log(itemCount);

  return (
    <CartContext.Provider
      value={{
        itemCount,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

