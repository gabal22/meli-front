import { useEffect, useState } from 'react';
import { useSearchParams} from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductCard } from '../components/ProductCard';

export const Results = () => {
  const [ categories, setCategories ] = useState()
  const [ products, setProducts ] = useState()
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search')

  const handleSearch = async (q) =>{
      const request = await fetch(`http://localhost:5000/api/items?q=${q}`);
      const data = await request.json();
      setProducts(data.items)
      setCategories(data.categories)
  }

  useEffect(()=>{
    handleSearch(query)
  },[query])


  return (
    <div className="container">
      <Breadcrumb categories={categories} />
      <ol className="results-container">
        {products && 
          products.map((product) => (
            <ProductCard {...product} key={product.id}  />
          ))
        }
      </ol>
    </div>
  )
}
