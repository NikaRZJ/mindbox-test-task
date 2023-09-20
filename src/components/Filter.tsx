import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

interface FilterProps {
    filter: "all" | "active" | "completed";
    setFilter: Dispatch<SetStateAction<"all" | "active" | "completed">>;
}

const Filter: FC<FilterProps> = ({ filter, setFilter }) => {
    const handleFilter = (
        event: React.MouseEvent<HTMLElement>,
        newFilter: string
    ) => {
        setFilter(newFilter as "all" | "active" | "completed");
    };
    return (
        <ToggleButtonGroup
            size="small"
            exclusive
            onChange={handleFilter}
            sx={{ mb: 2 }}
            value={filter}>
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="active">Active</ToggleButton>
            <ToggleButton value="completed">Completed</ToggleButton>
        </ToggleButtonGroup>
    );
};

export default Filter;
