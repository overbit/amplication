import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const MseAqaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MseAqas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
