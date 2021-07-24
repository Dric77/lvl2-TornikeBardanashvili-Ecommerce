import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Loader from "../../Components/Loader";
import { useState, useEffect } from "react";
import API from "../../api.js";
import { Button, Typography } from "@material-ui/core";
import Modal from "../../Components/Moadl";
import AddUserForm from "./AddUserForm.js";
import SeccessfulMessage from "../../Components/SeccessfulMessage.js";
import { serialize } from "../../serializers/serialize.js";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  userRow: {
    animation: `$deleteEffect 3000ms ${theme.transitions.easing.easeInOut}`
  },

  "@keyframes deleteEffect": {
    "0%": {
      opacity: 1
    },
    "100%": {
      opacity: 0
    }
  }
}));

export default function Users() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState();

  useEffect(() => {
    API.getAllData("users", "GET")
      .then((users) => {
        setUsers(users.data);
      })
      .finally(() => setLoading(false));
  }, []);

  let addUser = () => {
    setOpenModal(true);
  };

  let deleteUser = (id) => {
    let newUsers = users.filter((user) => user.id != id);
    API.getAllData(`users/${id}`, setDeleteStatus, "DELETE").then((data) =>
      console.log("deleted user", data)
    );
    setUsers(newUsers);
  };

  return (
    <>
      <Modal
        MoadlHeader="add New User"
        ModalFooter="footer"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <AddUserForm
          users={users}
          setUsers={setUsers}
          setOpenModal={setOpenModal}
        />
      </Modal>

      <Loader loading={loading}>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>full name</TableCell>
                <TableCell align="right">User Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Phone Number</TableCell>
                <TableCell align="right">ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.name.firstname + " " + user.name.lastname}
                    </TableCell>
                    <TableCell align="right">{user.username}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">
                      {user.address.city + " " + user.address.street}
                    </TableCell>
                    <TableCell align="right">{user.phone}</TableCell>
                    <TableCell align="right">{user.id}</TableCell>
                    <TableCell
                      align="right"
                      onClick={() => deleteUser(user.id)}
                    >
                      <Button> Delte User</Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Loader>
      <Button variant="contained" color="primary" onClick={addUser}>
        Add New User
      </Button>
      <SeccessfulMessage
        deleteStatus={deleteStatus}
        setDeleteStatus={setDeleteStatus}
      />
    </>
  );
}
