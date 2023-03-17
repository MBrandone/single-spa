import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <JokesList />
    </QueryClientProvider>
  );
}

const JokesList = () => {
  const { isLoading, error, data } = useQuery("repoData", async () => {
    const { data } = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10"
    );
    return data;
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred:</div>;

  return (
    <div>
      {data.jokes &&
        data.jokes.map((joke, index) => (
          <div key={index}>
            {joke.setup} {joke.delivery}
          </div>
        ))}
    </div>
  );
};
