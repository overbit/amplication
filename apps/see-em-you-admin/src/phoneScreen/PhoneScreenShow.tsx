import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const PhoneScreenShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField label="Language Screen" source="languageScreen" />
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField label="Technical Screen" source="technicalScreen" />
      </SimpleShowLayout>
    </Show>
  );
};
