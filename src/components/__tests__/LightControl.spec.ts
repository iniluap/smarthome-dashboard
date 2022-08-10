import { test, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import LightControl from "../LightControl.vue";

test("LightControl component", async () => {
  const wrapper = mount(LightControl);

  it("renders properly", () => {
    expect(LightControl).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("increases light intensity after triggering plus button", async () => {
    await wrapper.get(".increase").trigger("click");
    expect(wrapper.text()).toContain("81%");
  });

  it("decreases light intensity after triggering minus button", async () => {
    await wrapper.get(".decrease").trigger("click");
    expect(wrapper.text()).toContain("80%");
  });
});
