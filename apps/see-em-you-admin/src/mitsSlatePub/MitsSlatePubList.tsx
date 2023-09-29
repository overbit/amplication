import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MitsSlatePubList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MitsSlatePubs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Authors Pub1" source="authorsPub1" />
        <TextField label="Authors Pub2" source="authorsPub2" />
        <TextField label="Authors Pub3" source="authorsPub3" />
        <TextField label="Authors Pub4" source="authorsPub4" />
        <TextField label="Authors Pub5" source="authorsPub5" />
        <TextField label="Authors Pub6" source="authorsPub6" />
        <TextField label="Citation Pub1" source="citationPub1" />
        <TextField label="Citation Pub2" source="citationPub2" />
        <TextField label="Citation Pub3" source="citationPub3" />
        <TextField label="Citation Pub4" source="citationPub4" />
        <TextField label="Citation Pub5" source="citationPub5" />
        <TextField label="Citation Pub6" source="citationPub6" />
        <TextField label="Destination Pub1" source="destinationPub1" />
        <TextField label="Destination Pub2" source="destinationPub2" />
        <TextField label="Destination Pub3" source="destinationPub3" />
        <TextField label="Destination Pub4" source="destinationPub4" />
        <TextField label="Destination Pub5" source="destinationPub5" />
        <TextField label="Destination Pub6" source="destinationPub6" />
        <TextField label="First" source="first" />
        <TextField label="Has Publications" source="hasPublications" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField
          label="Other Type Of Publication1"
          source="otherTypeOfPublication1"
        />
        <TextField
          label="Other Type Of Publication2"
          source="otherTypeOfPublication2"
        />
        <TextField
          label="Other Type Of Publication3"
          source="otherTypeOfPublication3"
        />
        <TextField
          label="Other Type Of Publication4"
          source="otherTypeOfPublication4"
        />
        <TextField
          label="Other Type Of Publication5"
          source="otherTypeOfPublication5"
        />
        <TextField
          label="Other Type Of Publication6"
          source="otherTypeOfPublication6"
        />
        <TextField label="Prefix" source="prefix" />
        <TextField
          label="Status Of Publication1"
          source="statusOfPublication1"
        />
        <TextField
          label="Status Of Publication2"
          source="statusOfPublication2"
        />
        <TextField
          label="Status Of Publication3"
          source="statusOfPublication3"
        />
        <TextField
          label="Status Of Publication4"
          source="statusOfPublication4"
        />
        <TextField
          label="Status Of Publication5"
          source="statusOfPublication5"
        />
        <TextField
          label="Status Of Publication6"
          source="statusOfPublication6"
        />
        <TextField label="Title Pub1" source="titlePub1" />
        <TextField label="Title Pub2" source="titlePub2" />
        <TextField label="Title Pub3" source="titlePub3" />
        <TextField label="Title Pub4" source="titlePub4" />
        <TextField label="Title Pub5" source="titlePub5" />
        <TextField label="Title Pub6" source="titlePub6" />
        <TextField label="Type Of Publication1" source="typeOfPublication1" />
        <TextField label="Type Of Publication2" source="typeOfPublication2" />
        <TextField label="Type Of Publication3" source="typeOfPublication3" />
        <TextField label="Type Of Publication4" source="typeOfPublication4" />
        <TextField label="Type Of Publication5" source="typeOfPublication5" />
        <TextField label="Type Of Publication6" source="typeOfPublication6" />
        <TextField label="Url Pub1" source="urlPub1" />
        <TextField label="Url Pub2" source="urlPub2" />
        <TextField label="Url Pub3" source="urlPub3" />
        <TextField label="Url Pub4" source="urlPub4" />
        <TextField label="Url Pub5" source="urlPub5" />
        <TextField label="Url Pub6" source="urlPub6" />
      </Datagrid>
    </List>
  );
};
