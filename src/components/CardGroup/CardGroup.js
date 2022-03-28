import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { name: 'laptop 1', price: 1000, id: 1 },
        { name: 'laptop 2', price: 1000, id: 2 },
        { name: 'laptop 3', price: 1000, id: 3 },
    ]
    return (
        <div>
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-dark">Dark</button>

            <button type="button" className="btn btn-link">Link</button>
            <h1>This is my card group</h1>
            <div className="card-group">
                {
                    products.map(product => <Card product={product} key={product.id}></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup; <h1>This is my card group</h1>