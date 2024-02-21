import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const CashnetPaymentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Transaction Id" source="transactionId" />
        <TextInput label="Applicant Name" source="applicantName" />
        <TextInput label="Applicant Email" source="applicantEmail" />
        <NumberInput step={1} label="Merchant" source="merchant" />
        <TextInput label="Status" source="status" />
        <TextInput label="Transaction Type" source="transactionType" />
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
