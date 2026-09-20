import { useEffect } from 'react';
import { cancelFrame, frame, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';

export function useLenis(): void {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    // Lenis subtracts the target's scroll-margin-top and the root's scroll-padding-top itself,
    // so anchored headings clear the navbar with no extra offset here.
    const lenis = new Lenis({ autoRaf: false, anchors: true });
    const update = ({ timestamp }: { timestamp: number }) => lenis.raf(timestamp);

    // Driven by framer-motion's frame loop so scroll-linked motion and Lenis
    // read the same scroll position within one frame.
    frame.update(update, true);

    return () => {
      cancelFrame(update);
      lenis.destroy();
    };
  }, [reduceMotion]);
}
