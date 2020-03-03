import React, { Component } from 'react'

class ProductForm extends Component {
  //set class instance state variable

  handleNewProductChange = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value

    const newProduct = { /* spread of state's newProduct item */ }
    newProduct[attributeName] = attributeValue

    this.setState({ newProduct })
  };

  addNewProduct = (event) => {
    event.preventDefault()

    this.props.addNewProductToProductList(/* state's newProduct item */)
  };

  render () {
    return (
      <div>
        <form onSubmit={this.addNewProduct}>
          <div><input name="productName" type="text" placeholder="Name" onChange={this.handleNewProductChange} /></div>
          <div><input name="description" type="text" placeholder="Description" onChange={this.handleNewProductChange} /></div>
          <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange} /></div>
          <div><input type="submit" value="Create New Product" /></div>
        </form>
      </div>
    )
  }
}

export default ProductForm
