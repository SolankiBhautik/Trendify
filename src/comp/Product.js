import React from 'react'
import product from "./img/product.jpg"

const Product = () => {
  return (
    <div className='d-flex flex-wrap'>
      <div className="flex- card">
        <img src={product} alt="product" className="card-img-top" />
        <div className="card-body">
          <p className="card-text text-center fs-5 fw-medium">All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
        </div>
      </div>
      <div className="flex-grow-1">
        <div className="container">
          <h2>Spiced Mint Candleaf®</h2>
          <div className="d-flex">
            <p className="text-success fs-2 fw-medium flex-grow-1">$ <span className='price'>69.7</span></p>
            <div className="d-flex flex-column flex-grow-1">
              <p>Quantity</p>
              <div className="d-flex">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product