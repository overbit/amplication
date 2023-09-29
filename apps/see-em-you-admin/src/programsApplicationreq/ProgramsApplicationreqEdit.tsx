import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ApplicationreqTitle } from "../applicationreq/ApplicationreqTitle";
import { ProgramModelTitle } from "../programModel/ProgramModelTitle";

export const ProgramsApplicationreqEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="applicationreqs.id"
          reference="Applicationreq"
          label="Applicationreqs"
        >
          <SelectInput optionText={ApplicationreqTitle} />
        </ReferenceInput>
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
