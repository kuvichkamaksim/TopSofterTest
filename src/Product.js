import React, { Component } from "react";
import "./Product.css";

class Product extends Component {

  addItemToCart = () => {
    this.props.clickHandler(this.props.params);
  }

  render() {
    return (
      <div className="product">
        <div className="product-left">
          <img src={this.props.params.image} className="product-img"
            alt="" />
        </div>

        <div className="product-right">
          <p>{this.props.params.name}</p>
          <p>{this.props.params.price}</p>
          <button onClick={this.addItemToCart}>Add to cart</button>
        </div>
      </div>
    );
  }
}

export default Product;
