package com.example.backend.service;

import com.example.backend.Dto.RequestDto;
import com.example.backend.Mapper.RequestMapper;
import com.example.backend.Model.Request;
import com.example.backend.Repository.RequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {
    private final RequestMapper requestMapper;
    private final RequestRepository requestRepository;

    public RequestService(RequestMapper requestMapper, RequestRepository requestRepository) {
        this.requestMapper = requestMapper;
        this.requestRepository = requestRepository;
    }

    public RequestDto saveRequest(RequestDto requestDto) {
        Request request = requestMapper.toEntity(requestDto);
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
