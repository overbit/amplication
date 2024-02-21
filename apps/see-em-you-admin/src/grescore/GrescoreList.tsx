import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const GrescoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Grescores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Verbalscore" source="verbalscore" />
        <TextField label="Verbalpercentile" source="verbalpercentile" />
        <TextField label="Quantitativescore" source="quantitativescore" />
        <TextField
          label="Quantitativepercentile"
          source="quantitativepercentile"
        />
        <TextField label="Analyticalscore" source="analyticalscore" />
        <TextField label="Analyticalpercentile" source="analyticalpercentile" />
        <TextField
          label="Analyticalwritingscore"
          source="analyticalwritingscore"
        />
        <TextField
          label="Analyticalwritingpercentile"
          source="analyticalwritingpercentile"
        />
        <BooleanField label="Scorereceived" source="scorereceived" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Athome" source="athome" />
        <TextField label="Gre Email" source="greEmail" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
