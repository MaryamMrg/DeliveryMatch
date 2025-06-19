package com.example.backend.service;

import com.example.backend.Dto.AdDto;
import com.example.backend.Mapper.AdMapper;
import com.example.backend.Model.Ad;
import com.example.backend.Model.Driver;
import com.example.backend.Repository.AdRepository;
import com.example.backend.Repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdService {

    private final AdMapper adMapper;
    private final AdRepository adRepository;
    private final UserRepository userRepository;

    public AdService(AdMapper adMapper, AdRepository adRepository, UserRepository userRepository) {
        this.adMapper = adMapper;
        this.adRepository = adRepository;
        this.userRepository = userRepository;
    }

    public AdDto createAd(AdDto adDto) {
        Ad ad = adMapper.toEntity(adDto);

        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Driver driver = (Driver) userRepository.findByEmail(email);
        ad.setDriver(driver);
        Ad savedAd = adRepository.save(ad);
        return adMapper.toDto(savedAd);
    }

    public List<AdDto> getAllAds() {
        List<Ad> ads = adRepository.findAll();
        return adMapper.toDtos(ads);
    }

    public AdDto getAd(Long id) {
        Ad ad = adRepository.findById(id).orElseThrow(()->{
            return new RuntimeException("not found");
        });
        return adMapper.toDto(ad);
    }

    public AdDto updateAd(AdDto adDto) {
        Ad ad = adMapper.toEntity(adDto);
        Ad savedAd = adRepository.save(ad);
        return adMapper.toDto(savedAd);
    }
    public void deleteAd(Long id) {
        adRepository.deleteById(id);
    }
}
