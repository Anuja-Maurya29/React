import React from 'react'
import { Star } from 'lucide-react';

const Review = ({review}) => {
    const date = new Date(review.date).toLocaleDateString()
  return (
  <>
 <div className="review">
    <div className="rating flex w-200 justify-between">
        <div className="rate bg-green-800 flex w-10 text-amber-100 rounded"><span> {review.rating}</span> <Star/></div>
       
        <div className="date text-black">{date}</div>
    </div>

    <div className="name">
        <p className='font-semibold'>{review.reviewerName}</p>
    </div>
    <div className="comment">{review.comment}</div>
 </div>
  </>
  )
}

export default Review