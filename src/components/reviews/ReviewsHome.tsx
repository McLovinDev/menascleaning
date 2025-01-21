import React, { useState } from 'react';

const ReviewsHome: React.FC = () => {
    const reviews = [
        {
            author: 'Brandon N.',
            date: '5/5/2020',
            location: 'Denver, CO',
            review: 'DJ’s flooring did an amazing job! David was on time and honest with everything from the beginning. He even beat the price of someone who claimed “free installation”. His guys were extremely quick with install, and did an amazing job! I highly recommend DJ’s Flooring to anyone needing a quick, professional carpet install. 5 stars, guys! Extremely happy.',
        },
        {
            author: 'Maureen M.',
            date: '1/30/2020',
            location: 'Lakewood, CO',
            review: 'DJs Flooring did a magnificent job on my flooring project! David returned my call quickly, met with me in a timely fashion, got me a professional quote in writing within 2 hours of my request and did a great job! The work was done professionally, the crew was respectful and efficient while doing the work and they cleaned up their mess immaculately! I will definitely hire DJs Flooring for more flooring projects!',
        },
        {
            author: 'Brittany G.',
            date: '11/25/2019',
            location: 'Aurora, CO',
            review: 'They did an amazing job!',
        },
        {
            author: 'Pete S.',
            date: '11/24/2019',
            location: 'Wheat Ridge, CO',
            review: 'I originally bought my flooring from Home Depot, and paid for their installation services. But HOM Solutions (Home Depot\'s installation company) couldn\'t do the necessary leveling of the concrete floor in my 60 year old house. A friend recommended DJ\'s to do the leveling, but when David took a look at it, he realized that there was enough leveling to be done that the leveling and installation should be done by the same crew, because they would keep running across areas that needed leveling while they were doing the install. They did such an amazing job with the installation, including checking with me for my preferences on things like the color of the quarter round edging. David\'s customer service was excellent, and the crew were all friendly and professional. They finished the two day job (1000 s.f. of Pergo engineered hardwood) in one day, and came back the second day just to finish with the caulking and edging. I couldn\'t be happier with the new floors, and I will definitely use DJ\'s again if the need arises!',
        },
        {
            author: 'Shelby J.',
            date: '11/15/2019',
            location: 'Denver, CO',
            review: 'DJs Flooring did an awesome job with our carpet. I was able to schedule a consultation right away and the carpet was installed as soon as it was ready. The installers worked hard and did a fantastic job. Would highly recommend DJs Flooring!',
        },
        {
            author: 'Brianna P.',
            date: '9/27/2019',
            location: 'Denver, CO',
            review: 'DJ\'s Flooring did an amazing job. I love my new floors. Customer service was excellent. I highly recommend.',
        },
        {
            author: 'Jana T.',
            date: '8/26/2019',
            location: 'Golden, CO',
            review: 'DJs flooring replaced our worn-out carpet and tile in our kitchen with beautiful new wood laminate. They were professional, clean, hard-working and priced competitively. Although we could have purchased material on our own for them to install, their product was great quality and came in the color we wanted and looked better than Floor and Decor or other retailers. I would definitely recommend them to anyone looking for a new floor.',
        },
        {
            author: 'Cody P.',
            date: '8/15/2019',
            location: 'Centennial, CO',
            review: 'This team did fantastic work, 100%. Extremely respectful, totally focused on their work, kept me up to date on the whole process. David (owner) came and checked in on his guys and progress.. also kept me 100% up to date. The end product looks absolutely amazing. I\'ll be hiring DJ\'s Flooring again when we replace the rest of our flooring in my house shortly.',
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
                                <p className="text-sm text-gray-500">{review.date}</p>
                                <p className="text-sm text-gray-500">{review.location}</p>
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
