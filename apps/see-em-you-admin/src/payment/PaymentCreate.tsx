import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { PaymentVoucherTitle } from "../paymentVoucher/PaymentVoucherTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Payment Id" source="paymentId" />
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
        <ReferenceInput
          source="paymentVoucher.id"
          reference="PaymentVoucher"
          label="Payment Voucher"
        >
          <SelectInput optionText={PaymentVoucherTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
