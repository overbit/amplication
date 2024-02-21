import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { MhciPrereqsConversationCommentTitle } from "../mhciPrereqsConversationComment/MhciPrereqsConversationCommentTitle";
import { MhciPrereqsStatusTitle } from "../mhciPrereqsStatus/MhciPrereqsStatusTitle";

export const MhciPrereqCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <SelectInput
          source="prereq_type"
          label="Prereq Type"
          choices={[
            { label: "design", value: "design" },
            { label: "programming", value: "programming" },
            { label: "statistics", value: "statistics" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <SelectInput
          source="student_assessment"
          label="Student Assessment"
          choices={[
            { label: "fulfilledTrue", value: "fulfilledTrue" },
            { label: "fulfilledFalse", value: "fulfilledFalse" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="status2"
          label="Status2"
          choices={[
            { label: "Student_Saved", value: "Student_Saved" },
            { label: "Not_Submitted", value: "Not_Submitted" },
            { label: "Student_Submitted", value: "Student_Submitted" },
            { label: "Student_Edited", value: "Student_Edited" },
            { label: "Reviewer_Responded", value: "Reviewer_Responded" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="mhciPrereqsConversationComments"
          reference="MhciPrereqsConversationComment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MhciPrereqsConversationCommentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="mhciPrereqsStatus.id"
          reference="MhciPrereqsStatus"
          label="Mhci Prereqs Status"
        >
          <SelectInput optionText={MhciPrereqsStatusTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
