package com.example.backend.service;

import com.example.backend.Dto.AdDto;
import com.example.backend.Mapper.AdMapper;
import com.example.backend.Model.Ad;
import com.example.backend.Repository.AdRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdService {

    private final AdMapper adMapper;
    private final AdRepository adRepository;

    public AdService(AdMapper adMapper, AdRepository adRepository) {
        this.adMapper = adMapper;
        this.adRepository = adRepository;
    }

    public AdDto createAd(AdDto adDto) {
        Ad ad = adMapper.toEntity(adDto);
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
