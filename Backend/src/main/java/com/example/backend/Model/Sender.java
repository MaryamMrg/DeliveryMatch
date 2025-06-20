package com.example.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Sender extends User{

    @OneToMany(mappedBy = "sender" )
    private List<Request> requests;
}
