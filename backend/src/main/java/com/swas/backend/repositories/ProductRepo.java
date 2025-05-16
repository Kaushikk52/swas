package com.swas.backend.repositories;

import com.swas.backend.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product,String>, JpaSpecificationExecutor<Product> {
    List<Product> findByIsDeletedFalse();
}
