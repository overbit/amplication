import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ApplicantIpedsRaceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Lu Users Usertypes Id"
          source="luUsersUsertypesId"
        />
        <NumberInput step={1} label="Ipeds Race Id" source="ipedsRaceId" />
      </SimpleForm>
    </Create>
  );
};
