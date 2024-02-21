package com.studentspoint.projectbackend.service.impl;

import com.studentspoint.projectbackend.dto.StudentDto;
import com.studentspoint.projectbackend.entity.Student;
import com.studentspoint.projectbackend.exception.ResourceNotFoundException;
import com.studentspoint.projectbackend.mapper.StudentMapper;
import com.studentspoint.projectbackend.repository.StudentRepository;
import com.studentspoint.projectbackend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {
    private StudentRepository studentRepository;
    @Override
    public StudentDto createStudent(StudentDto studentDto) {

        Student student = StudentMapper.mapToStudent(studentDto);
       Student savedStudent= studentRepository.save(student);
        return StudentMapper.mapToStudentDto(savedStudent);
    }

    @Override
    public StudentDto getStudentById(Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Student is not exists with given id: " + studentId));
        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public List<StudentDto> getAllStudents() {
      List<Student> students= studentRepository.findAll();
        return students.stream().map((student) -> StudentMapper.mapToStudentDto(student))
                .collect(Collectors.toList());
    }

    @Override
    public List<Student> getAllStudentsSort() {
         return studentRepository.findAllByOrderByStudentPointAsc();
    }

    @Override
    public List<Student> getAllStudentsSortDesc() {
        return studentRepository.findAllByOrderByStudentPointDesc();
    }

    @Override
    public List<Student> getAllStudentsSortName() {
        return studentRepository.findAllByOrderByStudentNameAsc();
    }

    @Override
    public List<Student> getAllStudentsSortNameDesc() {
        return studentRepository.findAllByOrderByStudentNameDesc();
    }

    @Override
    public List<Student> getAllStudentsSortSurname() {
        return studentRepository.findAllByOrderByStudentSurNameAsc();
    }

    @Override
    public List<Student> getAllStudentsSortSurnameDesc() {
        return studentRepository.findAllByOrderByStudentSurNameDesc();
    }

    @Override
    public List<Student> getAllStudentsSortId() {
        return studentRepository.findAllByOrderByIdAsc();
    }

    @Override
    public List<Student> getAllStudentsSortIdDesc() {
        return studentRepository.findAllByOrderByIdDesc();
    }


    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updateStudent) {

        Student student = studentRepository.findById(studentId).orElseThrow(
                () -> new ResourceNotFoundException("Student is not exists with given id: " + studentId)
        );
        student.setStudentName(updateStudent.getStudentName());
        student.setStudentSurName(updateStudent.getStudentSurName());
        student.setStudentPoint(updateStudent.getStudentPoint());

        Student updateStudentObj = studentRepository.save(student);
        return StudentMapper.mapToStudentDto(updateStudentObj);
    }

    @Override
    public void deleteStudent(Long studentId) {
        Student student = studentRepository.findById(studentId).orElseThrow(
                () -> new ResourceNotFoundException("Student is not exists with given id: " + studentId)
        );
        studentRepository.deleteById(studentId);
    }
}
