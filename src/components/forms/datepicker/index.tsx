import { memo } from 'react';
// eslint-disable-next-line prettier/prettier
import DatePicker, { Value } from 'react-multi-date-picker';
import pt_br_locale from './pt-br-locale';
import { Label, Root } from './styled';

type Props = {
  label?: string;
  date: string;
  setDate: (e: string) => void;
};

const calculateDate = (range: number, operation: '+' | '-'): string => {
  let date;
  if (operation === '-') {
    date = new Date().setFullYear(new Date().getFullYear() - range);
  } else {
    date = new Date().setFullYear(new Date().getFullYear() + range);
  }

  return new Date(date).toISOString().split('T')[0];
};

const elementID = 'form--datepicker';

const OgDatepicker = ({ label, date, setDate = () => null }: Props) => {
  function handleChange(value: Value) {
    setDate(value?.toString() || '');
  }

  return (
    <Root value={date.toString()} data-testid={elementID}>
      {label && <Label htmlFor={elementID}>{label}</Label>}
      <DatePicker
        value={date}
        id={elementID}
        onChange={handleChange}
        placeholder="00/00/0000"
        minDate={calculateDate(150, '-')}
        maxDate={calculateDate(0, '+')}
        locale={pt_br_locale}
        format="DD/MM/YYYY"
        inputMode="none"
        showOtherDays
      />
    </Root>
  );
};

export const Datepicker = memo(OgDatepicker);
