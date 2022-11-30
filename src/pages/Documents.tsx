import React from "react";
import { NavBar } from "antd-mobile";
import { ContentContainer } from "shared/ui/components";

function Documents() {
  return (
    <>
      <NavBar backArrow={false}>Документы</NavBar>
      <ContentContainer>content</ContentContainer>
    </>
  );
}

export default Documents;
