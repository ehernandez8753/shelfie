import React, {Component} from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import {HashRouter, Link, Switch, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Form from "./Components/Form/Form.js";
import Header from "./Components/Header/Header.js";
import "./reset.css";
import './Components/Header/Header.css';


class App extends Component{
  constructor(){
    super();

    this.state = {
      inventoryList: [],
      selectedProduct: ""
    }

    this.getSelectedProduct = this.getSelectedProduct.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

 componentDidMount(){
  this.getAllItems();
 }
 getSelectedProduct(selectedId){
  this.setState({selectedProduct: selectedId});
 }

 getAllItems(){
   console.log("Got all items on screen");
  axios.get("/api/inventory")
  .then(res => {
    this.setState({inventoryList: res.data});
  })
  .catch(error => {console.log("Error on Update: ", error)});
 }

 addItem(product_name, product_price, product_image_url){
  axios.post("/api/product", {product_name, product_price, product_image_url})
  .then(res => {
    console.log("Added Item");
  })
  .catch(error => {console.log("Error on Add Item: ", error)});
}

editItem(product_id, product_name, product_price, product_image_url){
  axios.put(`/api/inventory/${product_id}?product_name=${product_name}&product_price=${product_price}&product_image_url=${product_image_url}`)
  .then(res => {
    console.log("Edited item");
  })
  .catch(error => {console.log("Error on Edit: ", error)});
}

deleteItem(product_id) {
  axios.delete(`/api/inventory/${product_id}`)
  .then(res => {
    console.log("Removed Item");
  })
  .catch(error => {console.log("Error on Delete: ", error)});
}

  render(){
    return (
      <HashRouter>
        <div className="App">
          <Header></Header>
          <div >
            <Switch>
              <Route 
                path="/" exact
                render={(props) => 
                <Dashboard
                  inventoryList = {this.state.inventoryList}
                  selectedProduct = {this.state.selectedProduct}
                  getSelectedProduct = { this.getSelectedProduct}
                  deleteItem = {this.deleteItem}
                  getAllItems = {this.getAllItems}
                />}
              />
              <Route
                path="/add"
                render={(props) =>
                  <Form 
                  inventoryList = {this.state.inventoryList}
                  getAllItems = {this.getAllItems}
                  addItem = {this.addItem} 
                  editItem = {this.editItem}
                  selectedProduct = {this.state.selectedProduct}
                />
                }
              />
            </Switch>

          </div>

        </div>
      </HashRouter>
      
    );
  }
  
}

export default App;
