import { Box, Button, Container, Link, Typography } from '@mui/material'
import theme from '../../theming/theme';
import {
    useTranslation,
} from "next-export-i18n";
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';



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

    const description = t('landingSection.description');

    return (
        <Container maxWidth="lg" id="landing">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'left',
                    minHeight: 'calc(100vh)', 
                    pb: "68px" // Adjusted to match the navbar height
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: isSM ? 'column' : 'row', gap: isSM ? 2 : 30 }}>
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Typography variant='h4' color='secondary' fontWeight={'bold'}>
                                {t('landingSection.greeting')}
                            </Typography>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Typography 
                                sx={{ 
                                    pt: theme.spacing(1), 
                                    pb: theme.spacing(1),
                                    '&:hover': { color: 'primary.alt' }  // Color change on hover
                                }} 
                                variant='h2' 
                                color='primary' 
                                fontWeight={'bold'}
                            >
                                {t('landingSection.name')}
                            </Typography>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography variant='body1' fontWeight={'bold'} gutterBottom color={theme.palette.primary.alt}>
                                {description.split('').map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.1, delay: index * 0.05 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </Typography>
                        </motion.div>
                        <Box sx={{ pt: 1 }}>
                            <Button variant='contained' size="large" sx={{ borderRadius: '0.875rem', backgroundColor: theme.palette.primary.main }}>
                                <Link href={t('landingSection.link.ref')} color='secondary' fontWeight={'bold'} underline={'none'}>
                                    {t('landingSection.link.title')}
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                    <motion.div
                        whileHover={{ rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
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
                    </motion.div>
                </Box>
            </Box>
        </Container>
    )
}
