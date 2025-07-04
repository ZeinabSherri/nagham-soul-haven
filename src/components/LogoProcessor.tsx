
import React, { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

interface LogoProcessorProps {
  originalImageUrl: string;
  onProcessed: (processedImageUrl: string) => void;
  className?: string;
}

const LogoProcessor: React.FC<LogoProcessorProps> = ({ originalImageUrl, onProcessed, className }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        
        // Fetch the original image
        const response = await fetch(originalImageUrl);
        const blob = await response.blob();
        
        // Load as HTMLImageElement
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
        onProcessed(processedUrl);
        
      } catch (error) {
        console.error('Error processing logo:', error);
        // Fallback to original image
        setProcessedImageUrl(originalImageUrl);
        onProcessed(originalImageUrl);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [originalImageUrl, onProcessed]);

  if (isProcessing) {
    return (
      <img 
        src="/lovable-uploads/aa0504d9-9244-495e-bdf6-b5ae3af2a200.png" 
        alt="Nagham Logo" 
        className={`${className} opacity-75`}
      />
    );
  }

  if (processedImageUrl) {
    return (
      <img 
        src={processedImageUrl} 
        alt="Nagham Logo" 
        className={className}
      />
    );
  }

  return null;
};

export default LogoProcessor;
