package com.example.backend.Repository;

import com.example.backend.Model.Request;
import com.example.backend.Model.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RequestRepository extends JpaRepository<Request,Long> {

    List<Request> findByAdAdId(Long adId);

    List<Request> findBySender_UserId(Long userId);

    List<Request> findByStatus(Status status);


}
