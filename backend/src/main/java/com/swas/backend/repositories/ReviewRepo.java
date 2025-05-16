package com.swas.backend.repositories;

import com.swas.backend.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepo extends JpaRepository<Review,String> {

    List<Review> findByProduct_Id(String id);

}
