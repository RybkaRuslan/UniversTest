import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress, Stack } from "@mui/material";
import { StyledTableContainer } from "./table.styles";
import { InputForm } from "@/components/input-form/input-form";
import { columns } from "@/constants/columns";
import useUniversityData from "@/hooks/useUniversityData";

export const Table: React.FC = () => {
  const [country, setCountry] = useState<string>("");
  const [name, setName] = useState<string>("");
  
  const { data, isLoading, isError, progress } = useUniversityData(
    country,
    name
  );

  return (
    <StyledTableContainer>
      <InputForm
        country={country}
        name={name}
        setCountry={setCountry}
        setName={setName}
      />
      {isLoading && (
        <Stack spacing={2} direction="row">
          <CircularProgress
            variant="determinate"
            value={progress}
            sx={{ minWidth: 32 }}
          />
        </Stack>
      )}
      {isError && <p>Error loading data</p>}
      {!isLoading && Array.isArray(data) ? (
        <DataGrid
          rows={data.map((row) => ({ ...row, id: row.name }))}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 25 },
            },
          }}
          pageSizeOptions={[25, 50, 100]}
        />
      ) : null}
    </StyledTableContainer>
  );
};


