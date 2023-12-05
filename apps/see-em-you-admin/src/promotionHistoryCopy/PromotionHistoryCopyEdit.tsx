import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const PromotionHistoryCopyEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
