import React from "react";
import { NavBar } from "antd-mobile";
import { ContentContainer } from "shared/ui/components";

function Home() {
  return (
    <>
      <NavBar backArrow={false}>Главная</NavBar>
      <ContentContainer>content</ContentContainer>
    </>
  );
}

export default Home;
