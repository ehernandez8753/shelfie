import React, { Component } from "react";
import './Form.css';

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            editing: false,
            imageUrl: "",
            productName: "",
            price: ""
        }

        this.clearAllInputs = this.clearAllInputs.bind(this);
    }

    componentDidUpdate(prevProps, prevStates){
        if(prevProps.selectedProduct !== this.props.selectedProduct && this.props.selectedProduct !== ""){
            this.toggleEditing();
            let chosenProduct = this.props.inventoryList.find((item) => {return item.product_id === this.props.selectedProduct});
            this.setState({
                productName: chosenProduct.product_name,
                price: chosenProduct.product_price,
                imageUrl: chosenProduct.product_image_url
            })

        }
    }

    toggleEditing(){
        let newEditState = !this.state.editing;
        this.setState({
            editing: newEditState
            
        })
        if(this.state.editing === true){
            this.props.getAllItems();
        }else{
            this.props.getAllItems();
        }
    }

    clearAllInputs(){
        this.setState({
            imageUrl: "",
            productName: "",
            price: ""
        })
    }
    onChangeImageUrl(newImageUrl){
        this.setState({
            imageUrl: newImageUrl
        })
    };
    onChangeProductName(newProductName){
        this.setState({
            productName: newProductName
        })
    };
    onChangePrice(newPrice){
        this.setState({
            price: newPrice
        })
    };

    render(){
        return(
            <div className="mainFormContainer">
                <img className="formInputImage"  src={this.state.imageUrl === "" ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACxCAMAAADOHZloAAAAGFBMVEX///9/f3+1tbXS0tKUlJSzs7PMzMzV1dXMJtGKAAABDUlEQVR4nO3QsRHAIAwEQRkD6r9jKvC8A8K9BqTfenJzxNZ+Y1136nxqr/zy/LG86NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NCh89kBXAU59ob/lg8AAAAASUVORK5CYII="
                : this.state.imageUrl
                }/>
                <div className="formInputContainer">
                    <h2 className="formInputTitle">Image URL:</h2>
                    <input value={this.state.imageUrl} onChange={(event) => {this.onChangeImageUrl(event.target.value)}}/>
                </div>
                <div className="formInputContainer">
                    <h2 className="formInputTitle">Product Name:</h2>
                    <input value={this.state.productName} onChange={(event) => {this.onChangeProductName(event.target.value)}}/>
                </div>
                <div className="formInputContainer">
                    <h2 className="formInputTitle">Price:</h2>
                    <input type="number" value={this.state.price} onChange={(event) => {this.onChangePrice(event.target.value)}}/>
                </div>
                <div className="formButtonContainer">
                    <button className="formButton" onClick={() => {this.clearAllInputs()}}>Cancel</button>
                    <button className="formButton" onClick={this.state.editing === false ?
                        () => 
                        {this.props.addItem(this.state.productName, this.state.price, this.state.imageUrl);
                        this.props.getAllItems();
                        this.clearAllInputs();
                        }
                        :
                        () => {
                            this.props.editItem(this.props.selectedProduct, this.state.productName, this.state.price, this.state.imageUrl);
                            this.props.getAllItems();
                            this.clearAllInputs();
                            this.toggleEditing();
                        }
                        }>
                        {this.state.editing === false ? "Add to Inventory" : "Save Changes"}
                    </button>
                </div>
            </div>
        )
    }
}

export default Form;