
import React from 'react';
import { BlogHero, ReadingBlogList, RelatedBlogList, MarketingArticleList } from './BlogSections';

interface BlogProps {
  onBlogClick: () => void;
}

const Blog: React.FC<BlogProps> = ({ onBlogClick }) => {
  return (
    <div className="flex flex-col">
      <BlogHero onBlogClick={onBlogClick} />
      <ReadingBlogList />
      <RelatedBlogList onBlogClick={onBlogClick} />
      <MarketingArticleList onBlogClick={onBlogClick} />
    </div>
  );
};

export default Blog;
