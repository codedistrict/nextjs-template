'use client';
// Import necessary types for AgGridReact
// Import necessary styles
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';

// Define the column definitions type
type ColumnDefs = ColDef[];

const AgGrid: React.FC = () => {
  // Define column definitions
  const columnDefs: ColumnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Age', field: 'age', sortable: true, filter: true },
    { headerName: 'Country', field: 'country', sortable: true, filter: true },
    { headerName: 'Salary', field: 'salary', sortable: true, filter: true },
    {
      headerName: 'Department',
      field: 'department',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Experience',
      field: 'experience',
      sortable: true,
      filter: true,
    },
    { headerName: 'Position', field: 'position', sortable: true, filter: true },
    {
      headerName: 'Education',
      field: 'education',
      sortable: true,
      filter: true,
    },
    { headerName: 'Skills', field: 'skills', sortable: true, filter: true },
    {
      headerName: 'Start Date',
      field: 'startDate',
      sortable: true,
      filter: true,
    },
    { headerName: 'End Date', field: 'endDate', sortable: true, filter: true },
    { headerName: 'Location', field: 'location', sortable: true, filter: true },
    { headerName: 'Manager', field: 'manager', sortable: true, filter: true },
    { headerName: 'Status', field: 'status', sortable: true, filter: true },
  ];

  const rowData = [];
  for (let i = 1; i <= 100; i++) {
    rowData.push({
      id: i,
      name: `Person ${i}`,
      age: Math.floor(Math.random() * 50) + 20,
      country: ['USA', 'Canada', 'UK'][Math.floor(Math.random() * 3)],
      salary: Math.floor(Math.random() * 100000) + 50000,
      department: ['IT', 'HR', 'Finance'][Math.floor(Math.random() * 3)],
      experience: `${Math.floor(Math.random() * 20)} years`,
      position: ['Developer', 'Manager', 'Analyst'][Math.floor(Math.random() * 3)],
      education: ['Bachelor', 'Master', 'Ph.D.'][Math.floor(Math.random() * 3)],
      skills: ['JavaScript', 'Python', 'Java'][Math.floor(Math.random() * 3)],
      startDate: getRandomDate(new Date(2010, 0, 1), new Date(2023, 0, 1)),
      endDate: getRandomDate(new Date(2023, 0, 1), new Date()),
      location: ['New York', 'London', 'Tokyo'][Math.floor(Math.random() * 3)],
      manager: `Manager ${Math.floor(Math.random() * 10) + 1}`,
      status: ['Active', 'Inactive'][Math.floor(Math.random() * 2)],
    });
  }

  function getRandomDate(startDate: Date, endDate: Date) {
    const startMillis = startDate.getTime();
    const endMillis = endDate.getTime();
    const randomMillis = startMillis + Math.random() * (endMillis - startMillis);
    return new Date(randomMillis);
  }

  return (
    <div className="ag-theme-alpine" style={{ height: '600px' }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default AgGrid;
