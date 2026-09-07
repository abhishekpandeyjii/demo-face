import { siteData } from '../../../data/siteData';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { useScrollRevealChildren } from '../../../hooks/useScrollReveal';

export default function Team() {
  const gridRef = useScrollRevealChildren('.fade-in');

  return (
    <section className="team-section section-padding section-bg" id="team">
      <div className="container">
        <SectionTitle
          subtitle="Our Team"
          title="Meet Our"
          titleHighlight="Experts"
          description="Our talented team of professionals drives innovation and delivers exceptional results."
        />

        <div className="grid grid-3" ref={gridRef}>
          {siteData.team.map((member, index) => (
            <div className={`fade-in delay-${index + 1}`} key={index}>
              <div className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-social">
                    {member.social?.linkedin && (
                      <a href={member.social.linkedin} aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {member.social?.twitter && (
                      <a href={member.social.twitter} aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {member.social?.github && (
                      <a href={member.social.github} aria-label="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <span>{member.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
