package com.studentspoint.projectbackend.controller;

import com.studentspoint.projectbackend.dto.StudentDto;
import com.studentspoint.projectbackend.entity.Student;
import com.studentspoint.projectbackend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/students")
public class StudentController {
    private StudentService studentService;

    //Build add student REST API
    @PostMapping

    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto){
       StudentDto savedStudent= studentService.createStudent(studentDto);
       return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

       //Build Get Student REST API
    @GetMapping("{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") Long studentId){
       StudentDto studentDto = studentService.getStudentById(studentId);
       return ResponseEntity.ok(studentDto);
    }

    // Build Get All Students REST API
    @GetMapping
    public ResponseEntity<List<StudentDto>> getAllStudents(){
        List<StudentDto> students =studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }
    @GetMapping("/studentPoint")
    public List<Student> getUsersSortedByStudentPointAsc() {
        return studentService.getAllStudentsSort();
    }
    @GetMapping("/studentPointDesc")
    public List<Student> getUsersSortedByStudentPointDesc() {
        return studentService.getAllStudentsSortDesc();
    }

    @GetMapping("/id")
    public List<Student> getUsersSortedByStudentIdAsc() {
        return studentService.getAllStudentsSortId();
    }
    @GetMapping("/idDesc")
    public List<Student> getUsersSortedByStudentIdDesc() {
        return studentService.getAllStudentsSortIdDesc();
    }

    @GetMapping("/studentName")
    public List<Student> getUsersSortedByStudentNameAsc() {
        return studentService.getAllStudentsSortName();
    }
    @GetMapping("/studentNameDesc")
    public List<Student> getUsersSortedByStudentNameDesc() {
        return studentService.getAllStudentsSortNameDesc();
    }

    @GetMapping("/studentSurName")
    public List<Student> getUsersSortedByStudentSurNameAsc() {
        return studentService.getAllStudentsSortSurname();
    }
    @GetMapping("/studentSurNameDesc")
    public List<Student> getUsersSortedByStudentSurNameDesc() {
        return studentService.getAllStudentsSortSurnameDesc();
    }






    //Build Upgrade Student REST API
    @PutMapping("{id}")
    public ResponseEntity<StudentDto> updateStudent(@PathVariable("id") Long studentId,
                                                    @RequestBody StudentDto updateStudent){
        StudentDto studentDto=studentService.updateStudent(studentId,updateStudent);
        return ResponseEntity.ok(studentDto);
    }

   // Build Delete Student REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long studentId){
        studentService.deleteStudent(studentId);
        return ResponseEntity.ok("Student deleted succesfully!..");
    }
}
