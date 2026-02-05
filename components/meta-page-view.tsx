'use client';

import { useEffect } from 'react';
import * as pixel from '@/meta/meta-pixel';

export const MetaPageView = () => {
    useEffect(() => {
        pixel.loadFBPixelScript();
        const isPageView =  pixel.pageview();
        console.log("fcbk event page view", isPageView);
    }, []);
    return <></>;
};
