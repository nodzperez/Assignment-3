export const rateMovie = async (movieId: number, rating: number) => {
  const apiKey = "7534fb119f71a907af71a90a49023e10";
  const guestSessionId = localStorage.getItem("guest_session_id");

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apiKey}&guest_session_id=${guestSessionId}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ value: rating }),
    }
  );

  const data = await response.json();
  console.log(data);
  return data;
};

export const rateTvShow = async (tvShowId: number, rating: number) => {
  const apiKey = "7534fb119f71a907af71a90a49023e10";
  const guestSessionId = localStorage.getItem("guest_session_id");

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowId}/rating?api_key=${apiKey}&guest_session_id=${guestSessionId}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ value: rating }),
    }
  );

  const data = await response.json();
  console.log(data);
  return data;
};
