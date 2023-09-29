import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DuolingoscoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Duolingodata Id" source="duolingodataId" />
        <TextField label="Id" source="id" />
        <TextField label="Match Date" source="matchDate" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Testemail" source="testemail" />
      </SimpleShowLayout>
    </Show>
  );
};
