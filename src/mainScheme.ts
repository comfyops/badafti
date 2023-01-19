import { z } from "zod";

const StringAndValiate = z.object({
  check: z.string(),
  value: z.string(),
});

const String = z.string();

const StringOrValidate = z.union([StringAndValiate, String]);

type StringOrValidate = z.infer<typeof StringOrValidate>;

//StringOrValidate.parse({})
