import { useState } from 'react';
import Products from './component/Products';
import SlideShow from './component/SlideShow';

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

function App() {
  const [productItem, setProducts] = useState(products);

  const priceSortHandler = () => {
      setProducts([...productItem.sort((a, b) => b.price - a.price)]);
  }

  const dateSortHandler = () => {
      setProducts([...productItem.sort((a, b) => new Date(b.date) - new Date(a.date))]);
  }
  return (
    <div className="App">
      <div className='row'>
        <div className='container-fluid text-center'><h1>Hacker Rank React Excerise</h1></div>
        <button type="button" className='btn btn-primary' onClick={priceSortHandler} style={{margin:'10px'}}>Sort by Price</button>
        <button type="button" className='btn btn-primary' onClick={dateSortHandler}>Sort by Date</button>
      </div>
      <Products products={products} />
      <SlideShow />
    </div>
  );
}

export default App;
