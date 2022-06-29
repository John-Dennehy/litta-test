import "./App.css";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  CircularProgress,
} from "@mui/material";
import { useData } from "././api/useData";

function App() {
  const countries = useData();

  console.log(countries);

  return (
    <div className="App">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>Capital</TableCell>
            <TableCell>Phone Code</TableCell>
            <TableCell>Currency Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.isSuccess &&
            countries.data.map((country) => (
              <TableRow key={country.id}>
                <TableCell>{country.name}</TableCell>
                <TableCell>{country.capital}</TableCell>
                <TableCell>{country.phone}</TableCell>
                <TableCell>{country.currency}</TableCell>
              </TableRow>
            ))}

          {countries.isLoading && (
            <TableRow>
              <TableCell colSpan={4}>
                <CircularProgress />
              </TableCell>
            </TableRow>
          )}

          {countries.isError && (
            <TableRow>
              <TableCell colSpan={4}>
                <p>Error:</p>
                {countries.error.message}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
