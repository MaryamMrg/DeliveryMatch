package com.example.backend.Mapper;

import com.example.backend.Dto.AdDto;
import com.example.backend.Model.Ad;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AdMapper {
    Ad toEntity(AdDto adDto);
    AdDto toDto(Ad ad);
    List<AdDto> toDtos(List<Ad> ads);

}
