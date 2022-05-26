import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke } from "../redux/apiCall";
import "./joke.css";
import PriavteRoute from "../privateRoute/privateroute";

const Joke = () => {
  const dispatch = useDispatch();
  const { task, loading } = useSelector((state) => state.user);
  console.log(task);

  useEffect(() => {
    dispatch(fetchJoke());
  }, []);

  return (
      <PriavteRoute>
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <TableContainer component={Paper} className="Table">
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">Joke</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {task &&
                  task?.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{row.category}</TableCell>
                      <TableCell align="left">{row.joke}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
    </PriavteRoute>
  );
};

export default Joke;
