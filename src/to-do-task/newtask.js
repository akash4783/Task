import React, { useState } from "react";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "../App.css";
import { Checkbox, FormControl, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/node/Button";
import { postTaskDetails } from "../redux/apiCall";
import PriavteRoute from "../privateRoute/privateroute";


const NewTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    taskname: "",
    description: "",
    startTime: "",
    endTime: "",
    Status: "",
  });
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(postTaskDetails(task));
    navigate("/viewTask");
  };
  // const handleChange=(e)=>{
  //       setTask({...task,Status:e.target.value})
  // }
  const handleFormChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  console.log(task);
  const { taskname, description, startTime, endTime, Status } = task;
  return (
    // <PriavteRoute>
    <div className="newTask">
      <InputLabel className="task"> Task Name </InputLabel>
      <Input
        type="text"
        onChange={handleFormChange}
        name="taskname"
        value={taskname}
      />
      <InputLabel className="task"> Description </InputLabel>
      <TextareaAutosize
        type="text"
        onChange={handleFormChange}
        name="description"
        value={description}
      />
      <InputLabel className="task"> start Time </InputLabel>
      <Input
        type="date"
        name="startTime"
        value={startTime}
        onChange={handleFormChange}
      />
      <InputLabel className="task"> End Time </InputLabel>
      <Input
        type="date"
        name="endTime"
        value={endTime}
        onChange={handleFormChange}
      />
      <InputLabel className="task">Status </InputLabel>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          className="task"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Status}
          label="Age"
          name="Status"
          onChange={handleFormChange}
        >
          <MenuItem value={"Scheduled"}>Scheduled</MenuItem>
          <MenuItem value={"Running"}>Running</MenuItem>
          <MenuItem value={"Expired"}>Expired</MenuItem>
        </Select>
      </FormControl>

      <div>
        <Button
          variant="contained"
          style={{ margin: "20px" }}
          onClick={handleClick}
        >
          Submit
        </Button>
      </div>
    </div>
    // </PriavteRoute> 
  );
};

export default NewTask;
