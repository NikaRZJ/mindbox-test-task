import {
    Box,
    Card,
    CardContent,
    Checkbox,
    FormControlLabel,
    Typography,
} from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import { Task } from "../../utils/task.type";
import uuid from "react-uuid";

interface TaskListProps {
    list: Task[];
    setList: Dispatch<SetStateAction<Task[]>>;
}

const TaskList: FC<TaskListProps> = ({ list, setList }) => {
    const handleChange = (index: number) => {
        setList(
            list.map((item, ind) => {
                if (ind === index) {
                    item.complete = !item.complete;
                }
                return item;
            })
        );
    };

    return (
        <Box sx={{ mb: 4 }}>
            {list.length > 0 ? (
                list.map((item, index) => (
                    <Card
                        sx={{
                            mb: index < list.length - 1 ? 2 : 0,
                            cursor: "pointer",

                            backgroundColor: item.complete
                                ? "rgba(0,255,0, 0.2)"
                                : "inherit",
                        }}
                        key={uuid()}
                        onClick={(e) => handleChange(index)}>
                        <CardContent>
                            <FormControlLabel
                                control={<Checkbox checked={item.complete} />}
                                sx={{
                                    // color: item.complete ? "#dadada" : "inherit",
                                    textDecoration: item.complete
                                        ? "line-through"
                                        : "inherit",
                                }}
                                label={item.name}
                            />
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography textAlign="center">Task list empty...</Typography>
            )}
        </Box>
    );
};

export default TaskList;
