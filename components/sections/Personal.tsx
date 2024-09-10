import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Fade } from '@mui/material';
import { ChevronLeft, ChevronRight, BookOpen, Film, GraduationCap, Code, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const interests = [
  {
    icon: <BookOpen size={48} />,
    title: "Let&apos;s reproduce GPT",
    subtitle: "by Andrej Karpathy",
    color: "#FFD700",
    description: "Exploring the inner workings of GPT models through hands-on implementation."
  },
  { icon: <Film size={48} />, title: "Inference Optimization", subtitle: "Making GPU and CPU go brrr", color: "#FF4500", description: "Learning more about Quantization, Pruning, VLLM, FlashAttention (fused kernels), ONNX" },
  { icon: <GraduationCap size={48} />, title: "Transformers", subtitle: "LoRA Fine-tuning, Prompting, RAGs, Embeddings", color: "#4169E1", description: "Unsloth.ai single GPU fine-tuning for downstream tasks, GraphRAG, BGE-m3, QDrant" },
  { icon: <Code size={48} />, title: "C++ Programming", subtitle: "Re-learning the basics", color: "#8B4513", description: "Going back to basics and learning more about low-level programming, memory management, concurrency, and performance optimization." },
  { icon: <Headphones size={48} />, title: "Meditations, Deep Work, Principles", subtitle: "Aurelius, Newport, Dalio", color: "#4B0082", description: "Reading and learning more about Stoicism, productivity, and the power of compounding." },
];

const InterestCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>Things I&apos;m learning:</Typography>
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
              onMouseEnter={() => setHoveredIndex(itemIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
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
                <Fade in={hoveredIndex === itemIndex}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 2,
                      borderRadius: 4,
                    }}
                  >
                    <Typography variant="body2" align="center">
                      {item.description}
                    </Typography>
                  </Box>
                </Fade>
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