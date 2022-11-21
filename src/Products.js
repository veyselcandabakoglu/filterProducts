import React, {useState} from 'react'
import { Data } from "./Data";

const Products = () => {

    const [products, setProducts] = useState(Data)
    const [size, setSize] = useState("all")
    const [year, setYear] = useState("all")

    console.log('year', year)

    const handleFilters = () => {
        if(size=== "all" && year=== "all") {
            setProducts(Data)
        } else if(size !=="all" && year === "all") {
             setProducts(Data.filter(data => {
                return data.size=== size
            }))
        }  else if(size === "all" && year !== "all") {
            setProducts(Data.filter(data => {
                return data.year=== year
            }))
        } else if(size !== "all" && year !== "all"){
            setProducts(Data.filter(data => {
                return (data.year === year && data.size=== size)
            }))
        }
    }


  return (
        <div>
            <div className='select_filter'>
                <select value={size} onChange={e => setSize(e.target.value)}>
                <option value="all">All</option>
                    <option value="small">Small</option>
                    <option value="big">Big</option>
                    </select>
                 
                  <div className='select2'>
                  <select value={year} onChange={e => setYear(e.target.value)}>
                    <option value="all">All</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    </select>
                  </div>
            </div>
            <div className='button'>
                <button onClick={handleFilters}>Filter</button>
            </div>
        <div className='products'>
                {
                    products.map((data) => (
                        <div key={data.id} className="product">
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                            <h4>${data.price}</h4>
                            <h5>{data.year}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Products
