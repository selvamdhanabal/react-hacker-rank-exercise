import React from 'react';

function Products({products}) {
    
  return <div>
      <div className='row mx-md-n5'>
        <table className='table table-bordered table-striped table-hover' style={{width: '98%', marginLeft: '20px'}}>
        <caption>List of Products</caption>
        <thead className='thead-dark'>
            <tr>
                <th scope="col">S No</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Date</th>
            </tr>
        </thead>
        <tbody>
            {products.map(product => <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.date}</td>
            </tr>)}
        </tbody>
        </table>
      </div>
  </div>;
}

export default Products;
