import React from "react";
import { NavBar } from "antd-mobile";
import { ContentContainer } from "shared/ui/components";

function Salary() {
  return (
    <>
      <NavBar backArrow={false}>Зарплата</NavBar>
      <ContentContainer>content</ContentContainer>
    </>
  );
}

export default Salary;
