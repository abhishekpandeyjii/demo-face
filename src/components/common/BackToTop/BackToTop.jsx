export default function BackToTop({ visible }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      id="back-to-top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}
