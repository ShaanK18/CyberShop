import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an Online platform that facilitates thebuying and selling of products or services
            over the internet. It Serves as a virtual marketpalce where business and individuals can showcase their products, 
            interact withcustomers, and conduct transactions without need for a physical presence. E-commerce website have gained
            immance popularity due to their convenience, accessibility,and the global reach they Offer.   
        </p>
        <p>E-commerce websites typically display products or services along with detailed descriptions,images,prices
            and any available variations.(eg, sizes,colors). Each product usually has its own dedicated page. 
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
