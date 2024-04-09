  import React from 'react'

  export const Item = ({image}) => {
    return (
      <div>
        <img  className='item-image' src={image.urls.small}/>
      </div>
    )
  }
