export async function getEdgeProps(ctx) {
  const posts = [
    { id: 1, title: " 12" },
    { id: 2, title: " 34" },
    { id: 3, title: " 56" },
    { id: 4, title: " 78" },
    { id: 5, title: " 99" },
  ];
  console.log("Edge about page:", ctx);
  return {
    props: {
      posts,
      ctx,
    },
  };
}

export default function About({ posts, ctx }) {
  return (
    <div>
      {console.log("ctx", ctx.event)}
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
