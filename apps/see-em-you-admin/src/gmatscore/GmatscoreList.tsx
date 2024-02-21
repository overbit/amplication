import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const GmatscoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Gmatscores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Scorereceived" source="scorereceived" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Verbalscore" source="verbalscore" />
        <TextField label="Verbalpercentile" source="verbalpercentile" />
        <TextField label="Quantitativescore" source="quantitativescore" />
        <TextField
          label="Quantitativepercentile"
          source="quantitativepercentile"
        />
        <TextField label="Totalscore" source="totalscore" />
        <TextField label="Totalpercentile" source="totalpercentile" />
        <TextField
          label="Analyticalwritingscore"
          source="analyticalwritingscore"
        />
        <TextField
          label="Analyticalwritingpercentile"
          source="analyticalwritingpercentile"
        />
        <TextField label="Datafile Id" source="datafileId" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
