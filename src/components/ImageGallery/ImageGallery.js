import React from 'react';
// import axios from "axios";
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';





export class ImageGallery extends React.Component {

  state = {
    showModal: false,
    largeImage: '',
  }



  // toggleModal = () => {
  //   this.setState(prevState => ({showModal: !prevState.showModal}));
    
  // }

  openModal = (largeImage) => {
    this.setState({showModal: true, largeImage});
    
  }

  closeModal = () => {
    this.setState({showModal: false});
    
  }







  render() {
    const { showModal, largeImage } = this.state;
    const { items } = this.props;


    return (
      <>
        <ul className={css.ImageGallery}>
          {items.map(({id, webformatURL, largeImageURL}) => (
                <ImageGalleryItem key={id} 
                  image={webformatURL} 
                  largeImage={largeImageURL}
                  openModal={this.openModal}
                ></ImageGalleryItem>))}
        </ul>

        {showModal && <Modal closeModal={this.closeModal} largeImg={largeImage}></Modal>}
        
      </>
    );
  }
  
}





