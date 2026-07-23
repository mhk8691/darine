'use client';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { InputAdornment, SxProps, TextField, useTheme } from '@mui/material';
import React from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import opacity from 'react-element-popper/animations/opacity';
import transition from 'react-element-popper/animations/transition';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import 'react-multi-date-picker/styles/backgrounds/bg-dark.css';
import 'react-multi-date-picker/styles/colors/yellow.css';

export type DatePickerValue = {
  date?: string;
  from?: string;
  to?: string;
} | null;

interface Props {
  style?: SxProps;
  isRange?: boolean;
  label?: string;
  value: DatePickerValue;
  onChange: (val: DatePickerValue) => void;
}

export default function CustomDatePicker({
  style,
  isRange = false,
  label,
  value,
  onChange
}: Props) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const getInternalValue = (): DateObject | DateObject[] | null => {
    if (!value) return null;

    if (isRange) {
      const dates: DateObject[] = [];
      if (value.from) {
        dates.push(
          new DateObject({
            date: value.from,
            calendar: gregorian,
            locale: gregorian_en
          }).convert(persian, persian_fa)
        );
      }
      if (value.to) {
        dates.push(
          new DateObject({
            date: value.to,
            calendar: gregorian,
            locale: gregorian_en
          }).convert(persian, persian_fa)
        );
      }
      return dates;
    } else {
      if (value.date) {
        return new DateObject({
          date: value.date,
          calendar: gregorian,
          locale: gregorian_en
        }).convert(persian, persian_fa);
      }
    }
    return null;
  };

  const handleDatePickerChange = (val: DateObject | DateObject[] | null) => {
    if (!val) {
      onChange(null);
      return;
    }

    if (isRange) {
      const dates = val as DateObject[];

      if (dates.length === 2 && dates[0] && dates[1]) {
        const from = new DateObject(dates[0])
          .convert(gregorian, gregorian_en)
          .format("YYYY-MM-DD");

        const to = new DateObject(dates[1])
          .convert(gregorian, gregorian_en)
          .format("YYYY-MM-DD");

        onChange({ from, to });
      } else if (dates.length === 1 && dates[0]) {
        const from = new DateObject(dates[0])
          .convert(gregorian, gregorian_en)
          .format("YYYY-MM-DD");

        onChange({ from, to: undefined });
      }
    } else {
      const singleDate = val as DateObject;

      const date = new DateObject(singleDate)
        .convert(gregorian, gregorian_en)
        .format("YYYY-MM-DD");

      onChange({ date });
    }
  };

  return (
    <DatePicker
      monthYearSeparator="|"
      className={`yellow ${isDarkMode ? 'bg-dark' : 'bg-light'}`}
      range={isRange}
      value={getInternalValue()}
      onChange={handleDatePickerChange}
      render={
        <CustomRangeInput
          style={style}
          isRange={isRange}
          label={label}
          onClear={() => onChange(null)}
        />
      }
      animations={[
        opacity(),
        transition({
          from: 40,
          transition: 'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)'
        }),
      ]}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      style={{ width: '100%', display: 'block' }}
      containerClassName="w-full"
    />
  );
}

type CustomRangeInputProps = {
  value?: DateObject | DateObject[] | string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onClear?: () => void;
  separator?: string;
  style?: SxProps;
  isRange?: boolean;
  label?: string;
};

function CustomRangeInput({
  onFocus,
  value,
  separator = ',',
  style,
  isRange,
  label,
  onClear
}: CustomRangeInputProps) {

  let displayValue = '';

  if (isRange) {
    let from = '';
    let to = '';

    if (Array.isArray(value)) {
      from = value[0]?.format?.() || '';
      to = value[1]?.format?.() || '';
    } else if (typeof value === 'string') {
      const values = value.split(separator);
      from = values[0] || '';
      to = values[1] || '';
    }

    displayValue = from && to
      ? `از ${from} تا ${to}`
      : from
        ? `از ${from}`
        : '';
  } else {
    if (value instanceof DateObject) {
      displayValue = value.format() || '';
    } else if (Array.isArray(value)) {
      displayValue = value[0]?.format?.() || '';
    } else if (typeof value === 'string') {
      displayValue = value.split(separator)[0] || '';
    }
  }

  const hasValue = Boolean(displayValue && displayValue.trim());

  return (
    <TextField
      label={label || 'انتخاب تاریخ'}
      value={displayValue}
      onFocus={onFocus} 
      fullWidth
      sx={{
        direction: 'ltr',
        '& .MuiInputBase-input': { py: 1.4, fontSize: '14px' },
        '& .MuiOutlinedInput-root': { opacity: 1, borderRadius: 2 },
        ...style,
      }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {hasValue && (
                <CloseIcon
                  fontSize="small"
                  style={{ cursor: 'pointer', marginLeft: 6 }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    onClear?.();
                  }}
                />
              )}
              <KeyboardArrowDownIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}