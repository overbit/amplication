import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const RissFundingShow = (props: ShowProps): React.ReactElement => {
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
        <BooleanField label="Direct Funding" source="directFunding" />
        <TextField label="External Amount" source="externalAmount" />
        <BooleanField label="External Funding" source="externalFunding" />
        <TextField label="External Source" source="externalSource" />
        <TextField label="Id" source="id" />
        <BooleanField label="Reu Scholarship" source="reuScholarship" />
      </SimpleShowLayout>
    </Show>
  );
};
