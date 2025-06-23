package com.example.backend.Auth;

import com.example.backend.Config.JwtService;
import com.example.backend.Dto.UserDto;
import com.example.backend.Model.Admin;
import com.example.backend.Model.Driver;
import com.example.backend.Model.Sender;
import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import static org.hibernate.cfg.JdbcSettings.DRIVER;
import static org.springframework.boot.autoconfigure.amqp.RabbitRetryTemplateCustomizer.Target.SENDER;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }
    public AuthResponse register(RegisterRequest request) {
        User user;

        // Decide which subclass to create based on role
        switch (request.getRole()) {
            case ADMIN -> user = new Admin();
            case DRIVER -> user = new Driver();
            case SENDER -> user = new Sender();

            default -> throw new IllegalArgumentException("Invalid role: " + request.getRole());
        }

        user.setName(request.getName()); 
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());

        userRepository.save(user);


        String jwtToken = jwtService.generateToken(user);

        AuthResponse response = new AuthResponse();
        response.setToken(jwtToken);
        return response;
    }


    public AuthResponse authenticate(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()

                )
        );

        User user = userRepository.findByEmail(request.getEmail());
        String jwtToken = jwtService.generateToken(user);

       UserDto userDto=new UserDto(
               user.getName(),user.getEmail(),user.getRole(),null
       );

        AuthResponse response = new AuthResponse();
        response.setToken(jwtToken);
       response.setUser(userDto);
        return response;
    }
}
