import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'

const DetailsProductManager = () => {

  const [details, setDetails] = useState({});
  const history = useHistory();
  const { id } = useParams();
  // { id } MATCHES with the exact path = "/ . . . . /:id"

  useEffect(() => {
    axios.get(`http://localhost:8000/api/ProductManager/${id}`)
      .then( res => {
        console.log("This is the GET ONE response", res)
        setDetails( res.data.results )
      })
      .catch( err => {
        console.error( err )
      })
  }, [])

  const deletePM = () => {
    axios.delete(`http://localhost:8000/api/ProductManager/${id}`)
      .then( res => {
        console.log("This is the DELETE response", res)
        history.push("/")
      })
      .catch( err => {
        console.error( err )
      })
  }

  return(
    <>
      <h3>Details about { details.firstName }</h3>
      <p>Age: { details.age }</p>
      <p>{ details.description }</p>
      <p>Veteran Status: { details.isVeteran ? "Veteran" : "Not a Veteran" }</p>
      <p>{ details.imageUpload }</p>
      <button onClick={ deletePM } className="btn btn-danger">Delete { details.firstName }</button>
    </>
  )
}


export default DetailsProductManager;