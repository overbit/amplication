import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LuUsersUsertypeTitle } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const MhciPrereqsDesignPortfolioCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Url" source="url" />
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <ReferenceInput
          source="luUsersUsertypes.id"
          reference="LuUsersUsertype"
          label="Lu Users Usertypes"
        >
          <SelectInput optionText={LuUsersUsertypeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
