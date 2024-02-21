import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LUUSERSUSERTYPE_TITLE_FIELD } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const MhciPrereqsDesignPortfolioList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqsDesignPortfolios"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Url" source="url" />
        <TextField label="Description" source="description" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Period Id" source="periodId" />
        <ReferenceField
          label="Lu Users Usertypes"
          source="luusersusertype.id"
          reference="LuUsersUsertype"
        >
          <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
