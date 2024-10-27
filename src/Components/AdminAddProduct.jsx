import React from 'react'
import '../styles/AdminAddProduct.css'

export default function AdminAddProduct() {
  return (
    <div className="addproducts">
        <form action="">
            <fieldset>
                <legend>Product</legend>
                <label htmlFor="">
                    Catagory:
                </label>
                <select>
                    <option >bANDO</option>
                    <option >pELO</option>
                    <option >Bia</option>
                    <option >Giha</option>
                    <option >Chup Mh</option>
                    <option >to bando</option>
                </select>
                <label htmlFor="">
                    Product Name:
                </label>
                <input type="text" />
                <label htmlFor="">Product Price:</label>
                <input type="number" />

            </fieldset>
        </form>
      
    </div>
  )
}
