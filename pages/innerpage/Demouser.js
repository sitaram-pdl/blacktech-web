import React from "react";
import SignIn  from "~sections/Account/Demo";
import { PageWrapper } from "~components/Core";

const header = {
  headerClasses: "d-none",
  containerFluid:false,
}

export default function SignInPage() {
  return (
    <PageWrapper headerConfig={header}>
        <SignIn/>
    </PageWrapper>
  )
}
