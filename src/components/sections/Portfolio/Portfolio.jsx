import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const gridRef = useScrollRevealChildren('.fade-in');

  const filteredProjects = activeFilter === 'all'
    ? siteData.portfolio
    : siteData.portfolio.filter((p) => p.category === activeFilter);

  return (
    <section className="portfolio-section section-padding section-bg" id="portfolio">
      <div className="container">
        <SectionTitle
          subtitle="Our Portfolio"
          title="Recent"
          titleHighlight="Projects"
          description="Explore our latest work showcasing innovative solutions across various industries."
        />

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {siteData.portfolioFilters.map((filter, index) => (
            <button
              key={index}
              className={`portfolio-filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-3" ref={gridRef}>
          {filteredProjects.map((project, index) => (
            <div className={`fade-in delay-${(index % 3) + 1}`} key={`${project.title}-${index}`}>
              <div className="portfolio-card">
                <Link to="/portfolio-details" className="portfolio-image" style={{ display: 'block' }}>
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{project.categoryLabel}</span>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
