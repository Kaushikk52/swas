package com.swas.backend.services;

import com.swas.backend.models.Rating;
import com.swas.backend.repositories.RatingRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class RatingService {
    private final RatingRepo ratingRepo;

    public List<Rating> getRatingsByRating(String id){
        List<Rating> ratings = ratingRepo.findByProduct_Id(id);
        return ratings;
    }

}
