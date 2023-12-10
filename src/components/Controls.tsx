import { ReactNode } from 'react';

type ControlsProps = {
  children?: ReactNode;
};

function Controls({ children }: ControlsProps) {
  return (
    <section className="relative z-10 m-3 text-m flex flex-wrap gap-3">
      {children}
    </section>
  );
}

export default Controls;
