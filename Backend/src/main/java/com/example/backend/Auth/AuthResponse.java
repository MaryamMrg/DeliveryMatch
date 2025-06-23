package com.example.backend.Auth;

import com.example.backend.Dto.UserDto;
import lombok.*;



public class AuthResponse {

    private String token;
    private UserDto user;

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public AuthResponse(String token, UserDto user) {
        this.token = token;
        this.user = user;
    }

    public AuthResponse() {
    }


}
