package com.studentspoint.projectbackend.mapper;

import com.studentspoint.projectbackend.dto.StudentDto;
import com.studentspoint.projectbackend.entity.Student;

public class StudentMapper {
    public static StudentDto mapToStudentDto(Student student){
        return new StudentDto(
                student.getId(),
                student.getStudentName(),
                student.getStudentSurName(),
                student.getStudentPoint()
        );
    }
    public static Student mapToStudent(StudentDto studentDto){
        return new Student(
                studentDto.getId(),
                studentDto.getStudentName(),
                studentDto.getStudentSurName(),
                studentDto.getStudentPoint()

        );
    }
}
