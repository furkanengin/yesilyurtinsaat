import errorImg from '../../public/assets/img/error/error.png';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Yeşilyurt İnşaat | Çok Yakında",
};

export default function NotFound() {
    return (
        <main>
            <div className="tp-error-area pt-190 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-error-wrapper text-center">

                                <h4 className="tp-error-title">Çok Yakında!</h4>

                                <Image src={errorImg} alt="Çok yakında" priority />

                                <div className="tp-error-content">
                                    <h4 className="tp-error-title-sm">
                                        Bu sayfamız hazırlanıyor...
                                    </h4>

                                    <p>
                                        Yeşilyurt İnşaat’ın yenilenen dijital yüzü çok yakında yayında.
                                        Bu süreçte bizimle iletişime geçebilirsiniz.
                                    </p>

                                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                                        <Link className="tp-btn" href="/">
                                            Anasayfaya Dön
                                        </Link>

                                        <Link className="tp-btn tp-btn-black" href="/contact">
                                            İletişime Geç
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
