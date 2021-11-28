import React from "react";
import SignIn from "~sections/Account/Welcome";
import { PageWrapper } from "~components/Core";

const header = {
  headerClasses: "d-none",
  containerFluid: false,
};

export default function WelcomePage() {
  return (
    <PageWrapper headerConfig={header}>
      <SignIn />
    </PageWrapper>
  );
}
