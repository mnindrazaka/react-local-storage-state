import useLocalStorageState from "./index";
import { renderHook, act } from "@testing-library/react-hooks";

it("set local storage value and get it", () => {
  const { result } = renderHook(() =>
    useLocalStorageState("name", "m. nindra zaka")
  );
  expect(result.current[0]).toBe("m. nindra zaka");
  expect(localStorage.getItem("name")).toBe('"m. nindra zaka"');

  act(() => result.current[1]("danny dwi cahyono"));
  expect(result.current[0]).toBe("danny dwi cahyono");
  expect(localStorage.getItem("name")).toBe('"danny dwi cahyono"');
});

it("use local storage value if already exist", () => {
  localStorage.setItem("name", JSON.stringify("danny dwi cahyono"));
  const { result } = renderHook(() =>
    useLocalStorageState("name", "m. nindra zaka")
  );
  expect(result.current[0]).toBe("danny dwi cahyono");
});

it("remove local storage value if undefined is given", () => {
  const { result } = renderHook(() =>
    useLocalStorageState<string | undefined>("name", "m. nindra zaka")
  );
  act(() => result.current[1](undefined));
  expect(result.current[0]).toBe(undefined);
  expect(localStorage.getItem("name")).toBe(null);
});
