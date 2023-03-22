import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'


const DetailsProductManager = () => {

  const { _id } = useParams();
  const [details, setDetails] = useState({});

  useEffect (() => {
    axios.get(`http://localhost:8000/api/ProductManager/{id}`)
      .then( res => {
        console.log("This is the GET ONE response", res)
        setDetails( res.data.results )
      })
      .catch( err => {
        console.error( err )
      })
  }, [])

  return(
    <>
      <h3>Details about { details.firstName }</h3>
      <p>Age: { details.age }</p>
      <p>{ details.description }</p>
      <p>Veteran Status: { details.isVeteran ? "Veteran" : "Not a Veteran" }</p>
      <p>{ details.imageUpload }</p>

    </>
  )
}

export default DetailsProductManager;