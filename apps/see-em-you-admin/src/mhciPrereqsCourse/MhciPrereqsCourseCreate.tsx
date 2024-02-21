import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { LuUsersUsertypeTitle } from "../luUsersUsertype/LuUsersUsertypeTitle";
import { MhciPrereqsCourseDatafileTitle } from "../mhciPrereqsCourseDatafile/MhciPrereqsCourseDatafileTitle";

export const MhciPrereqsCourseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="course_type"
          label="Course Type"
          choices={[
            { label: "Design", value: "Design" },
            { label: "Programming", value: "Programming" },
            { label: "Multi_way_ANOVA", value: "Multi_way_ANOVA" },
            { label: "Single_way_ANOVA", value: "Single_way_ANOVA" },
            {
              label: "Multi_factor_regression",
              value: "Multi_factor_regression",
            },
            {
              label: "Single_factor_regression",
              value: "Single_factor_regression",
            },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Student Course Name" source="studentCourseName" />
        <TextInput label="Student Course Time" source="studentCourseTime" />
        <TextInput
          label="Student Course Institution"
          source="studentCourseInstitution"
        />
        <TextInput label="Student Course Grade" source="studentCourseGrade" />
        <NumberInput
          step={1}
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="luUsersUsertypes.id"
          reference="LuUsersUsertype"
          label="Lu Users Usertypes"
        >
          <SelectInput optionText={LuUsersUsertypeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="mhciPrereqsCourseDatafiles"
          reference="MhciPrereqsCourseDatafile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MhciPrereqsCourseDatafileTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
