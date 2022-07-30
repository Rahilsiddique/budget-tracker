import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import {
  expenseCategories,
  incomeCategories,
  resetCategories
} from "./constants/categories";

const useTransaction = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const selectedCategory = transactions.filter((t) => t.type === title);
  const total = selectedCategory.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  selectedCategory.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategory = categories.filter((e) => e.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategory.map((c) => c.amount),
        backgroundColor: filteredCategory.map((c) => c.color)
      }
    ],
    labels: filteredCategory.map((c) => c.type)
    // responsive: true,
    // maintainAspectRatio: true
  };

  return { total, chartData };
};

export default useTransaction;
