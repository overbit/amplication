import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProgramModelTitle } from "../programModel/ProgramModelTitle";
import { ApplicationreqTitle } from "../applicationreq/ApplicationreqTitle";

export const ProgramsApplicationreqCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
