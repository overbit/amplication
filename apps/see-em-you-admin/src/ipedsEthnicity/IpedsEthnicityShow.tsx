import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const IpedsEthnicityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Ipeds Ethnicity" source="ipedsEthnicity" />
        <TextField label="Sort Order" source="sortOrder" />
        <TextField label="Ethnicity Id" source="ethnicityId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
