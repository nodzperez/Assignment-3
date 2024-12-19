import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Segment, Header } from "semantic-ui-react";

export const Movie = () => {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Invalid Movie ID</div>;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: fetchMovieDetails,
  });

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header></Header>
      </Segment>
    </div>
  );
};
