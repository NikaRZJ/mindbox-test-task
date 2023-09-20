import { Box, IconButton, TextField } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState, MouseEvent } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Task } from "../utils/task.type";

interface AddFormProps {
    list: Task[];
    setList: Dispatch<SetStateAction<Task[]>>;
}

const AddForm: FC<AddFormProps> = ({ list, setList }) => {
    const [task, setTask] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        if (task.length === 0) {
            setError(true);
        } else {
            setList([...list, { name: task, complete: false }]);
            setTask("");
            setError(false);
        }
    };
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
            }}
            noValidate
            autoComplete="off">
            <TextField
                variant="outlined"
                label="Task name"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                size={"small"}
                fullWidth
                error={error}
                sx={{ mr: 2 }}
            />

            <IconButton
                aria-label="add"
                color="success"
                type="submit"
                onClick={handleClick}>
                <AddIcon />
            </IconButton>
        </Box>
    );
};

export default AddForm;
