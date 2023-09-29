import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UsersInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UsersInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Additionalinfo" source="additionalinfo" />
        <TextField label="Address Cur City" source="addressCurCity" />
        <TextField label="Address Cur Country" source="addressCurCountry" />
        <TextField label="Address Cur Pcode" source="addressCurPcode" />
        <TextField label="Address Cur State" source="addressCurState" />
        <TextField label="Address Cur Street1" source="addressCurStreet1" />
        <TextField label="Address Cur Street2" source="addressCurStreet2" />
        <TextField label="Address Cur Street3" source="addressCurStreet3" />
        <TextField label="Address Cur Street4" source="addressCurStreet4" />
        <TextField label="Address Cur Tel" source="addressCurTel" />
        <TextField
          label="Address Cur Tel Mobile"
          source="addressCurTelMobile"
        />
        <TextField label="Address Cur Tel Work" source="addressCurTelWork" />
        <TextField label="Address Perm City" source="addressPermCity" />
        <TextField label="Address Perm Country" source="addressPermCountry" />
        <TextField label="Address Perm Pcode" source="addressPermPcode" />
        <TextField label="Address Perm State" source="addressPermState" />
        <TextField label="Address Perm Street1" source="addressPermStreet1" />
        <TextField label="Address Perm Street2" source="addressPermStreet2" />
        <TextField label="Address Perm Street3" source="addressPermStreet3" />
        <TextField label="Address Perm Street4" source="addressPermStreet4" />
        <TextField label="Address Perm Tel" source="addressPermTel" />
        <TextField
          label="Address Perm Tel Mobile"
          source="addressPermTelMobile"
        />
        <TextField label="Address Perm Tel Work" source="addressPermTelWork" />
        <BooleanField label="Buckley Waive" source="buckleyWaive" />
        <TextField label="Cit Country" source="citCountry" />
        <TextField label="Cit Country Second" source="citCountrySecond" />
        <TextField label="Company" source="company" />
        <TextField label="Cur Pa Res" source="curPaRes" />
        <TextField label="Dob" source="dob" />
        <TextField label="Ethnicity" source="ethnicity" />
        <BooleanField label="First Gen Grad" source="firstGenGrad" />
        <BooleanField label="First Gen Ugrad" source="firstGenUgrad" />
        <TextField label="Gender" source="gender" />
        <TextField label="Homepage" source="homepage" />
        <TextField label="Id" source="id" />
        <TextField label="Native Tongue" source="nativeTongue" />
        <TextField label="Qq Number" source="qqNumber" />
        <TextField label="Self Gender" source="selfGender" />
        <TextField label="Self Gender Other" source="selfGenderOther" />
        <TextField
          label="Us Citizen Or Permanent Resident"
          source="usCitizenOrPermanentResident"
        />
        <TextField label="User Id" source="userId" />
        <TextField label="Us Perm" source="usPerm" />
        <TextField label="Visastatus" source="visastatus" />
      </Datagrid>
    </List>
  );
};
