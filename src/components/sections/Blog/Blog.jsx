import { Link } from 'react-router-dom';
import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function Blog() {
  const gridRef = useScrollRevealChildren('.fade-in');

  return (
    <section className="blog-section section-padding section-bg" id="blog">
      <div className="container">
        <SectionTitle
          subtitle="Latest Blog"
          title="News &"
          titleHighlight="Insights"
          description="Stay updated with the latest trends, insights, and best practices in technology."
        />

        <div className="grid grid-3" ref={gridRef}>
          {(siteData.blogPosts || []).map((post, index) => (
            <div className={`fade-in delay-${index + 1}`} key={index}>
              <div className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-date-badge">
                    <span className="day">{post.date.day}</span>
                    <span className="month">{post.date.month}</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>
                      <i className="fas fa-user"></i> {post.author}
                    </span>
                    <span>
                      <i className="fas fa-folder"></i> {post.category}
                    </span>
                  </div>
                  <h4>
                    <Link to={post.link} state={{ post }}>{post.title}</Link>
                  </h4>
                  <p>{post.excerpt}</p>
                  <Link to={post.link} state={{ post }} className="blog-read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
