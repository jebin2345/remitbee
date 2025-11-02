import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const handleSearch = () => {
    if (search.trim() === "") {
      setSelectedUser(null);
    } else {
      const filteredUser = users.find((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      setSelectedUser(filteredUser || null);
    }
  };


  const handleUserClick = (user) => {
    setSelectedUser(user);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  
  const handleReset = () => {
    setSelectedUser(null);
    setSearch("");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        User Data Directory
      </Typography>

      {/* 🔍 Search bar */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
        <TextField
          label="Search user by name"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: "60%" }}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
        {selectedUser && (
          <Button variant="outlined" color="secondary" onClick={handleReset}>
            Show All
          </Button>
        )}
      </Box>

      {/* 🧾 User display */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxHeight: "75vh",
          overflowY: "auto",
          paddingBottom: 2,
        }}
      >
        {selectedUser ? (
      
          <Card
            onClick={handleReset}
            sx={{
              backgroundColor: "#e3f2fd",
              cursor: "pointer",
              padding: 4,
              minHeight: "250px",
              transition: "0.3s",
              "&:hover": { backgroundColor: "#bbdefb" },
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {selectedUser.name}
              </Typography>
              <Typography>Email: {selectedUser.email}</Typography>
              <Typography>Phone: {selectedUser.phone}</Typography>
              <Typography>
                Address: {selectedUser.address.street},{" "}
                {selectedUser.address.city}
              </Typography>
              <Typography>Company: {selectedUser.company.name}</Typography>
              <Typography>Website: {selectedUser.website}</Typography>
            </CardContent>
          </Card>
        ) : (
          
          users.map((user) => (
            <Card
              key={user.id}
              onClick={() => handleUserClick(user)}
              sx={{
                width: "100%",
                backgroundColor: "#f1f8e9",
                cursor: "pointer",
                transition: "0.3s",
                padding: 3,
                minHeight: "180px",
                "&:hover": { backgroundColor: "#dcedc8" },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {user.name}
                </Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography>City: {user.address.city}</Typography>
                <Typography>Company: {user.company.name}</Typography>
              </CardContent>
            </Card>
          ))
        )}
      </Box>
    </Container>
  );
}

export default App;
