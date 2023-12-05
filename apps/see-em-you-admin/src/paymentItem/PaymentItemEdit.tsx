import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProgramModelTitle } from "../programModel/ProgramModelTitle";

export const PaymentItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Payment Id" source="paymentId" />
        <NumberInput label="Payment Item Amount" source="paymentItemAmount" />
        <NumberInput step={1} label="Payment Item Id" source="paymentItemId" />
        <ReferenceInput
          source="programs.id"
          reference="ProgramModel"
          label="Programs"
        >
          <SelectInput optionText={ProgramModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
