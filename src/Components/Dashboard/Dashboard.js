import React, { Component } from "react";
import Product from "../Product/Product.js";
import "./Dashboard.css";

class Dashboard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="mainDashboardContainer">

                {this.props.inventoryList.map(item => {
                return(
                  <Product 
                  key={item.product_id} 
                  item={item}
                  getSelectedProduct={this.props.getSelectedProduct}
                  selectedProduct={this.props.selectedProduct}
                  getAllItems={this.props.getAllItems}
                  deleteItem={this.props.deleteItem}
                  />
                  
                )
              })}
            </div>
        )
    }
}

export default Dashboard;