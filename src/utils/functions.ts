import { Task } from "./task.type";

export const createFilteredList = (list: Task[], filter: string) =>
    list.filter((item) => {
        switch (filter) {
            case "all":
                return item;
            case "active":
                if (!item.complete) return item;
                break;
            case "completed":
                if (item.complete) return item;
                break;
        }
    });
