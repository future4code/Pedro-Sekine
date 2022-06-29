import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const QuantitySelector = (props) => {

    return (
        <div>
            {/* <Button onClick={handleClickOpen}>Open select dialog</Button> */}
            <Dialog disableEscapeKeyDown open={props.open} onClose={props.handleClose}>
                <DialogTitle>Escolha a Quantidade</DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{ display: "flex", flexDirection: "column" }}
                    >
                        <FormControl sx={{minWidth: "10rem", margin:"2rem 0" }}>
                            <InputLabel id="demo-dialog-select-label">
                                Quantidade
                            </InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={props.quantity}
                                onChange={props.handleChange}
                                input={<OutlinedInput label="Quantidade" />}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
