import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProgramModelTitle } from "../programModel/ProgramModelTitle";
import { ApplicationreqTitle } from "../applicationreq/ApplicationreqTitle";

export const ProgramsApplicationreqEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="programs.id"
          reference="ProgramModel"
          label="Programs"
        >
          <SelectInput optionText={ProgramModelTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="applicationreqs.id"
          reference="Applicationreq"
          label="Applicationreqs"
        >
          <SelectInput optionText={ApplicationreqTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
