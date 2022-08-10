import { expect, test, it } from "vitest";
import { mount } from "@vue/test-utils";
import HumidityControl from "../HumidityControl.vue";

test("HumidityControl component", async () => {
  const wrapper = mount(HumidityControl);

  it("renders properly", () => {
    expect(HumidityControl).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("increases humidity after triggering plus button", async () => {
    await wrapper.get(".increase").trigger("click");
    expect(wrapper.text()).toContain("46%");
  });

  it("decreases humidity after triggering minus button", async () => {
    await wrapper.get(".decrease").trigger("click");
    expect(wrapper.text()).toContain("45%");
  });
});
