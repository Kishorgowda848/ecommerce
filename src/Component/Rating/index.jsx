export default function Rating({ rating, maxRating = 5 }) {

    return <>
        <p> Rating ....</p>
        {Array(maxRating).fill(0).map((_,index)=>{
           if(rating > (index+1)){
             return '*';
           }else{
             return '-'
           }
        })
        }
    </>

    // Rating 
    // 4 5 
    // 2 5
    // **---
      
}