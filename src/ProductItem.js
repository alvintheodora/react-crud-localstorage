import React, { Component } from 'react';
import './App.css';

class ProductItem extends Component {

  constructor(props){
    super(props);   

    this.state = {
        isEdit: false
    };

    this.deleteProduct = this.deleteProduct.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }


  deleteProduct(){     
    this.props.onDelete(this.props.name);
  }

  onEdit(){
    this.setState({
        isEdit: true
    });  
  }

  editProduct(e){     
    e.preventDefault();

    this.props.onEdit(this.inputName.value, this.inputPrice.value, this.props.name);

    this.setState({
        isEdit: false
    });
  }

  render() {
    const { name, price } = this.props;    
    return (           
        <li>
              
            {
                this.state.isEdit? (
                    <form>
                        <input type="text" ref={input=>this.inputName=input} defaultValue={name}/>
                        <input type="text" ref={input=>this.inputPrice=input} defaultValue={price}/>
                        <button type="submit" onClick={this.editProduct}>Save</button>
                    </form>                
                ):(
                    <span>
                        {name + ' | ' + price + ' | '}   
                        <button type="button" onClick={this.onEdit}>Edit</button>
                        <button type="button" onClick={this.deleteProduct}>Delete</button>   
                    </span>
                )
            }  
            
        </li>
           
    );
  }
}

export default ProductItem;
