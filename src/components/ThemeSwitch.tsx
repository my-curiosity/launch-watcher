'use client';

import Switch from 'react-switch';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <label className="relative z-10 mb-1 ml-3 text-m inline-flex items-center gap-1 w-fit">
      <span className="text-lg text-black dark:text-white">Dark theme</span>
      <Switch
        onChange={toggleTheme}
        checked={theme === 'dark'}
        onColor={'#14532d'}
      />
    </label>
  );
};

export default ThemeSwitch;
