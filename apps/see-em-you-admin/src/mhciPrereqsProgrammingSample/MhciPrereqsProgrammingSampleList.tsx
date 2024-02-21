import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LUUSERSUSERTYPE_TITLE_FIELD } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const MhciPrereqsProgrammingSampleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqsProgrammingSamples"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Datafileinfo Id" source="datafileinfoId" />
        <TextField label="Note" source="note" />
        <BooleanField
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
        <BooleanField label="New File Uploaded" source="newFileUploaded" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Program Id" source="programId" />
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
