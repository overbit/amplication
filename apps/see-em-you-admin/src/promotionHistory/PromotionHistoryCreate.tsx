import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ApplicationTitle } from "../application/ApplicationTitle";

export const PromotionHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Program Id" source="programId" />
        <SelectInput
          source="promotion_method"
          label="Promotion Method"
          choices={[
            { label: "default", value: "default" },
            { label: "voting", value: "voting" },
            { label: "promotion", value: "promotion" },
            { label: "demotion", value: "demotion" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Round" source="round" />
        <NumberInput step={1} label="Users Id" source="usersId" />
      </SimpleForm>
    </Create>
  );
};
