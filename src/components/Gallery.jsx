// src/components/Gallery.jsx
import React, { useState } from 'react';
import styles from './Gallery.module.css';
import { FaTimes, FaSearchPlus } from 'react-icons/fa'; // Close & View icons

// Import your local work example images from the assets folder
import work1 from '../assets/work-example-1.png';
import work2 from '../assets/work-example-2.png';
import work3 from '../assets/work-example-3.png';
import work4 from '../assets/work-example-4.png';
import work5 from '../assets/work-example-5.png';
import work6 from '../assets/work-example-6.png';
// Aluth images 3 import karanna
import work7 from '../assets/work-example-7.png';
import work8 from '../assets/work-example-8.png';
import work9 from '../assets/work-example-9.png';


const galleryImages = [
    { id: 1, src: work1, title: 'Smart Home App UI', span: 'wide' },
    { id: 2, src: work2, title: 'Finance Dashboard Concept' },
    { id: 3, src: work3, title: 'E-commerce Product Page' },
    { id: 4, src: work4, title: 'Fitness Tracker Mockup', span: 'tall' },
    { id: 5, src: work5, title: 'Delivery App Interface' },
    { id: 6, src: work6, title: 'AI Chatbot UI' },
    // Aluth images 3 add karanna
    { id: 7, src: work7, title: 'Data Visualization' },
    { id: 8, src: work8, title: 'Mobile Onboarding Screen' },
    { id: 9, src: work9, title: 'AI Writing Assistant', span: 'wide' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => setSelectedImage(image);
    const closeModal = () => setSelectedImage(null);

    return (
        <div className={styles.gallerySection}>
            <h2 className={styles.sectionTitle}>Featured Work & UI Concepts</h2>
            <div className={styles.imageGrid}>
                {galleryImages.map((image) => (
                    <div 
                        key={image.id} 
                        className={`${styles.gridItem} ${image.span === 'wide' ? styles.wide : ''} ${image.span === 'tall' ? styles.tall : ''}`} 
                        onClick={() => openModal(image)}
                    >
                        <img src={image.src} alt={image.title} />
                        <div className={styles.overlay}>
                             {/* Title eka ain karala, icon eka witharak thiyenna */}
                            <FaSearchPlus className={styles.viewIcon} />
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.title} />
                        <button className={styles.closeButton} onClick={closeModal}>
                            <FaTimes />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;