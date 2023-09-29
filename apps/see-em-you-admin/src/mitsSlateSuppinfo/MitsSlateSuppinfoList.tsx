import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MitsSlateSuppinfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MitsSlateSuppinfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Fellowship10 Amount" source="fellowship10Amount" />
        <TextField
          label="Fellowship10 Applied Date"
          source="fellowship10AppliedDate"
        />
        <TextField
          label="Fellowship10 Awarded Date"
          source="fellowship10AwardedDate"
        />
        <TextField
          label="Fellowship10 Duration"
          source="fellowship10Duration"
        />
        <TextField label="Fellowship10 Name" source="fellowship10Name" />
        <TextField label="Fellowship10 Status" source="fellowship10Status" />
        <TextField label="Fellowship1 Amount" source="fellowship1Amount" />
        <TextField
          label="Fellowship1 Applied Date"
          source="fellowship1AppliedDate"
        />
        <TextField
          label="Fellowship1 Awarded Date"
          source="fellowship1AwardedDate"
        />
        <TextField label="Fellowship1 Duration" source="fellowship1Duration" />
        <TextField label="Fellowship1 Name" source="fellowship1Name" />
        <TextField label="Fellowship1 Status" source="fellowship1Status" />
        <TextField label="Fellowship2 Amount" source="fellowship2Amount" />
        <TextField
          label="Fellowship2 Applied Date"
          source="fellowship2AppliedDate"
        />
        <TextField
          label="Fellowship2 Awarded Date"
          source="fellowship2AwardedDate"
        />
        <TextField label="Fellowship2 Duration" source="fellowship2Duration" />
        <TextField label="Fellowship2 Name" source="fellowship2Name" />
        <TextField label="Fellowship2 Status" source="fellowship2Status" />
        <TextField label="Fellowship3 Amount" source="fellowship3Amount" />
        <TextField
          label="Fellowship3 Applied Date"
          source="fellowship3AppliedDate"
        />
        <TextField
          label="Fellowship3 Awarded Date"
          source="fellowship3AwardedDate"
        />
        <TextField label="Fellowship3 Duration" source="fellowship3Duration" />
        <TextField label="Fellowship3 Name" source="fellowship3Name" />
        <TextField label="Fellowship3 Status" source="fellowship3Status" />
        <TextField label="Fellowship4 Amount" source="fellowship4Amount" />
        <TextField
          label="Fellowship4 Applied Date"
          source="fellowship4AppliedDate"
        />
        <TextField
          label="Fellowship4 Awarded Date"
          source="fellowship4AwardedDate"
        />
        <TextField label="Fellowship4 Duration" source="fellowship4Duration" />
        <TextField label="Fellowship4 Name" source="fellowship4Name" />
        <TextField label="Fellowship4 Status" source="fellowship4Status" />
        <TextField label="Fellowship5 Amount" source="fellowship5Amount" />
        <TextField
          label="Fellowship5 Applied Date"
          source="fellowship5AppliedDate"
        />
        <TextField
          label="Fellowship5 Awarded Date"
          source="fellowship5AwardedDate"
        />
        <TextField label="Fellowship5 Duration" source="fellowship5Duration" />
        <TextField label="Fellowship5 Name" source="fellowship5Name" />
        <TextField label="Fellowship5 Status" source="fellowship5Status" />
        <TextField label="Fellowship6 Amount" source="fellowship6Amount" />
        <TextField
          label="Fellowship6 Applied Date"
          source="fellowship6AppliedDate"
        />
        <TextField
          label="Fellowship6 Awarded Date"
          source="fellowship6AwardedDate"
        />
        <TextField label="Fellowship6 Duration" source="fellowship6Duration" />
        <TextField label="Fellowship6 Name" source="fellowship6Name" />
        <TextField label="Fellowship6 Status" source="fellowship6Status" />
        <TextField label="Fellowship7 Amount" source="fellowship7Amount" />
        <TextField
          label="Fellowship7 Applied Date"
          source="fellowship7AppliedDate"
        />
        <TextField
          label="Fellowship7 Awarded Date"
          source="fellowship7AwardedDate"
        />
        <TextField label="Fellowship7 Duration" source="fellowship7Duration" />
        <TextField label="Fellowship7 Name" source="fellowship7Name" />
        <TextField label="Fellowship7 Status" source="fellowship7Status" />
        <TextField label="Fellowship8 Amount" source="fellowship8Amount" />
        <TextField
          label="Fellowship8 Applied Date"
          source="fellowship8AppliedDate"
        />
        <TextField
          label="Fellowship8 Awarded Date"
          source="fellowship8AwardedDate"
        />
        <TextField label="Fellowship8 Duration" source="fellowship8Duration" />
        <TextField label="Fellowship8 Name" source="fellowship8Name" />
        <TextField label="Fellowship8 Status" source="fellowship8Status" />
        <TextField label="Fellowship9 Amount" source="fellowship9Amount" />
        <TextField
          label="Fellowship9 Applied Date"
          source="fellowship9AppliedDate"
        />
        <TextField
          label="Fellowship9 Awarded Date"
          source="fellowship9AwardedDate"
        />
        <TextField label="Fellowship9 Duration" source="fellowship9Duration" />
        <TextField label="Fellowship9 Name" source="fellowship9Name" />
        <TextField label="Fellowship9 Status" source="fellowship9Status" />
        <TextField label="First" source="first" />
        <TextField label="Has Fellowships" source="hasFellowships" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Learn About Other" source="learnAboutOther" />
        <TextField label="Learn About Us" source="learnAboutUs" />
        <TextField label="Middle" source="middle" />
        <TextField label="Prefix" source="prefix" />
        <TextField
          label="Video Essay Access Code"
          source="videoEssayAccessCode"
        />
        <TextField label="Video Essay Url" source="videoEssayUrl" />
      </Datagrid>
    </List>
  );
};
