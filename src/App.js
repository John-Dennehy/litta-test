import './App.css';
import {Table, TableBody, TableHead, TableRow, TableCell} from '@mui/material'

function App() {
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
          <TableRow>
            <TableCell>United States</TableCell>
            <TableCell>Washington D.C.</TableCell>
            <TableCell>+1</TableCell>
            <TableCell>USD</TableCell>
          </TableRow>
          
      </TableBody>
      </Table>

    </div>
  );
}

export default App;
