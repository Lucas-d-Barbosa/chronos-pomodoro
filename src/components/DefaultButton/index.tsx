import styles from "./style.module.css";
type DefaulButtonProp = {
  icon: React.ReactNode;
  color?: "green" | "red" | "yellow";
} & React.ComponentProps<"button">;
export function DefaulButton({
  type,
  icon,
  color = "green",
  ...props
}: DefaulButtonProp) {
  return (
    <>
      <button
        type={type}
        {...props}
        className={`${styles.button} ${styles[color]}`}
      >
        {icon}
      </button>
    </>
  );
}
