package com.example.backend.Auth;

import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@Builder
public class AuthResponse {

    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public AuthResponse() {
    }
}
