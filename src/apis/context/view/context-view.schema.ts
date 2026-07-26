export interface ContextViewResponse {
  success: boolean;
  message: string;
  data: {
    pc: number;
    registers: Record<string, number>;
    flags: {
      ZF: boolean;
      SF: boolean;
      OF: boolean;
    };
  };
}
