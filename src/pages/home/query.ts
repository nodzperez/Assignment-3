export const fetchMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTM0ZmIxMTlmNzFhOTA3YWY3MWE5MGE0OTAyM2UxMCIsIm5iZiI6MTczNDU1MDc3OS4xMDMwMDAyLCJzdWIiOiI2NzYzMjRmYjA2OTdiNmM2YzFhYWViZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZftoHbhbdcyrb2H95_4D7fhnZBcUdqDyAmbnAflfD9Y",
      },
    }
  );

  return response.json();
};

export const fetchTvShows = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTM0ZmIxMTlmNzFhOTA3YWY3MWE5MGE0OTAyM2UxMCIsIm5iZiI6MTczNDU1MDc3OS4xMDMwMDAyLCJzdWIiOiI2NzYzMjRmYjA2OTdiNmM2YzFhYWViZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZftoHbhbdcyrb2H95_4D7fhnZBcUdqDyAmbnAflfD9Y",
      },
    }
  );
  return response.json();
};
