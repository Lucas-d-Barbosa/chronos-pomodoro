import styles from "./style.module.css";
type DefaultInputProp = {
  id: string;
  labeltext?: string;
} & React.ComponentProps<"input">;
export function DefaultInput({
  id,
  labeltext,
  type,
  ...rest
}: DefaultInputProp) {
  return (
    <>
      {labeltext && <label htmlFor={id}>{labeltext}</label>}
      <input
        type={type}
        id={id}
        {...rest}
        className={styles.input}
        placeholder="Digite algo..."
      />
    </>
  );
}
