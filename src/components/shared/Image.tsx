import React from "react";
import NextImage, { ImageProps } from "next/image";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const Image = (props: ImageProps) => {
  return <NextImage {...props} src={props.src} />;
};

export default Image;
