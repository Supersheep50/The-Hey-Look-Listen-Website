import React from 'react';
import styles from '../../styles/GamingYarns.module.css';

const images = [
  'https://res.cloudinary.com/dufx1rlrw/image/upload/v1691829711/Gaming_Yarns_1_ideto1.jpg',
  'https://res.cloudinary.com/dufx1rlrw/image/upload/v1691829711/Gaming_Yarns_2_dr1gph.jpg',
  'https://res.cloudinary.com/dufx1rlrw/image/upload/v1691829711/Gaming_Yarns_3_vjahsh.jpg',
  'https://res.cloudinary.com/dufx1rlrw/image/upload/v1691829711/Gaming_Yarns_4_uapuxy.jpg',
  'https://res.cloudinary.com/dufx1rlrw/image/upload/v1691829711/Gaming_Yarns_5_ytr7u9.jpg',
 
];

const ImageGallery = () => {
  return (
    <div className={styles.galleryContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageCard}>
          <img src={image} alt={`Image ${index + 1}`} className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;