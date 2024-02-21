import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LuUsersUsertypeTitle } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const MhciPrereqsProgrammingTestEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Download Timestamp" source="downloadTimestamp" />
        <NumberInput
          step={1}
          label="Upload Datafileinfo Id"
          source="uploadDatafileinfoId"
        />
        <NumberInput step={1} label="Application Id" source="applicationId" />
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
