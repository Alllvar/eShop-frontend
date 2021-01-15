import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetch from '../../library/fetch';
import { Product } from './types';

const Product = (): JSX.Element | null => {
    const [data, setData] = useState<Product | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect( () => {
        fetch(`/products/${id}`)
            .then(response => {
                setData(response);
            })
    }, []);

    return (
        data
            ? (
                <div className="product-container">
                    <div className="photo-wrap">
                        <img src={data.image} className="img" alt={data.name} width={300} />
                    </div>
                    <div className="product-content">
                        <h1 className="title">{data.name}</h1>
                        <div className="price">{data.price}$</div>
                        <div className="description">{data.description}</div>
                    </div>
                </div>
            )
        : null
    )
};

export default Product;