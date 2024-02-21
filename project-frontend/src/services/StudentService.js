import axios from "axios"
const REST_API_BASE_URL='http://localhost:8080/api/students';

export const listStudents= () => axios.get(REST_API_BASE_URL);
export const createStudent =(student) => axios.post(REST_API_BASE_URL,student);
export const getStudent =(studentId) => axios.get(REST_API_BASE_URL + '/' + studentId);
export const updateStudent=(studentId,student) => axios.put(REST_API_BASE_URL + '/' + studentId, student);
export const deleteStudent=(studentId) => axios.delete(REST_API_BASE_URL + '/' + studentId);
export const viewStudent=(studentId,student) => axios.put(REST_API_BASE_URL + '/' + studentId, student);
export const listStudentsPointSortAsc= () => axios.get(REST_API_BASE_URL+ '/' + "studentPoint");
export const listStudentsPointSortDesc= () => axios.get(REST_API_BASE_URL+ '/' + "studentPointDesc");
export const listStudentsIdSortAsc= () => axios.get(REST_API_BASE_URL+ '/' + "id");
export const listStudentsIdSortDesc= () => axios.get(REST_API_BASE_URL+ '/' + "idDesc");
export const listStudentsNameSortAsc= () => axios.get(REST_API_BASE_URL+ '/' + "studentName");
export const listStudentsNameSortDesc= () => axios.get(REST_API_BASE_URL+ '/' + "studentNameDesc");
export const listStudentsSurNameSortAsc= () => axios.get(REST_API_BASE_URL+ '/' + "studentSurName");
export const listStudentsSurNameSortDesc= () => axios.get(REST_API_BASE_URL+ '/' + "studentSurNameDesc");
