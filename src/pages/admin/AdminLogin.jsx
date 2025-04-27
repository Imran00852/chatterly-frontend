import { useInputValidation } from "6pp";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { adminLogin, getAdminDetails } from "../../redux/thunks/admin";
import { useEffect } from "react";

const AdminLogin = () => {
  const { isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const secretKey = useInputValidation("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(adminLogin(secretKey.value));
  };

  useEffect(() => {
    dispatch(getAdminDetails())
  }, [dispatch]);
  if (isAdmin) return <Navigate to={"/admin/dashboard"} />;

  return (
    <Container
      component={"main"}
      maxWidth={"xs"}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 4,
          alignItems: "center",
        }}
      >
        <>
          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{ width: "100%", marginTop: "1rem" }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: "1rem" }}
              fullWidth
            >
              Login
            </Button>
          </form>
        </>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
