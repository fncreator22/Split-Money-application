'use client';

import { useEffect, useRef, memo } from 'react';
import QRCode from 'qrcode';
import { Card } from '../ui/card';

export const QRCanvas = memo(function QRCanvas({ url }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const generateQR = async () => {
      if (!canvasRef.current || !url) return;
      
      try {
        await QRCode.toCanvas(canvasRef.current, url, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        });
      } catch (error) {
        console.error('Failed to generate QR code:', error);
      }
    };

    generateQR();
  }, [url]);

  if (!url) return null;

  return (
    <Card className="p-4 flex items-center justify-center bg-white">
      <canvas ref={canvasRef} />
    </Card>
  );
});
