export const getMessages = async () => {
  const url = `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${process.env.REACT_APP_API_TOKEN}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return response.json();
};

export const sendMessage = async (message) => {
  const url = `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${process.env.REACT_APP_API_TOKEN}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      author: 'Eugen',
    }),
  });

  return response.json();
};
