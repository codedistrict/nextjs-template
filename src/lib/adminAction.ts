import { Range } from 'react-date-range';

import { User } from '@/types/models';
import { Filters, Model, Scope } from '@/types/pages/admin';

export const flag = (index: number, scope: Scope): void => {
  const { tableData, setTableData } = scope;
  // flag / unflag
  tableData[index].flagged = !tableData[index].flagged;
  setTableData([...tableData]);
  // TODO: persist the change in backend
};
export const systemMessage = (index: number, scope: Scope): void => {
  // TODO: integrate with backend
};

export const filterBy = (filters: Filters, scope: Scope): void => {
  // TODO: get data from backend
  const {
    search,
    flaggedOnly,
    selectedOnly,
    accountStatus,
    accountType,
    supervisorsOnly,
    limitedAdminsOnly,
    selectedIndustries,
    selectedRegions,
    selectedDateRanges,
    actionType,
    documentType,
    invoiceType,
    invoiceStatus,
    issueStatus,
  } = filters;
  const { data, setTableData } = scope;

  const regex = new RegExp(`.*${search}.*`, 'i');
  // use the current filtered data
  if (selectedOnly) {
    return;
  }

  if (
    !search &&
    !flaggedOnly &&
    !accountStatus &&
    !accountType &&
    !supervisorsOnly &&
    !limitedAdminsOnly &&
    !selectedIndustries &&
    !selectedRegions &&
    !selectedDateRanges
  ) {
    setTableData(data);
    return;
  }

  // changed the type of data to avoid an unresolved TS issue https://github.com/microsoft/TypeScript/issues/36390
  let filteredData = data as Model[];
  filteredData = filteredData.filter((item: Model) => {
    let user: User;
    if (item.firstName) user = item as User;
    else user = item.user as User;

    let inSearch = true;
    let inFilter = true;
    let isInDateRange = true;
    let isInIndustries = true;
    let isInRegions = true;

    if (search) {
      inSearch = regex.test(user.firstName + ' ' + user.lastName);
    }
    if (flaggedOnly) {
      inFilter = !!item.flagged;
    } else if (accountStatus) {
      inFilter = user.status === accountStatus;
    } else if (accountType) {
      inFilter = user.type === accountType;
    } else if (supervisorsOnly) {
      inFilter = !!user.is_supervisor && user.status !== 'suspended';
    } else if (limitedAdminsOnly) {
      inFilter = !user.is_supervisor && user.status !== 'suspended';
    } else if (actionType) {
      inFilter = item.action === actionType;
    } else if (invoiceStatus) {
      inFilter = item.status === invoiceStatus;
    } else if (invoiceType) {
      inFilter = item.type === invoiceType;
    } else if (documentType) {
      inFilter = item.type === documentType;
    } else if (issueStatus) {
      inFilter = item.status === issueStatus;
    }

    if (selectedIndustries && selectedIndustries.length > 0) {
      // @ts-ignore
      isInIndustries = selectedIndustries.includes(user.industry.id);
    }

    if (selectedRegions && selectedRegions.length > 0) {
      isInRegions = selectedRegions.includes(`${user.stateRegion}|${user.country}`);
    }

    if (selectedDateRanges && selectedDateRanges.length > 0) {
      isInDateRange = !!selectedDateRanges.filter((range: Range) => {
        let startDate = new Date(range.startDate || '');
        let endDate = new Date(range.endDate || '');
        let userDate = new Date(user.created_at as string);
        return userDate >= startDate && userDate <= endDate;
      }).length;
    }

    return inSearch && inFilter && isInDateRange && isInIndustries && isInRegions;
  });

  setTableData([...filteredData]);
};

export const clear = (index: number, scope: Scope): void => {
  const { tableData, setTableData } = scope;
  // get user
  let tableUser: User;
  if (tableData[index].firstName) {
    tableUser = tableData[index] as User;
  } else {
    tableUser = tableData[index].user as User;
  }
  // set account status to active
  tableUser.status = 'active';
  setTableData([...tableData]);
  // TODO: persist the change in backend
};

export const suspend = (index: number, scope: Scope): void => {
  const { tableData, setTableData } = scope;
  // get user
  let tableUser: User;
  if (tableData[index].lastName) {
    tableUser = tableData[index] as User;
  } else {
    tableUser = tableData[index].user as User;
  }
  // suspend user account
  tableUser.status = 'suspended';
  setTableData([...tableData]);
  // TODO: persist the change in backend
};

export const cancel = (index: number, scope: Scope): void => {
  const { tableData, setTableData } = scope;
  // get user
  let tableUser: User;
  if (tableData[index].firstName) {
    tableUser = tableData[index] as User;
  } else {
    tableUser = tableData[index].user as User;
  }
  // cancel user account
  tableUser.status = 'cancelled';
  setTableData([...tableData]);
  // TODO: persist the change in backend
};

export const setDisputed = (index: number, scope: Scope): void => {
  const { tableData, setTableData } = scope;
  // get user
  let tableUser: User;
  if (tableData[index].firstName) {
    tableUser = tableData[index] as User;
  } else {
    tableUser = tableData[index].user as User;
  }
  // set user account disputed
  tableUser.status = 'disputed';
  setTableData([...tableData]);
  // TODO: persist the change in backend
};

export const setUnderReview = (index: number, scope: Scope): void => {
  const { tableData, setTableData } = scope;
  // get user
  let tableUser: User;
  if (tableData[index].firstName) {
    tableUser = tableData[index] as User;
  } else {
    tableUser = tableData[index].user as User;
  }
  // set user account under review
  tableUser.status = 'under_review';
  setTableData([...tableData]);
  // TODO: persist the change in backend
};

export const resetAccount = (index: number, scope: Scope): void => {
  const { tableData, setTableData } = scope;
  // get user
  let tableUser: User;
  if (tableData[index].firstName) {
    tableUser = tableData[index] as User;
  } else {
    tableUser = tableData[index].user as User;
  }
  tableUser.status = 'cancelled';
  tableUser.email = '';
  setTableData([...tableData]);
  // TODO cancel current user and allow a new user to claim
  console.log('reset', index);
};
