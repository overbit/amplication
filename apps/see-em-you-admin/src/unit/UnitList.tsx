import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UnitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Units"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Application Base Price"
          source="applicationBasePrice"
        />
        <TextField
          label="Application Program Price"
          source="applicationProgramPrice"
        />
        <TextField label="Id" source="id" />
        <TextField label="Parent Unit Id" source="parentUnitId" />
        <TextField label="Unit Cc Email" source="unitCcEmail" />
        <TextField label="Unit Description" source="unitDescription" />
        <TextField label="Unit Name" source="unitName" />
        <TextField label="Unit Name Short" source="unitNameShort" />
        <TextField label="Unit Oracle String" source="unitOracleString" />
        <TextField label="Unit System Email" source="unitSystemEmail" />
        <TextField label="Unit Url" source="unitUrl" />
      </Datagrid>
    </List>
  );
};
