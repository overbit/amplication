import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { MhciPrereqTitle } from "../mhciPrereq/MhciPrereqTitle";

export const MhciPrereqsStatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Reviewer Lu Users Usertypes Id"
          source="reviewerLuUsersUsertypesId"
        />
        <SelectInput
          source="reviewer_status"
          label="Reviewer Status"
          choices={[
            { label: "Not_Submitted", value: "Not_Submitted" },
            { label: "Submitted", value: "Submitted" },
            { label: "In_progress", value: "In_progress" },
            { label: "Approved_plan_", value: "Approved_plan_" },
            {
              label: "Fulfilled__undergraduate_degree",
              value: "Fulfilled__undergraduate_degree",
            },
            { label: "Fulfilled_", value: "Fulfilled_" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Reviewer Explanation" source="reviewerExplanation" />
        <DateTimeInput label="Reviewer Timestamp" source="reviewerTimestamp" />
        <SelectInput
          source="status3"
          label="Status3"
          choices={[
            { label: "Saved_Not_Submitted", value: "Saved_Not_Submitted" },
            { label: "Student_Submitted", value: "Student_Submitted" },
            { label: "Student_Edited", value: "Student_Edited" },
            { label: "Reviewer_Responded", value: "Reviewer_Responded" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="Program Id" source="programId" />
        <ReferenceInput
          source="mhciPrereqs.id"
          reference="MhciPrereq"
          label="Mhci Prereqs"
        >
          <SelectInput optionText={MhciPrereqTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
