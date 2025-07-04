package com.example.backend.Controller;

import com.example.backend.Dto.AdDto;
import com.example.backend.Model.Ad;
import com.example.backend.service.AdService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Ad")
public class AdController {

    private final AdService adService;

    public AdController(AdService adService) {
        this.adService = adService;
    }
    @PostMapping
    public AdDto addAd(@RequestBody AdDto addto) {
        return adService.createAd(addto);
    }
    @GetMapping
    public List<AdDto> getAllAds() {
        return adService.getAllAds();
    }
    @PutMapping("/update/{id}")
    public AdDto updateAd(@RequestBody AdDto updateDto,@PathVariable Long id) {
        return adService.updateAd(updateDto,id);
    }
@GetMapping("/AdByID/{id}")
public AdDto getAdById(@PathVariable Long id) {
        return  adService.getAd(id);
}
    @DeleteMapping("/{id}")
    public void deleteAd(@PathVariable Long id) {
         adService.deleteAd(id);
    }
}
