import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGaleryItem';

import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    //console.log(this.props.items, 'array of images in ImageGaleery component');
    // state = {
    //   showModal: false,
    // };
    // showModal = () => {
    //   this.setState({
    //     showModal: true,
    //   });
    // };

    return (
      <>
        {/* {showModal && (
          <Modal>
            <ImageGalleryItem mImageURL={item.largeImgURL}>
             
            </ImageGalleryItem>
          </Modal>
        )} */}
        <ul>
          {this.props.items.map(item => (
            <ImageGalleryItem
              largeImageURL={item.largeImageURL}
              showModal={this.props.showModal}
              key={item.id}
              imageURL={item.webformatURL}
              tags={item.tags}
            ></ImageGalleryItem>
          ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
