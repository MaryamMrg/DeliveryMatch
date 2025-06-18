package com.example.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Ad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Ad_id;

    private String Start;
    private String destination;
    private Date date;
    private String M_type;
    private Long capacity;

    public Ad() {
    }

    public Ad(Long ad_id, String start, String destination, Date date, String m_type, Long capacity) {
        Ad_id = ad_id;
        Start = start;
        this.destination = destination;
        this.date = date;
        M_type = m_type;
        this.capacity = capacity;
    }

    public Long getAd_id() {
        return Ad_id;
    }

    public void setAd_id(Long ad_id) {
        Ad_id = ad_id;
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
}
