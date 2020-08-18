import App from "../App";

describe("App", () => {
  let component, Switch;
  beforeEach(() => {
    component = shallow(<App />);
    Switch = component.find("Switch");
  });

  test("App renders", () => {
    expect(component).toExist;
  });

  test("Check title content", () => {
    expect(component.find("h1").text()).toBe("Quizzo!");
  });

  test("Check initial data types of state values", () => {
    expect(typeof component.state("playerCount")).toBe("number");
    expect(typeof component.state("questionCount")).toBe("number");
    expect(Array.isArray(component.state("leaderboard"))).toBe(true);
    expect(Array.isArray(component.state("players"))).toBe(true);
    expect(Array.isArray(component.state("score"))).toBe(true);
  });

  test("Check initial state values", () => {
    expect(
      component.state("playerCount") + component.state("questionCount")
    ).toBe(0);

    expect(
      component.state("leaderboard") +
        component.state("players") +
        component.state("score")
    ).toBe("");
  });

  test("Switch component renders", () => {
    expect(Switch).toHaveLength(1);
  });

  test("Find Switch routes", () => {
    expect(Switch.find("Route")).toHaveLength(3);
  });

  test("Routes are correct", () => {
    expect(Switch.find("#path1").props().path).toBe("/");
    expect(Switch.find("#path2").props().path).toBe("/questions");
  });
});
