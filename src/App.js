
import React, { Component } from "react";
import './App.css';
import CartItems from './components/CartItems';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';



class App extends Component {
  state = {
    products:
      [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
      ], 
    cartItemList: 
      [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
  }

  addItemToList = (product) => {
      console.log("i have received", product)
      this.setState(prevState => ({cartItemList: prevState.cartItemList.concat(product)}))

  }

  render() {
    return (
      <div>
        <CartHeader />
        <CartItems products={this.state} addItemToList={this.addItemToList}/>
        <CartFooter copyright="2016" />

      </div>
    )
  };


}

export default App;