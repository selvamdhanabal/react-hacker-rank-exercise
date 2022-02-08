import React, {useState} from 'react';

const products = [
    {
      id: 1,
      name: 'test 1',
      price: 20,
      date: '2020-03-25'
    },
    {
      id: 2,
      name: 'test 2',
      price: 80,
      date: '2020-06-15'
    },
    {
      id: 3,
      name: 'test 3',
      price: 10,
      date: '2020-09-29'
    },
    {
      id: 4,
      name: 'test 4',
      price: 26,
      date: '2020-01-16'
    },
  ]

function Products() {
    const [productItem, setProducts] = useState(products);

    const priceSortHandler = () => {
        setProducts([...productItem.sort((a, b) => b.price - a.price)]);
    }
  
    const dateSortHandler = () => {
        setProducts([...productItem.sort((a, b) => new Date(b.date) - new Date(a.date))]);
    }
    
  return <div>
      <div className='container-fluid'>
        <div className='row'>
            <button type="button" className='btn btn-primary m-2 p-2' onClick={priceSortHandler} >Sort by Price</button>
            <button type="button" className='btn btn-primary m-2 p-2' onClick={dateSortHandler}>Sort by Date</button>
        </div>
        <table className='table table-bordered table-striped table-hover'>
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
