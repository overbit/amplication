import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MhciPrereqTitle } from "../mhciPrereq/MhciPrereqTitle";
import { LuUsersUsertypeTitle } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const MhciPrereqsConversationCommentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Comment" source="comment" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <ReferenceInput
          source="mhciPrereqs.id"
          reference="MhciPrereq"
          label="Mhci Prereqs"
        >
          <SelectInput optionText={MhciPrereqTitle} />
        </ReferenceInput>
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
