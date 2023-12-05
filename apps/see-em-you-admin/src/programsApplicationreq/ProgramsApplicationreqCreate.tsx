import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ApplicationreqTitle } from "../applicationreq/ApplicationreqTitle";
import { ProgramModelTitle } from "../programModel/ProgramModelTitle";

export const ProgramsApplicationreqCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
