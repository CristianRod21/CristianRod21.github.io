import { Box, Button, Container, Link, Typography, Tooltip } from '@mui/material'
import theme from '../../theming/theme';
import {
    useTranslation,
} from "next-export-i18n";
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// TODO: refactor this to use a collection of images and prompts
const imagePrompts = [
    "A close-up of a young man in an animated movie style, with expressive line work and vibrant, colorful details. He has striking, bright green eyes that sparkle with mischief and energy, framed by arched eyebrows and a warm, friendly smile. His hair is styled in a playful, gravity-defying manner with a small crown of colorful leaves perched at an angle. He wears a stylized, brightly colored outfit with quirky patterns and shapes. The background is a whimsical landscape of fantastical treehouse villages, floating islands, and a swirling sky filled with fluffy clouds and shooting stars. His skin has a smooth, cel-shaded look with a subtle glow. Floating around him are animated objects related to his character's interests or abilities, such as magical spell books, musical instruments, or futuristic gadgets. The scene is illustrated with bold, saturated colors and a mix of 2D and 3D-style animation techniques, embodying the wonder and adventure of an animated fantasy world.",
    "A close-up of a young man in a medieval tarot card style, with intricate line work and rich, symbolic details. He has intense, glowing blue eyes that suggest mystical power, framed by furrowed eyebrows and a serious, determined expression. His hair is styled in an elaborate medieval pattern, with a symbolic crown of leaves or laurel, and his robe features intricate, regal embroidery with arcane symbols. The background is a rich tapestry of medieval architecture, featuring towering castles, ancient trees, and a night sky filled with stars and astrological symbols. His skin has a soft, ethereal glow, and a delicate line of light traces his face, symbolizing divine connection. In the air around him, ornate borders and mystical elements like swords, chalices, or pentacles appear as tarot symbols. The scene is illustrated with deep, earthy tones, gold accents, and the iconic tarot card style, embodying wisdom and fate from the medieval era.",
    "Gritty, Tarantino-inspired portrait of a young man with a modern, rebellious twist. Picture him in a dimly lit alleyway, leaning casually against a graffiti-covered wall with neon signs flickering in the background. The atmosphere is straight out of Pulp Fiction, filled with tension and unpredictability. He's wearing a sleek black leather jacket, with a cigarette hanging loosely from his lips, and a devil-may-care smirk on his face. The color palette is bold and moody, with sharp contrasts—deep blues, purples, and striking neon pinks and greens lighting up the night. His face is illuminated by a harsh streetlight above, casting sharp shadows and giving him a hard-edged, cinematic look. In his hand, he grips an old-school revolver, casually resting by his side, with a sense of cool confidence. The background features a gritty urban landscape—empty streets, distant sounds of traffic, and the occasional distant silhouette of figures walking through the fog. The overall vibe is tense, dangerous, and full of swagger, with an unmistakable pulp feel. It's a scene that's raw, edgy, and dripping with cinematic attitude.",
    "Create a portrait of a young man in ancient rome the style of Classicism, resembling an 18th-century oil painting. The face should be rendered with soft, realistic brushstrokes, emphasizing depth, shadows, and light as in traditional portraiture. Use a rich color palette with warm earthy tones like deep ochres, siennas, and muted blues for a timeless, aged effect. The background should feature a classical landscape, such as rolling hills or a pastoral scene with soft, diffused light from a setting sun, evoking the grandeur of nature. Replace any modern elements with classical symbols like laurel wreaths, marble columns, or an ancient cityscape in the distance, blended into the natural scenery. Add subtle details, like textured brushstrokes on canvas, to give the portrait a hand-painted look, with smooth transitions of color and soft, atmospheric lighting. The overall mood should be serene, refined, and balanced, with a harmonious composition true to the Classical art tradition",
    "A cinematic close-up of a young man with intense, glowing blue eyes, set against a backdrop that bends time and reality in a way reminiscent of a Christopher Nolan time-travel film. His expression is serious and determined, as if he carries the weight of a fractured timeline. His hair is styled in a sleek, modern cut, with a subtle headpiece featuring geometric, technological designs that suggest mastery over time. He wears a futuristic, minimalist outfit with glowing lines and symbols that hint at advanced quantum mechanics. The background merges towering, futuristic cityscapes with fragments of historical architecture from different eras, giving a surreal, nonlinear sense of time collapsing. The sky is fractured with swirling stars, wormholes, and celestial alignments, illustrating the manipulation of time and space. Floating in the air around him are holographic, geometric shapes and intricate lines, representing alternate realities, time loops, and complex quantum physics. At the bottom of the image, bold, sleek typography with the movie's title appears, accompanied by the tagline: Master of Time, Bound by Fate. A faint, winding clock face subtly emerges in the lower left corner, while in the top corners, faint, abstract imagery of past and future events swirl in the background. The overall color palette features deep, cool tones like metallic blues, grays, and silver accents, contrasted with warm golden light streaks symbolizing the flux of time. The design evokes tension, mystery, and philosophical intrigue, typical of a Nolan-style narrative.",
]

export default function Landing() {
    const { t } = useTranslation('common');

    const isSM = useMediaQuery(theme.breakpoints.down('lg'));
    const imageSize = isSM ? 200 : 350;

    const images = ['/me/1.png', '/me/2.png', '/me/3.png', '/me/4.png', '/me/5.png'];

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
                                    '&:hover': { color: 'primary.light' }  // Color change on hover
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
                            <Typography variant='body1' fontWeight={'bold'} gutterBottom color={theme.palette.primary.light}>
                                {description.split('').map((char: string, index: number) => (
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
                        <Box sx={{ pt: 2 }}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant='contained'
                                    size="large"
                                    sx={{
                                        borderRadius: '2rem',
                                        backgroundColor: theme.palette.primary.main,
                                        padding: '12px 24px',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.dark,
                                            boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                                        },
                                    }}
                                >
                                    <Link
                                        href={t('landingSection.link.ref')}
                                        color='secondary'
                                        fontWeight={'bold'}
                                        underline={'none'}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                        }}
                                    >
                                        <motion.span
                                            initial={{ x: -5 }}
                                            animate={{ x: 0 }}
                                            transition={{ repeat: Infinity, duration: 0.8, repeatType: 'reverse' }}
                                        >
                                            👉
                                        </motion.span>
                                        {t('landingSection.link.title')}
                                    </Link>
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                    <motion.div
                        whileHover={{ rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Box sx={{ display: 'flex', position: 'relative' }}>
                            {images.map((image, index) => (
                                <Tooltip
                                    key={index}
                                    title={
                                        <Box sx={{ padding: 2 }}>
                                            <Typography variant="subtitle2" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
                                                Prompt:
                                            </Typography>
                                            <Typography sx={{ fontSize: '0.9rem' }}>
                                                {imagePrompts[currentIndex]}
                                            </Typography>
                                        </Box>
                                    }
                                    placement="right"
                                    arrow
                                    PopperProps={{
                                        modifiers: [
                                            {
                                                name: 'offset',
                                                options: {
                                                    offset: [0, 8],
                                                },
                                            },
                                        ],
                                    }}
                                    sx={{
                                        '& .MuiTooltip-tooltip': {
                                            maxWidth: 600,
                                            width: '100%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            color: 'rgba(0, 0, 0, 0.87)',
                                            borderRadius: '12px',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.18)',
                                        },
                                        '& .MuiTooltip-arrow': {
                                            color: 'rgba(255, 255, 255, 0.9)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            opacity: currentIndex === index ? 1 : 0,
                                            transition: 'opacity 0.5s ease-in-out',
                                        }}
                                    >
                                        <Image
                                            src={image}
                                            alt={`Image ${index}`}
                                            width={imageSize}
                                            height={imageSize}
                                            quality={100}
                                            style={{
                                                borderRadius: '20px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Box>
                                </Tooltip>
                            ))}
                        </Box>
                    </motion.div>
                </Box>
            </Box>
        </Container>
    )
}
