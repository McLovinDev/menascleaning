import React, { useState } from 'react';

const ReviewsHome: React.FC = () => {
    const reviews = [
        {
            author: 'Adriana D.',
            review: 'The management is really good. I will give 5 stars exclusively for them. They had perfect follow up after I fixed the appointment. Overall great work.',
        },
        {
            author: 'Jenna T.',
            review: 'It was great to work with them. The ladies arrived on time and did the job thoroughly. Dressing was neat and the language was clear and professional. Kudos to the management.',
        },
        {
            author: 'Michael K.',
            review: 'Even my pets were not annoyed with their presence. They were caring and loving from the start to the end. The follow up with the customer was very good and impressive. The team arrived with all the equipment in working condition and never asked us for any help. It was a cool meet.',
        },
        {
            author: 'Miguel F.',
            review: 'Very glad with the type of service provided. I could see no stains and dusts after the process got completed. The lady was very sweet with us.',
        },
        {
            author: 'Lisa M.',
            review: 'Pleased with the way they scheduled my appointment. I can rely on them for all my special occasions. No hidden charges.',
        },
        {
            author: 'Lora W.',
            review: "Mena's is great! I requested a cleaning service and they replied to me quickly with a confirmation. Henry was great! The cleaning team showed up early and worked super efficiently, thorough, and was very professional. In addition to being great cleaning my apartment, They also had a wonderful personality and were extremely helpful and positive. I highly recommend them-- I will use this company again for sure.",
        },
        {
            author: 'Betty M.',
            review: 'The cleaners arrived 30 minutes before. Gave good attention to detail. They did everything as per my requests. Wonderful Job. Thank you!',
        },
        {
            author: 'Adrian L.',
            review: 'Thank you for making my place clean and tidy! Workers are punctual, thorough and organized. Highly recommended! 5 stars.',
        },
        {
            author: 'Josepth S.',
            review: 'After the work they ask for the feedback which is very nice. If there is anything to be done they finish it before the final bill. Thanks for the wonderful service.',
        },
        {
            author: 'Floyd G.',
            review: 'Regular customer here! I highly recommended this cleaning company! They offer quality cleaning service, their workers are structured and open-minded. 5 stars.',
        },
    ];

    const overallRating = 5.0; // Cambia esto si quieres que sea dinámico.
    const totalReviews = reviews.length;

    const truncateReview = (review: string, wordLimit: number) => {
        const words = review.split(' ');
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(' ') + '...'
            : review;
    };

    const [expandedReview, setExpandedReview] = useState<number | null>(null);

    return (
        <div className="p-6 bg-gray-50 rounded-lg ">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-blue-700">
                    GOOGLE ({overallRating}⭐)
                </h2>

            </div>
            <div className="mt-4">
                <p className="text-lg font-semibold text-gray-700">
                    Overall Rating: {overallRating} ⭐⭐⭐⭐⭐ ({totalReviews} reviews)
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full">
                                <span className="font-bold">
                                    {review.author.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">{review.author}</h3>
                                {/* <p className="text-sm text-gray-500">{review.date}</p>
                                <p className="text-sm text-gray-500">{review.location}</p> */}
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-yellow-500 font-bold">⭐⭐⭐⭐⭐ </p>
                            <p className="mt-2 text-gray-700 text-sm">
                                {expandedReview === index
                                    ? review.review
                                    : truncateReview(review.review, 30)}
                            </p>
                            <button
                                onClick={() =>
                                    setExpandedReview(
                                        expandedReview === index ? null : index
                                    )
                                }
                                className="mt-2 inline-block text-blue-600 font-semibold hover:underline"
                            >
                                {expandedReview === index ? 'Read less' : 'Read more'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsHome;
