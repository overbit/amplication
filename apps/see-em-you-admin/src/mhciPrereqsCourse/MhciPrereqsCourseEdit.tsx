import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { LuUsersUsertypeTitle } from "../luUsersUsertype/LuUsersUsertypeTitle";
import { MhciPrereqsCourseDatafileTitle } from "../mhciPrereqsCourseDatafile/MhciPrereqsCourseDatafileTitle";

export const MhciPrereqsCourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
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
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <TextInput label="Student Course Grade" source="studentCourseGrade" />
        <TextInput
          label="Student Course Institution"
          source="studentCourseInstitution"
        />
        <TextInput label="Student Course Name" source="studentCourseName" />
        <TextInput label="Student Course Time" source="studentCourseTime" />
        <NumberInput
          step={1}
          label="Submitted To Reviewer"
          source="submittedToReviewer"
        />
      </SimpleForm>
    </Edit>
  );
};
