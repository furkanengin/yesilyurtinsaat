import ContactMain from '@/pages/contacts/contact/ContactMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Bize Ulaşın",
};

const page = () => {
    return (
        <ContactMain />
    );
};

export default page;