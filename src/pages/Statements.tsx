import React from "react";
import { NavBar } from "antd-mobile";
import { ContentContainer } from "shared/ui/containers";

function StatementsPage() {
  return (
    <>
      <NavBar backArrow={false}>Заявления</NavBar>
      <ContentContainer>content</ContentContainer>
    </>
  );
}

export default StatementsPage;
