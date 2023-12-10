import { ReactNode } from 'react';

type RowProps = {
  children?: ReactNode;
};

function Row({ children }: RowProps) {
  return (
    <section className="m-3 text-m flex flex-wrap gap-3">{children}</section>
  );
}

export default Row;
