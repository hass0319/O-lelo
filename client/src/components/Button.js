import classNames from "classnames";
import "./Button.scss";

// a function for the button to used in confirm, delete, save, cancel
export default function Button(props) {

  let buttonClass = classNames("button", {
    " button--talk": props.talk,
    " button--speech": props.speech
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
