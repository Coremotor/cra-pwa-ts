import React from "react";
import { NavBar } from "antd-mobile";
import { ContentContainer } from "shared/ui/containers";

function HomePage() {
  return (
    <>
      <NavBar backArrow={false}>Главная</NavBar>
      <ContentContainer>content</ContentContainer>
    </>
  );
}

export default HomePage;
