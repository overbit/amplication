import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EtsGreCopyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EtsGreCopies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address1" source="address1" />
        <TextField label="Address2" source="address2" />
        <TextField label="Address3" source="address3" />
        <TextField label="Address City" source="addressCity" />
        <TextField label="Address State" source="addressState" />
        <TextField label="Address Zip" source="addressZip" />
        <TextField label="Country Code" source="countryCode" />
        <TextField label="Country Name" source="countryName" />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Cycle Num" source="cycleNum" />
        <TextField label="Dept Code" source="deptCode" />
        <TextField label="Dept Name" source="deptName" />
        <TextField label="Dob" source="dob" />
        <TextField label="Email" source="email" />
        <TextField label="F Name" source="fName" />
        <TextField label="Gender" source="gender" />
        <TextField label="Grad Major Code" source="gradMajorCode" />
        <TextField label="Grad Major Name" source="gradMajorName" />
        <TextField label="Id" source="id" />
        <TextField label="Inst Code" source="instCode" />
        <TextField label="Inst Name" source="instName" />
        <TextField label="Inst Type" source="instType" />
        <TextField label="L Name" source="lName" />
        <TextField label="M Name" source="mName" />
        <TextField label="Percentile Rank1" source="percentileRank1" />
        <TextField label="Percentile Rank2" source="percentileRank2" />
        <TextField label="Percentile Rank3" source="percentileRank3" />
        <TextField label="Percentile Rank4" source="percentileRank4" />
        <TextField label="Percentile Rank5" source="percentileRank5" />
        <TextField label="Percentile Rank6" source="percentileRank6" />
        <TextField label="Percentile Rank7" source="percentileRank7" />
        <TextField label="Phone" source="phone" />
        <TextField label="Process Date" source="processDate" />
        <TextField label="Record Serial Num" source="recordSerialNum" />
        <TextField label="Reg Number" source="regNumber" />
        <TextField label="Scaled Score1" source="scaledScore1" />
        <TextField label="Scaled Score2" source="scaledScore2" />
        <TextField label="Scaled Score3" source="scaledScore3" />
        <TextField label="Scaled Score4" source="scaledScore4" />
        <TextField label="Scaled Score5" source="scaledScore5" />
        <TextField label="Scaled Score6" source="scaledScore6" />
        <TextField label="Scaled Score7" source="scaledScore7" />
        <TextField label="Score Type1" source="scoreType1" />
        <TextField label="Score Type2" source="scoreType2" />
        <TextField label="Score Type3" source="scoreType3" />
        <TextField label="Score Type4" source="scoreType4" />
        <TextField label="Score Type5" source="scoreType5" />
        <TextField label="Score Type6" source="scoreType6" />
        <TextField label="Score Type7" source="scoreType7" />
        <TextField label="Sequence Num" source="sequenceNum" />
        <TextField label="Ssn" source="ssn" />
        <TextField label="Test Code" source="testCode" />
        <TextField label="Test Date" source="testDate" />
        <TextField label="Test Name" source="testName" />
      </Datagrid>
    </List>
  );
};
