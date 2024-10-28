import React from 'react'
import '../styles/AdminAddProduct.css'

export default function AdminAddProduct() {
  return (
    <div className="addproduct">
      <form action="">
        <fieldset>
          <label htmlFor="">Category</label>
          <select>
            <option>Dress Materials</option>
            <option>Mobile</option>
            <option>Mobile Accessories</option>
            <option>Electronics</option>
            <option>Groceries</option>
          </select>
          <label htmlFor="">Product Name</label>
          <input type="text" placeholder="Enter the Product" />
          <label htmlFor="">Product Price</label>
          <input type="text" placeholder="Enter the price" />
          <label htmlFor="">Description</label>
          <textarea rows="2" cols="30" placeholder="Enter the details"></textarea>
          <label htmlFor="">Thumbnail</label>
          <input type="text" placeholder="Enter the image address" />
          <label htmlFor="">Ratings</label>
          <input type="number" placeholder="Enter the ratings" />
          <div className="button-container">
            <button className="btn btn-danger">Add Product</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
