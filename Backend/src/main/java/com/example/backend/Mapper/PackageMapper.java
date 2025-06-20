package com.example.backend.Mapper;

import com.example.backend.Dto.PackageDto;
import com.example.backend.Model.Package;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PackageMapper {

    Package toEntity(PackageDto Pdto);
    PackageDto toDto(Package packageEntity);
    List<PackageDto> toDtos(List<Package> packageList);
}
