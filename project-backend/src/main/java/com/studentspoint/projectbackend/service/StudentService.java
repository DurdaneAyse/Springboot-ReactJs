package com.studentspoint.projectbackend.service;

import com.studentspoint.projectbackend.dto.StudentDto;
import com.studentspoint.projectbackend.entity.Student;

import java.util.List;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);

    StudentDto getStudentById(Long studentId);

    List<StudentDto> getAllStudents();
    List<Student> getAllStudentsSort();
    List<Student> getAllStudentsSortDesc();
    List<Student> getAllStudentsSortName();
    List<Student> getAllStudentsSortNameDesc();
    List<Student> getAllStudentsSortSurname();
    List<Student> getAllStudentsSortSurnameDesc();
    List<Student> getAllStudentsSortId();
    List<Student> getAllStudentsSortIdDesc();


     StudentDto updateStudent(Long studentId,StudentDto updateStudent);

    void deleteStudent(Long studentId);
}
