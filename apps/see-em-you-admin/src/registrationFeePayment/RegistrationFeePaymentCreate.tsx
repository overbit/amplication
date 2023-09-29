import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const RegistrationFeePaymentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Last Mod User Id" source="lastModUserId" />
        <NumberInput label="Payment Amount" source="paymentAmount" />
        <DateTimeInput label="Payment Intent Date" source="paymentIntentDate" />
        <SelectInput
          source="payment_status"
          label="Payment Status"
          choices={[
            { label: "pending", value: "pending" },
            { label: "paid", value: "paid" },
            { label: "refunded", value: "refunded" },
            { label: "void", value: "void" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Payment Type" source="paymentType" />
      </SimpleForm>
    </Create>
  );
};
