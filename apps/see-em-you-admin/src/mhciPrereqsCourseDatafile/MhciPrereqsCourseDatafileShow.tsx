import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import { MHCIPREREQSCOURSE_TITLE_FIELD } from "../mhciPrereqsCourse/MhciPrereqsCourseTitle";

export const MhciPrereqsCourseDatafileShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Datafileinfo Id" source="datafileinfoId" />
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Mhci Prereqs Courses"
          source="mhciprereqscourse.id"
          reference="MhciPrereqsCourse"
        >
          <TextField source={MHCIPREREQSCOURSE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="New File Uploaded" source="newFileUploaded" />
        <TextField label="Note" source="note" />
        <BooleanField
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
      </SimpleShowLayout>
    </Show>
  );
};
