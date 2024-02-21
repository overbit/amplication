import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MhciPrereqsCourseTitle } from "../mhciPrereqsCourse/MhciPrereqsCourseTitle";

export const MhciPrereqsCourseDatafileEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
