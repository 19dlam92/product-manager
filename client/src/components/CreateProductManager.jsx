import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'



const CreateProductManager = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(null);
  const [description, setDescription] = useState("");
  const [isVeteran, setIsVeteran] = useState(false);
  const [imageUpload, setImageUpload] = useState("");
  const history = useHistory();
  const [formErrors, setFormErrors] = useState({});

  const createPM = (e) => {
    e.prevent.default;
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
        if ( res.data.error) {
          console.log("This is the CREATE response", res)
          setFormErrors( res.data.error.errors )
        } else {
          props.setFormSubmitted(!props.setFormSubmitted)
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
            type="text" name="" id="firstName" className="form-control" 
            onChange = {(e) => { setFirstName(e.target.value)}}
          />
          <p className="text-danger">{ formErrors.firstName?.message }</p>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input 
            type="text" name="" id="lastName" className="form-control" 
            onChange = {(e) => { setLastName(e.target.value)}}
          />
          <p className="text-danger">{ formErrors.lastName?.message }</p>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age: </label>
          <input 
            type="number" name="" id="age" className="form-control" 
            onChange = {(e) => { setAge(e.target.value)}}
          />
          <p className="text-danger">{ formErrors.age?.message }</p>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input 
            type="text" name="" id="description" className="form-control" 
            onChange = {(e) => { setDescription(e.target.value)}}
          />
          <p className="text-danger">{ formErrors.description?.message }</p>
        </div>
        <div className="form-group">
          <label htmlFor="imageUpload">Image Upload: </label>
          <input 
            type="text" name="" id="imageUpload" className="form-control" 
            onChange = {(e) => { setImageUpload(e.target.value)}}
          />
          <p className="text-danger">{ formErrors.imageUpload?.message }</p>
        </div>
        <div className="form-group">
          <label htmlFor="isVeteran">Is Veteran? </label>
          <input 
            type="checkbox" name="" id="isVeteran" 
            onChange = {(e) => { setIsVeteran(e.target.checked)}}
          />
          <p className="text-danger">{ formErrors.isVeteran?.message }</p>
        </div>
        <input type="submit" value="Create Product Manager!" className="btn btn-primary"/>
      </form>
    </>
  )
}

export default CreateProductManager;