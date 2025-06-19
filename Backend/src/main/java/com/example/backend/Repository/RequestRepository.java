package com.example.backend.Repository;

import com.example.backend.Model.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request,Long> {
}
