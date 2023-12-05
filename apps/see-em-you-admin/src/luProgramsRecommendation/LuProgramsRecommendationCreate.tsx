import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const LuProgramsRecommendationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Numrequired" source="numrequired" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput
          step={1}
          label="Recommendationtype Id"
          source="recommendationtypeId"
        />
      </SimpleForm>
    </Create>
  );
};
