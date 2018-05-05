import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductItem from './components/ProductItem';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';



const products = [
  {
    id: 12345,
    name: 'iPad',
    price: 100
  },
  {
    id: 23456,
    name: 'Television',
    price: 2000
  }
]

const HomeChild = () => (
  <div className="homechild">
    <h2>=============Home Child============</h2>
  </div>
)

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

});


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      products: sessionStorage.getItem('products')!=='[]' && sessionStorage.getItem('products')!==null?JSON.parse(sessionStorage.getItem('products')):products,
      name:'',
      price: ''
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
    console.log(this.state);
  }

  componentDidUpdate(){
    sessionStorage.setItem('products', JSON.stringify(this.state.products));
  }

  getProducts(){
    return this.state.products;   
  }

  deleteProduct(id){     
    let newProducts = [...this.state.products];    
    newProducts = newProducts.filter(product=>{
      return product.id !== id;
    });
   

    this.setState({
      products: newProducts
    });
  }

  addProduct(e){
    e.preventDefault();    
   
   const newProduct = {
      id: Date.now(),
      name: this.state.name,
      price: this.state.price
    };     
   

    this.setState({
      products: [...this.state.products, newProduct],
      name: '',
      price: ''
    });
    
  }


  editProduct(name, price, prevID){    
    let newProducts = [...this.state.products];    
    
    newProducts = newProducts.map((product)=>{
      if(product.id===prevID){
        product.name = name;
        product.price = price;
      }
      return product;
    });

    this.setState({ 
      products: newProducts
     });

  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };




  render() {      
  // console.log(this.props.match);

    const { classes } = this.props;
    return (
      
      <div className="CRUD">
       
        <Switch>           
            <Route path={`${this.props.match.path}homeChild`} component={HomeChild}/>        
        </Switch>   
      
     

        <h1>CRUD <span>using sessionStorage</span></h1>
         
        <h2>Product Manager</h2>    
        <code>sessionStorage means data will persist until the tab is closed</code>  
        <div>
          <form>
            <TextField
               
              id="name"
              label="Product Name"        
              margin="normal"
              value={this.state.name}       
              onChange={this.handleChange('name')}  
              className={classes.textField}
              inputRef={input=>this.inputName=input}

            />
            <TextField
              id="price"
              label="Price"        
              margin="normal"
              value={this.state.price}       
              onChange={this.handleChange('price')}  
              className={classes.textField}
            />
            <Button size="small" variant="raised" color="primary" className={classes.button} onClick={this.addProduct}>Add</Button>  
           
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

              <ProductItem key={product.id}
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

export default withRouter(withStyles(styles)(App));//to use props.history
