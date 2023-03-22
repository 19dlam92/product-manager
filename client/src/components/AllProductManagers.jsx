import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const AllProductManagers = () => {

  const [allProductManagers, setAllProductManagers] = useState([]);

  useEffect(() => {    
    axios.get("http://localhost:8000/api/ProductManager")
      .then( res => {
        console.log("This is the GET ALL response", res)
        setAllProductManagers(res.data.results)
      })
      .catch( err => {
        console.error( err )
      })
  }, [])




  return(
    <>
      <h2>All Ninjas</h2>
      {
        allProductManagers.map(( pmObj ) => {
          return(
            <div className="card" key = { pmObj._id }>
              <div className="card-body">
                <h4 className="card-title"><Link to={`/details/${pmObj._id}`}>{ pmObj.firstName }</Link></h4>
                <p className="card-text">
                  Age: { pmObj.age }
                </p>
                <img src={ pmObj.imageUpload } alt="" height="200px" width="200px" />
              </div>
            </div>
          )
        })
      }
    </>
  )
}


export default AllProductManagers;
