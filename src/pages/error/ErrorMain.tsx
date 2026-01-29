"use client";
import CreativeAgencyFooter from "@/layouts/footers/CreativeAgencyFooter";
import { useCursorAndBackground } from "@/hooks/useCursorAndBackground";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import InnerPageHeader from "@/layouts/headers/InnerPageHeader";
import { fadeAnimation } from "@/hooks/useGsapAnimation";
import useScrollSmooth from "@/hooks/useScrollSmooth";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// İstersen error görseli yerine "coming soon" görseli koyarsın.
// Şimdilik mevcut görseli kullanıyorum:
import comingSoonImg from "../../../public/assets/img/error/error.png";

const ComingSoonMain = () => {
    useCursorAndBackground({ bgColor: "#fff" });
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-bg-red-2">
                <div id="ball"></div>
            </div>

            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="tp-error-area pt-190 pb-120">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="tp-error-wrapper text-center">
                                            <h4 className="tp-error-title">Çok Yakında</h4>

                                            <Image
                                                style={{ width: "auto", height: "auto" }}
                                                src={comingSoonImg}
                                                alt="Çok yakında"
                                                priority
                                            />

                                            <div className="tp-error-content">
                                                <h4 className="tp-error-title-sm">
                                                    Yeni web sitemiz hazırlanıyor.
                                                </h4>

                                                <p>
                                                    Yeşilyurt İnşaat’ın yenilenen dijital yüzü çok yakında
                                                    yayında. Bu süreçte bize dilediğiniz zaman ulaşabilirsiniz.
                                                </p>

                                                <div className="d-flex justify-content-center gap-3 flex-wrap">
                                                    <Link className="tp-btn" href="/">
                                                        Anasayfaya Dön
                                                    </Link>

                                                    <Link className="tp-btn tp-btn-black" href="/contact">
                                                        İletişime Geç
                                                    </Link>

                                                    {/* Direkt mail açsın istersen: */}
                                                    <a
                                                        className="tp-btn tp-btn-border"
                                                        href="mailto:info@yesilyurtinsaat.com?subject=Ye%C5%9Filyurt%20%C4%B0n%C5%9Faat%20-%20Bilgi%20Talebi"
                                                    >
                                                        E-posta Gönder
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <CreativeAgencyFooter bgColor="#0E0F11" />
                </div>
            </div>
        </>
    );
};

export default ComingSoonMain;
