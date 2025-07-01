import React from 'react'
import locationImage from "../assets/marker.png"
const Entry = ({ placeName, mapLink, date, content, imageLink, location }) => {
    return (
        <article className='journal-article'>
            <div className='journal-card'>
                <div className='image-card'>
                    <img
                        src={imageLink}
                        alt="Mount Fuji"
                        className='imagePlace'
                    />
                </div>
                <div>
                    <div className='location-title'>
                        <img src={locationImage} alt="" />
                        <p>{location.toUpperCase()}</p>
                        <a href={mapLink} target='_blank'>View on Google Maps</a>
                    </div>
                    <h1 className='placeName'>{placeName}</h1>
                    <small className='date'>{date}</small>
                    <p className='description'>{content}</p>
                </div>
            </div>
        </article>
    )
}

export default Entry
