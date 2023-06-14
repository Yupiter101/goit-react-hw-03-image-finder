
import React from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {




  render() {
    const {image, largeImage, openModal} = this.props;
  
    return (
      <li className={css.ImageGalleryItem} onClick={()=> openModal(largeImage)}>
        <img className={css.ImageGalleryItemImage} src={image} alt="cat" />
      </li>
    );
  }
  
}




