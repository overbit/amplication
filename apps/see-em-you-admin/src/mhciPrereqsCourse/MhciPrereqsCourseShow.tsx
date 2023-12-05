import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { MHCIPREREQSCOURSE_TITLE_FIELD } from "./MhciPrereqsCourseTitle";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { LUUSERSUSERTYPE_TITLE_FIELD } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const MhciPrereqsCourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Course Type" source="course_type" />
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Lu Users Usertypes"
          source="luusersusertype.id"
          reference="LuUsersUsertype"
        >
          <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Period Id" source="periodId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Student Course Grade" source="studentCourseGrade" />
        <TextField
          label="Student Course Institution"
          source="studentCourseInstitution"
        />
        <TextField label="Student Course Name" source="studentCourseName" />
        <TextField label="Student Course Time" source="studentCourseTime" />
        <TextField label="Submitted To Reviewer" source="submittedToReviewer" />
        <ReferenceManyField
          reference="MhciPrereqsCourseDatafile"
          target="prereq_courses_id"
          label="MhciPrereqsCourseDatafiles"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
