import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Paper,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import {
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          // bottom: 20,
          // left: 20,
          bottom: { xs: "calc(20%)", sm: "calc(20%)", md: 20 },
          left: { xs: "calc(2%)", sm: 20 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper>
          <Box width={400} height={280} p={4} borderRadius={5}>
            <Typography variant="h6" color="gray" textAlign="center">
              Create Post
            </Typography>
            <UserBox>
              <Avatar src="" sx={{ width: 30, height: 30 }} />
              <Typography fontWeight={500} color="gray" variant="span" ml={2}>
                Kavindu Rangana
              </Typography>
            </UserBox>
            <TextField
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="Type here"
              variant="standard"
              sx={{ width: "100%" }}
            />
            <Stack direction="row" gap={1} mb={2}>
              <EmojiEmotions color="primary" />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <Button variant="contained">Post</Button>
          </Box>
        </Paper>
      </StyleModal>
    </>
  );
};

export default Add;
