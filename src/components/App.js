import { useEffect, useState } from "react";
import { getUsers, addUser } from "../api";
import { User } from "./";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [add, setAdd] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();

      if (response.success) {
        setUsers(response.data);
      }
    };

    fetchUsers();
  }, [setUsers]);

  const handleAddContact = async (e) => {
    e.preventDefault();

    if (!add) {
      setAdd(true);
      return;
    }

    if (name === "" || tel === "") {
      setAdd(false);
      return;
    }

    const response = await addUser(name, tel);

    if (response.success) {
      setName("");
      setTel("");
      const newUsers = [...users, response.data];
      setUsers(newUsers);
      setAdd(false);
    }
  };

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <div className="usersDiv">
        {users.map((user) => {
          return (
            <User user={user} onDelete={handleDelete} key={`user-${user.id}`} />
          );
        })}
      </div>

      {add && (
        <form>
          <h1>Add contact</h1>
          <p>Name</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter name"
          />

          <p>Phone</p>
          <input
            type="tel"
            onChange={(e) => setTel(e.target.value)}
            value={tel}
            placeholder="Enter number"
          />
        </form>
      )}
      <button className="addBtn" onClick={handleAddContact}>
        Add
      </button>
    </div>
  );
};

export default App;
