import { FacebookSvg, InstagramSvg, InstagramTwo, LinkedinSvg, TwitterSvg } from '@/svg';
import Link from 'next/link';
import React from 'react';

export const FooterSocialIcons = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <Link href="https://www.instagram.com/yesilyurt_insaat/">
                <span><InstagramTwo /></span>
            </Link>
        </div>
    );
};
export const FooterSocialIconsTwo = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <Link href="#">
                <span><FacebookSvg /></span>
            </Link>{" "}
            <Link href="#">
                <span><TwitterSvg /></span>
            </Link>{" "}
            <Link href="#">
                <span><LinkedinSvg /></span>
            </Link>{" "}
            <Link href="https://www.instagram.com/yesilyurt_insaat/">
                <span><InstagramSvg /></span>
            </Link>
        </div>
    );
};

