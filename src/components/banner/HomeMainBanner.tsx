import React from 'react';

const HomeMainBanner = ({ ColorStyleCls }: { ColorStyleCls?: string }) => {
    return (
        <div className="tp-banner-area" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className={`tp-banner-img ${ColorStyleCls}`}>
                <iframe
                    src="https://www.youtube.com/embed/Vc2wK6PlFzo?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=Vc2wK6PlFzo"
                    title="Yeşilyurt İnşaat Tanıtım Videosu"
                    frameBorder="0"
                    allow="autoplay; fullscreen; encrypted-media"
                    allowFullScreen
                    style={{
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover',
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                ></iframe>
            </div>
        </div>
    );
};

export default HomeMainBanner;
