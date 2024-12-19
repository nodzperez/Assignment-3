export const fetchRatedMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=7534fb119f71a907af71a90a49023e10`,
    {}
  );

  return response.json();
};

export const fetchRatedTvShows = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=7534fb119f71a907af71a90a49023e10`,
    {}
  );

  return response.json();
};
