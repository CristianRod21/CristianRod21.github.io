import { Box, Button, Container, Link, Typography } from '@mui/material'
import theme from '../../theming/theme';
import {
    useTranslation,
} from "next-export-i18n";
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';


export default function Landing() {
    const { t } = useTranslation('common');

    const isSM = useMediaQuery(theme.breakpoints.down('lg'));
    const imageSize = isSM ? 200 : 350;

    const images = ['/me/1.png', '/me/2.png', '/me/3.png', '/me/4.png'];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);


    return (
        <Container maxWidth="lg" id="landing">
            <Box
                sx={{
                    display: 'flex',
                    backgroundColor: 'primary',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'left',
                    minHeight: '100vh',
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: isSM ? 'column' : 'row', gap: isSM ? 2 : 30 }}>
                    <Box>
                        <Typography variant='h4' color='secondary' fontWeight={'bold'}>
                            {t('landingSection.greeting')}
                        </Typography>
                        <Typography sx={{ pt: theme.spacing(1), pb: theme.spacing(1) }} variant='h2' color='primary' fontWeight={'bold'}>
                            {t('landingSection.name')}
                        </Typography>
                        <Typography variant='body1' fontWeight={'bold'} color="secondary" gutterBottom>
                            {t('landingSection.description')}
                        </Typography>
                        <Box sx={{ pt: 1 }}>
                            <Button variant='contained' size="large" sx={{ borderRadius: '0.875rem' }}>
                                <Link href={t('landingSection.link.ref')} color='secondary' underline={'none'}>
                                    {t('landingSection.link.title')}
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            {images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`Image ${index}`}
                                    width={imageSize}
                                    height={imageSize}
                                    quality={100}
                                    style={{
                                        position: 'absolute',
                                        opacity: currentIndex === index ? 1 : 0,
                                        transition: 'opacity 0.5s ease-in-out',
                                        borderRadius: '20px',
                                        objectFit: 'cover',
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
