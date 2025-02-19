"use client";

import { useEffect } from 'react';
import { CursorTrail } from './cursor-trail';

export function CursorEffect() {
  useEffect(() => {
    new CursorTrail();
  }, []);

  return null;
}