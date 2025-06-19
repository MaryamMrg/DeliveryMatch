package com.example.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity

public class Request {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long r_id;
    private Long sender_id;
    private Long Ad_id;

    private Status status;

 public Request(Long r_id, Long sender_id, Long ad_id, Status status, Package pack) {
  this.r_id = r_id;
  this.sender_id = sender_id;
  Ad_id = ad_id;
  this.status = status;
  this.pack = pack;
 }

 public Request() {
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

 public Package getPack() {
  return pack;
 }

 public void setPack(Package pack) {
  this.pack = pack;
 }

 @OneToOne
 private Package pack;

 @OneToMany
 private List<Ad> ad;
}
