import React, { Component } from "react";
import Product from "./Product";
import Header from "./Header";
import "./App.css";

import file from "./products.json";

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
      items: [],
      shoppingCartItems: []
		};
	}

  componentDidMount = () => {
    const { products } = file;
    this.setState({items: products});
  }

  addItemToCart = (selectedProduct) => {
    this.setState( (prevState) => {
      const newItemList = prevState.shoppingCartItems;
      newItemList.push(selectedProduct);
      return {items: prevState.items, shoppingCartItems: newItemList};
    });
    console.log(this.state);
  }

  createProductsTable = () => {
    const table = [];
    for (let item of this.state.items) {
      const currentProduct = <Product params={item}
        clickHandler={this.addItemToCart}/>;
      table.push(currentProduct);
    }
    return table;
  }

  render() {
    return (
      <div className="App">
        <Header items={this.state.shoppingCartItems}/>
        <div className="App-main">
          {this.createProductsTable()}
        </div>
      </div>
    );
  }
}

export default App;
