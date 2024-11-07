import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateProducts() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    
    const param = useParams();

    useEffect(() => {
        axios.get(`http://localhost:2626/Product/${param.id}`)
            .then((res) => {
                console.log(res.data);        
                setName(res.data.name);
                setPrice(res.data.price);
                setImage(res.data.image);
                setRating(res.data.rating);
                setDescription(res.data.description);
                setCategory(res.data.category);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [param.id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = { category, name, price, image, rating, description };

        axios.put(`http://localhost:2626/Product/${param.id}`, updatedData)
            .then(() => {
                alert("Product updated successfully!");
            })
            .catch((err) => {
                console.error("Error updating product:", err);
            });
    };

    return (
        <div className="updateproducts">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="category">Category</label>
                    <select required value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>Dress Materials</option>
                        <option>Mobile</option>
                        <option>Mobile Accessories</option>
                        <option>Electronics</option>
                        <option>Groceries</option>
                    </select>
                    
                    <label htmlFor="name">Product Name</label>
                    <input required type="text" placeholder="Enter the Product" value={name} onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="price">Product Price</label>
                    <input required type="text" placeholder="Enter the price" value={price} onChange={(e) => setPrice(e.target.value)} />

                    <label htmlFor="description">Description</label>
                    <textarea required rows="2" cols="30" placeholder="Enter the details" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                    <label htmlFor="image">Thumbnail</label>
                    <input required type="text" placeholder="Enter the image address" value={image} onChange={(e) => setImage(e.target.value)} />

                    <label htmlFor="rating">Ratings</label>
                    <input required type="number" placeholder="Enter the ratings" value={rating} onChange={(e) => setRating(e.target.value)} />

                    <button type="submit" className="btn btn-danger updatebtn">Update</button>
                </fieldset>
            </form>
        </div>
    );
}

export default UpdateProducts;
