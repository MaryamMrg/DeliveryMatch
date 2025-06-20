package com.example.backend.Dto;

public class PackageDto {
    private String type;
    private String dimension;
    private Double weight;

    public PackageDto() {
    }

    public PackageDto(String type, String dimension, Double weight) {
        this.type = type;
        this.dimension = dimension;
        this.weight = weight;
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
}
