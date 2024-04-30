import React, { useEffect, useRef } from "react";
import style from "./Notification.module.scss";
import x_cross from "../../assets/2044283_cross_cancel_x_icon.svg";
import close from "../../assets/619539_close_delete_dismiss_exit_cancel_icon.png";

interface NotificationProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Notification: React.FC<NotificationProps> = ({ children, visible, setVisible }) => {
  const notificationRef = useRef<HTMLDivElement>(null);

  const rootClasses = [style.myModal];
  if (visible) {
    rootClasses.push(style.active);
  }

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        if (notificationRef.current) {
          notificationRef.current.classList.add(style.hide);
          setTimeout(() => {
            setVisible(false);
          }, 300);
        }
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      if (notificationRef.current) {
        notificationRef.current.classList.remove(style.hide);
      }
    }
  }, [visible, setVisible]);

  return (
    <div ref={notificationRef} className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <img className={style.cancel} src={x_cross} alt="cancel" />
      <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.myModal__head}>
          <img src={close} />
          <span>Ошибка</span>
        </div>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Notification;