import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar'

export default function AdminViewitems() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        function fetchData() {
            axios.get('http://localhost:2626/products')
                .then((res) => {
                    setProducts(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);

    return (
        <>
        <div className='AdminViewItems'>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
        </>
    );
}
