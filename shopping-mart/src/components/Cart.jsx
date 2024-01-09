
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard,  delCart   } from '../redux/action';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.HandleCart);

  const handleButton = (product, type) => {

    if (type === 'add') {
      product.qty += 1;
    } else {
      product.qty -= 1;
      if (product.qty <= 0) {
      }
    }
    dispatch(addCard({...product, qty: product.qty}));
    dispatch(delCart({...product, qty: product.qty}));
  };


  return (
    <div className='hero'>
      {products.map((product) => (
        <div key={product.id} className="row">
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.title}
              height={200}
              width={180}
            />
          </div>
          <div className="col-md-4">
            <h3>{product.title}</h3>
            <p className="lead fw-bold">
              {product.qty} x ${product.price} = ${product.qty * product.price}
            </p>
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => handleButton(product, 'subtract')}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => handleButton(product, 'add')}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
