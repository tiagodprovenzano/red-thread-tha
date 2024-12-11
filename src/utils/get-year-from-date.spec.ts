import { getYearFromDate } from "./get-year-from-date";
import { describe, it, expect } from "vitest";
describe("getYearFromDate", () => {
  it("should return the year when the date is in YYYY-MM-DD format", () => {
    expect(getYearFromDate("2023-10-05")).toBe("2023");
  });

  it("should return the input string when the date is not in YYYY-MM-DD format", () => {
    expect(getYearFromDate("05-10-2023")).toBe("05-10-2023");
    expect(getYearFromDate("2023/10/05")).toBe("2023/10/05");
    expect(getYearFromDate("20231005")).toBe("20231005");
    expect(getYearFromDate("")).toBe("");
    expect(getYearFromDate("2023-10-5")).toBe("2023-10-5");
    expect(getYearFromDate("23-10-05")).toBe("23-10-05");
  });

  it("should return the input string when the date contains invalid characters", () => {
    expect(getYearFromDate("2023-10-05abc")).toBe("2023-10-05abc");
    expect(getYearFromDate("abcd-ef-gh")).toBe("abcd-ef-gh");
  });
});
