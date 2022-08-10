import { test, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import TemperatureInsideControl from "../TemperatureInsideControl.vue";

test("TemperatureInsideControl component", async () => {
  const wrapper = mount(TemperatureInsideControl);

  it("renders properly", () => {
    expect(TemperatureInsideControl).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("increases temperature after triggering plus button", async () => {
    await wrapper.get(".increase").trigger("click");
    expect(wrapper.text()).toContain("24");
  });

  it("decreases temperature after triggering minus button", async () => {
    await wrapper.get(".decrease").trigger("click");
    expect(wrapper.text()).toContain("23");
  });
});
