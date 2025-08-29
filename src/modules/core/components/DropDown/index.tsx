import { FC } from 'react';

interface DropDownProps {
  title: string;
  list: string[];
  onChange?: (value: string) => void;
  style?: string;
}

const DropDown: FC<DropDownProps> = ({ title, list, onChange, style }) => (
  <select
    className={style}
    defaultValue={title}
    onChange={(e) => onChange?.(e.target.value)}
  >
    {list.map((p) => (
      <option key={p} value={p}>
        {p}
      </option>
    ))}
  </select>
);

export default DropDown;
