import { ReactComponent as Acerto } from "./../../assets/images/checkmark-circle-icon.svg";
import { ReactComponent as Erro } from "./../../assets/images/close-circle-icon.svg";
import { ReactComponent as Duvida } from "./../../assets/images/help-circle-icon.svg";

import setinha from "../../assets/images/setinha.png";

export default function Icon({ status }) {
  if (status === "not_answer") {
    return <ion-icon name="play-outline"></ion-icon>;
  }
  if (status === "setinha") {
    return <img src={setinha} alt="icon" className="icone" />;
  }
  if (status === "correct") {
    return <Acerto className="icone" fill="#2FBE34" />;
  }
  if (status === "almost") {
    return <Duvida className="icone" fill="#FF922E" />;
  }
  if (status === "error") {
    return <Erro className="icone" fill="#FF3030" />;
  }
}
