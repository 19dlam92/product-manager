import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateProductManager = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [isVeteran, setIsVeteran] = useState(false);
  const [imageUpload, setImageUpload] = useState("");
  const history = useHistory();
  const [formErrors, setFormErrors] = useState({});

  const createPM = (e) => {
    e.preventDefault();
    const createForm = {
      firstName,
      lastName,
      age,
      description,
      isVeteran,
      imageUpload
    }
    axios.post("http://localhost:8000/api/ProductManager", createForm)
      .then( res => {
        console.log("This is the CREATE response", res)
        if ( res.data.error ) {
          setFormErrors( res.data.error.errors )
        } else {
          props.setFormSubmitted(!props.formSubmitted)
          // setFirstName("")
          // setLastName("")
          // setAge("")
          // setDescription("")
          // setIsVeteran(false)
          // setImageUpload("")
          // setFormErrors({})
          // set w/e . . . . only necessary for forms on same page
          history.push("/")
        }
      })
      .catch( err => {
        console.error( err )
      })
  }

  return(
    <>
      <form onSubmit = { createPM }>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input 
            type="text" name="firstName" className="form-control" 
            onChange = {(e) => setFirstName(e.target.value)}
            value = { firstName }
          />
          <p className="text-danger">{ formErrors.firstName?.message }</p>
          
          {/* ? - if formError */}
          {/* run .message */}
          
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input 
            type="text" name="lastName" className="form-control" 
            onChange = {(e) => setLastName(e.target.value)}
            value = { lastName }
          />
          <p className="text-danger">{ formErrors.lastName?.message }</p>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age: </label>
          <input 
            type="number" name="age" className="form-control" 
            onChange = {(e) => setAge(e.target.value)}
            value = { age }
          />
          <p className="text-danger">{ formErrors.age?.message }</p>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input 
            type="text" name="description" className="form-control" 
            onChange = {(e) => setDescription(e.target.value)}
            value = { description }
          />
          <p className="text-danger">{ formErrors.description?.message }</p>
        </div>
        <div className="form-group">
          <label htmlFor="imageUpload">Image Upload: </label>
          <input 
            type="text" name="imageUpload" className="form-control" 
            onChange = {(e) => setImageUpload(e.target.value)}
            value = { imageUpload }
          />
          <p className="text-danger">{ formErrors.imageUpload?.message }</p>
        </div>
        <div className="form-group">
          <label htmlFor="isVeteran">Is Veteran? </label>
          <input 
            type="checkbox" name="isVeteran" 
            onChange = {(e) => setIsVeteran(e.target.checked)}
            checked = { isVeteran }
          />
          <p className="text-danger">{ formErrors.isVeteran?.message }</p>
        </div>
        <input type="submit" value="Create Product Manager!" className="btn btn-primary"/>
      </form>
    </>
  )
}

export default CreateProductManager;