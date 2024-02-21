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

import { MHCIPREREQ_TITLE_FIELD } from "../mhciPrereq/MhciPrereqTitle";
import { LUUSERSUSERTYPE_TITLE_FIELD } from "./LuUsersUsertypeTitle";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { MHCIPREREQSPROGRAMMINGSAMPLE_TITLE_FIELD } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleTitle";

export const LuUsersUsertypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Usertype Id" source="usertypeId" />
        <TextField label="Domain" source="domain" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Mhci Prereqs Programming Samples"
          source="mhciprereqsprogrammingsample.id"
          reference="MhciPrereqsProgrammingSample"
        >
          <TextField source={MHCIPREREQSPROGRAMMINGSAMPLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <ReferenceManyField
          reference="MhciPrereqsConversationComment"
          target="lu_users_usertypes_id"
          label="MhciPrereqsConversationComments"
        >
          <Datagrid rowClick="show">
            <TextField label="Application Id" source="applicationId" />
            <TextField label="Comment" source="comment" />
            <DateField source="timestamp" label="Timestamp" />
            <TextField label="Period Id" source="periodId" />
            <TextField label="Program Id" source="programId" />
            <ReferenceField
              label="Mhci Prereqs"
              source="mhciprereq.id"
              reference="MhciPrereq"
            >
              <TextField source={MHCIPREREQ_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Lu Users Usertypes"
              source="luusersusertype.id"
              reference="LuUsersUsertype"
            >
              <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MhciPrereqsCourse"
          target="student_lu_users_usertypes_id"
          label="MhciPrereqsCourses"
        >
          <Datagrid rowClick="show">
            <TextField label="Course Type" source="course_type" />
            <TextField label="Student Course Name" source="studentCourseName" />
            <TextField label="Student Course Time" source="studentCourseTime" />
            <TextField
              label="Student Course Institution"
              source="studentCourseInstitution"
            />
            <TextField
              label="Student Course Grade"
              source="studentCourseGrade"
            />
            <TextField
              label="Submitted To Reviewer"
              source="submittedToReviewer"
            />
            <TextField label="Period Id" source="periodId" />
            <TextField label="Program Id" source="programId" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Lu Users Usertypes"
              source="luusersusertype.id"
              reference="LuUsersUsertype"
            >
              <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MhciPrereqsDesignPortfolio"
          target="student_lu_users_usertypes_id"
          label="MhciPrereqsDesignPortfolios"
        >
          <Datagrid rowClick="show">
            <TextField label="Url" source="url" />
            <TextField label="Description" source="description" />
            <TextField label="Application Id" source="applicationId" />
            <TextField label="Program Id" source="programId" />
            <TextField label="Period Id" source="periodId" />
            <ReferenceField
              label="Lu Users Usertypes"
              source="luusersusertype.id"
              reference="LuUsersUsertype"
            >
              <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MhciPrereqsProgrammingTest"
          target="student_lu_users_usertypes_id"
          label="MhciPrereqsProgrammingTests"
        >
          <Datagrid rowClick="show">
            <TextField label="Download Timestamp" source="downloadTimestamp" />
            <TextField
              label="Upload Datafileinfo Id"
              source="uploadDatafileinfoId"
            />
            <TextField label="Application Id" source="applicationId" />
            <TextField label="Period Id" source="periodId" />
            <ReferenceField
              label="Lu Users Usertypes"
              source="luusersusertype.id"
              reference="LuUsersUsertype"
            >
              <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
