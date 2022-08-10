import { test, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import TemperatureOutside from "../TemperatureOutside.vue";

test("TemperatureOutside", () => {
  const wrapper = mount(TemperatureOutside, {
    global: {
      stubs: ["FontAwesomeIcon"],
    },
  });

  it("renders properly", () => {
    expect(TemperatureOutside).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
