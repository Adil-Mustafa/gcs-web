import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PostAddSharp } from "@mui/icons-material";
const POST = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function ReactQueryIndex() {

  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => wait(1000).then(() => [...POST]),
    // queryFn: ()=> Promise.reject("Error Message")
  });

const newPostMutation = useMutation({
    mutationFn: title =>{
        return wait(1000).then(()=>
        POST.push({id: crypto.randomUUID(), title}))
    }
})

  if (postQuery.isLoading) return <div>Loading...</div>;
  if (postQuery.isError) return <div>{JSON.stringify(postQuery.error)}</div>;

  function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }
  return (
    <div>
      {postQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default ReactQueryIndex;
