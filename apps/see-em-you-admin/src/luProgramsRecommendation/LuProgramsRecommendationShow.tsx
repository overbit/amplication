import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LuProgramsRecommendationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Numrequired" source="numrequired" />
        <TextField label="Program Id" source="programId" />
        <TextField
          label="Recommendationtype Id"
          source="recommendationtypeId"
        />
      </SimpleShowLayout>
    </Show>
  );
};
