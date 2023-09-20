import { render, screen } from "@testing-library/react";
import { createFilteredList } from "./utils/functions";
import { Task } from "./utils/task.type";

// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

// test("add task", () => {
//     render(<AddForm list/>);
// });
const arr: Task[] = [
    { name: "Тестовое задание", complete: false },
    { name: "Прекрасный код", complete: true },
    { name: "Покрытие тестами", complete: false },
];

test("createFilteredList", () => {
    expect(createFilteredList(arr, "active")).toBe([
        { name: "Тестовое задание", complete: false },
        { name: "Покрытие тестами", complete: false },
    ]);
});
