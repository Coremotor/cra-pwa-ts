import { Outlet } from "react-router-dom";
import React from "react";
import Navigation from "shared/navigation";
import styled from "styled-components";
import { brakePoints } from "shared/ui/brakepoints";

const LayoutWrapper = () => {
  return (
    <Container>
      <Content>
        <Outlet />
      </Content>
      <Navigation />
    </Container>
  );
};

export default LayoutWrapper;

const Container = styled.div`
  max-width: ${brakePoints.lg};
  min-width: 360px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Content = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;
