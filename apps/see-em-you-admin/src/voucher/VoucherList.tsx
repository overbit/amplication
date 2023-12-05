import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const VoucherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Vouchers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Active" source="active" />
        <BooleanField label="Allow Multiple" source="allowMultiple" />
        <TextField label="Code" source="code" />
        <TextField label="Id" source="id" />
        <TextField label="Pretty Code" source="prettyCode" />
        <TextField label="Prog" source="prog" />
      </Datagrid>
    </List>
  );
};
