import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PromotionHistoryCopyList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PromotionHistoryCopies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <DateField source="statusTime" label="Status Time" />
        <TextField label="Round" source="round" />
        <TextField label="Promotion Method" source="promotion_method" />
        <TextField label="Users Id" source="usersId" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
