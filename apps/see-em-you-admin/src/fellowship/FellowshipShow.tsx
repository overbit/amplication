import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const FellowshipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <TextField label="Amount" source="amount" />
        <TextField label="Status" source="status" />
        <TextField label="Applied Date" source="appliedDate" />
        <TextField label="Award Date" source="awardDate" />
        <TextField label="Duration" source="duration" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Short" source="short" />
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
