import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { FaHeart,FaRegHeart } from 'react-icons/fa6';
const LikeButton = () => {
    const[isLIked,setIsLiked]=useState(false)
  return (
<button className='border-none' onClick={()=>setIsLiked(!isLIked)}>
  {

    isLIked?(
        <FaHeart color='red' size={30}/>

    ):(
    <FaRegHeart color='gray' size={30}/>
    )
  }
</button>
  )
}

export default LikeButton