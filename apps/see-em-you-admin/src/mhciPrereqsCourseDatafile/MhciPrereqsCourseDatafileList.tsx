import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MHCIPREREQSCOURSE_TITLE_FIELD } from "../mhciPrereqsCourse/MhciPrereqsCourseTitle";

export const MhciPrereqsCourseDatafileList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqsCourseDatafiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
