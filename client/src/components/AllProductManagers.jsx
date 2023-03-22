import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const AllProductManagers = (props) => {

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
  }, [props.formSubmitted])

  const deletePM = (deleteID) => {
    axios.delete(`http://localhost:8000/api/ProductManager/${deleteID}`)
      .then( res => {
        console.log("This is the DELETE response", res)
        let filteredPM = allProductManagers.filter((pmObj) => {
          return pmObj._id !== deleteID
        })
        setAllProductManagers(filteredPM)
      })
      .catch( err => {
        console.error( err )
      })

  }

  return(
    <>
      {
        allProductManagers.map(( pmObj ) => {
          return(
            <div className="card mt-3" key = { pmObj._id }>
              <div className="card-body">
                <h4 className="card-title">
                  <Link to = {`/details/${pmObj._id}`} className="btn btn-primary">{ pmObj.firstName }'s Info</Link>
                </h4>
                <img src={ pmObj.imageUpload } alt="" height="200px" width="200px" />
                <br />
                <Link to = {`/edit/${pmObj._id}`} className="btn btn-secondary m-2">Edit { pmObj.firstName }</Link>
                <button onClick = {() => {deletePM(pmObj._id)}} className="btn btn-danger m-2">Delete</button>
              </div>
            </div>
          )
        })
      }
    </>
  )
}


export default AllProductManagers;
