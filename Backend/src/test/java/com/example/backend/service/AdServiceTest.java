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
import static org.mockito.Mockito.*;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import static org.junit.jupiter.api.Assertions.*;

class AdServiceTest {

    @Mock
    private AdRepository adRepository;

    @Mock
    private AdMapper adMapper;

    @Mock
    private UserRepository userRepository;

    @Mock
    private SecurityContext securityContext;

    @Mock
    private Authentication authentication;

    @InjectMocks
    private AdService adService;

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
        System.out.println("Input : " + inputDto.getDestination());

        // Expected entity from mapper
        Ad fakeAd = new Ad();
        fakeAd.setDestination("meknes");
        System.out.println("Fake Ad: " + fakeAd.getDestination());

        // Fake driver from userRepository
        Driver fakeDriver = new Driver();
        fakeDriver.setEmail("meryamama@gmail.com");
        System.out.println("Fake Driver: " + fakeDriver.getEmail());

        //  expected  return
        AdDto responseDto = new AdDto();
        responseDto.setDestination("meknes");
        System.out.println("Expected Response : " + responseDto.getDestination());


        when(adMapper.toEntity(inputDto)).thenReturn(fakeAd);


        when(securityContext.getAuthentication()).thenReturn(authentication);


        when(authentication.getName()).thenReturn("meryamama@gmail.com");


        when(userRepository.findByEmail("meryamama@gmail.com")).thenReturn(fakeDriver);


        when(adRepository.save(fakeAd)).thenReturn(fakeAd);


        when(adMapper.toDto(fakeAd)).thenReturn(responseDto);


        // Call method createAd

        AdDto result = adService.createAd(inputDto);
        System.out.println("result: " + result);

        //  Check if result is null
        if (result == null) {
            System.out.println(" result is null");



                verify(adMapper).toEntity(inputDto);



                verify(securityContext).getAuthentication();


                verify(authentication).getName();



                verify(userRepository).findByEmail("meryamama@gmail.com");
                System.out.println("userRepository.findByEmail was called");


                verify(adRepository).save(fakeAd);



                verify(adMapper).toDto(fakeAd);

        }

        // Verify output
        assertNotNull(result, "not  null");
        assertEquals("meknes", result.getDestination());

        // Verify interactions
        verify(adMapper).toEntity(inputDto);
        verify(userRepository).findByEmail("meryamama@gmail.com");
        verify(adRepository).save(fakeAd);
        verify(adMapper).toDto(fakeAd);
    }
}