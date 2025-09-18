import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import FutureValueLumpsum from "../FutureValueLumpsum";

describe("Future Value Lumpsum", () => {
	const wrapper = () => {
		render(<FutureValueLumpsum />);
		const presentValue = screen.getByTestId("presentvalue");
		const interest = screen.getByTestId("interest");
		const years = screen.getByTestId("years");
		const futureValue = screen.getByTestId("futurevalue");
		return { presentValue, interest, years, futureValue };
	};
	it("should render all the input fields", () => {
		const { presentValue, interest, years, futureValue } = wrapper();

		expect(presentValue).toBeInTheDocument();
		expect(interest).toBeInTheDocument();
		expect(years).toBeInTheDocument();
		expect(futureValue).toBeInTheDocument();
	});
	it("should display the fields without any content by default", () => {
		const { presentValue, interest, years } = wrapper();

		expect(presentValue).toHaveTextContent("");
		expect(interest).toHaveTextContent("");
		expect(years).toHaveTextContent("");
	});
	it("should display the future value as 0.00", () => {
		const { futureValue } = wrapper();

		expect(futureValue).toHaveTextContent("0.00");
	});
	it("should calculate the future value correctly when all fields are populated", async () => {
		const { presentValue, interest, years, futureValue } = wrapper();

		const user = userEvent;
		await user.type(presentValue, "100");
		await user.type(interest, "10");
		await user.type(years, "1");

		expect(futureValue).toHaveTextContent("110");
	});
	it("should display the future value as 0.00 when a field or more are not populated", async () => {
		const { presentValue, interest, years, futureValue } = wrapper();

		const user = userEvent.setup();
		await user.type(presentValue, "111");
		await user.type(interest, "10");
		await user.type(years, "1");

		expect(futureValue).toHaveTextContent("122.10");

		await user.clear(presentValue);
		expect(futureValue).toHaveTextContent("0.00");
	});
});
