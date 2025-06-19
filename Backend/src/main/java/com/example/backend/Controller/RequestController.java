package com.example.backend.Controller;

import com.example.backend.Dto.RequestDto;
import com.example.backend.service.RequestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/request")
public class RequestController {

    private final RequestService requestService;

    public RequestController(RequestService requestService) {
        this.requestService = requestService;
    }

    @PostMapping
    public RequestDto createRequest(@RequestBody RequestDto requestDto) {return requestService.saveRequest(requestDto);}

    @GetMapping
    public List<RequestDto> getRequests() {return requestService.findAllRequests();}

    @DeleteMapping("/{id}")
    public void deleteRequest(@PathVariable Long id) {requestService.deleteRequest(id);}

    @PutMapping
    public RequestDto updateRequest(@RequestBody RequestDto requestDto) {
        return requestService.updateRequest(requestDto);
    }
}
