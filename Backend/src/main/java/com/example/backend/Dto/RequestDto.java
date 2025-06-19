package com.example.backend.Dto;

import com.example.backend.Model.Status;

public class RequestDto {
    private Long r_id;
    private Long sender_id;
    private Long Ad_id;

    private Status status;

    public RequestDto(Long r_id, Long sender_id, Long ad_id, Status status) {
        this.r_id = r_id;
        this.sender_id = sender_id;
        Ad_id = ad_id;
        this.status = status;
    }

    public RequestDto() {
    }

    public Long getR_id() {
        return r_id;
    }

    public void setR_id(Long r_id) {
        this.r_id = r_id;
    }

    public Long getSender_id() {
        return sender_id;
    }

    public void setSender_id(Long sender_id) {
        this.sender_id = sender_id;
    }

    public Long getAd_id() {
        return Ad_id;
    }

    public void setAd_id(Long ad_id) {
        Ad_id = ad_id;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
