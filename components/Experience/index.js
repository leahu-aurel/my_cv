import { jobs } from "./jobs";
import styles from "./styles.module.scss";

function Experience() {
  return (
    <div id="experience" className={styles.experience}>
      <p className={styles.title}>― WORK EXPERIENCE</p>
      <div className={styles.jobs}>
        {jobs.map(({ company, job, timeline, description }) => (
          <>
            <p className={styles.job}>{job}</p>
            <p className={styles.company}>
              {company} / {timeline}
            </p>
            <p className={styles.description}>{description}.</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default Experience;
