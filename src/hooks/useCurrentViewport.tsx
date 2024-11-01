import { useEffect, useState } from 'react';

import { viewportSizes } from '@/constants';
import { breakpoint, sizeByMedia } from '@/types/models';

import { useWindowSize } from './useWindowSize';

export function useCurrentViewport(viewports: sizeByMedia = {}): breakpoint {
  const { width: windowSize } = useWindowSize();
  const [breakpoint, setBreakpoint] = useState<breakpoint>('none');

  const breakpointsKey = Object.keys(viewports);

  useEffect(() => {
    const breaks = Object.entries(viewportSizes).filter(viewport =>
      breakpointsKey.includes(viewport[0])
    );

    const getCurrentBreakpoint = () => {
      const validBreaks = breaks
        .map(([key, value]) => {
          return {
            key: key as breakpoint,
            value: windowSize - value,
          };
        })
        .filter(media => media.value >= 0)
        .sort((media1, media2) => media1.value - media2.value);

      const selectedBreakpoint = validBreaks.length > 0 ? validBreaks[0].key : 'none';

      setBreakpoint(selectedBreakpoint);
    };

    getCurrentBreakpoint();
  }, [windowSize, breakpointsKey]);

  return breakpoint;
}
