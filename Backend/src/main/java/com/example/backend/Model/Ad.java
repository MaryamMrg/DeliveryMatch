package com.example.backend.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Ad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adId;

    private String Start;
    private String destination;
    private Date date;
    private String M_type;
    private Long capacity;

    @ManyToOne
    @JoinColumn(name = "driver_id")
    private Driver driver;

    public Ad() {
    }

    public Ad(Long adId, String start, String destination, Date date, String m_type, Long capacity,Driver driver) {
        adId = adId;
        Start = start;
        this.destination = destination;
        this.date = date;
        M_type = m_type;
        this.capacity = capacity;
      this.driver = driver;


    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }


    public Long getAdId() {
        return adId;
    }

    public void setAdId(Long adId) {
        this.adId = adId;
    }

    public List<Request> getRequests() {
        return requests;
    }

    public void setRequests(List<Request> requests) {
        this.requests = requests;
    }

    public String getStart() {
        return Start;
    }

    public void setStart(String start) {
        Start = start;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getM_type() {
        return M_type;
    }

    public void setM_type(String m_type) {
        M_type = m_type;
    }

    public Long getCapacity() {
        return capacity;
    }

    public void setCapacity(Long capacity) {
        this.capacity = capacity;
    }

    @OneToMany
    private List<Request> requests = new ArrayList<Request>();


}
