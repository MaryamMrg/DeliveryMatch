package com.example.backend.service;

import com.example.backend.Dto.AdDto;
import com.example.backend.Mapper.AdMapper;
import com.example.backend.Model.Ad;
import com.example.backend.Model.Driver;
import com.example.backend.Repository.AdRepository;
import com.example.backend.Repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import static org.junit.jupiter.api.Assertions.*;

class AdServiceTest {

    //mock : faking it (real dependencies
    @Mock
    private AdRepository adRepository;

    @Mock
    private AdMapper adMapper;

    @Mock
    private UserRepository userRepository;

    @Mock
    SecurityContext securityContext;

    @Mock
    private Authentication authentication;

    //fake dependencies with real service
    @InjectMocks
    private AdService adService;

    //setting up the fake objects run this before testing
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        SecurityContextHolder.setContext(securityContext);
    }
    @Test
    void createAd() {
        // Fake input
        AdDto inputDto = new AdDto();
        inputDto.setDestination("meknes");

        // Expected entity from mapper
        Ad fakeAd = new Ad();
        fakeAd.setDestination("meknes");

        // Fake driver from userRepository
        Driver fakeDriver = new Driver();
        fakeDriver.setEmail("meryamama@gmail.com");

        // Final DTO expected to return
        AdDto responseDto = new AdDto();
        responseDto.setDestination("meknes");

        // Mocks
        when(adMapper.toEntity(inputDto)).thenReturn(fakeAd);
        when(securityContext.getAuthentication()).thenReturn(authentication);
        when(authentication.getName()).thenReturn("meryamama@gmail.com");
        when(userRepository.findByEmail("meryamama@gmail.com")).thenReturn(fakeDriver);
        when(adRepository.save(fakeAd)).thenReturn(fakeAd);
        when(adMapper.toDto(fakeAd)).thenReturn(responseDto);

        // Call method
        AdDto result = adService.createAd(inputDto);

        // Verify output
        assertNotNull(result);
        assertEquals("meknes", result.getDestination());

        // Verify interactions
        verify(adMapper).toEntity(inputDto);
        verify(userRepository).findByEmail("meryamama@gmail.com");
        verify(adRepository).save(fakeAd);
        verify(adMapper).toDto(fakeAd);
    }

}