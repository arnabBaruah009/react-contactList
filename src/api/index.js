const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
      data,
      success: true
    };
  } catch (error) {
    console.error("Error in fetching", error);
    return {
      message: error.message,
      success: false
    };
  }
};

const addUser = async (name, tel) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        phone: tel
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    });
    const data = await response.json();
    return {
      data,
      success: true
    };
  } catch (error) {
    console.error("Error in adding", error);
    return {
      message: error.message,
      success: false
    };
  }
};

export { getUsers, addUser };
