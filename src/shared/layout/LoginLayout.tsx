import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { brakePoints } from "shared/ui/brakepoints";
import { NavBar, Image } from "antd-mobile";
import CustomSpace from "shared/components/CustomSpace";
import logo from "assets/images/logo.jpg";

interface Props {
  withNavBar: boolean;
  backArrow?: boolean;
  onBackClick?: () => void;
  title?: string;
  children: ReactElement<any, any> | null;
}
const LoginLayout: FC<Props> = ({
  withNavBar,
  backArrow = false,
  onBackClick,
  title,
  children,
}) => {
  return (
    <Container>
      {withNavBar && (
        <NavBar
          onBack={onBackClick}
          backArrow={backArrow}
          style={{ padding: 0 }}
        >
          {title}
        </NavBar>
      )}
      <ImageStyled src={logo} />
      <CustomSpace height={40} />
      {children}
    </Container>
  );
};

export default LoginLayout;

const Container = styled.div`
  max-width: ${brakePoints.lg};
  min-width: 360px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;
`;
const ImageStyled = styled(Image)`
  height: 170px;
  width: 350px;
  align-self: center;
  background-color: white;
`;
