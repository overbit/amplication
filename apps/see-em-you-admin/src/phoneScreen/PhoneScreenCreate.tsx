import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const PhoneScreenCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Language Screen" source="languageScreen" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <NumberInput
          step={1}
          label="Technical Screen"
          source="technicalScreen"
        />
      </SimpleForm>
    </Create>
  );
};
