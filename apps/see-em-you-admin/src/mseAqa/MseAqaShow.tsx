import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const MseAqaShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="English Comments" source="englishComments" />
        <TextField label="English Rating" source="englishRating" />
        <TextField label="Experience Comments" source="experienceComments" />
        <TextField label="Experience Rating" source="experienceRating" />
        <TextField
          label="Foundational Comments"
          source="foundationalComments"
        />
        <TextField label="Foundational Rating" source="foundationalRating" />
        <TextField label="Id" source="id" />
        <TextField label="Maturity Comments" source="maturityComments" />
        <TextField label="Maturity Rating" source="maturityRating" />
        <TextField label="Programming Comments" source="programmingComments" />
        <TextField label="Programming Rating" source="programmingRating" />
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField
          label="Understanding Comments"
          source="understandingComments"
        />
        <TextField label="Understanding Rating" source="understandingRating" />
      </SimpleShowLayout>
    </Show>
  );
};
