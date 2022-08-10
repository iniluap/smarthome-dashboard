import { test, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import WhoIsHome from "../WhoIsHome.vue";

test("WhoIsHome", () => {
  const wrapper = mount(WhoIsHome, {
    global: {
      stubs: ["FontAwesomeIcon"],
    },
  });

  it("renders properly", () => {
    expect(WhoIsHome).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
