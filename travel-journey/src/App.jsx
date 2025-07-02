import React from 'react'
import Header from './Components/Header'
import Entry from './Components/Entry'
import datas from "../src/Datas/data";
const App = () => {

  const places = datas.map(data =>
    <Entry
      key={data.id}
      placeName={data.title}
      mapLink={data.googleMapsLink}
      date={data.dates}
      content={data.text}
      imageLink={data.img.src}
      altText={data.img.alt}
      location={data.country} />
  )

  return (
    <>
      <Header />
      {places}


    </>
  )
}

export default App
