// import React from 'react'
// import axios from 'axios'
// import { useState, useEffect } from 'react'



// const EditProductManager = () => {

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [age, setAge] = useState();
//   const [description, setDescription] = useState("");
//   const [isVeteran, setIsVeteran] = useState();
//   const [imageUpload, setImageUpload] = useState("");

//   useEffect(() => {
//     axios.put(`http://localhost:8000/api/ProductManager/${id}`)
//       .then( res => {
//         console.log("This is the UPDATE response", res)

//       })
//       .catch( err => {
//         console.error( err )
//       })
//   })


//   return(
//     <>
//       <form action="">

//       </form>
//     </>
//   )
// }

// export default EditProductManager;