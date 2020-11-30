import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import '../styles/product.scss';

function Product() {
    const [data, setData] = useState({});
    let { id } = useParams();

    useEffect( () => {
        axios.get(`http://localhost:8081/products/${id}`)
        
            .then(res => {
                setData(res.data.result);
            })
    }, []);

    return (
        <div className="product-container">
            <div className="photo-wrap">
                <img src={data.image} className="img" />
            </div>
            <div className="product-content">
                <h1 className="title">{data.name}</h1> 
                <div className="price">{data.price}$</div>
                <div className="description">{data.description}</div>
            </div>
        </div>
    )
}

export default Product;