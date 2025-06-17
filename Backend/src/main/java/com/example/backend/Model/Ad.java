package com.example.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Ad {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Ad_id;
    private String Start;
    private String destination;
    private Date date;
    private String M_type;
    private Long capacity;

}
