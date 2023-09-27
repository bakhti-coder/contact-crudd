import { Fragment, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Footer } from "../components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import { v4 } from "uuid";
import TelePhoneHeader from "../components/Header";
import TelePhoneCard from "../components/TelephoneCard";
import "react-toastify/dist/ReactToastify.css";

export const HomePage = () => {
  const [category, setCategory] = useState("Family");
  const [contact, setContact] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts
      ? JSON.parse(storedContacts)
      : [
          {
            first_name: "Bakhtiyor",
            last_name: "Sayfiddinov",
            phone_number: "+998940137300",
            category: "Family",
            image:
              "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            id: 1,
          },
          {
            first_name: "Bekhruz",
            last_name: "Olimjonov",
            phone_number: "+9989333398",
            category: "Friends",
            image:
              "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            id: 2,
          },
          {
            first_name: "Jasur",
            last_name: "Sayfiddinov",
            phone_number: "+998976665445",
            category: "Relatives",
            image:
              "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            id: 3,
          },
        ];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firsname, lastname, phonenumber, image } = e.target.elements;

    const newContact = {
      first_name: firsname.value,
      last_name: lastname.value,
      phone_number: phonenumber.value,
      category: category,
      image: image.value,
      id: v4(),
    };
    const updatedContacts = [...contact, newContact];
    setContact(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    firsname.value = "";
    lastname.value = "";
    phonenumber.value = "";
    image.value = "";
    toast.success("Added successfully", { autoClose: 1000 });
  };

  const deleteContact = (id) => {
    const updateContacts = contact.filter((c) => c.id !== id);
    setContact(updateContacts);
    localStorage.setItem("contacts", JSON.stringify(updateContacts));
  };

  const editContact = (id) => {};

  return (
    <Fragment>
      <ToastContainer />
      <Container>
        <Form onSubmit={handleSubmit} className="w-50 m-auto">
          <Form.Group className="mb-3" controlId="First name">
            <Form.Label>First name</Form.Label>
            <Form.Control name="firsname" required type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Last name">
            <Form.Label>Last name</Form.Label>
            <Form.Control name="lastname" required type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Phone number">
            <Form.Label>Phone number</Form.Label>
            <Form.Control name="phonenumber" required type="tel" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Last name">
            <Form.Label>Image url</Form.Label>
            <Form.Control name="image" required type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Category">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Family">Family</option>
              <option value="Friends">Friends</option>
              <option value="Relatives">Relatives</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" className="w-100">
            Saqlash
          </Button>
        </Form>
        <TelePhoneHeader />
        <TelePhoneCard
          contact={contact}
          deleteContact={deleteContact}
          editContact={editContact}
        />
        <Footer />
      </Container>
    </Fragment>
  );
};

export default HomePage;
