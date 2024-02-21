import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LuUsersUsertypeTitle } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const MhciPrereqsDesignPortfolioEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
