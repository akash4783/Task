import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskDetail, fetchTaskDetail } from "../redux/apiCall";
import EditIcon from "@mui/icons-material/Edit";
import Input from "@mui/material/Input";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/node/Button";
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../App.css";
import { getTask } from "../redux/action";
import PriavteRoute from "../privateRoute/privateroute";

export const ToDoTable = () => {
  const [createTask, setCreateTask] = useState();
  const [searchText, setSeachText] = useState();
  const [filter, setFilter] = useState();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTaskDetail());
  }, []);

  useEffect(() => {
    setFilter(task);
  });

  const { task, loading } = useSelector((state) => state.user);
  //  setRows(selector)
  const handleDeleteClick = (id) => {
    dispatch(deleteTaskDetail(id));
    //  setOpen(true)
  };
  const handleEditClick = (id) => {
    navigate(`/edit-task/${id}`);
  };
  const handleClickMe = () => {
    navigate("/create-task");
  };
  const handleChange = (e) => {
    setSeachText(e.target.value);
    if (e.target.value === "") {
      setFilter(task);
    }
  };
  const handleSearch = () => {
    if (searchText !== "") {
      const result = filterData();
      setFilter(result);
    }
  };
  const handleClickJoke = () => {
    navigate("/jokeSpot");
  };

  const filterData = () => {
    let result =
      task &&
      task.filter((item) => {
        const name = item.taskname
          .toLowerCase()
          .includes(searchText.toLowerCase());
        return name;
      });
    return result;
  };
  console.log(task);
  return (
    // <PriavteRoute>
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Button variant="outlined" onClick={handleClickMe} color="primary">
            Add New Task
          </Button>
          <Button variant="outlined" onClick={handleClickJoke}>
            Joke Spot
          </Button>
          <div className="search">
            <TextField
              type="search"
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={handleChange}
              value={searchText}
            />
            <span className="searchButton">
              <Button variant="contained" onClick={handleSearch}>
                Search
              </Button>
            </span>
          </div>

          <div />
          <TableContainer component={Paper} className="Table">
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Task Name</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Start Time</TableCell>
                  <TableCell align="left">End Time</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filter &&
                  filter?.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{row.taskname}</TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="left">{row.startTime}</TableCell>
                      <TableCell align="left">{row.endTime}</TableCell>
                      <TableCell align="left">{row.Status}</TableCell>
                      <TableCell align="left">
                        <DeleteIcon onClick={() => handleDeleteClick(row.id)} />
                        <EditIcon onClick={() => handleEditClick(row.id)} />
                        <PreviewIcon />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
    // </PriavteRoute>
  );
};
