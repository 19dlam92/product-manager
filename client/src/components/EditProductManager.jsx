import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'

const EditProductManager = (props) => {

  const [editPM, setEditPM] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/ProductManager/${id}`)
    .then( res => {
      console.log("This is the GET ONE response", res)
      setEditPM( res.data.results )
    })
    .catch( err => {
      console.error( err )
    })
  }, [])
  
  const changeHandler = (e) => {
    if (e.target.type === "checkbox") {
      setEditPM({
        ...editPM,
        [e.target.name]: e.target.checked
        // this IF statement is required when there are different input values
        // name="" / checked=""
      })
    } else {
      setEditPM({
        ...editPM,
        // spread operator
        // w/e the form already
        // set . . . . 
        [e.target.name]: e.target.value
        // [e.target.name]?
        // what is name?
        // comes from name="" in the form
      })
    }
  }

  const editHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/ProductManager/${id}`, editPM)
      .then( res => {
        console.log("This is the UPDATE response", res)
        setEditPM( res.data.results )
        history.push("/")
      })
      .catch( err => {
        console.error( err )
      })
  }



  return(
    <>
      <form onSubmit = { editHandler }>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input 
            type="text" name="firstName" className="form-control" 
            onChange = { changeHandler }
            value = { editPM.firstName }
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input 
            type="text" name="lastName" className="form-control" 
            onChange = { changeHandler }
            value = { editPM.lastName }
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age: </label>
          <input 
            type="number" name="age" className="form-control" 
            onChange = { changeHandler }
            value = { editPM.age }
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input 
            type="text" name="description" className="form-control" 
            onChange = { changeHandler }
            value = { editPM.description }
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUpload">Image Upload: </label>
          <input 
            type="text" name="imageUpload" className="form-control" 
            onChange = { changeHandler }
            value = { editPM.imageUpload }
          />
        </div>
        <div className="form-group">
          <label htmlFor="isVeteran">Is Veteran? </label>
          <input 
            type="checkbox" name="isVeteran" 
            onChange = { changeHandler }
            checked = { editPM.isVeteran }
          />
        </div>
        <input type="submit" value="Update" className="btn btn-primary"/>
      </form>
    </>
  )
}


export default EditProductManager;