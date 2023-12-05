import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const PromotionHistoryCopyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
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
