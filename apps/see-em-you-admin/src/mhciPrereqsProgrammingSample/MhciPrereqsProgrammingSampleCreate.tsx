import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LuUsersUsertypeTitle } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const MhciPrereqsProgrammingSampleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Datafileinfo Id" source="datafileinfoId" />
        <TextInput label="Note" source="note" />
        <BooleanInput
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
        <BooleanInput label="New File Uploaded" source="newFileUploaded" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Program Id" source="programId" />
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
