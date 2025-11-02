import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Card
      sx={{
        minWidth: 280,
        boxShadow: 4,
        borderRadius: 3,
        padding: 1,
        textAlign: "left",
        transition: "0.3s",
        "&:hover": { boxShadow: 8, transform: "scale(1.02)" },
      }}
    >
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          {user.name}
        </Typography>
        <Typography><strong>Email:</strong> {user.email}</Typography>
        <Typography><strong>Phone:</strong> {user.phone}</Typography>
        <Typography><strong>Website:</strong> {user.website}</Typography>
        <Typography><strong>Company:</strong> {user.company.name}</Typography>
        <Typography><strong>Address:</strong> {user.address.street}, {user.address.city}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
