import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductItem from './components/ProductItem';



const products = [
  {
    name: 'iPad',
    price: 100
  },
  {
    name: 'Television',
    price: 2000
  }
]

const HomeChild = () => (
  <div className="homechild">
    <h2>=============Home Child============</h2>
  </div>
)



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      products: sessionStorage.getItem('products')?JSON.parse(sessionStorage.getItem('products')):products
    }

    this.deleteProduct = this.deleteProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);  
    this.editProduct = this.editProduct.bind(this);

  }

  componentWillMount(){
    const products = this.getProducts();
    this.setState({
      products: products 
    });
    
  }

  componentDidUpdate(){
    sessionStorage.setItem('products', JSON.stringify(this.state.products));
  }

  getProducts(){
    return this.state.products;   
  }

  deleteProduct(deletedProductName){     
    let newProducts = [...this.state.products];    
    newProducts = newProducts.filter(product=>{
      return product.name !== deletedProductName;
    });
    console.log(newProducts);

    this.setState({
      products: newProducts
    });
  }

  addProduct(e){
    e.preventDefault();    
   
   const newProduct = {
      name: this.inputName.value,
      price: this.inputPrice.value
    };
     
    this.inputName.value=this.inputPrice.value='';

    this.setState({
      products: [...this.state.products, newProduct]
    });
    
  }


  editProduct(name, price, prevName){    
    let newProducts = [...this.state.products];    
    
    newProducts = newProducts.map((product)=>{
      if(product.name===prevName){
        product.name = name;
        product.price = price;
      }
      return product;
    });

    this.setState({ 
      products: newProducts
     });

  }




  render() {      
  // console.log(this.props.match);
    return (
      
      <div className="App">
       
        <Switch>           
            <Route path={`${this.props.match.path}homeChild`} component={HomeChild}/>        
        </Switch>   
      
     

        <h1>Products Manager <span>using sessionStorage</span></h1>
         
        <h2>Add Product</h2>      
        <div>
          <form>
            <input type="text" ref={input=>this.inputName=input}/>
            <input type="text" ref={input=>this.inputPrice=input}/>
            <button type="submit" onClick={this.addProduct}>Add</button>
          </form>
        </div>
  

        <ul>
        {
          this.state.products.map(product => {
            return (                         

              /*
                extract to sub-component
              */
              // <li key={product.name}>
              //   {product.name + ' | ' + product.price + ' | '}
              //   <button type="button" onClick={()=>this.deleteProduct(product.name)}>Delete</button>
              // </li>

              <ProductItem key={product.name}
                onDelete={this.deleteProduct} 
                onEdit={this.editProduct}
                {...product}//spread operator es6
              />
            )
          })
        }
        </ul>

        

      </div>
    );
  }
}

export default withRouter(App);//to use props.history
