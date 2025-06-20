package com.example.backend.service;

import com.example.backend.Dto.RequestDto;
import com.example.backend.Mapper.RequestMapper;
import com.example.backend.Model.Driver;
import com.example.backend.Model.Request;
import com.example.backend.Model.Sender;
import com.example.backend.Model.Status;
import com.example.backend.Repository.RequestRepository;
import com.example.backend.Repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {
    private final RequestMapper requestMapper;
    private final RequestRepository requestRepository;
    private final UserRepository userRepository;

    public RequestService(RequestMapper requestMapper, RequestRepository requestRepository, UserRepository userRepository) {
        this.requestMapper = requestMapper;
        this.requestRepository = requestRepository;
        this.userRepository = userRepository;
    }

    public RequestDto saveRequest(RequestDto requestDto) {
        Request request = requestMapper.toEntity(requestDto);
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Sender sender = (Sender) userRepository.findByEmail(email);
        request.setSender(sender);
        Request savedRequest = requestRepository.save(request);
        return requestMapper.toDto(savedRequest);
    }

    public List<RequestDto> findAllRequests() {
        List<Request> requests = requestRepository.findAll();
        return requestMapper.toDtos(requests);
    }
    public RequestDto updateRequest(RequestDto requestDto) {
        Request request = requestMapper.toEntity(requestDto);
        Request savedRequest = requestRepository.save(request);
        return requestMapper.toDto(savedRequest);
    }
    public void deleteRequest(Long id) {
        requestRepository.deleteById(id);
    }





}
