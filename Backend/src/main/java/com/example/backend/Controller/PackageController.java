package com.example.backend.Controller;

import com.example.backend.Dto.PackageDto;
import com.example.backend.service.PackageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/package")
public class PackageController {

    private final PackageService packageService;

    public PackageController(PackageService packageService) {
        this.packageService = packageService;
    }

    @PostMapping
    public PackageDto createPackage(@RequestBody PackageDto packageDto) {
        return packageService.createPackage(packageDto);
    }

    @GetMapping
    public List<PackageDto> getAllPackages() {
        return packageService.getAllPackages();
    }
    @PutMapping("/{id}")
    public PackageDto updatePack(@PathVariable Long id,@RequestBody PackageDto packageDto){
        return packageService.updatePackage(id, packageDto);
    }

    @DeleteMapping("/{id}")
    public void deletePackage(@PathVariable Long id){
        packageService.deletePackage(id);
    }

}
