import React, { Component } from "react";
import "./Product.css";


class Product extends Component{
    constructor(props){
        super(props);

        this.state = {
            productImageUrl: this.props.item.product_image_url,
            productName: this.props.item.product_name,
            productPrice: this.props.item.product_price
        }
    }

    componentDidUpdate(prevProps, prevStates){
        if(prevProps !== this.props && this.props.selectedProduct !== ""){
            this.setState({
                productName: this.props.item.product_name,
                price: this.props.item.product_price,
                imageUrl: this.props.item.product_image_url
            })

        }
    }

    render(){
        return(
            <div className="mainProductContainer">
                <img className="productImage" src={this.state.productImageUrl}/>
                <div className="productRightContainer">
                    <div className="productInfoContainer">
                        <h2>{this.state.productName}</h2>
                        <h3>{this.state.productPrice}</h3>
                    </div>
                    <div className="productButtonContainer">
                        <button onClick={() => {
                            this.props.deleteItem(this.props.item.product_id);
                            this.props.getAllItems();
                        }} className="productButton">Delete</button>
                        <button className="productButton" onClick={() => {
                            this.props.getSelectedProduct(this.props.item.product_id);
                        }}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;