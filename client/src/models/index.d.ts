import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type JobsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Jobs {
  readonly id: string;
  readonly username?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly amount?: number | null;
  readonly status?: boolean | null;
  readonly created_at?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Jobs, JobsMetaData>);
  static copyOf(source: Jobs, mutator: (draft: MutableModel<Jobs, JobsMetaData>) => MutableModel<Jobs, JobsMetaData> | void): Jobs;
}