import React from 'react';

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  return (
    <div
      className={`container mx-auto px-8 py-8 xl:px-8 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
