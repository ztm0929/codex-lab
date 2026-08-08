'use client';

import { useLayoutEffect, useState } from 'react';
import { Tabs, type TabsProps } from 'fumadocs-ui/components/tabs';

type SupportedOS = 'Windows' | 'macOS';

type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: { platform?: string };
};

function detectOS(): SupportedOS | null {
  const { userAgentData } = navigator as NavigatorWithUserAgentData;
  const platform = `${userAgentData?.platform ?? ''} ${navigator.userAgent} ${navigator.platform}`;

  if (/windows/i.test(platform)) return 'Windows';
  if (/mac|iphone|ipad|ipod/i.test(platform)) return 'macOS';

  return null;
}

/**
 * Chooses the matching OS tab for a first-time visitor.
 * Fumadocs restores any saved groupId preference after this default is set,
 * so an explicit reader choice always wins.
 */
export function OSTabs({ defaultIndex = 0, items, ...props }: TabsProps) {
  const [resolvedDefaultIndex, setResolvedDefaultIndex] = useState(defaultIndex);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const detectedOS = detectOS();
    const detectedIndex = detectedOS ? items?.indexOf(detectedOS) ?? -1 : -1;

    if (detectedIndex >= 0) setResolvedDefaultIndex(detectedIndex);
    setIsReady(true);
  }, []);

  return (
    <Tabs
      key={isReady ? `os-${resolvedDefaultIndex}` : 'os-fallback'}
      defaultIndex={isReady ? resolvedDefaultIndex : defaultIndex}
      items={items}
      {...props}
    />
  );
}
