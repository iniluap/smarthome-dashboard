import { test, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import CurrentTime from "../CurrentTime.vue";

test("CurrentTime component", () => {
  const wrapper = mount(CurrentTime, {
    global: {
      stubs: ["FontAwesomeIcon"],
    },
  });

  it("renders properly", () => {
    expect(CurrentTime).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
