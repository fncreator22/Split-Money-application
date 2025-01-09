'use client';

import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Card } from '../ui/card';

export function QRCode({ url }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });
    }
  }, [url]);

  return (
    <Card className="p-4 flex items-center justify-center bg-white dark:bg-white">
      <canvas ref={canvasRef} />
    </Card>
  );
}
