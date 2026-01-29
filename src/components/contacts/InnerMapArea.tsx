import mapIcon from '../../../public/assets/img/contact/map-icon.svg';
import Image from 'next/image';
import React from 'react';

const InnerMapArea = () => {
    return (
        <div className="tp-contact-map-ptb p-relative pb-120">
            <div className="tp-contact-map-wrapper p-relative">
                <div className="tp-contact-map-icon-box">
                    <div className="tp-contact-map-icon">
                        <span><Image src={mapIcon} alt="contact image"/></span>
                    </div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4706.062612415473!2d41.1915601!3d39.911510199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e593e92a8a4cf%3A0x5a01151611ed3229!2zU2FsdHVrbHUsIMWeaHQuIE9uYmHFn8SxIMOWbWVyIEJ1ZGFrIENkIE5POjIzL0IsIDI1MDkwIEF6aXppeWUvRXJ6dXJ1bQ!5e1!3m2!1str!2str!4v1769645088676!5m2!1str!2str" width="600" height="450" style={{border: 0}} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default InnerMapArea;