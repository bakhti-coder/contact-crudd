import React from "react";
import { Table } from "react-bootstrap";
import { Pencil, Trash2 } from "lucide-react";

const TelePhoneCard = ({ contact, deleteContact, editContact }) => {
  const sortedContacts = contact.sort((a, b) => {
    const nameA = a.first_name.toLowerCase();
    const nameB = b.first_name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return (
    <Table bordered hover>
      <thead>
        <tr className="text-center">
          <th>№({contact.length})</th>
          <th>Image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone number</th>
          <th>Category</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      {sortedContacts.map((contact, i) => (
        <tbody key={i}>
          <tr className="text-center">
            <td>{i + 1}</td>
            <td>
              <img
                style={{ borderRadius: "50%" }}
                width={30}
                height={30}
                src={contact.image}
                alt={contact.first_name}
              />
            </td>
            <td>{contact.first_name}</td>
            <td>{contact.last_name}</td>
            <td>{contact.phone_number}</td>
            <td>{contact.category}</td>
            <td className="text-center">
              <Pencil
                onClick={() => editContact(contact.id)}
                color="blue"
                style={{ cursor: "pointer" }}
              />
            </td>
            <td className="text-center">
              <Trash2
                onClick={() => deleteContact(contact.id)}
                color="red"
                style={{ cursor: "pointer" }}
              />
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
};

export default TelePhoneCard;
