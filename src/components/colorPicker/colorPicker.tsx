import { HexColorPicker } from "react-colorful";
import ClickAwayListener from "react-click-away-listener";
import "../colorPicker/colorPicker.css";
type ColorPickerProps = {
  setIsOpen: (isOpen: boolean) => void;
  color: string;
  setColor: (color: string) => void;
};

export default function ColorPicker({
  setIsOpen,
  color,
  setColor,
}: ColorPickerProps) {
  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <div className="colorPicker">
        <HexColorPicker color={color} onChange={setColor} />
      </div>
    </ClickAwayListener>
  );
}
