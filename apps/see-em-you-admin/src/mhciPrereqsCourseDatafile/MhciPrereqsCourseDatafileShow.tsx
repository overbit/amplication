import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { MHCIPREREQSCOURSE_TITLE_FIELD } from "../mhciPrereqsCourse/MhciPrereqsCourseTitle";

export const MhciPrereqsCourseDatafileShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Datafileinfo Id" source="datafileinfoId" />
        <TextField label="Note" source="note" />
        <BooleanField
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
        <BooleanField label="New File Uploaded" source="newFileUploaded" />
        <ReferenceField
          label="Mhci Prereqs Courses"
          source="mhciprereqscourse.id"
          reference="MhciPrereqsCourse"
        >
          <TextField source={MHCIPREREQSCOURSE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
