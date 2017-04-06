import { IMyDayLabels } from "./my-day-labels.interface";
import { IMyMonthLabels } from "./my-month-labels.interface";
import { IMyDate } from "./my-date.interface";
import { IMyDateRange } from "./my-date-range.interface";

export interface IMyOptions {
    dayLabels?: IMyDayLabels;
    monthLabels?: IMyMonthLabels;
    dateFormat?: string;
    showClearBtn?: boolean;
    showApplyBtn?: boolean;
    showSelectDateText?: boolean;
    selectBeginDateTxt?: string;
    selectEndDateTxt?: string;
    firstDayOfWeek?: string;
    sunHighlight?: boolean;
    markCurrentDay?: boolean;
    height?: string;
    width?: string;
    inline?: boolean;
    showClearDateRangeBtn?: boolean;
    selectionTxtFontSize?: string;
    alignSelectorRight?: boolean;
    indicateInvalidDateRange?: boolean;
    editableDateRangeField?: boolean;
    editableMonthAndYear?: boolean;
    disableHeaderButtons?: boolean;
    showWeekNumbers?: boolean;
    minYear?: number;
    maxYear?: number;
    disableUntil?: IMyDate;
    disableSince?: IMyDate;
    disableDates?: Array<IMyDate>;
    disableDateRanges?: Array<IMyDateRange>;
    componentDisabled?: boolean;
    showSelectorArrow?: boolean;
    openSelectorOnInputClick?: boolean;
}