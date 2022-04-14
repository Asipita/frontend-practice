import * as React from 'react';

export interface IContainerProps {
    size?: "md",
    children: React.ReactNode
}

export default function Container ({size, children}: IContainerProps) {
  return (
    <div className='px-[150px]'>
      {children}
    </div>
  );
}
