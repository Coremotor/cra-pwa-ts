import React from "react";
import { Button, NavBar } from "antd-mobile";
import { ContentContainer } from "shared/ui/containers";
import { PrimaryText } from "shared/ui/text";
import CustomSpace from "shared/components/CustomSpace";
import { LocalStorageTokenKey } from "shared/api/localStorage";
import { useNavigate } from "react-router-dom";
import { RoutesNames } from "routes/routesNames";

function ProfilePage() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem(LocalStorageTokenKey);
    navigate(RoutesNames.login);
  };
  return (
    <>
      <NavBar backArrow={false}>Профиль</NavBar>
      <ContentContainer>
        <PrimaryText>Иванов Иван Иванович</PrimaryText>

        <CustomSpace height={40} />

        <Button color="danger" onClick={logout}>
          Выйти
        </Button>
      </ContentContainer>
    </>
  );
}

export default ProfilePage;
