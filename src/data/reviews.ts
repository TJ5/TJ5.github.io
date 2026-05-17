import reviewsData from './reviews.json';
import serviceModelFull from '../reviews/service-model-full.txt?raw';
import serviceModelSpoilers from '../reviews/service-model-spoilers.txt?raw';
import serviceModelFinal from '../reviews/service-model-final.txt?raw';
import motherOfLearningFull from '../reviews/mother-of-learning-full.txt?raw';
import motherOfLearningSpoilers from '../reviews/mother-of-learning-spoilers.txt?raw';
import motherOfLearningFinal from '../reviews/mother-of-learning-final.txt?raw';

export interface BookReviewData {
    id: string;
    title: string;
    author: string;
    publisher: string;
    publishDate: string;
    rating: number;
    date: string;
    summary: string;
    coverImage: string;
    genre: string;
    fullReview: string;
    spoilers?: string;
    finalThoughts?: string;
}

// Map of review content files
const reviewContentMap: { [key: string]: string } = {
    'service-model-full.txt': serviceModelFull,
    'service-model-spoilers.txt': serviceModelSpoilers,
    'service-model-final.txt': serviceModelFinal,
    'mother-of-learning-full.txt': motherOfLearningFull,
    'mother-of-learning-spoilers.txt': motherOfLearningSpoilers,
    'mother-of-learning-final.txt': motherOfLearningFinal
};

// Process the reviews data and inject the full review content
export const reviews: BookReviewData[] = reviewsData.reviews.map(review => ({
    ...review,
    fullReview: reviewContentMap[review.fullReview] || '',
    spoilers: review.spoilers ? reviewContentMap[review.spoilers] : undefined,
    finalThoughts: review.finalThoughts ? reviewContentMap[review.finalThoughts] : undefined
})); 
