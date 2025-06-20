package com.example.backend.service;

import com.example.backend.Dto.RequestDto;
import com.example.backend.Mapper.RequestMapper;
import com.example.backend.Model.*;
import com.example.backend.Model.Package;
import com.example.backend.Repository.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {
    private final RequestMapper requestMapper;
    private final RequestRepository requestRepository;
    private final UserRepository userRepository;
    private final AdRepository adRepository;
    private final PackageRepository packageRepository;

    public RequestService(RequestMapper requestMapper,
                          RequestRepository requestRepository,
                          UserRepository userRepository,
                          AdRepository adRepository,
                          PackageRepository packageRepository) {
        this.requestMapper = requestMapper;
        this.requestRepository = requestRepository;
        this.userRepository = userRepository;
        this.adRepository = adRepository;
        this.packageRepository = packageRepository;
    }

    public RequestDto saveRequest(RequestDto requestDto) {
        // DEBUG: Print what we received
        System.out.println("=== DEBUG REQUEST ===");
        System.out.println("Received ad_id: " + requestDto.getAd_id());
        System.out.println("Received status: " + requestDto.getStatus());

        Request request = new Request();

        // Set status
        request.setStatus(requestDto.getStatus());
        System.out.println("Set status: " + request.getStatus());

        // Set authenticated sender
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Sender sender = (Sender) userRepository.findByEmail(email);
        request.setSender(sender);
        System.out.println("Set sender: " + (sender != null ? sender.getUserId() : "null"));

        // Set Ad if provided - THIS IS THE CRITICAL PART
        if (requestDto.getAd_id() != null) {
            System.out.println("Looking for ad with ID: " + requestDto.getAd_id());
            Ad ad = adRepository.findById(requestDto.getAd_id()).orElse(null);
            if (ad != null) {
                request.setAd(ad);
                System.out.println("Found and set ad: " + ad.getAdId());
            } else {
                System.out.println("ERROR: Ad not found with id: " + requestDto.getAd_id());
            }
        } else {
            System.out.println("No ad_id provided in request");
        }

        // Set Package if provided
        if (requestDto.getPackId() != null) {
            Package pack = packageRepository.findById(requestDto.getPackId()).orElse(null);
            if (pack != null) {
                request.setPack(pack);
                System.out.println("Set package: " + pack.getP_id());
            }
        }

        // Save and check before returning
        System.out.println("Before save - request.ad: " + (request.getAd() != null ? request.getAd().getAdId() : "null"));
        Request savedRequest = requestRepository.save(request);
        System.out.println("After save - savedRequest.ad: " + (savedRequest.getAd() != null ? savedRequest.getAd().getAdId() : "null"));

        // Convert back to DTO
        RequestDto result = requestMapper.toDto(savedRequest);
        System.out.println("Final DTO ad_id: " + result.getAd_id());
        System.out.println("=== END DEBUG ===");

        return result;
    }

    public List<RequestDto> findAllRequests() {
        List<Request> requests = requestRepository.findAll();
        return requestMapper.toDtos(requests);
    }

    public RequestDto updateRequest(RequestDto requestDto) {
        Request request = requestMapper.toEntity(requestDto);

        if (requestDto.getAd_id() != null) {
            Ad ad = adRepository.findById(requestDto.getAd_id()).orElse(null);
            if (ad != null) {
                request.setAd(ad);
            }
        }

        Request savedRequest = requestRepository.save(request);
        return requestMapper.toDto(savedRequest);
    }

    public void deleteRequest(Long id) {
        requestRepository.deleteById(id);
    }
}