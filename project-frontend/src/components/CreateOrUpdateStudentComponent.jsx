import React, { useEffect, useState } from "react"
import { createStudent, getStudent, updateStudent } from "../services/StudentService"
import { useNavigate,useParams } from "react-router-dom"

const CreateOrUpdateStudentComponent = () => {
   
    const [studentName,setstudentName]=useState('')
    const [studentSurName,setstudentSurName]=useState('')
    const [studentPoint,setstudentPoint]=useState('')
    const {id} = useParams();
    const [errors, setErrors] =useState({
        studentName:'',
        studentSurName:'',
        studentPoint:null
     })
 
     const navigator=useNavigate();
     useEffect(() => {
     if(id){
        getStudent(id).then((response)=>{
            setstudentName(response.data.studentName);
            setstudentSurName(response.data.studentSurName);
            setstudentPoint(response.data.studentPoint);
        }).catch(error => {
            console.error(error);
        })
     }
     },[id])

  
 
function saveOrUpdateStudent(e){
    e.preventDefault();
    if(validateForm()){
        const student ={studentName,studentSurName,studentPoint}
        console.log(student)
        if(id){
            updateStudent(id,student).then((response) => {
                console.log(response.data);
                navigator('/students');
            }).catch(error => {
                console.error(error);
            })
        }
        else{
            createStudent(student).then((response) =>{
                console.log(response.data);
                navigator('/students')
            }).catch(error => {
                console.error(error);
            })
        }
      
    
    }
}
function backPage(){
    navigator('/')

};


  function validateForm(){
    let valid=true;
    const errorsCopy={... errors}

    if(studentName.trim()){
        errorsCopy.studentName='';
    }else{
        errorsCopy.studentName='Student Name is required';
        valid=false;
    }
    if(studentSurName.trim()){
        errorsCopy.studentSurName='';
    }else{
        errorsCopy.studentSurName='Student Surname is required';
        valid=false;
    }
    if(studentPoint && studentPoint > 0){
        errorsCopy.studentPoint=null;
    }else{
        errorsCopy.studentPoint='Student Point is required';
        valid=false;
    }

   
    setErrors(errorsCopy)
    return valid;
  }

  function pageTitle(){
    if(id){
        return <h2 className="text-center"> Update Student</h2>
    }
    else{
        return <h2 className="text-center"> Add Student</h2>

    }
  }
  return (
    <div className="container">
        <br/><br/><br/><br/>
        <div className="row"> 
        <div className="card col-md-6 offset-md-3 offset-md-3">
              {
                pageTitle()
              }
            <div className="card-body">
                <form>
                    <div className="form-group mb-2">
                    <label className="form-label">Name:</label>
                    <input
                    type='text'
                    placeholder='Enter Student Name'
                    name='studentName'
                    value={studentName}
                    className={`form-control ${errors.studentName ? 'is-invalid': ''}`}
                    onChange={(e) => setstudentName(e.target.value)}
                    ></input>
                    {errors.studentName && <div className='invalid-feedback'>{errors.studentName}</div>}
                    </div>

                    <div className="form-group mb-2">
                    <label className="form-label">SurName:</label>
                    <input
                    type='text'
                    placeholder='Enter Student Surname'
                    name='studentSurName'
                    value={studentSurName}
                    className={`form-control ${errors.studentSurName ? 'is-invalid': ''}`}
                    onChange={(e) => setstudentSurName(e.target.value)}
                    ></input>
                       {errors.studentSurName && <div className='invalid-feedback'>{errors.studentSurName}</div>}

                    </div>

                    <div className="form-group mb-2">
                    <label className="form-label">Point:</label>
                    <input
                    type='double'
                    placeholder='Enter Student Point'
                    name='studentPoint'
                    value={studentPoint}
                    className={`form-control ${errors.studentPoint ? 'is-invalid': ''}`}
                    onChange={(e) =>setstudentPoint(e.target.value)}
                    ></input>
                     {errors.studentPoint && <div className='invalid-feedback'>{errors.studentPoint}</div>}
                    </div>

                    <button className='btn btn-success' onClick={saveOrUpdateStudent}> Submit</button>
                    <button className='btn btn-danger' onClick={backPage} style={{marginLeft:'10px'}}> Cancel</button>
                </form>
            </div>
        </div>
        </div> 

    </div>
  )
}

export default CreateOrUpdateStudentComponent