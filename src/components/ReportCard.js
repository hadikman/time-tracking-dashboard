export default function ReportCard(props) {
  const {menuIcon, title, timeframes: timeFrames, filter} = props;
  const {current, previous} = timeFrames[filter];
  const nameTitle = String(title).toLowerCase().replace(' ', '-');
  return (
    <section className={`card ${nameTitle}`}>
      <img
        src={require(`../assets/icon-${nameTitle}.svg`)}
        alt={title}
        className="cardIcon"
      />
      <div className="frontCard">
        <div className="header">
          <h4 className="title">{title}</h4>
          <img src={menuIcon} alt="icon" />
        </div>
        <div className="content">
          <h4>{current}hrs</h4>
          <span>Last Week - {previous}hrs</span>
        </div>
      </div>
    </section>
  );
}
