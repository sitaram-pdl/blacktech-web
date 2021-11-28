import React from "react";
import SignIn  from "~sections/Account/GettingStarted";
import { PageWrapper } from "~components/Core";

const header = {
  headerClasses: "d-none",
  containerFluid:false,
}

export default function GettingStarted() {
  return (
    <PageWrapper headerConfig={header}>
        <SignIn/>
    </PageWrapper>
  )
}
