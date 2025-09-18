import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FutureValueLumpsum from "../FutureValueLumpsum";

describe("Future Value Lumpsum", () => {
	it("should render all the input fields", () => {
		render(<FutureValueLumpsum />);
		expect(screen.getByTestId("presentvalue")).toBeInTheDocument();
		expect(screen.getByTestId("interest")).toBeInTheDocument();
		expect(screen.getByTestId("years")).toBeInTheDocument();
		expect(screen.getByTestId("futurevalue")).toBeInTheDocument();
	});
});
