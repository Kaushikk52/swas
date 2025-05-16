package com.swas.backend.services;

import com.swas.backend.models.Review;
import com.swas.backend.repositories.ReviewRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ReviewService {
    private final ReviewRepo reviewRepo;

    public List<Review> getReviewsByProduct(String id){
        List<Review> productReviews = reviewRepo.findByProduct_Id(id);
        return  productReviews;
    }
}
