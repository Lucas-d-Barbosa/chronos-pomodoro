import { DefaultButton } from "../DefaultButton";
import type { ToastContentProps } from "react-toastify";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import styles from "./style.module.css";
export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>
        <div className={styles.buttonsContainer}>
          <DefaultButton
            icon={<ThumbsUpIcon />}
            onClick={() => closeToast(true)}
            aria-label="Confirmar ação e fechar"
            title="Confirmar ação e fechar"
          ></DefaultButton>
          <DefaultButton
            icon={<ThumbsDownIcon />}
            onClick={() => closeToast(false)}
            aria-label="Confirmar ação e fechar"
            color="red"
            title="Confirmar ação e fechar"
          ></DefaultButton>
        </div>
      </div>
    </>
  );
}
