import styles from "./style.module.css";
type DefaultInputProp = {
  id: string;
  label: string;
} & React.ComponentProps<"input">;
export function DefaultInput({ id, label, type }: DefaultInputProp) {
  console.log(styles);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </>
  );
}
