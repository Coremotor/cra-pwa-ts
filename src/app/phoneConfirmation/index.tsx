import React, { useState } from "react";
import LoginLayout from "shared/layout/LoginLayout";
import { Button, PasscodeInput } from "antd-mobile";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesNames } from "routes/routesNames";
import CustomSpace from "shared/components/CustomSpace";
import { LocalStorageTokenKey } from "shared/api/localStorage";
import { PrimaryText, SecondaryText } from "shared/ui/text";
import { formatPhoneNumberIntl } from "react-phone-number-input";

function PhoneConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();

  const phoneNumber = location.state.phoneNumber;

  const [value, setValue] = useState("");

  const canPhoneNumberConfirm = value.length === 4;

  const onBackClick = () => navigate(RoutesNames.login);

  const goToProfile = () => {
    localStorage.setItem(LocalStorageTokenKey, "test");
    navigate(RoutesNames.profile);
  };

  return (
    <LoginLayout withNavBar backArrow={true} onBackClick={onBackClick}>
      <>
        <PrimaryText>Введите код</PrimaryText>
        <SecondaryText>Мы отправили код подтверждения на номер</SecondaryText>
        <SecondaryText>
          {phoneNumber ? formatPhoneNumberIntl(phoneNumber) : "---"}
        </SecondaryText>
        <CustomSpace height={30} />
        <PasscodeInputStyled
          seperated
          length={4}
          value={value}
          onChange={(value) => setValue(value)}
        />
        <Button
          disabled={!canPhoneNumberConfirm}
          color="primary"
          onClick={goToProfile}
        >
          Подтвердить
        </Button>
        <CustomSpace height={20} />
        <Button>Получить новый код</Button>
      </>
    </LoginLayout>
  );
}

export default PhoneConfirmation;

const PasscodeInputStyled = styled(PasscodeInput)`
  align-self: center;
  margin-bottom: 20px;
`;
