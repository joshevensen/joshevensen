import PostSummary from "./PostSummary";

const PostsLatest: React.FC = () => {
  return (
    <div className="space-y-12">
      <PostSummary />
      <PostSummary />
      <PostSummary />
    </div>
  );
};

export default PostsLatest;
