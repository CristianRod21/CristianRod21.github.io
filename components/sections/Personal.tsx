import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight, BookOpen, Film, GraduationCap, Code, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const interests = [
  { icon: <BookOpen size={48} />, title: "Deep Learning", subtitle: "by Ian Goodfellow", color: "#FFD700" },
  { icon: <Film size={48} />, title: "The Social Dilemma", subtitle: "AI Ethics Documentary", color: "#FF4500" },
  { icon: <GraduationCap size={48} />, title: "Transformers", subtitle: "Advanced NLP Architectures", color: "#4169E1" },
  { icon: <Code size={48} />, title: "Rust Programming", subtitle: "Systems Programming", color: "#8B4513" },
  { icon: <Headphones size={48} />, title: "AI Podcast", subtitle: "Lex Fridman", color: "#4B0082" },
];

const InterestCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % interests.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + interests.length) % interests.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {

        
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getItemIndex = (index: number) => {
    return (index + interests.length) % interests.length;
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 400, overflow: 'hidden', mt: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Things I'm into right now:</Typography>
      </motion.div>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        {[-1, 0, 1].map((offset) => {
          const itemIndex = getItemIndex(currentIndex + offset);
          const item = interests[itemIndex];
          return (
            <motion.div
              key={itemIndex}
              initial={{ opacity: 0, x: offset * 100 }}
              animate={{ 
                opacity: offset === 0 ? 1 : 0.7, 
                x: offset * 250,
                scale: offset === 0 ? 1 : 0.8,
                zIndex: offset === 0 ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
              style={{ position: 'absolute' }}
            >
              <Box
                sx={{
                  width: 200,
                  height: 250,
                  bgcolor: item.color,
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  boxShadow: 3,
                }}
              >
                <motion.div animate={{ scale: offset === 0 ? [1, 1.1, 1] : 1 }} transition={{ duration: 1, repeat: Infinity }}>
                  {item.icon}
                </motion.div>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>{item.subtitle}</Typography>
              </Box>
            </motion.div>
          );
        })}
      </Box>
      <IconButton
        onClick={prevSlide}
        sx={{ position: 'absolute', left: '10%', top: '50%', transform: 'translateY(-50%)' }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{ position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)' }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default InterestCarousel;