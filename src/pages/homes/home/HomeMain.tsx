'use client';
import { animationParagraph, buttonBounceAnimation, charAnimation, fadeAnimation, funfactPanelAnimation, panelAnimation, servicePanelAnimation, textInvertAnim1, videoAnimation } from '@/hooks/useGsapAnimation';
import { bounceAnimation, textBounceAnimation } from '@/utils/titleAnimation';
import HomeMainTestimonial from '@/components/testimonial/HomeMainTestimonial';
import HomeMainTextSlider from '@/components/text-slider/HomeMainTextSlider';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import HomeMainService from '@/components/service/HomeMainService';
import HomeMainVideo from '@/components/video-area/HomeMainVideo';
import HomeMainHero from '@/components/hero-banner/HomeMainHero';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainBanner from '@/components/banner/HomeMainBanner';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import HomeMainAbout from '@/components/about/HomeMainAbout';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import HomeMainWork from '@/components/work/HomeMainWork';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';

const HomeMain = () => {
    useCursorAndBackground()

    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            funfactPanelAnimation();
            buttonBounceAnimation();
            servicePanelAnimation();
            textBounceAnimation();
            animationParagraph();
            bounceAnimation();
            charAnimation();
            videoAnimation();
            panelAnimation();
            fadeAnimation();
            textInvertAnim1();
        }, 100);
        return () => clearTimeout(timer);
    });
    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>
            <BackToTop />
            <HomeMainHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HomeMainHero />
                        <HomeMainAbout />
                        <HomeMainBanner />
                        <HomeMainTextSlider />
                        <HomeMainService />
                        <HomeMainVideo />
                        <HomeMainWork />
                        <HomeMainTestimonial />
                    </main>
                    <HomeMainFooter />
                </div>
            </div>
        </>
    );
};

export default HomeMain;
