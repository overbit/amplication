import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MhciSlatePubCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Authors Pub1" source="authorsPub1" />
        <TextInput label="Authors Pub2" source="authorsPub2" />
        <TextInput label="Authors Pub3" source="authorsPub3" />
        <TextInput label="Authors Pub4" source="authorsPub4" />
        <TextInput label="Authors Pub5" source="authorsPub5" />
        <TextInput label="Authors Pub6" source="authorsPub6" />
        <TextInput label="Citation Pub1" source="citationPub1" />
        <TextInput label="Citation Pub2" source="citationPub2" />
        <TextInput label="Citation Pub3" source="citationPub3" />
        <TextInput label="Citation Pub4" source="citationPub4" />
        <TextInput label="Citation Pub5" source="citationPub5" />
        <TextInput label="Citation Pub6" source="citationPub6" />
        <TextInput label="Destination Pub1" source="destinationPub1" />
        <TextInput label="Destination Pub2" source="destinationPub2" />
        <TextInput label="Destination Pub3" source="destinationPub3" />
        <TextInput label="Destination Pub4" source="destinationPub4" />
        <TextInput label="Destination Pub5" source="destinationPub5" />
        <TextInput label="Destination Pub6" source="destinationPub6" />
        <TextInput label="First" source="first" />
        <TextInput label="Has Publications" source="hasPublications" />
        <TextInput label="Last" source="last" />
        <TextInput label="Middle" source="middle" />
        <TextInput
          label="Other Type Of Publication1"
          source="otherTypeOfPublication1"
        />
        <TextInput
          label="Other Type Of Publication2"
          source="otherTypeOfPublication2"
        />
        <TextInput
          label="Other Type Of Publication3"
          source="otherTypeOfPublication3"
        />
        <TextInput
          label="Other Type Of Publication4"
          source="otherTypeOfPublication4"
        />
        <TextInput
          label="Other Type Of Publication5"
          source="otherTypeOfPublication5"
        />
        <TextInput
          label="Other Type Of Publication6"
          source="otherTypeOfPublication6"
        />
        <TextInput label="Prefix" source="prefix" />
        <TextInput
          label="Status Of Publication1"
          source="statusOfPublication1"
        />
        <TextInput
          label="Status Of Publication2"
          source="statusOfPublication2"
        />
        <TextInput
          label="Status Of Publication3"
          source="statusOfPublication3"
        />
        <TextInput
          label="Status Of Publication4"
          source="statusOfPublication4"
        />
        <TextInput
          label="Status Of Publication5"
          source="statusOfPublication5"
        />
        <TextInput
          label="Status Of Publication6"
          source="statusOfPublication6"
        />
        <TextInput label="Title Pub1" source="titlePub1" />
        <TextInput label="Title Pub2" source="titlePub2" />
        <TextInput label="Title Pub3" source="titlePub3" />
        <TextInput label="Title Pub4" source="titlePub4" />
        <TextInput label="Title Pub5" source="titlePub5" />
        <TextInput label="Title Pub6" source="titlePub6" />
        <TextInput label="Type Of Publication1" source="typeOfPublication1" />
        <TextInput label="Type Of Publication2" source="typeOfPublication2" />
        <TextInput label="Type Of Publication3" source="typeOfPublication3" />
        <TextInput label="Type Of Publication4" source="typeOfPublication4" />
        <TextInput label="Type Of Publication5" source="typeOfPublication5" />
        <TextInput label="Type Of Publication6" source="typeOfPublication6" />
        <TextInput label="Url Pub1" source="urlPub1" />
        <TextInput label="Url Pub2" source="urlPub2" />
        <TextInput label="Url Pub3" source="urlPub3" />
        <TextInput label="Url Pub4" source="urlPub4" />
        <TextInput label="Url Pub5" source="urlPub5" />
        <TextInput label="Url Pub6" source="urlPub6" />
      </SimpleForm>
    </Create>
  );
};
