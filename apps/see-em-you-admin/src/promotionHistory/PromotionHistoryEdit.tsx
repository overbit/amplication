import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { ApplicationTitle } from "../application/ApplicationTitle";

export const PromotionHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput step={1} label="Round" source="round" />
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
        <NumberInput step={1} label="Users Id" source="usersId" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
