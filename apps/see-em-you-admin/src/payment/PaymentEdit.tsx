import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { PaymentVoucherTitle } from "../paymentVoucher/PaymentVoucherTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Last Mod User Id" source="lastModUserId" />
        <NumberInput label="Payment Amount" source="paymentAmount" />
        <NumberInput step={1} label="Payment Id" source="paymentId" />
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
        <ReferenceInput
          source="paymentVoucher.id"
          reference="PaymentVoucher"
          label="Payment Voucher"
        >
          <SelectInput optionText={PaymentVoucherTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
