const fetchOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

const createUser = async (user) => {
  try {
    const res = await fetch('http://localhost:4000/addNewUser', {
      method: 'POST',
      body: JSON.stringify(user),
      ...fetchOptions,
    });
    await res.json();
  } catch (err) {
    console.log('error at craeting new user', err);
  }
};

const deleteUser = async (id) => {
  try {
    const res = await fetch(`http://localhost:4000/deleteUser/${id}`, {
      method: 'DELETE',
      ...fetchOptions,
    });
    await res.json();
  } catch (error) {
    console.log('CanNOT delete User', error);
  }
};

const getAllUsers = async () => {
  try {
    const result = await fetch('http://localhost:4000/allUsers', fetchOptions);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log({ error: 'getAll users error occured' });
  }
};

const editUser = async (id, updatedBody) => {
  const res = await fetch(`http://localhost:4000/editUser/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedBody),
    ...fetchOptions,
  });
  await res.json();
};

export { createUser, getAllUsers, deleteUser, editUser };
