import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { LUUSERSUSERTYPE_TITLE_FIELD } from "./LuUsersUsertypeTitle";
import { MHCIPREREQ_TITLE_FIELD } from "../mhciPrereq/MhciPrereqTitle";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { MHCIPREREQSPROGRAMMINGSAMPLE_TITLE_FIELD } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LuUsersUsertypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Domain" source="domain" />
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Mhci Prereqs Programming Samples"
          source="mhciprereqsprogrammingsample.id"
          reference="MhciPrereqsProgrammingSample"
        >
          <TextField source={MHCIPREREQSPROGRAMMINGSAMPLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Usertype Id" source="usertypeId" />
        <ReferenceManyField
          reference="MhciPrereqsConversationComment"
          target="lu_users_usertypes_id"
          label="MhciPrereqsConversationComments"
        >
          <Datagrid rowClick="show">
            <TextField label="Application Id" source="applicationId" />
            <TextField label="Comment" source="comment" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Lu Users Usertypes"
              source="luusersusertype.id"
              reference="LuUsersUsertype"
            >
              <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Mhci Prereqs"
              source="mhciprereq.id"
              reference="MhciPrereq"
            >
              <TextField source={MHCIPREREQ_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Period Id" source="periodId" />
            <TextField label="Program Id" source="programId" />
            <DateField source="timestamp" label="Timestamp" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MhciPrereqsCourse"
          target="student_lu_users_usertypes_id"
          label="MhciPrereqsCourses"
        >
          <Datagrid rowClick="show">
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
            <TextField
              label="Student Course Grade"
              source="studentCourseGrade"
            />
            <TextField
              label="Student Course Institution"
              source="studentCourseInstitution"
            />
            <TextField label="Student Course Name" source="studentCourseName" />
            <TextField label="Student Course Time" source="studentCourseTime" />
            <TextField
              label="Submitted To Reviewer"
              source="submittedToReviewer"
            />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MhciPrereqsDesignPortfolio"
          target="student_lu_users_usertypes_id"
          label="MhciPrereqsDesignPortfolios"
        >
          <Datagrid rowClick="show">
            <TextField label="Application Id" source="applicationId" />
            <TextField label="Description" source="description" />
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
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MhciPrereqsProgrammingTest"
          target="student_lu_users_usertypes_id"
          label="MhciPrereqsProgrammingTests"
        >
          <Datagrid rowClick="show">
            <TextField label="Application Id" source="applicationId" />
            <TextField label="Download Timestamp" source="downloadTimestamp" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Lu Users Usertypes"
              source="luusersusertype.id"
              reference="LuUsersUsertype"
            >
              <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Period Id" source="periodId" />
            <TextField
              label="Upload Datafileinfo Id"
              source="uploadDatafileinfoId"
            />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
