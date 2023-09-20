import { FC, useEffect, useState, useCallback } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

import Header from "./components/Header";
import AddForm from "./components/AddForm";
import TaskList from "./components/TaskList/TaskList";
import { Task } from "./utils/task.type";
import Filter from "./components/Filter";
import { createFilteredList } from "./utils/functions";

const App: FC = () => {
    const [list, setList] = useState<Task[]>([
        { name: "Тестовое задание", complete: false },
        { name: "Прекрасный код", complete: true },
        { name: "Покрытие тестами", complete: false },
    ]);

    const [filteredList, setFilteredList] = useState<Task[]>([...list]);

    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

    useEffect(() => {
        setFilteredList(createFilteredList(list, filter));
    }, [filter, list]);

    return (
        <>
            <Header />
            <Container maxWidth="sm" sx={{ pt: 4 }}>
                <Box
                    display="flex"
                    alignItems="baseline"
                    justifyContent="space-between">
                    <Typography>
                        {list.filter((item) => !item.complete).length} items
                        left
                    </Typography>
                    <Filter filter={filter} setFilter={setFilter} />
                    <Button
                        variant="outlined"
                        size="small"
                        color="error"
                        onClick={(e) =>
                            setList(list.filter((item) => !item.complete))
                        }>
                        Clear completed
                    </Button>
                </Box>
                <AddForm list={list} setList={setList} />
                <TaskList list={filteredList} setList={setFilteredList} />
            </Container>
        </>
    );
};

export default App;
