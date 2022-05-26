import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editTask, putEditTask } from "../redux/apiCall";
import { useParams } from "react-router-dom";
import moment from "moment";
import { CircularProgress } from "@mui/material";
import PriavteRoute from "../privateRoute/privateroute";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id)
  const [editData, setEditData] = useState({
    taskname: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    dispatch(editTask(id));
  }, [id]);

  const { edit, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (edit) {
      setEditData(edit);
    }
  }, []);

  const handleClick = () => {
    const finalData = {
      taskname: editData.taskname,
      description: editData.description,
      startTime: editData.startTime,
      endTime: editData.endTime,
    };
    console.log(finalData);
    dispatch(putEditTask(id, editData));
    navigate("/viewTask");
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    // <PriavteRoute>
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <input
            type="text"
            name="taskname"
            value={editData.taskname}
            onChange={handleChange}
          />
          <input
            type="text"
            value={editData.description}
            name="description"
            onChange={handleChange}
          />
          <input
            type="date"
            value={editData.startTime}
            name="startTime"
            onChange={handleChange}
          />
          <input
            type="date"
            value={editData.endTime}
            name="endTime"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Submit</button>
        </div>
      )}
    </div>
//  </PriavteRoute> 
  );
};

export default Edit;
