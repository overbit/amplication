import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const TestusersInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="User Id" source="userId" />
        <TextInput label="Gender" source="gender" />
        <DateTimeInput label="Dob" source="dob" />
        <TextInput label="Address Cur Street1" source="addressCurStreet1" />
        <TextInput label="Address Cur Street2" source="addressCurStreet2" />
        <TextInput label="Address Cur Street3" source="addressCurStreet3" />
        <TextInput label="Address Cur Street4" source="addressCurStreet4" />
        <TextInput label="Address Cur City" source="addressCurCity" />
        <NumberInput
          step={1}
          label="Address Cur State"
          source="addressCurState"
        />
        <TextInput label="Address Cur Pcode" source="addressCurPcode" />
        <NumberInput
          step={1}
          label="Address Cur Country"
          source="addressCurCountry"
        />
        <TextInput label="Address Cur Tel" source="addressCurTel" />
        <TextInput
          label="Address Cur Tel Mobile"
          source="addressCurTelMobile"
        />
        <TextInput label="Address Cur Tel Work" source="addressCurTelWork" />
        <TextInput label="Address Perm Street1" source="addressPermStreet1" />
        <TextInput label="Address Perm Street2" source="addressPermStreet2" />
        <TextInput label="Address Perm Street3" source="addressPermStreet3" />
        <TextInput label="Address Perm Street4" source="addressPermStreet4" />
        <TextInput label="Address Perm City" source="addressPermCity" />
        <NumberInput
          step={1}
          label="Address Perm State"
          source="addressPermState"
        />
        <TextInput label="Address Perm Pcode" source="addressPermPcode" />
        <NumberInput
          step={1}
          label="Address Perm Country"
          source="addressPermCountry"
        />
        <TextInput label="Address Perm Tel" source="addressPermTel" />
        <TextInput
          label="Address Perm Tel Mobile"
          source="addressPermTelMobile"
        />
        <TextInput label="Address Perm Tel Work" source="addressPermTelWork" />
        <NumberInput step={1} label="Ethnicity" source="ethnicity" />
        <NumberInput step={1} label="Ethtest" source="ethtest" />
        <NumberInput step={1} label="Visastatus" source="visastatus" />
        <TextInput label="Company" source="company" />
        <BooleanInput label="Buckley Waive" source="buckleyWaive" />
        <TextInput label="Homepage" source="homepage" />
        <NumberInput step={1} label="Cit Country" source="citCountry" />
        <TextInput label="Additionalinfo" source="additionalinfo" />
        <TextInput label="Cur Pa Res" source="curPaRes" />
      </SimpleForm>
    </Edit>
  );
};
