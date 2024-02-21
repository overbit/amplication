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

import { MhciPrereqsCourseTitle } from "../mhciPrereqsCourse/MhciPrereqsCourseTitle";

export const MhciPrereqsCourseDatafileCreate = (
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
        <ReferenceInput
          source="mhciPrereqsCourses.id"
          reference="MhciPrereqsCourse"
          label="Mhci Prereqs Courses"
        >
          <SelectInput optionText={MhciPrereqsCourseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
