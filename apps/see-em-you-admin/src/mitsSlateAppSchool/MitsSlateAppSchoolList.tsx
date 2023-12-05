import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MitsSlateAppSchoolList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MitsSlateAppSchools"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="First" source="first" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Prefix" source="prefix" />
        <TextField label="School1 Awards" source="school1Awards" />
        <TextField label="School1 City" source="school1City" />
        <TextField
          label="School1 Class Rank Numeric"
          source="school1ClassRankNumeric"
        />
        <TextField
          label="School1 Class Rank X Out Of Y"
          source="school1ClassRankXOutOfY"
        />
        <TextField
          label="School1 Class Size Numeric"
          source="school1ClassSizeNumeric"
        />
        <TextField label="School1 Code" source="school1Code" />
        <TextField label="School1 Confirmed" source="school1Confirmed" />
        <TextField label="School1 Country" source="school1Country" />
        <TextField label="School1 Created" source="school1Created" />
        <TextField label="School1 Degree" source="school1Degree" />
        <TextField
          label="School1 Degree Conferred"
          source="school1DegreeConferred"
        />
        <TextField label="School1 Field" source="school1Field" />
        <TextField label="School1 From" source="school1From" />
        <TextField label="School1 Gpa" source="school1Gpa" />
        <TextField label="School1 Gpa Converted" source="school1GpaConverted" />
        <TextField
          label="School1 Gpa Recalculated"
          source="school1GpaRecalculated"
        />
        <TextField label="School1 Gpa Scale" source="school1GpaScale" />
        <TextField label="School1 Honors" source="school1Honors" />
        <TextField label="School1 Hours" source="school1Hours" />
        <TextField label="School1 Institution" source="school1Institution" />
        <TextField label="School1 Language" source="school1Language" />
        <TextField label="School1 Major" source="school1Major" />
        <TextField label="School1 Major1" source="school1Major1" />
        <TextField label="School1 Major2" source="school1Major2" />
        <TextField label="School1 Minor" source="school1Minor" />
        <TextField label="School1 Region" source="school1Region" />
        <TextField label="School1 To" source="school1To" />
        <TextField label="School1 Type" source="school1Type" />
        <TextField label="School1 Updated" source="school1Updated" />
        <TextField label="School1 Website" source="school1Website" />
        <TextField label="School2 Awards" source="school2Awards" />
        <TextField label="School2 City" source="school2City" />
        <TextField
          label="School2 Class Rank Numeric"
          source="school2ClassRankNumeric"
        />
        <TextField
          label="School2 Class Rank X Out Of Y"
          source="school2ClassRankXOutOfY"
        />
        <TextField
          label="School2 Class Size Numeric"
          source="school2ClassSizeNumeric"
        />
        <TextField label="School2 Code" source="school2Code" />
        <TextField label="School2 Confirmed" source="school2Confirmed" />
        <TextField label="School2 Country" source="school2Country" />
        <TextField label="School2 Created" source="school2Created" />
        <TextField label="School2 Degree" source="school2Degree" />
        <TextField
          label="School2 Degree Conferred"
          source="school2DegreeConferred"
        />
        <TextField label="School2 Field" source="school2Field" />
        <TextField label="School2 From" source="school2From" />
        <TextField label="School2 Gpa" source="school2Gpa" />
        <TextField label="School2 Gpa Converted" source="school2GpaConverted" />
        <TextField
          label="School2 Gpa Recalculated"
          source="school2GpaRecalculated"
        />
        <TextField label="School2 Gpa Scale" source="school2GpaScale" />
        <TextField label="School2 Honors" source="school2Honors" />
        <TextField label="School2 Hours" source="school2Hours" />
        <TextField label="School2 Institution" source="school2Institution" />
        <TextField label="School2 Language" source="school2Language" />
        <TextField label="School2 Major" source="school2Major" />
        <TextField label="School2 Major1" source="school2Major1" />
        <TextField label="School2 Major2" source="school2Major2" />
        <TextField label="School2 Minor" source="school2Minor" />
        <TextField label="School2 Region" source="school2Region" />
        <TextField label="School2 To" source="school2To" />
        <TextField label="School2 Type" source="school2Type" />
        <TextField label="School2 Updated" source="school2Updated" />
        <TextField label="School2 Website" source="school2Website" />
        <TextField label="School3 Awards" source="school3Awards" />
        <TextField label="School3 City" source="school3City" />
        <TextField
          label="School3 Class Rank Numeric"
          source="school3ClassRankNumeric"
        />
        <TextField
          label="School3 Class Rank X Out Of Y"
          source="school3ClassRankXOutOfY"
        />
        <TextField
          label="School3 Class Size Numeric"
          source="school3ClassSizeNumeric"
        />
        <TextField label="School3 Code" source="school3Code" />
        <TextField label="School3 Confirmed" source="school3Confirmed" />
        <TextField label="School3 Country" source="school3Country" />
        <TextField label="School3 Created" source="school3Created" />
        <TextField label="School3 Degree" source="school3Degree" />
        <TextField
          label="School3 Degree Conferred"
          source="school3DegreeConferred"
        />
        <TextField label="School3 Field" source="school3Field" />
        <TextField label="School3 From" source="school3From" />
        <TextField label="School3 Gpa" source="school3Gpa" />
        <TextField label="School3 Gpa Converted" source="school3GpaConverted" />
        <TextField
          label="School3 Gpa Recalculated"
          source="school3GpaRecalculated"
        />
        <TextField label="School3 Gpa Scale" source="school3GpaScale" />
        <TextField label="School3 Honors" source="school3Honors" />
        <TextField label="School3 Hours" source="school3Hours" />
        <TextField label="School3 Institution" source="school3Institution" />
        <TextField label="School3 Language" source="school3Language" />
        <TextField label="School3 Major" source="school3Major" />
        <TextField label="School3 Major1" source="school3Major1" />
        <TextField label="School3 Major2" source="school3Major2" />
        <TextField label="School3 Minor" source="school3Minor" />
        <TextField label="School3 Region" source="school3Region" />
        <TextField label="School3 To" source="school3To" />
        <TextField label="School3 Type" source="school3Type" />
        <TextField label="School3 Updated" source="school3Updated" />
        <TextField label="School3 Website" source="school3Website" />
        <TextField label="School4 Awards" source="school4Awards" />
        <TextField label="School4 City" source="school4City" />
        <TextField
          label="School4 Class Rank Numeric"
          source="school4ClassRankNumeric"
        />
        <TextField
          label="School4 Class Rank X Out Of Y"
          source="school4ClassRankXOutOfY"
        />
        <TextField
          label="School4 Class Size Numeric"
          source="school4ClassSizeNumeric"
        />
        <TextField label="School4 Code" source="school4Code" />
        <TextField label="School4 Confirmed" source="school4Confirmed" />
        <TextField label="School4 Country" source="school4Country" />
        <TextField label="School4 Created" source="school4Created" />
        <TextField label="School4 Degree" source="school4Degree" />
        <TextField
          label="School4 Degree Conferred"
          source="school4DegreeConferred"
        />
        <TextField label="School4 Field" source="school4Field" />
        <TextField label="School4 From" source="school4From" />
        <TextField label="School4 Gpa" source="school4Gpa" />
        <TextField label="School4 Gpa Converted" source="school4GpaConverted" />
        <TextField
          label="School4 Gpa Recalculated"
          source="school4GpaRecalculated"
        />
        <TextField label="School4 Gpa Scale" source="school4GpaScale" />
        <TextField label="School4 Honors" source="school4Honors" />
        <TextField label="School4 Hours" source="school4Hours" />
        <TextField label="School4 Institution" source="school4Institution" />
        <TextField label="School4 Language" source="school4Language" />
        <TextField label="School4 Major" source="school4Major" />
        <TextField label="School4 Major1" source="school4Major1" />
        <TextField label="School4 Major2" source="school4Major2" />
        <TextField label="School4 Minor" source="school4Minor" />
        <TextField label="School4 Region" source="school4Region" />
        <TextField label="School4 To" source="school4To" />
        <TextField label="School4 Type" source="school4Type" />
        <TextField label="School4 Updated" source="school4Updated" />
        <TextField label="School4 Website" source="school4Website" />
        <TextField label="School5 Awards" source="school5Awards" />
        <TextField label="School5 City" source="school5City" />
        <TextField
          label="School5 Class Rank Numeric"
          source="school5ClassRankNumeric"
        />
        <TextField
          label="School5 Class Rank X Out Of Y"
          source="school5ClassRankXOutOfY"
        />
        <TextField
          label="School5 Class Size Numeric"
          source="school5ClassSizeNumeric"
        />
        <TextField label="School5 Code" source="school5Code" />
        <TextField label="School5 Confirmed" source="school5Confirmed" />
        <TextField label="School5 Country" source="school5Country" />
        <TextField label="School5 Created" source="school5Created" />
        <TextField label="School5 Degree" source="school5Degree" />
        <TextField
          label="School5 Degree Conferred"
          source="school5DegreeConferred"
        />
        <TextField label="School5 Field" source="school5Field" />
        <TextField label="School5 From" source="school5From" />
        <TextField label="School5 Gpa" source="school5Gpa" />
        <TextField label="School5 Gpa Converted" source="school5GpaConverted" />
        <TextField
          label="School5 Gpa Recalculated"
          source="school5GpaRecalculated"
        />
        <TextField label="School5 Gpa Scale" source="school5GpaScale" />
        <TextField label="School5 Honors" source="school5Honors" />
        <TextField label="School5 Hours" source="school5Hours" />
        <TextField label="School5 Institution" source="school5Institution" />
        <TextField label="School5 Language" source="school5Language" />
        <TextField label="School5 Major" source="school5Major" />
        <TextField label="School5 Major1" source="school5Major1" />
        <TextField label="School5 Major2" source="school5Major2" />
        <TextField label="School5 Minor" source="school5Minor" />
        <TextField label="School5 Region" source="school5Region" />
        <TextField label="School5 To" source="school5To" />
        <TextField label="School5 Type" source="school5Type" />
        <TextField label="School5 Updated" source="school5Updated" />
        <TextField label="School5 Website" source="school5Website" />
        <TextField
          label="School Num1 Number Of Active Applications"
          source="schoolNum1NumberOfActiveApplications"
        />
        <TextField label="School Num1 Priority" source="schoolNum1Priority" />
        <TextField label="School Num2 Priority" source="schoolNum2Priority" />
        <TextField label="School Num3 Priority" source="schoolNum3Priority" />
        <TextField label="School Num4 Priority" source="schoolNum4Priority" />
        <TextField label="School Num5 Priority" source="schoolNum5Priority" />
      </Datagrid>
    </List>
  );
};
