package com.example.backend.Dto;

import com.example.backend.Model.Status;

public class RequestDto {


    private Long ad_id;
    private Long sender_id;
    private Long packId;

    private Status status;


    public RequestDto() {
    }

    public RequestDto(Long ad_id, Long sender_id, Long packId, Status status) {
       this.ad_id = ad_id;
        this.sender_id = sender_id;
        this.packId = packId;
        this.status = status;
    }

    public Long getSender_id() {
        return sender_id;
    }

    public void setSender_id(Long sender_id) {
        this.sender_id = sender_id;
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
