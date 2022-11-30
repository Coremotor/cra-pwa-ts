import React from "react";
import { NavBar } from "antd-mobile";
import { ContentContainer } from "shared/ui/components";

function Profile() {
  return (
    <>
      <NavBar backArrow={false}>Профиль</NavBar>
      <ContentContainer>content</ContentContainer>
    </>
  );
}

export default Profile;
