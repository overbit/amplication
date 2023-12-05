import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { MhciPrereqsCourseTitle } from "../mhciPrereqsCourse/MhciPrereqsCourseTitle";

export const MhciPrereqsCourseDatafileEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Datafileinfo Id" source="datafileinfoId" />
        <ReferenceInput
          source="mhciPrereqsCourses.id"
          reference="MhciPrereqsCourse"
          label="Mhci Prereqs Courses"
        >
          <SelectInput optionText={MhciPrereqsCourseTitle} />
        </ReferenceInput>
        <BooleanInput label="New File Uploaded" source="newFileUploaded" />
        <TextInput label="Note" source="note" />
        <BooleanInput
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
      </SimpleForm>
    </Edit>
  );
};
