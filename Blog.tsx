
import React from 'react';
import { BlogHero, ReadingBlogList, RelatedBlogList, MarketingArticleList } from './BlogSections';

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col">
      <BlogHero />
      <ReadingBlogList />
      <RelatedBlogList />
      <MarketingArticleList />
    </div>
  );
};

export default Blog;
