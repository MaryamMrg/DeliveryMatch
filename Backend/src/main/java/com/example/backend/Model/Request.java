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



    private Status status;

 public Request(Long r_id,  Status status, Package pack) {
  this.r_id = r_id;


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

 public Ad getAd() {
  return ad;
 }

 public void setAd(Ad ad) {
  this.ad = ad;
 }

 public Sender getSender() {
  return sender;
 }

 public void setSender(Sender sender) {
  this.sender = sender;
 }

 @OneToOne
 private Package pack;

 @ManyToOne
 @JoinColumn(name = "ad_id")
 private Ad ad;

 @ManyToOne
 @JoinColumn(name = "user_id"  )
 private Sender sender;


}
