import React from "react";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import FavoriteContacts from "./FavoriteContacts";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContact";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "ben@dotnetmastery.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "111-222-0000",
          email: "kathy@dotnetmastery.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Paul Show",
          phone: "999-222-1111",
          email: "paul@dotnetmastery.com",
          isFavorite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (newContent) => {
    if (newContent.name == "") {
      return { status: "failuer", msg: "Please Enter a Valid Name" };
    } else if (newContent.phone == "") {
      return { status: "failuer", msg: "Please Enter a Valid Name" };
    }
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name == newContent.name && x.phone == newContent.phone) {
        return true;
      }
    });
    if (duplicateRecord.length > 0) {
      return { status: "failuer", msg: "Duplicate Contact" };
    } else {
      const newFinalContact = {
        ...newContent,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };

      this.setState((previousState) => {
        return {
          contactList: previousState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added successfully" };
    }
  };

  handleToggleFavorite = (content) => {
    this.setState((previousState) => {
      return {
        contactList: previousState.contactList.map((obj) => {
          if (obj.id == content.id) {
            return { ...obj, isFavorite: !obj.isFavorite };
          }

          return obj;
        }),
      };
    });
  };

  handleDeleteContact = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((obj) => {
          return obj.id !== contact.id;
        }),
      };
    });
  };

  handleAddRandomContact = (newContent) => {
    const newFinalContact = {
      ...newContent,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };
    this.setState((previousState) => {
      return {
        contactList: previousState.contactList.concat([newFinalContact]),
      };
    });
    return { status: "success", msg: "Contact was added successfully" };
  };

  handleRemoveAllContact = () => {
    this.setState(() => {
      return {
        contactList: [],
      };
    });
    return { status: "success", msg: "Add contact be removed successfully" };
  };

  handleUpdateClick = (contact) => {
    this.setState((prevState) => {
      return {
        selectedContact: contact,
        isUpdating: true,
      };
    });
  };

  handleCancelUpdateContact = (contact) => {
    console.log(contact);
    this.setState((prevState) => {
      return {
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };

  handleUpdateContact = (updateContent) => {
    if (updateContent.name == "") {
      return { status: "failuer", msg: "Please Enter a Valid Name" };
    } else if (updateContent.phone == "") {
      return { status: "failuer", msg: "Please Enter a Valid Name" };
    }
    this.setState((previousState) => {
      return {
        contactList: previousState.contactList.map((obj) => {
          if (obj.id == updateContent.id) {
            return {
              ...obj,
              name: updateContent.name,
              email: updateContent.email,
              phone: updateContent.phone,
            };
          }
          return obj;
        }),
        isUpdating: false,
        selectedContact: undefined,
      };
    });
    return { status: "success", msg: "Contact was updated successfully" };
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                isUpdating={this.state.isUpdating}
                selectedContact={this.state.selectedContact}
                handleAddRandomContact={this.handleAddRandomContact}
                handleUpdateContact={this.handleUpdateContact}
                cancelUpdateContact={this.handleCancelUpdateContact}
              />
            </div>
            <div className="col-4 row">
              <RemoveAllContact
                handleRemoveAllContact={this.handleRemoveAllContact}
              />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact
                  handleAddContact={this.handleAddContact}
                  isUpdating={this.state.isUpdating}
                  selectedContact={this.state.selectedContact}
                  handleUpdateContact={this.handleUpdateContact}
                  cancelUpdateContact={this.handleCancelUpdateContact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite == true
                  )}
                  favoriteClick={this.handleToggleFavorite}
                  deleteClick={this.handleDeleteContact}
                  updateClick={this.handleUpdateClick}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite == false
                  )}
                  favoriteClick={this.handleToggleFavorite}
                  deleteClick={this.handleDeleteContact}
                  updateClick={this.handleUpdateClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContactIndex;
