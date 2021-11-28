import React from "react";
import SignInn from "~sections/Account/SignInn";
import { PageWrapper } from "~components/Core";

const header = {
  headerClasses: "d-none",
  containerFluid: false,
};

export default function SignInnPage() {
  return (
    <PageWrapper headerConfig={header}>
      <SignInn />
    </PageWrapper>
  );
}
