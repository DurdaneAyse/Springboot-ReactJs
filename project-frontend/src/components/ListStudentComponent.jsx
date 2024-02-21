import React, {useEffect, useState} from 'react'
import { deleteStudent, listStudents,listStudentsPointSortAsc,listStudentsPointSortDesc,listStudentsIdSortAsc,listStudentsIdSortDesc,listStudentsNameSortAsc,listStudentsNameSortDesc,listStudentsSurNameSortAsc,listStudentsSurNameSortDesc} from '../services/StudentService'
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal';

 const ListStudentComponent = () => {

    
   const [students, setStudents] = useState([])
   const navigator =useNavigate();
   const [activeSortId, setActiveSortId] = useState(1)

 
   useEffect(() => {
    getAllStudents()
   }, [])

   function getAllStudents(){
    listStudents().then((response) =>{
        setStudents(response.data)
    }).catch(error =>{
        console.error(error);
    })
   }

   function getAllStudentsSortId(){
    setActiveSortId(1)
    listStudentsIdSortAsc().then((response) =>{
        setStudents(response.data)
    }).catch(error =>{
        console.error(error);
    })
   }

   function getAllStudentsSortIdDesc(){
    setActiveSortId(2)
    listStudentsIdSortDesc().then((response) =>{
        setStudents(response.data)
    }).catch(error =>{
        console.error(error);
    })
   }

   function getAllStudentsSortName(){
    setActiveSortId(3)
    listStudentsNameSortAsc().then((response) =>{
        setStudents(response.data)
    }).catch(error =>{
        console.error(error);
    })
   }

   function getAllStudentsSortNameDesc(){
    setActiveSortId(4)
    listStudentsNameSortDesc().then((response) =>{
        setStudents(response.data)
    }).catch(error =>{
        console.error(error);
    })
   }

   function getAllStudentsSortSurName(){
    setActiveSortId(5)
    listStudentsSurNameSortAsc().then((response) =>{
        setStudents(response.data)
    }).catch(error =>{
        console.error(error);
    })
   }

   function getAllStudentsSortSurNameDesc(){
    setActiveSortId(6)
    listStudentsSurNameSortDesc().then((response) =>{
        setStudents(response.data)
    }).catch(error =>{
        console.error(error);
    })
   }


   function getAllStudentsSortPoint(){
    setActiveSortId(7)
    listStudentsPointSortAsc().then((response) =>{
        setStudents(response.data)
    }).catch(error =>{
        console.error(error);
    })
   }

   function getAllStudentsSortPointDesc(){
    setActiveSortId(8)
    listStudentsPointSortDesc().then((response) =>{
        setStudents(response.data)
    }).catch(error =>{
        console.error(error);
    })
   }

  
   
  
   function addNewStudent(){
     navigator('/add-student')
   }
   function updateStudent(id){
    navigator(`/edit-student/${id}`)
   }

   function removeStudent(id){
    console.log(id)
    deleteStudent(id).then((response) =>{
        getAllStudents()
    }).catch(error => {
        console.error(error);
    })
   }

   function viewStudent(id){
    console.log(id)
    navigator(`/view-student/${id}`)

   }
   function homePageGo(){
    navigator('/')

   }
    
  return (
    
    <div className='container'>
          <br/><br/><br/><br/>
        <h2 className='text-center'>List Of Students</h2>
        <button className='btn btn-warning mb-2' onClick={addNewStudent} style={{color:"black"}}>Add Student</button>
        <button className='btn btn-secondary mb-2' onClick={homePageGo} style={{marginLeft:'30px'}}>Back</button>
        <div style={{maxHeight: "650px",overflowY: "scroll"}}>
    <table className='table table-striped table-bordered' >
        <thead >
            <tr >
                <th>Student Id  &nbsp;
                    <button className='btn' onClick={() =>getAllStudentsSortId()}>
                        <i className="bi bi-sort-up" style={activeSortId == 1 ?{fontSize:'23px',  color:'#FFC000'}:{fontSize:'23px',  color:'#6c7280'}}></i>
                    </button> 
                    <button className='btn' onClick={() =>getAllStudentsSortIdDesc()}>
                        <i className="bi bi-sort-down" style={activeSortId == 2 ?{fontSize:'23px',  color:'#FFC000'}:{fontSize:'23px',  color:'#6c7280'}}></i>
                    </button>
                </th>
                <th>Student Name &nbsp;
                    <button className='btn' onClick={() =>getAllStudentsSortName()}>
                        <i className="bi bi-sort-up" style={activeSortId == 3 ?{fontSize:'23px',  color:'#FFC000'}:{fontSize:'23px',  color:'#6c7280'}}></i>
                    </button> 
                    <button className='btn' onClick={() =>getAllStudentsSortNameDesc()}> 
                        <i className="bi bi-sort-down" style={activeSortId == 4 ?{fontSize:'23px',  color:'#FFC000'}:{fontSize:'23px',  color:'#6c7280'}}></i>
                    </button>
                </th>
                <th>Student Surname &nbsp;
                    <button className='btn' onClick={() =>getAllStudentsSortSurName()}> 
                        <i className="bi bi-sort-up" style={activeSortId == 5 ?{fontSize:'23px',  color:'#FFC000'}:{fontSize:'23px',  color:'#6c7280'}}></i>
                    </button> 
                    <button className='btn' onClick={() =>getAllStudentsSortSurNameDesc()}> 
                        <i className="bi bi-sort-down" style={activeSortId == 6 ?{fontSize:'23px',  color:'#FFC000'}:{fontSize:'23px',  color:'#6c7280'}}></i>
                    </button>
                </th>
                <th>Student Score &nbsp;
                    <button className='btn' onClick={() =>getAllStudentsSortPoint()}> 
                        <i className="bi bi-sort-up" style={activeSortId == 7 ?{fontSize:'23px',  color:'#FFC000'}:{fontSize:'23px',  color:'#6c7280'}}></i>
                    </button> 
                    <button className='btn' onClick={() =>getAllStudentsSortPointDesc()}> 
                        <i className="bi bi-sort-down" style={activeSortId == 8 ?{fontSize:'23px',  color:'#FFC000'}:{fontSize:'23px',  color:'#6c7280'}}></i>
                    </button> 
                </th>
                <th style={{verticalAlign: "middle"}}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map(student =>
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.studentName}</td>
                        <td>{student.studentSurName}</td>
                        <td>{student.studentPoint}</td>
                        <td>
                           
                            <button className='btn' onClick={() =>updateStudent(student.id)}> <i className="bi bi-pencil-fill"  style={{fontSize:'23px',color:'#6c7280'}}></i></button>
                            <button className='btn' onClick={() =>removeStudent(student.id)}><i className="bi bi-trash3-fill" style={{fontSize:'23px', color:'#6c7280'}}></i></button>                           
                            <Popup trigger={<button className='btn' onClick={() =>viewStudent(student.id)}><i className="bi bi-eye-fill" style={{fontSize:'23px',color:'#6c7280'}}></i></button>} modal>
                                <div style={{padding: "10px", width: "100%"}}>
                                <div style={{width: "100%", height: "20px",fontWeight: "bold", fontSize: "30px", textAlign: "center", padding: "25px 0",
                                display: "flex",                              
                                flexWrap: "wrap",
                                justifyContent: "center",
                                alignContent: "center", color:'#C79600'
                                 }}><span> {student.id}</span> </div>
                                <div style={{width: "100%", display: "flex", paddingBottom: "10px"}}>
                                    <div style={{width: "30%", textAlign: "center", borderRight: "1px solid #ccc"}}>
                                        <i className="bi bi-person-circle" style={{fontSize:'95px', color:'#C79600'}}></i>
                                    </div>
                                    <div style={{width: "70%", float: "right"}}>
                                        <div style={{padding: "15px", width: "100%"}}><span> <span style={{fontWeight: "bold"}}>Name: </span> {student.studentName}</span> </div>
                                        <div style={{padding: "15px", width: "100%"}}><span> <span style={{fontWeight: "bold"}}>Surname: </span> {student.studentSurName}</span></div>
                                        <div style={{padding: "15px", width: "100%"}}> <span> <span style={{fontWeight: "bold"}}>Point: </span> {student.studentPoint}</span></div>
                                    </div>
                                </div>
                                </div>                          
                            </Popup>
                        </td> 
                    </tr>
                    )
            }
        </tbody>
    </table>
    </div>
    </div>
  );
};

export default ListStudentComponent