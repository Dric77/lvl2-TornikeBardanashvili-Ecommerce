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

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function Users() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState();

  useEffect(() => {
    API.getAllUsers("/users", setUsers).finally(() => setLoading(false));
  }, []);

  let addUser = () => {
    setOpenModal(true);
  };

  let deleteUser = (id) => {
    let newUsers = users.filter((user) => user.id != id);
    setUsers(newUsers);
    API.deletUser(`/users/${id}`, setDeleteStatus, "DELETE");
    if (deleteStatus === 200) {
      setOpenModal(true);
    }
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
                      Delte User
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
    </>
  );
}
