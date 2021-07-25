type ConstraintsValue =
	| {
			ConstraintType: "Hinge";
			UpperAngle: number;
			LowerAngle: number;
			AxisAttachment: Attachment;
			JointAttachment: Attachment;
	  }
	| {
			ConstraintType: "BallSocketConstraint";
			UpperAngle: number;
			TwistLimitsEnabled: boolean;
			TwistUpperAngle: number;
			TwistLowerAngle: number;
			AxisAttachment: Attachment;
			JointAttachment: Attachment;
	  };

interface CCDIKControllerConstructor {
	new (
		Motor6DTable: Motor6D[],
		Constraints?: Map<Motor6D, ConstraintsValue>
	): CCDIKController;
}
interface CCDIKController {
	Constraints: Map<Motor6D, ConstraintsValue> | undefined;
	LerpMode: boolean;
	LerpAlpha: number;
	ConstantLerpSpeed: boolean;
	AngularSpeed: number;
	CCDIKIterateOnce(
		goalPosition: Vector3,
		tolerance?: number,
		step?: number
	): void;
	CCDIKIterateUntil(
		goalPosition: Vector3,
		tolerance?: number,
		maxBreakCount?: number,
		step?: number
	): void;
	GetConstraints(): void;
	GetConstraintsFromMotor(motor: Motor6D, constraintName: string): void;
	SetupFoot(
		attachmentNameTable: string[],
		raycastParams: RaycastParams
	): void;
	InitDragDebug(): void;
}

declare const CCDIK: CCDIKControllerConstructor;

export = CCDIK;
