import React, { FC } from "react";

interface Props {
  height: number;
}

const CustomSpace: FC<Props> = ({ height }) => {
  return <div style={{ height, width: "100%" }} />;
};

export default CustomSpace;
