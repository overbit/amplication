import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const ExperienceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Experiencetype" source="experiencetype" />
        <TextField label="Order Entered" source="orderEntered" />
        <TextField label="Company" source="company" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Years Exp" source="yearsExp" />
        <TextField label="Address" source="address" />
        <TextField label="Job Title" source="jobTitle" />
        <TextField label="Job Description" source="jobDescription" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
