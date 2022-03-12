import styles from "./Badge.module.scss";

const Badge = ({
  text,
  description,
  className = "",
}: {
  text: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={`${styles.badge} ${className}`}>
      <span className={styles.title}>{text}</span>
      <span className={styles.desc}>{description}</span>
    </div>
  );
};

export default Badge;
