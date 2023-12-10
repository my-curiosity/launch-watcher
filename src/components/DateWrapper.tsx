import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import { useMediaQuery } from 'react-responsive';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangeType } from '@/types/DateRangeType';
import { DATE_RANGE } from '@/lib/Constants';

type DateWrapperProps = {
  dateRange: DateRangeType;
  onDateRangeChange: (newDateRange: DateRangeType) => void;
};

function DateWrapper({ dateRange, onDateRangeChange }: DateWrapperProps) {
  const sm = useMediaQuery({
    query: '(min-width: 640px)', // = tailwind sm modifier
  });
  const xl = useMediaQuery({
    query: '(min-width: 1280px)', // = tailwind xl modifier
  });

  const handleChange = (item: RangeKeyDict): void => {
    let start;
    let end;
    if (
      item.selection.startDate === undefined ||
      item.selection.endDate === undefined
    ) {
      start = DATE_RANGE.start;
      end = DATE_RANGE.end;
    } else {
      start = item.selection.startDate.toISOString();
      end = item.selection.endDate.toISOString();
    }
    onDateRangeChange({
      start,
      end,
    });
  };

  return (
    <DateRangePicker
      className="[&_:not(.rdrCalendarWrapper):not(.rdrDefinedRangesWrapper):not(.rdrStartEdge):not(.rdrEndEdge):not(.rdrInRange):not(.rdrDayStartPreview):not(.rdrDayInPreview):not(.rdrDayEndPreview)]:rounded 
      [&_.rdrDefinedRangesWrapper]:rounded-l [&_.rdrCalendarWrapper]:rounded-r max-sm:[&_.rdrCalendarWrapper]:rounded
      [&_.rdrDefinedRangesWrapper]:max-sm:hidden [&_*]:bg-gray-100 
      [&_.rdrStartEdge]:bg-gray-300 [&_.rdrEndEdge]:bg-gray-300 [&_.rdrInRange]:bg-gray-300 [&_span]:bg-transparent [&_*]:text-black
      [&_:not(i)]:border-black [&_*]:dark:bg-gray-900 [&_.rdrStartEdge]:dark:bg-gray-800
      [&_.rdrEndEdge]:dark:bg-gray-800 [&_.rdrInRange]:dark:bg-gray-800 [&_span]:dark:bg-transparent [&_*]:dark:text-white
      [&_:not(i)]:dark:border-cyan-900 rounded w-fit ring-1 ring-black dark:ring-cyan-900 ml-3 relative z-10"
      staticRanges={sm ? undefined : []}
      inputRanges={sm ? undefined : []}
      onChange={handleChange}
      moveRangeOnFirstSelection={false}
      months={xl ? 2 : 1}
      ranges={[
        {
          startDate: new Date(dateRange.start),
          endDate: new Date(dateRange.end),
          key: 'selection',
        },
      ]}
      direction="horizontal"
    />
  );
}

export default DateWrapper;
