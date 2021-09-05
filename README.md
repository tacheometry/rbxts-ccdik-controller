<h1 align="center">CCDIK Controller</h1>
<div align="center">
Cyclic Coordinate Descent Inverse Kinematics Controller
</div>

-   **[DevForum post](https://devforum.roblox.com/t/ccdikcontroller-alternate-inverse-kinematics-method-for-motor6d-rigs/968275)**
-   **[Documentation](https://datlass.github.io/Rbx-CCDIK/)**
-   **[This package's repository](https://github.com/tacheometry/rbxts-ccdik-controller)**

<h2>Installation</h2>

[![NPM](https://nodei.co/npm/@rbxts/ccdik-controller.png)](https://npmjs.org/package/@rbxts/ccdik-controller)

Run `npm i @rbxts/ccdik-controller` in your project directory.

<h2>Usage</h2>

```ts
import CCDIKController, { ConstraintsValue } from "@rbxts/ccdik-controller";

// optional constraints parameter
const constraints = new Map<Motor6D, ConstraintsValue>();
constraints.set(new Instance("Motor6D"), {
	ConstraintType: "Hinge",
	LowerAngle: 5,
	UpperAngle: 10,
	AxisAttachment: "foo",
	JointAttachment: "baz",
});
const ikController = new CCDIKController([motor1, motor2, motor3], constraints);

ikController.CCDIKIterateUntil(new Vector3(5, 5, 5));
```

---

If you would like to contribute to CCDIK Controller, please file Pull Requests and Issues in [its GitHub repository](https://github.com/datlass/Rbx-CCDIK), and not in the repository of this package.
