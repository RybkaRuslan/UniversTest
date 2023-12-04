import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "name", headerName: "Имя", width: 300 },
  { field: "country", headerName: "Страна", width: 130 },
  { field: "alpha_two_code", headerName: "Код страны", width: 130 },
  {
    field: "web_pages",
    headerName: "Web ссылки",
    sortable: false,
    width: 300,
    valueGetter: (params: GridValueGetterParams) =>
      (params.row.web_pages || []).join(", "),
  },
];