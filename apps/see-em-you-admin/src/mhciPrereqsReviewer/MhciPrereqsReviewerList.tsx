import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MhciPrereqsReviewerList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqsReviewers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Email Notification" source="emailNotification" />
        <TextField label="Id" source="id" />
        <TextField label="Placeout Period Id" source="placeoutPeriodId" />
        <TextField label="Prereq Type" source="prereqType" />
        <TextField label="Reviewer Luu Id" source="reviewerLuuId" />
      </Datagrid>
    </List>
  );
};
