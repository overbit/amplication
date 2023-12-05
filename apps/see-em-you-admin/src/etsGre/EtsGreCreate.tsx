import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EtsGreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address1" source="address1" />
        <TextInput label="Address2" source="address2" />
        <TextInput label="Address3" source="address3" />
        <TextInput label="Address City" source="addressCity" />
        <TextInput label="Address State" source="addressState" />
        <TextInput label="Address Zip" source="addressZip" />
        <TextInput label="Country Code" source="countryCode" />
        <TextInput label="Country Name" source="countryName" />
        <TextInput label="Cycle Num" source="cycleNum" />
        <TextInput label="Dept Code" source="deptCode" />
        <TextInput label="Dept Name" source="deptName" />
        <TextInput label="Dob" source="dob" />
        <TextInput label="Email" source="email" />
        <TextInput label="F Name" source="fName" />
        <TextInput label="Gender" source="gender" />
        <TextInput label="Grad Major Code" source="gradMajorCode" />
        <TextInput label="Grad Major Name" source="gradMajorName" />
        <TextInput label="Inst Code" source="instCode" />
        <TextInput label="Inst Name" source="instName" />
        <TextInput label="Inst Type" source="instType" />
        <TextInput label="L Name" source="lName" />
        <TextInput label="M Name" source="mName" />
        <TextInput label="Percentile Rank1" source="percentileRank1" />
        <TextInput label="Percentile Rank2" source="percentileRank2" />
        <TextInput label="Percentile Rank3" source="percentileRank3" />
        <TextInput label="Percentile Rank4" source="percentileRank4" />
        <TextInput label="Percentile Rank5" source="percentileRank5" />
        <TextInput label="Percentile Rank6" source="percentileRank6" />
        <TextInput label="Percentile Rank7" source="percentileRank7" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Process Date" source="processDate" />
        <TextInput label="Record Serial Num" source="recordSerialNum" />
        <TextInput label="Reg Number" source="regNumber" />
        <TextInput label="Scaled Score1" source="scaledScore1" />
        <TextInput label="Scaled Score2" source="scaledScore2" />
        <TextInput label="Scaled Score3" source="scaledScore3" />
        <TextInput label="Scaled Score4" source="scaledScore4" />
        <TextInput label="Scaled Score5" source="scaledScore5" />
        <TextInput label="Scaled Score6" source="scaledScore6" />
        <TextInput label="Scaled Score7" source="scaledScore7" />
        <TextInput label="Score Type1" source="scoreType1" />
        <TextInput label="Score Type2" source="scoreType2" />
        <TextInput label="Score Type3" source="scoreType3" />
        <TextInput label="Score Type4" source="scoreType4" />
        <TextInput label="Score Type5" source="scoreType5" />
        <TextInput label="Score Type6" source="scoreType6" />
        <TextInput label="Score Type7" source="scoreType7" />
        <TextInput label="Sequence Num" source="sequenceNum" />
        <TextInput label="Ssn" source="ssn" />
        <TextInput label="Test Code" source="testCode" />
        <TextInput label="Test Date" source="testDate" />
        <TextInput label="Test Name" source="testName" />
      </SimpleForm>
    </Create>
  );
};
