import one from '../../public/assets/img/home-01/funfact/funfact-1.png';
import two from '../../public/assets/img/home-01/funfact/funfact-2.png';
import three from '../../public/assets/img/home-01/funfact/funfact-3.png';
import four from '../../public/assets/img/home-01/funfact/funfact-4.png';
import five from '../../public/assets/img/home-01/funfact/funfact-5.png';
import six from '../../public/assets/img/home-01/funfact/funfact-6.png';
import seven from '../../public/assets/img/home-01/funfact/funfact-8.png';
import eight from '../../public/assets/img/home-01/funfact/funfact-9.png';
import { Panel } from '@/types/custom-d-t';

const panelsData: Panel[] = [
    {
        id: 1,
        style: 'tp-funfact-green-wrap',
        subtitle: '( Güvenle İnşa Ettik )',
        title: 'Tamamlanan <br> projelerimiz',
        funfactNumber: "right",
        spacingCls: "",
        images: [
            { src: one, delay: 0.3 },
            { src: two, delay: 0.5 },
            { src: three, delay: 0.7 },
            { src: four, delay: 0.9 },
        ],
        secondaryImages: [
            { src: five, delay: 1.0 },
            { src: six, delay: 1.1 },
        ],
        bigImage: { src: seven, delay: 0.7 },
        number: '68',
    },
    {
        id: 2,
        style: 'tp-funfact-green-wrap pink-style',
        subtitle: '( Müşteri Memnuniyeti )',
        title: 'Mutlu AİLELER ve <br> İŞ ortakları',
        funfactNumber: "right",
        spacingCls: "",
        images: [
            { src: one, delay: 0.3 },
            { src: seven, delay: 0.5 },
            { src: eight, delay: 0.7 },
        ],
        secondaryImages: [
            { src: four, delay: 1.5 },
            { src: five, delay: 1.7 },
        ],
        bigImage: { src: five, delay: 0.7 },
        number: '100%',
    },
    {
        id: 3,
        style: 'tp-funfact-green-wrap yellow-style',
        subtitle: '( Deneyim ve Güven )',
        title: 'Yıllık <br> SEKTÖR <br> TECRÜBEMİZ',
        customCls: "align-items-md-end",
        funfactNumber: "center",
        spacingCls: "pl-140 mb-20",
        images: [
            { src: one },
            { src: two },
            { src: three },
            { src: four },
        ],
        number: '20+',
    },
];

export default panelsData;
