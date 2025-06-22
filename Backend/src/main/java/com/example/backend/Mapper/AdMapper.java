package com.example.backend.Mapper;

import com.example.backend.Dto.AdDto;
import com.example.backend.Model.Ad;
import com.example.backend.Model.Driver;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AdMapper {

//    @Mapping(target = "driver", source = "user_id")
  Ad toEntity(AdDto adDto);
//
//    @Mapping(target = "user_id", source = "driver.user_id")
    AdDto toDto(Ad ad);

    List<AdDto> toDtos(List<Ad> ads);

//    default Driver mapDriverIdToDriver(Long driverId) {
//        if (driverId == null) {
//            return null;
//        }
//        Driver driver = new Driver();
//        driver.setUser_id(driverId);
//        return driver;
//    }
}
