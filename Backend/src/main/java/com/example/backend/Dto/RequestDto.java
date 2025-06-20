package com.example.backend.Dto;

import com.example.backend.Model.Status;

public class RequestDto {
    private Long r_id;
    private Long Ad_id;

    private Status status;
    private Long driverUserId;

    public RequestDto(Long r_id, Long ad_id, Status status, Long driverUserId) {
        this.r_id = r_id;
        Ad_id = ad_id;
        this.status = status;
        this.driverUserId = driverUserId;
    }


    public RequestDto() {
    }

    public Long getDriverUserId() {
        return driverUserId;
    }

    public void setDriverUserId(Long driverUserId) {
        this.driverUserId = driverUserId;
    }

    public Long getR_id() {
        return r_id;
    }

    public void setR_id(Long r_id) {
        this.r_id = r_id;
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
