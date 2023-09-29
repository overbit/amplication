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
        <TextField label="Amount" source="amount" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Applied Date" source="appliedDate" />
        <TextField label="Award Date" source="awardDate" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Duration" source="duration" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Short" source="short" />
        <TextField label="Status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};
