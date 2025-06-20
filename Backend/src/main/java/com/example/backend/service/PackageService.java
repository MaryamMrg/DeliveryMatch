package com.example.backend.service;

import com.example.backend.Dto.PackageDto;
import com.example.backend.Mapper.PackageMapper;
import com.example.backend.Model.Package;
import com.example.backend.Repository.PackageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageService {


    private final PackageMapper packageMapper;
    private final PackageRepository packageRepository;
    public PackageService(PackageMapper packageMapper, PackageRepository packageRepository) {
        this.packageMapper = packageMapper;
        this.packageRepository = packageRepository;
    }

    public PackageDto createPackage(PackageDto packageDto) {
        Package pack = packageMapper.toEntity(packageDto);
        return packageMapper.toDto(packageRepository.save(pack));
    }

    public List<PackageDto> getAllPackages() {
        return packageMapper.toDtos(packageRepository.findAll());
    }

    public void deletePackage(Long id) {
        packageRepository.deleteById(id);
    }

    public PackageDto updatePackage(Long id, PackageDto packageDto) {
        Package pack = packageRepository.findById(id).orElseThrow(()->new RuntimeException("package not found"));
        pack.setDimension(packageDto.getDimension());
        pack.setType(packageDto.getType());
        pack.setWeight(packageDto.getWeight());
        return packageMapper.toDto(packageRepository.save(pack));
    }

}
