import React, { Component } from 'react';
import SlideShow from 'react-image-show';

const images = [
  require('../../assets/images/slideshowpics/Walk_BW.jpg'),
  require('../../assets/images/slideshowpics/ColorShrine.jpg'),
  require('../../assets/images/slideshowpics/FlowerMei.jpeg'),
  require('../../assets/images/slideshowpics/NicoleUmbrella.jpg'),
  require('../../assets/images/slideshowpics/BoardingSlide.jpg'),
  require('../../assets/images/slideshowpics/beauty.jpg'),
  require('../../assets/images/slideshowpics/Bridge.jpg'),
  require('../../assets/images/slideshowpics/Arch.JPG'),
  require('../../assets/images/slideshowpics/ColorFlowers.jpg'),
  require('../../assets/images/slideshowpics/Happy.JPG'),
  require('../../assets/images/slideshowpics/Haduken.jpeg'),
  require('../../assets/images/slideshowpics/JoJo_BW.jpg'),
  require('../../assets/images/slideshowpics/OldHouse.jpg'),
  require('../../assets/images/slideshowpics/WestLake.jpg'),
  require('../../assets/images/slideshowpics/FerrisWheel.JPG'),
  require('../../assets/images/slideshowpics/Terracota.jpg'),
  require('../../assets/images/slideshowpics/WestLake3.JPG'),
  
  ];

class Slideshow extends Component {
  render() {
    return (
      <SlideShow
        images={images}
        width='920px'
        imagesWidth='800px'
        imagesHeight='450px'
        imagesHeightMobile='56vh'
        thumbnailsWidth='920px'
        thumbnailsHeight='12vh'
        indicators thumbnails fixedImagesHeight
      />
    )

  }

}


export default Slideshow;