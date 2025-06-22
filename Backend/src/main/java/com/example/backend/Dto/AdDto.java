package com.example.backend.Dto;

import java.util.Date;

public class AdDto {

    private Long adId;
    private String Start;
    private String destination;
    private Date date;
    private String M_type;
    private Long capacity;


    public AdDto(String start, String destination, Date date, String m_type, Long capacity,Long adId ) {
        Start = start;
        this.destination = destination;
        this.date = date;
        M_type = m_type;
        this.capacity = capacity;
        this.adId = adId;


    }



    public AdDto() {
    }

    public Long getAdId() {
        return adId;
    }

    public void setAdId(Long adId) {
        this.adId = adId;
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
