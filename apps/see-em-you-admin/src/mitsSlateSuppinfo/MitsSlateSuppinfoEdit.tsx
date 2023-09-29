import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MitsSlateSuppinfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Fellowship10 Amount" source="fellowship10Amount" />
        <TextInput
          label="Fellowship10 Applied Date"
          source="fellowship10AppliedDate"
        />
        <TextInput
          label="Fellowship10 Awarded Date"
          source="fellowship10AwardedDate"
        />
        <TextInput
          label="Fellowship10 Duration"
          source="fellowship10Duration"
        />
        <TextInput label="Fellowship10 Name" source="fellowship10Name" />
        <TextInput label="Fellowship10 Status" source="fellowship10Status" />
        <TextInput label="Fellowship1 Amount" source="fellowship1Amount" />
        <TextInput
          label="Fellowship1 Applied Date"
          source="fellowship1AppliedDate"
        />
        <TextInput
          label="Fellowship1 Awarded Date"
          source="fellowship1AwardedDate"
        />
        <TextInput label="Fellowship1 Duration" source="fellowship1Duration" />
        <TextInput label="Fellowship1 Name" source="fellowship1Name" />
        <TextInput label="Fellowship1 Status" source="fellowship1Status" />
        <TextInput label="Fellowship2 Amount" source="fellowship2Amount" />
        <TextInput
          label="Fellowship2 Applied Date"
          source="fellowship2AppliedDate"
        />
        <TextInput
          label="Fellowship2 Awarded Date"
          source="fellowship2AwardedDate"
        />
        <TextInput label="Fellowship2 Duration" source="fellowship2Duration" />
        <TextInput label="Fellowship2 Name" source="fellowship2Name" />
        <TextInput label="Fellowship2 Status" source="fellowship2Status" />
        <TextInput label="Fellowship3 Amount" source="fellowship3Amount" />
        <TextInput
          label="Fellowship3 Applied Date"
          source="fellowship3AppliedDate"
        />
        <TextInput
          label="Fellowship3 Awarded Date"
          source="fellowship3AwardedDate"
        />
        <TextInput label="Fellowship3 Duration" source="fellowship3Duration" />
        <TextInput label="Fellowship3 Name" source="fellowship3Name" />
        <TextInput label="Fellowship3 Status" source="fellowship3Status" />
        <TextInput label="Fellowship4 Amount" source="fellowship4Amount" />
        <TextInput
          label="Fellowship4 Applied Date"
          source="fellowship4AppliedDate"
        />
        <TextInput
          label="Fellowship4 Awarded Date"
          source="fellowship4AwardedDate"
        />
        <TextInput label="Fellowship4 Duration" source="fellowship4Duration" />
        <TextInput label="Fellowship4 Name" source="fellowship4Name" />
        <TextInput label="Fellowship4 Status" source="fellowship4Status" />
        <TextInput label="Fellowship5 Amount" source="fellowship5Amount" />
        <TextInput
          label="Fellowship5 Applied Date"
          source="fellowship5AppliedDate"
        />
        <TextInput
          label="Fellowship5 Awarded Date"
          source="fellowship5AwardedDate"
        />
        <TextInput label="Fellowship5 Duration" source="fellowship5Duration" />
        <TextInput label="Fellowship5 Name" source="fellowship5Name" />
        <TextInput label="Fellowship5 Status" source="fellowship5Status" />
        <TextInput label="Fellowship6 Amount" source="fellowship6Amount" />
        <TextInput
          label="Fellowship6 Applied Date"
          source="fellowship6AppliedDate"
        />
        <TextInput
          label="Fellowship6 Awarded Date"
          source="fellowship6AwardedDate"
        />
        <TextInput label="Fellowship6 Duration" source="fellowship6Duration" />
        <TextInput label="Fellowship6 Name" source="fellowship6Name" />
        <TextInput label="Fellowship6 Status" source="fellowship6Status" />
        <TextInput label="Fellowship7 Amount" source="fellowship7Amount" />
        <TextInput
          label="Fellowship7 Applied Date"
          source="fellowship7AppliedDate"
        />
        <TextInput
          label="Fellowship7 Awarded Date"
          source="fellowship7AwardedDate"
        />
        <TextInput label="Fellowship7 Duration" source="fellowship7Duration" />
        <TextInput label="Fellowship7 Name" source="fellowship7Name" />
        <TextInput label="Fellowship7 Status" source="fellowship7Status" />
        <TextInput label="Fellowship8 Amount" source="fellowship8Amount" />
        <TextInput
          label="Fellowship8 Applied Date"
          source="fellowship8AppliedDate"
        />
        <TextInput
          label="Fellowship8 Awarded Date"
          source="fellowship8AwardedDate"
        />
        <TextInput label="Fellowship8 Duration" source="fellowship8Duration" />
        <TextInput label="Fellowship8 Name" source="fellowship8Name" />
        <TextInput label="Fellowship8 Status" source="fellowship8Status" />
        <TextInput label="Fellowship9 Amount" source="fellowship9Amount" />
        <TextInput
          label="Fellowship9 Applied Date"
          source="fellowship9AppliedDate"
        />
        <TextInput
          label="Fellowship9 Awarded Date"
          source="fellowship9AwardedDate"
        />
        <TextInput label="Fellowship9 Duration" source="fellowship9Duration" />
        <TextInput label="Fellowship9 Name" source="fellowship9Name" />
        <TextInput label="Fellowship9 Status" source="fellowship9Status" />
        <TextInput label="First" source="first" />
        <TextInput label="Has Fellowships" source="hasFellowships" />
        <TextInput label="Last" source="last" />
        <TextInput label="Learn About Other" source="learnAboutOther" />
        <TextInput label="Learn About Us" source="learnAboutUs" />
        <TextInput label="Middle" source="middle" />
        <TextInput label="Prefix" source="prefix" />
        <TextInput
          label="Video Essay Access Code"
          source="videoEssayAccessCode"
        />
        <TextInput label="Video Essay Url" source="videoEssayUrl" />
      </SimpleForm>
    </Edit>
  );
};
