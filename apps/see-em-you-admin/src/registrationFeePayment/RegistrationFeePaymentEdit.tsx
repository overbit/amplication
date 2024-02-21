import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const RegistrationFeePaymentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Payment Type" source="paymentType" />
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
        <NumberInput step={1} label="Last Mod User Id" source="lastModUserId" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
