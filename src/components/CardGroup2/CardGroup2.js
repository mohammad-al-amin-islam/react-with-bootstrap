import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products = [
        { name: 'laptop 1', price: 1000, id: 1 },
        { name: 'laptop 2', price: 1000, id: 2 },
        { name: 'laptop 3', price: 1000, id: 3 },
    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2 product={product} key={product.id}></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;