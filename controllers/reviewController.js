const Review = require('../models/Review');

// Controller to create a new review
const createReview = async (req, res) => {
    const { userId, rating, comment } = req.body;

    try {
        // Create a new review object
        const review = new Review({
            userId,
            rating,
            comment
        });

        // Save the review to the database
        await review.save();

        res.status(201).json({ message: 'Review created successfully', review });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create review' });
    }
};

// Controller to get all reviews
const getAllReviews = async (req, res) => {
    try {
        // Retrieve all reviews from the database
        const reviews = await Review.find();

        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch reviews' });
    }
};

module.exports = { createReview, getAllReviews };
