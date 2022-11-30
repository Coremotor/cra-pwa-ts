import React from "react";
import { NavBar } from "antd-mobile";
import { ContentContainer } from "shared/ui/components";

function Statements() {
  return (
    <>
      <NavBar backArrow={false}>Заявления</NavBar>
      <ContentContainer>content</ContentContainer>
    </>
  );
}

export default Statements;
