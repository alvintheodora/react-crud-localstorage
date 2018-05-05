import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import blue from 'material-ui/colors/blue';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },    
    buttonblue: {
      color: theme.palette.getContrastText(blue[500]),
      backgroundColor: blue[500],
      '&:hover': {
        backgroundColor: blue[700],
      },
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
  });


class ProductItem extends Component {

  constructor(props){
    super(props);   

    this.state = {
        isEdit: false,
        name: '',
        price: ''
    };

    this.deleteProduct = this.deleteProduct.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
      return {
        isEdit: prevState.isEdit,
        name: nextProps.name,
        price: nextProps.price
      };
  }


  deleteProduct(){     
    this.props.onDelete(this.props.id);
  }

  onEdit(){
    this.setState({
        isEdit: true
    });  
  }

  editProduct(e){     
    e.preventDefault();

    this.props.onEdit(this.state.name, this.state.price, this.props.id);

    this.setState({
        isEdit: false,
        name: '',
        price: ''
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { name, price, classes } = this.props;    
    return (           
        <li>
              
            {
                this.state.isEdit? (
                    <form>                 
                        <TextField
                            id="name"
                            label="Product Name"        
                            margin="normal"
                            defaultValue={this.state.name}       
                            onChange={this.handleChange('name')}  
                            className={classes.textField}
                        />
                        <TextField
                            id="price"
                            label="Price"        
                            margin="normal"
                            defaultValue={this.state.price}       
                            onChange={this.handleChange('price')}  
                            className={classes.textField}
                        />
                        <Button size="small" variant="raised" color="secondary" className={classes.buttonblue} onClick={this.editProduct}>Save</Button> 
                    </form>                
                ):(
                    <span>
                        {name + ' | ' + price + ' '}   
                        <Button size="small" variant="raised" color="secondary" className={classes.buttonblue} onClick={this.onEdit}>Edit</Button> 
                        <Button size="small" variant="raised" color="secondary" className={classes.button} onClick={this.deleteProduct}>Delete</Button>                      
                    </span>
                )
            }  
            
        </li>
           
    );
  }
}

export default withStyles(styles)(ProductItem);
