import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGaleryItem';

import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <ImageGalleryItem
            largeImageURL={item.largeImageURL}
            showModal={this.props.showModal}
            key={item.id}
            imageURL={item.webformatURL}
            tags={item.tags}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGallery;
