import React, { useState } from "react";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  Value,
} from "react-phone-number-input/input";
import styled from "styled-components";
import LoginLayout from "shared/layout/LoginLayout";
import { Button } from "antd-mobile";
import { colors } from "shared/ui/colors";
import CustomSpace from "shared/components/CustomSpace";
import { useNavigate } from "react-router-dom";
import { RoutesNames } from "routes/routesNames";

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<Value | undefined>("+7");

  const canSendPhoneNumber =
    value && isPossiblePhoneNumber(value) && isValidPhoneNumber(value);

  const goToPhoneConfirm = () => {
    if (canSendPhoneNumber)
      navigate(RoutesNames.phoneConfirmation, {
        state: {
          phoneNumber: value,
        },
      });
  };

  return (
    <LoginLayout withNavBar={false}>
      <>
        <PhoneInput
          value={value}
          onChange={(value) => setValue(value)}
          inputComponent={CustomInput}
        />

        <CustomSpace height={20} />

        <Button
          disabled={!canSendPhoneNumber}
          color="primary"
          onClick={goToPhoneConfirm}
        >
          Продолжить
        </Button>
      </>
    </LoginLayout>
  );
};

export default Login;

const CustomInput = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.text.primary};
  outline: none;
  font-size: 16px;
  padding: 4px;
`;
