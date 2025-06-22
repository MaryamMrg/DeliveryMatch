package com.example.backend.Dto;

import com.example.backend.Model.Status;

public class RequestDto {

    private Long r_id;
    private Long ad_id;

    private Long packId;

    private Status status;


    public RequestDto() {
    }

    public RequestDto(Long r_id, Long ad_id, Long packId, Status status) {
        this.r_id = r_id;
        this.ad_id = ad_id;
        this.packId = packId;
        this.status = status;
    }

    public Long getR_id() {
        return r_id;
    }

    public void setR_id(Long r_id) {
        this.r_id = r_id;
    }

    public Long getPackId() {
        return packId;
    }

    public void setPackId(Long packId) {
        this.packId = packId;
    }

    public Long getAd_id() {
        return ad_id;
    }

    public void setAd_id(Long ad_id) {
        this.ad_id = ad_id;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
