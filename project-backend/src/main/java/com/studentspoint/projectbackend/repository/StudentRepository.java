package com.studentspoint.projectbackend.repository;

import com.studentspoint.projectbackend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository  extends JpaRepository<Student, Long> {
    List<Student> findAllByOrderByStudentPointAsc();
    List<Student> findAllByOrderByStudentPointDesc();

    List<Student> findAllByOrderByIdAsc();
    List<Student> findAllByOrderByIdDesc();

    List<Student> findAllByOrderByStudentNameAsc();
    List<Student> findAllByOrderByStudentNameDesc();

    List<Student> findAllByOrderByStudentSurNameAsc();
    List<Student> findAllByOrderByStudentSurNameDesc();


}
