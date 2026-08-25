import { siteData } from '../../../data/siteData';
import { useCounter } from '../../../hooks/useCounter';

function CounterItem({ icon, end, suffix, label }) {
  const { count, ref } = useCounter(end);

  return (
    <div className="counter-item" ref={ref}>
      <div className="counter-icon">
        <i className={icon}></i>
      </div>
      <div className="counter-number">
        <span>{count.toLocaleString()}{suffix}</span>
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
}

export default function Counter() {
  return (
    <section className="counter-section section-padding" id="counter">
      <div className="container">
        <div className="grid grid-4">
          {siteData.counters.map((counter, index) => (
            <CounterItem
              key={index}
              icon={counter.icon}
              end={counter.number}
              suffix={counter.suffix}
              label={counter.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
