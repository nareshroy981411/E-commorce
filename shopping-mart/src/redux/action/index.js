  // for Add Item to Cart

  export const addCard = (product) => {
    return{
        type : 'ADDITEM',
        payload : product
    }
  }

  // for delete item from cart
  export const delCart = (product) => {
    return{
        type : 'DELITEM',
        payload : product
    }
  }
  // In cartActions.js


  
  export const removeFromCart = (product) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: product,
    };
  };