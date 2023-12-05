import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MhciPrereqsConversationCommentTitle } from "../mhciPrereqsConversationComment/MhciPrereqsConversationCommentTitle";
import { MhciPrereqsCourseTitle } from "../mhciPrereqsCourse/MhciPrereqsCourseTitle";
import { MhciPrereqsDesignPortfolioTitle } from "../mhciPrereqsDesignPortfolio/MhciPrereqsDesignPortfolioTitle";
import { MhciPrereqsProgrammingSampleTitle } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleTitle";
import { MhciPrereqsProgrammingTestTitle } from "../mhciPrereqsProgrammingTest/MhciPrereqsProgrammingTestTitle";
import { UserTitle } from "../user/UserTitle";

export const LuUsersUsertypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Domain" source="domain" />
        <ReferenceArrayInput
          source="mhciPrereqsConversationComments"
          reference="MhciPrereqsConversationComment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MhciPrereqsConversationCommentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mhciPrereqsCourses"
          reference="MhciPrereqsCourse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MhciPrereqsCourseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mhciPrereqsDesignPortfolios"
          reference="MhciPrereqsDesignPortfolio"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MhciPrereqsDesignPortfolioTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="mhciPrereqsProgrammingSamples.id"
          reference="MhciPrereqsProgrammingSample"
          label="Mhci Prereqs Programming Samples"
        >
          <SelectInput optionText={MhciPrereqsProgrammingSampleTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="mhciPrereqsProgrammingTests"
          reference="MhciPrereqsProgrammingTest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MhciPrereqsProgrammingTestTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Usertype Id" source="usertypeId" />
      </SimpleForm>
    </Create>
  );
};
