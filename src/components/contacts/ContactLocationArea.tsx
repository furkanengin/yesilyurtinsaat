import Image from "next/image";
import Link from "next/link";
import React from "react";

import contactLocation1 from "../../../public/assets/img/contact/contact-location-1.png";
import contactLocation2 from "../../../public/assets/img/contact/contact-location-1.png";

const ContactLocationArea = () => {
  const locations = [
    {
      title: "Erzurum",
      time: "09:00 - 18:00",
      img: contactLocation1,
      addressTitle: "Ana Ofis",
      address: (
        <>
            Şht. Onbaşı Ömer Budak Cd. <br /> No:23/B, Aziziye/Erzurum
        </>
      ),
      mapLink: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4706.062612415473!2d41.1915601!3d39.911510199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e593e92a8a4cf%3A0x5a01151611ed3229!2zU2FsdHVrbHUsIMWeaHQuIE9uYmHFn8SxIMOWbWVyIEJ1ZGFrIENkIE5POjIzL0IsIDI1MDkwIEF6aXppeWUvRXJ6dXJ1bQ!5e1!3m2!1str!2str!4v1769646299010!5m2!1str!2str\" width=\"800\" height=\"600\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
      phone: "(+90) 530 879 17 75",
      email: "info@yesilyurtinsaat.com",
    },
      {
          title: "İstanbul",
          time: "09:00 - 18:00",
          img: contactLocation2,
          addressTitle: "Ana Ofis",
          address: (
              <>
                  Şht. Onbaşı Ömer Budak Cd. <br /> No:23/B, Aziziye/Erzurum
              </>
          ),
          mapLink: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4706.062612415473!2d41.1915601!3d39.911510199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e593e92a8a4cf%3A0x5a01151611ed3229!2zU2FsdHVrbHUsIMWeaHQuIE9uYmHFn8SxIMOWbWVyIEJ1ZGFrIENkIE5POjIzL0IsIDI1MDkwIEF6aXppeWUvRXJ6dXJ1bQ!5e1!3m2!1str!2str!4v1769646299010!5m2!1str!2str\" width=\"800\" height=\"600\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
          phone: "(+90) 530 879 17 75",
          email: "info@yesilyurtinsaat.com",
      },
  ];

  return (
    <div className="tp-contact-location-ptb p-relative pt-120 pb-170">
      <div className="tp-gsap-bg" style={{ backgroundColor: "#101016" }}></div>
      <div className="container container-1430">
        <div className="tp-contact-location-wrapper">
          {locations.map((loc, index) => (
            <div className="tp-contact-location-item" key={index}>
              <div className="row">
                <div className="col-xl-7">
                  <div className="tp-contact-location-left d-flex flex-wrap align-items-center">
                    <div className="tp-contact-location-info-thumb">
                      <Image src={loc.img} alt={loc.title} />
                    </div>
                    <div className="tp-contact-location-left-info">
                      <h4 className="tp-contact-location-left-title">{loc.title}</h4>
                      <span>
                        <i className="fa-regular fa-clock"></i> {loc.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="tp-contact-location-right-wrap d-flex align-items-start justify-content-between">
                    <div className="tp-contact-location-right">
                      <div className="tp-contact-location-loc">
                        <span className="tp-contact-location-loc-title">
                          {loc.addressTitle}
                        </span>
                        <Link href={loc.mapLink} target="_blank">
                          {loc.address}
                        </Link>
                      </div>
                      <div className="tp-contact-location-map">
                        <Link href={loc.mapLink} target="_blank">
                          Google Maps
                        </Link>
                      </div>
                    </div>
                    <div className="tp-contact-location-right-info text-start text-md-end">
                      <Link href={`tel:${loc.phone}`}>{loc.phone}</Link> <br />
                      <Link href={`mailto:${loc.email}`}>{loc.email}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocationArea;
