package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.Model.Package;
import java.util.List;

public interface PackageRepository extends JpaRepository<Package, Long> {

}
