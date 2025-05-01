"use client";

import { useState } from "react";
import { useAdvocates } from "./hooks/useAdvocates";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [submittedSearch, setSubmittedSearch] = useState<string | null>(null);

  const { advocates, advocatesAreLoading, advocatesError } =
    useAdvocates(submittedSearch);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    setSubmittedSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSubmittedSearch(null);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  const TABLE_HEADERS = [
    "First Name",
    "Last Name",
    "City",
    "Degree",
    "Specialties",
    "Years of Experience",
    "Phone Number",
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Solace Advocates
      </Typography>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}
      >
        <TextField
          label="Search for an advocate"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={onChange}
          sx={{ flexGrow: 1, minWidth: 240 }}
        />
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </Box>
      {advocatesAreLoading && (
        <Box textAlign="center" my={4}>
          <CircularProgress />
        </Box>
      )}
      {!advocatesAreLoading && (
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="solace advocates">
              <TableHead>
                <TableRow>
                  {TABLE_HEADERS.map((header) => (
                    <TableCell
                      key={header}
                      sx={{ fontWeight: "bold", backgroundColor: "grey.100" }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {advocates.map((advocate) => {
                  return (
                    <TableRow key={advocate.id} hover>
                      <TableCell>{advocate.firstName}</TableCell>
                      <TableCell>{advocate.lastName}</TableCell>
                      <TableCell>{advocate.city}</TableCell>
                      <TableCell>{advocate.degree}</TableCell>
                      <TableCell>
                        <Stack direction="row" flexWrap="wrap" gap={1}>
                          {advocate.specialties.map((specialty) => (
                            <Chip
                              key={specialty}
                              label={specialty}
                              size="small"
                            />
                          ))}
                        </Stack>
                      </TableCell>
                      <TableCell>{advocate.yearsOfExperience}</TableCell>
                      <TableCell>{advocate.phoneNumber}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Container>
  );
}
