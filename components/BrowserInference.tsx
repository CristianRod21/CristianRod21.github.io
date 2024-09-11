import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Typography, TextField, IconButton, CircularProgress, Paper, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { Send, CircleX, Info } from 'lucide-react';

const MAX_CHARS = 280;

const BrowserInference: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingStatus, setLoadingStatus] = useState('');
  const worker = useRef<Worker | null>(null);

//   worker logic based on https://github.com/xenova/transformers.js/tree/main/examples/next-client/src/app
  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL('../workers/sentimentWorker.js', import.meta.url), {
        type: 'module'
      });
    }

    const onMessageReceived = (e: MessageEvent) => {
      switch (e.data.status) {
        case 'initiate':
          setIsLoading(true);
          setLoadingStatus('Initiating pipeline...');
          break;
        case 'progress':
          setLoadingStatus(`Loading: ${e.data.message}`);
          break;
        case 'ready':
          setIsLoading(false);
          setLoadingStatus('');
          break;
        case 'complete':
          setOutput(JSON.stringify(e.data.output[0], null, 2));
          break;
        case 'error':
          setError(e.data.error);
          setIsLoading(false);
          break;
      }
    };

    worker.current.addEventListener('message', onMessageReceived);

    // Initiate the pipeline
    worker.current.postMessage({ action: 'init' });

    return () => worker.current?.removeEventListener('message', onMessageReceived);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value.slice(0, MAX_CHARS);
    setInput(newInput);
  };

  const handleInference = useCallback(() => {
    if (worker.current && input) {
      worker.current.postMessage({ action: 'infer', text: input });
    }
  }, [input]);

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper elevation={2} sx={{ p: 2, borderRadius: 2, maxWidth: '400px', backgroundColor: 'transparent' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h6" fontWeight="bold" color="primary">
            Quick Sentiment Analysis
          </Typography>
          <Tooltip title="This analysis uses Transformers.js and runs entirely in your browser">
            <IconButton size="small" color="primary">
              <Info size={18} />
            </IconButton>
          </Tooltip>
        </Box>
        {isLoading ? (
          <Box display="flex" alignItems="center" justifyContent="center" my={2}>
            <CircularProgress size={20} color="secondary" />
            <Typography variant="body2" ml={1}>{loadingStatus || 'Loading...'}</Typography>
          </Box>
        ) : error ? (
          <Typography color="error" variant="body2">{error}</Typography>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Enter text for analysis"
                value={input}
                onChange={handleInputChange}
                inputProps={{ maxLength: MAX_CHARS }}
              />
              <IconButton 
                onClick={handleClear}
                color="secondary" 
                sx={{ ml: 1 }}
                disabled={input.length === 0}
              >
                <CircleX/>
              </IconButton>
              <IconButton 
                onClick={handleInference} 
                color="primary" 
                sx={{ ml: 1 }}
                disabled={input.length === 0}
              >
                <Send />
              </IconButton>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'right', mt: 0.5 }}>
              {input.length} / {MAX_CHARS}
            </Typography>
            {output && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
                  Sentiment: {output}
                </Typography>
              </motion.div>
            )}
          </motion.div>
        )}
      </Paper>
    </motion.div>
  );
};

export default BrowserInference;