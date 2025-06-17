package com.example.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.*;

@Entity
public class Package {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long P_id;
    private String type;
    private String dimension;
    private Double weight;

    public Package(Long p_id, String type, String dimension, Double weight) {
        P_id = p_id;
        this.type = type;
        this.dimension = dimension;
        this.weight = weight;
    }

    public Package() {
    }

    public Long getP_id() {
        return P_id;
    }

    public void setP_id(Long p_id) {
        P_id = p_id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDimension() {
        return dimension;
    }

    public void setDimension(String dimension) {
        this.dimension = dimension;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }
    @OneToOne
    private Request request;
}
