import React from "react";
import Counter from "./style";

export default function CounterBlock({ ...rest }) {
  return (
    <Counter {...rest}>
      <Counter.Single>
        <Counter.Title as="h3">
          <span className="counter">24 </span>
        </Counter.Title>
        <Counter.Text>
          Hours of
          <br /> service
        </Counter.Text>
      </Counter.Single>
      <Counter.Single>
        <Counter.Title as="h3">
          <span className="counter">99.9</span>%
        </Counter.Title>
        <Counter.Text>
          Customer <br /> satisfaction
        </Counter.Text>
      </Counter.Single>
      <Counter.Single>
        <Counter.Title as="h3">
          <span className="counter">500</span>+
        </Counter.Title>
        <Counter.Text>
          Operated <br /> all over the goal
        </Counter.Text>
      </Counter.Single>
    </Counter>
  );
}
