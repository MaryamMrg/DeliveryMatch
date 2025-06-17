package com.example.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

import java.util.Date;

@Entity

public class Request {
   @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long r_id;
    private Long sender_id;
    private Long Ad_id;

    private String status;


@OneToOne
 private Package pack;
}
