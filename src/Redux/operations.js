import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fletchingInProgress,
//   fletchingSuccess,
//   fletchingError,
// } from './taskSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = createAsyncThunk(
  'task/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      console.log(response);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fletchingInProgress());
//     const response = await axios.get('/tasks');
//     dispatch(fletchingSuccess(response.data));
//     // console.log(response);
//   } catch (e) {
//     dispatch(fletchingError(e.message));
//   }
// };
