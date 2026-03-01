import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Job
 *
 */
export type JobModel = runtime.Types.Result.DefaultSelection<Prisma.$JobPayload>;
export type AggregateJob = {
    _count: JobCountAggregateOutputType | null;
    _avg: JobAvgAggregateOutputType | null;
    _sum: JobSumAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
};
export type JobAvgAggregateOutputType = {
    vacancy: number | null;
};
export type JobSumAggregateOutputType = {
    vacancy: number | null;
};
export type JobMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    categoryId: string | null;
    title: string | null;
    companyName: string | null;
    companyLogo: string | null;
    companyDetails: string | null;
    location: string | null;
    district: string | null;
    vacancy: number | null;
    age: string | null;
    salary: string | null;
    experience: string | null;
    education: string | null;
    description: string | null;
    jobType: $Enums.JobTypes | null;
    employmentType: $Enums.EmploymentType | null;
    deadline: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type JobMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    categoryId: string | null;
    title: string | null;
    companyName: string | null;
    companyLogo: string | null;
    companyDetails: string | null;
    location: string | null;
    district: string | null;
    vacancy: number | null;
    age: string | null;
    salary: string | null;
    experience: string | null;
    education: string | null;
    description: string | null;
    jobType: $Enums.JobTypes | null;
    employmentType: $Enums.EmploymentType | null;
    deadline: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type JobCountAggregateOutputType = {
    id: number;
    userId: number;
    categoryId: number;
    title: number;
    companyName: number;
    companyLogo: number;
    companyDetails: number;
    location: number;
    district: number;
    vacancy: number;
    age: number;
    salary: number;
    experience: number;
    education: number;
    additionalReqirements: number;
    responsibilities: number;
    requiredSkills: number;
    description: number;
    benefits: number;
    jobType: number;
    employmentType: number;
    tags: number;
    deadline: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type JobAvgAggregateInputType = {
    vacancy?: true;
};
export type JobSumAggregateInputType = {
    vacancy?: true;
};
export type JobMinAggregateInputType = {
    id?: true;
    userId?: true;
    categoryId?: true;
    title?: true;
    companyName?: true;
    companyLogo?: true;
    companyDetails?: true;
    location?: true;
    district?: true;
    vacancy?: true;
    age?: true;
    salary?: true;
    experience?: true;
    education?: true;
    description?: true;
    jobType?: true;
    employmentType?: true;
    deadline?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type JobMaxAggregateInputType = {
    id?: true;
    userId?: true;
    categoryId?: true;
    title?: true;
    companyName?: true;
    companyLogo?: true;
    companyDetails?: true;
    location?: true;
    district?: true;
    vacancy?: true;
    age?: true;
    salary?: true;
    experience?: true;
    education?: true;
    description?: true;
    jobType?: true;
    employmentType?: true;
    deadline?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type JobCountAggregateInputType = {
    id?: true;
    userId?: true;
    categoryId?: true;
    title?: true;
    companyName?: true;
    companyLogo?: true;
    companyDetails?: true;
    location?: true;
    district?: true;
    vacancy?: true;
    age?: true;
    salary?: true;
    experience?: true;
    education?: true;
    additionalReqirements?: true;
    responsibilities?: true;
    requiredSkills?: true;
    description?: true;
    benefits?: true;
    jobType?: true;
    employmentType?: true;
    tags?: true;
    deadline?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type JobAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: Prisma.JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: Prisma.JobOrderByWithRelationInput | Prisma.JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType;
};
export type GetJobAggregateType<T extends JobAggregateArgs> = {
    [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJob[P]> : Prisma.GetScalarType<T[P], AggregateJob[P]>;
};
export type JobGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobWhereInput;
    orderBy?: Prisma.JobOrderByWithAggregationInput | Prisma.JobOrderByWithAggregationInput[];
    by: Prisma.JobScalarFieldEnum[] | Prisma.JobScalarFieldEnum;
    having?: Prisma.JobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobCountAggregateInputType | true;
    _avg?: JobAvgAggregateInputType;
    _sum?: JobSumAggregateInputType;
    _min?: JobMinAggregateInputType;
    _max?: JobMaxAggregateInputType;
};
export type JobGroupByOutputType = {
    id: string;
    userId: string;
    categoryId: string;
    title: string;
    companyName: string | null;
    companyLogo: string | null;
    companyDetails: string | null;
    location: string | null;
    district: string | null;
    vacancy: number | null;
    age: string | null;
    salary: string | null;
    experience: string | null;
    education: string | null;
    additionalReqirements: string[];
    responsibilities: string[];
    requiredSkills: string[];
    description: string | null;
    benefits: string[];
    jobType: $Enums.JobTypes;
    employmentType: $Enums.EmploymentType;
    tags: string[];
    deadline: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: JobCountAggregateOutputType | null;
    _avg: JobAvgAggregateOutputType | null;
    _sum: JobSumAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
};
type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JobGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JobGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JobGroupByOutputType[P]>;
}>>;
export type JobWhereInput = {
    AND?: Prisma.JobWhereInput | Prisma.JobWhereInput[];
    OR?: Prisma.JobWhereInput[];
    NOT?: Prisma.JobWhereInput | Prisma.JobWhereInput[];
    id?: Prisma.StringFilter<"Job"> | string;
    userId?: Prisma.StringFilter<"Job"> | string;
    categoryId?: Prisma.StringFilter<"Job"> | string;
    title?: Prisma.StringFilter<"Job"> | string;
    companyName?: Prisma.StringNullableFilter<"Job"> | string | null;
    companyLogo?: Prisma.StringNullableFilter<"Job"> | string | null;
    companyDetails?: Prisma.StringNullableFilter<"Job"> | string | null;
    location?: Prisma.StringNullableFilter<"Job"> | string | null;
    district?: Prisma.StringNullableFilter<"Job"> | string | null;
    vacancy?: Prisma.IntNullableFilter<"Job"> | number | null;
    age?: Prisma.StringNullableFilter<"Job"> | string | null;
    salary?: Prisma.StringNullableFilter<"Job"> | string | null;
    experience?: Prisma.StringNullableFilter<"Job"> | string | null;
    education?: Prisma.StringNullableFilter<"Job"> | string | null;
    additionalReqirements?: Prisma.StringNullableListFilter<"Job">;
    responsibilities?: Prisma.StringNullableListFilter<"Job">;
    requiredSkills?: Prisma.StringNullableListFilter<"Job">;
    description?: Prisma.StringNullableFilter<"Job"> | string | null;
    benefits?: Prisma.StringNullableListFilter<"Job">;
    jobType?: Prisma.EnumJobTypesFilter<"Job"> | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFilter<"Job"> | $Enums.EmploymentType;
    tags?: Prisma.StringNullableListFilter<"Job">;
    deadline?: Prisma.DateTimeNullableFilter<"Job"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Job"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Job"> | Date | string;
    applications?: Prisma.ApplicationListRelationFilter;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type JobOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    companyName?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyLogo?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    district?: Prisma.SortOrderInput | Prisma.SortOrder;
    vacancy?: Prisma.SortOrderInput | Prisma.SortOrder;
    age?: Prisma.SortOrderInput | Prisma.SortOrder;
    salary?: Prisma.SortOrderInput | Prisma.SortOrder;
    experience?: Prisma.SortOrderInput | Prisma.SortOrder;
    education?: Prisma.SortOrderInput | Prisma.SortOrder;
    additionalReqirements?: Prisma.SortOrder;
    responsibilities?: Prisma.SortOrder;
    requiredSkills?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    benefits?: Prisma.SortOrder;
    jobType?: Prisma.SortOrder;
    employmentType?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    deadline?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    applications?: Prisma.ApplicationOrderByRelationAggregateInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.JobWhereInput | Prisma.JobWhereInput[];
    OR?: Prisma.JobWhereInput[];
    NOT?: Prisma.JobWhereInput | Prisma.JobWhereInput[];
    userId?: Prisma.StringFilter<"Job"> | string;
    categoryId?: Prisma.StringFilter<"Job"> | string;
    title?: Prisma.StringFilter<"Job"> | string;
    companyName?: Prisma.StringNullableFilter<"Job"> | string | null;
    companyLogo?: Prisma.StringNullableFilter<"Job"> | string | null;
    companyDetails?: Prisma.StringNullableFilter<"Job"> | string | null;
    location?: Prisma.StringNullableFilter<"Job"> | string | null;
    district?: Prisma.StringNullableFilter<"Job"> | string | null;
    vacancy?: Prisma.IntNullableFilter<"Job"> | number | null;
    age?: Prisma.StringNullableFilter<"Job"> | string | null;
    salary?: Prisma.StringNullableFilter<"Job"> | string | null;
    experience?: Prisma.StringNullableFilter<"Job"> | string | null;
    education?: Prisma.StringNullableFilter<"Job"> | string | null;
    additionalReqirements?: Prisma.StringNullableListFilter<"Job">;
    responsibilities?: Prisma.StringNullableListFilter<"Job">;
    requiredSkills?: Prisma.StringNullableListFilter<"Job">;
    description?: Prisma.StringNullableFilter<"Job"> | string | null;
    benefits?: Prisma.StringNullableListFilter<"Job">;
    jobType?: Prisma.EnumJobTypesFilter<"Job"> | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFilter<"Job"> | $Enums.EmploymentType;
    tags?: Prisma.StringNullableListFilter<"Job">;
    deadline?: Prisma.DateTimeNullableFilter<"Job"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Job"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Job"> | Date | string;
    applications?: Prisma.ApplicationListRelationFilter;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type JobOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    companyName?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyLogo?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    district?: Prisma.SortOrderInput | Prisma.SortOrder;
    vacancy?: Prisma.SortOrderInput | Prisma.SortOrder;
    age?: Prisma.SortOrderInput | Prisma.SortOrder;
    salary?: Prisma.SortOrderInput | Prisma.SortOrder;
    experience?: Prisma.SortOrderInput | Prisma.SortOrder;
    education?: Prisma.SortOrderInput | Prisma.SortOrder;
    additionalReqirements?: Prisma.SortOrder;
    responsibilities?: Prisma.SortOrder;
    requiredSkills?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    benefits?: Prisma.SortOrder;
    jobType?: Prisma.SortOrder;
    employmentType?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    deadline?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.JobCountOrderByAggregateInput;
    _avg?: Prisma.JobAvgOrderByAggregateInput;
    _max?: Prisma.JobMaxOrderByAggregateInput;
    _min?: Prisma.JobMinOrderByAggregateInput;
    _sum?: Prisma.JobSumOrderByAggregateInput;
};
export type JobScalarWhereWithAggregatesInput = {
    AND?: Prisma.JobScalarWhereWithAggregatesInput | Prisma.JobScalarWhereWithAggregatesInput[];
    OR?: Prisma.JobScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JobScalarWhereWithAggregatesInput | Prisma.JobScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Job"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Job"> | string;
    categoryId?: Prisma.StringWithAggregatesFilter<"Job"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Job"> | string;
    companyName?: Prisma.StringNullableWithAggregatesFilter<"Job"> | string | null;
    companyLogo?: Prisma.StringNullableWithAggregatesFilter<"Job"> | string | null;
    companyDetails?: Prisma.StringNullableWithAggregatesFilter<"Job"> | string | null;
    location?: Prisma.StringNullableWithAggregatesFilter<"Job"> | string | null;
    district?: Prisma.StringNullableWithAggregatesFilter<"Job"> | string | null;
    vacancy?: Prisma.IntNullableWithAggregatesFilter<"Job"> | number | null;
    age?: Prisma.StringNullableWithAggregatesFilter<"Job"> | string | null;
    salary?: Prisma.StringNullableWithAggregatesFilter<"Job"> | string | null;
    experience?: Prisma.StringNullableWithAggregatesFilter<"Job"> | string | null;
    education?: Prisma.StringNullableWithAggregatesFilter<"Job"> | string | null;
    additionalReqirements?: Prisma.StringNullableListFilter<"Job">;
    responsibilities?: Prisma.StringNullableListFilter<"Job">;
    requiredSkills?: Prisma.StringNullableListFilter<"Job">;
    description?: Prisma.StringNullableWithAggregatesFilter<"Job"> | string | null;
    benefits?: Prisma.StringNullableListFilter<"Job">;
    jobType?: Prisma.EnumJobTypesWithAggregatesFilter<"Job"> | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeWithAggregatesFilter<"Job"> | $Enums.EmploymentType;
    tags?: Prisma.StringNullableListFilter<"Job">;
    deadline?: Prisma.DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Job"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Job"> | Date | string;
};
export type JobCreateInput = {
    id?: string;
    title: string;
    companyName?: string | null;
    companyLogo?: string | null;
    companyDetails?: string | null;
    location?: string | null;
    district?: string | null;
    vacancy?: number | null;
    age?: string | null;
    salary?: string | null;
    experience?: string | null;
    education?: string | null;
    additionalReqirements?: Prisma.JobCreateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobCreateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobCreaterequiredSkillsInput | string[];
    description?: string | null;
    benefits?: Prisma.JobCreatebenefitsInput | string[];
    jobType?: $Enums.JobTypes;
    employmentType?: $Enums.EmploymentType;
    tags?: Prisma.JobCreatetagsInput | string[];
    deadline?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: Prisma.ApplicationCreateNestedManyWithoutJobInput;
    category: Prisma.CategoryCreateNestedOneWithoutJobsInput;
    user: Prisma.UserCreateNestedOneWithoutJobsInput;
};
export type JobUncheckedCreateInput = {
    id?: string;
    userId: string;
    categoryId: string;
    title: string;
    companyName?: string | null;
    companyLogo?: string | null;
    companyDetails?: string | null;
    location?: string | null;
    district?: string | null;
    vacancy?: number | null;
    age?: string | null;
    salary?: string | null;
    experience?: string | null;
    education?: string | null;
    additionalReqirements?: Prisma.JobCreateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobCreateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobCreaterequiredSkillsInput | string[];
    description?: string | null;
    benefits?: Prisma.JobCreatebenefitsInput | string[];
    jobType?: $Enums.JobTypes;
    employmentType?: $Enums.EmploymentType;
    tags?: Prisma.JobCreatetagsInput | string[];
    deadline?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: Prisma.ApplicationUncheckedCreateNestedManyWithoutJobInput;
};
export type JobUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUpdateManyWithoutJobNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutJobsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutJobsNestedInput;
};
export type JobUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUncheckedUpdateManyWithoutJobNestedInput;
};
export type JobCreateManyInput = {
    id?: string;
    userId: string;
    categoryId: string;
    title: string;
    companyName?: string | null;
    companyLogo?: string | null;
    companyDetails?: string | null;
    location?: string | null;
    district?: string | null;
    vacancy?: number | null;
    age?: string | null;
    salary?: string | null;
    experience?: string | null;
    education?: string | null;
    additionalReqirements?: Prisma.JobCreateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobCreateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobCreaterequiredSkillsInput | string[];
    description?: string | null;
    benefits?: Prisma.JobCreatebenefitsInput | string[];
    jobType?: $Enums.JobTypes;
    employmentType?: $Enums.EmploymentType;
    tags?: Prisma.JobCreatetagsInput | string[];
    deadline?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JobUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JobUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JobScalarRelationFilter = {
    is?: Prisma.JobWhereInput;
    isNot?: Prisma.JobWhereInput;
};
export type JobListRelationFilter = {
    every?: Prisma.JobWhereInput;
    some?: Prisma.JobWhereInput;
    none?: Prisma.JobWhereInput;
};
export type JobOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type JobCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyLogo?: Prisma.SortOrder;
    companyDetails?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    vacancy?: Prisma.SortOrder;
    age?: Prisma.SortOrder;
    salary?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    education?: Prisma.SortOrder;
    additionalReqirements?: Prisma.SortOrder;
    responsibilities?: Prisma.SortOrder;
    requiredSkills?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    benefits?: Prisma.SortOrder;
    jobType?: Prisma.SortOrder;
    employmentType?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JobAvgOrderByAggregateInput = {
    vacancy?: Prisma.SortOrder;
};
export type JobMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyLogo?: Prisma.SortOrder;
    companyDetails?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    vacancy?: Prisma.SortOrder;
    age?: Prisma.SortOrder;
    salary?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    education?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    jobType?: Prisma.SortOrder;
    employmentType?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JobMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyLogo?: Prisma.SortOrder;
    companyDetails?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    vacancy?: Prisma.SortOrder;
    age?: Prisma.SortOrder;
    salary?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    education?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    jobType?: Prisma.SortOrder;
    employmentType?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JobSumOrderByAggregateInput = {
    vacancy?: Prisma.SortOrder;
};
export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: Prisma.XOR<Prisma.JobCreateWithoutApplicationsInput, Prisma.JobUncheckedCreateWithoutApplicationsInput>;
    connectOrCreate?: Prisma.JobCreateOrConnectWithoutApplicationsInput;
    connect?: Prisma.JobWhereUniqueInput;
};
export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: Prisma.XOR<Prisma.JobCreateWithoutApplicationsInput, Prisma.JobUncheckedCreateWithoutApplicationsInput>;
    connectOrCreate?: Prisma.JobCreateOrConnectWithoutApplicationsInput;
    upsert?: Prisma.JobUpsertWithoutApplicationsInput;
    connect?: Prisma.JobWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JobUpdateToOneWithWhereWithoutApplicationsInput, Prisma.JobUpdateWithoutApplicationsInput>, Prisma.JobUncheckedUpdateWithoutApplicationsInput>;
};
export type JobCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.JobCreateWithoutUserInput, Prisma.JobUncheckedCreateWithoutUserInput> | Prisma.JobCreateWithoutUserInput[] | Prisma.JobUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JobCreateOrConnectWithoutUserInput | Prisma.JobCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.JobCreateManyUserInputEnvelope;
    connect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
};
export type JobUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.JobCreateWithoutUserInput, Prisma.JobUncheckedCreateWithoutUserInput> | Prisma.JobCreateWithoutUserInput[] | Prisma.JobUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JobCreateOrConnectWithoutUserInput | Prisma.JobCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.JobCreateManyUserInputEnvelope;
    connect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
};
export type JobUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.JobCreateWithoutUserInput, Prisma.JobUncheckedCreateWithoutUserInput> | Prisma.JobCreateWithoutUserInput[] | Prisma.JobUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JobCreateOrConnectWithoutUserInput | Prisma.JobCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.JobUpsertWithWhereUniqueWithoutUserInput | Prisma.JobUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.JobCreateManyUserInputEnvelope;
    set?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    disconnect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    delete?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    connect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    update?: Prisma.JobUpdateWithWhereUniqueWithoutUserInput | Prisma.JobUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.JobUpdateManyWithWhereWithoutUserInput | Prisma.JobUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.JobScalarWhereInput | Prisma.JobScalarWhereInput[];
};
export type JobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.JobCreateWithoutUserInput, Prisma.JobUncheckedCreateWithoutUserInput> | Prisma.JobCreateWithoutUserInput[] | Prisma.JobUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JobCreateOrConnectWithoutUserInput | Prisma.JobCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.JobUpsertWithWhereUniqueWithoutUserInput | Prisma.JobUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.JobCreateManyUserInputEnvelope;
    set?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    disconnect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    delete?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    connect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    update?: Prisma.JobUpdateWithWhereUniqueWithoutUserInput | Prisma.JobUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.JobUpdateManyWithWhereWithoutUserInput | Prisma.JobUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.JobScalarWhereInput | Prisma.JobScalarWhereInput[];
};
export type JobCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.JobCreateWithoutCategoryInput, Prisma.JobUncheckedCreateWithoutCategoryInput> | Prisma.JobCreateWithoutCategoryInput[] | Prisma.JobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.JobCreateOrConnectWithoutCategoryInput | Prisma.JobCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.JobCreateManyCategoryInputEnvelope;
    connect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
};
export type JobUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.JobCreateWithoutCategoryInput, Prisma.JobUncheckedCreateWithoutCategoryInput> | Prisma.JobCreateWithoutCategoryInput[] | Prisma.JobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.JobCreateOrConnectWithoutCategoryInput | Prisma.JobCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.JobCreateManyCategoryInputEnvelope;
    connect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
};
export type JobUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.JobCreateWithoutCategoryInput, Prisma.JobUncheckedCreateWithoutCategoryInput> | Prisma.JobCreateWithoutCategoryInput[] | Prisma.JobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.JobCreateOrConnectWithoutCategoryInput | Prisma.JobCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.JobUpsertWithWhereUniqueWithoutCategoryInput | Prisma.JobUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.JobCreateManyCategoryInputEnvelope;
    set?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    disconnect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    delete?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    connect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    update?: Prisma.JobUpdateWithWhereUniqueWithoutCategoryInput | Prisma.JobUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.JobUpdateManyWithWhereWithoutCategoryInput | Prisma.JobUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.JobScalarWhereInput | Prisma.JobScalarWhereInput[];
};
export type JobUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.JobCreateWithoutCategoryInput, Prisma.JobUncheckedCreateWithoutCategoryInput> | Prisma.JobCreateWithoutCategoryInput[] | Prisma.JobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.JobCreateOrConnectWithoutCategoryInput | Prisma.JobCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.JobUpsertWithWhereUniqueWithoutCategoryInput | Prisma.JobUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.JobCreateManyCategoryInputEnvelope;
    set?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    disconnect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    delete?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    connect?: Prisma.JobWhereUniqueInput | Prisma.JobWhereUniqueInput[];
    update?: Prisma.JobUpdateWithWhereUniqueWithoutCategoryInput | Prisma.JobUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.JobUpdateManyWithWhereWithoutCategoryInput | Prisma.JobUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.JobScalarWhereInput | Prisma.JobScalarWhereInput[];
};
export type JobCreateadditionalReqirementsInput = {
    set: string[];
};
export type JobCreateresponsibilitiesInput = {
    set: string[];
};
export type JobCreaterequiredSkillsInput = {
    set: string[];
};
export type JobCreatebenefitsInput = {
    set: string[];
};
export type JobCreatetagsInput = {
    set: string[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type JobUpdateadditionalReqirementsInput = {
    set?: string[];
    push?: string | string[];
};
export type JobUpdateresponsibilitiesInput = {
    set?: string[];
    push?: string | string[];
};
export type JobUpdaterequiredSkillsInput = {
    set?: string[];
    push?: string | string[];
};
export type JobUpdatebenefitsInput = {
    set?: string[];
    push?: string | string[];
};
export type EnumJobTypesFieldUpdateOperationsInput = {
    set?: $Enums.JobTypes;
};
export type EnumEmploymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentType;
};
export type JobUpdatetagsInput = {
    set?: string[];
    push?: string | string[];
};
export type JobCreateWithoutApplicationsInput = {
    id?: string;
    title: string;
    companyName?: string | null;
    companyLogo?: string | null;
    companyDetails?: string | null;
    location?: string | null;
    district?: string | null;
    vacancy?: number | null;
    age?: string | null;
    salary?: string | null;
    experience?: string | null;
    education?: string | null;
    additionalReqirements?: Prisma.JobCreateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobCreateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobCreaterequiredSkillsInput | string[];
    description?: string | null;
    benefits?: Prisma.JobCreatebenefitsInput | string[];
    jobType?: $Enums.JobTypes;
    employmentType?: $Enums.EmploymentType;
    tags?: Prisma.JobCreatetagsInput | string[];
    deadline?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutJobsInput;
    user: Prisma.UserCreateNestedOneWithoutJobsInput;
};
export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: string;
    userId: string;
    categoryId: string;
    title: string;
    companyName?: string | null;
    companyLogo?: string | null;
    companyDetails?: string | null;
    location?: string | null;
    district?: string | null;
    vacancy?: number | null;
    age?: string | null;
    salary?: string | null;
    experience?: string | null;
    education?: string | null;
    additionalReqirements?: Prisma.JobCreateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobCreateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobCreaterequiredSkillsInput | string[];
    description?: string | null;
    benefits?: Prisma.JobCreatebenefitsInput | string[];
    jobType?: $Enums.JobTypes;
    employmentType?: $Enums.EmploymentType;
    tags?: Prisma.JobCreatetagsInput | string[];
    deadline?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JobCreateOrConnectWithoutApplicationsInput = {
    where: Prisma.JobWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobCreateWithoutApplicationsInput, Prisma.JobUncheckedCreateWithoutApplicationsInput>;
};
export type JobUpsertWithoutApplicationsInput = {
    update: Prisma.XOR<Prisma.JobUpdateWithoutApplicationsInput, Prisma.JobUncheckedUpdateWithoutApplicationsInput>;
    create: Prisma.XOR<Prisma.JobCreateWithoutApplicationsInput, Prisma.JobUncheckedCreateWithoutApplicationsInput>;
    where?: Prisma.JobWhereInput;
};
export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: Prisma.JobWhereInput;
    data: Prisma.XOR<Prisma.JobUpdateWithoutApplicationsInput, Prisma.JobUncheckedUpdateWithoutApplicationsInput>;
};
export type JobUpdateWithoutApplicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutJobsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutJobsNestedInput;
};
export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JobCreateWithoutUserInput = {
    id?: string;
    title: string;
    companyName?: string | null;
    companyLogo?: string | null;
    companyDetails?: string | null;
    location?: string | null;
    district?: string | null;
    vacancy?: number | null;
    age?: string | null;
    salary?: string | null;
    experience?: string | null;
    education?: string | null;
    additionalReqirements?: Prisma.JobCreateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobCreateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobCreaterequiredSkillsInput | string[];
    description?: string | null;
    benefits?: Prisma.JobCreatebenefitsInput | string[];
    jobType?: $Enums.JobTypes;
    employmentType?: $Enums.EmploymentType;
    tags?: Prisma.JobCreatetagsInput | string[];
    deadline?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: Prisma.ApplicationCreateNestedManyWithoutJobInput;
    category: Prisma.CategoryCreateNestedOneWithoutJobsInput;
};
export type JobUncheckedCreateWithoutUserInput = {
    id?: string;
    categoryId: string;
    title: string;
    companyName?: string | null;
    companyLogo?: string | null;
    companyDetails?: string | null;
    location?: string | null;
    district?: string | null;
    vacancy?: number | null;
    age?: string | null;
    salary?: string | null;
    experience?: string | null;
    education?: string | null;
    additionalReqirements?: Prisma.JobCreateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobCreateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobCreaterequiredSkillsInput | string[];
    description?: string | null;
    benefits?: Prisma.JobCreatebenefitsInput | string[];
    jobType?: $Enums.JobTypes;
    employmentType?: $Enums.EmploymentType;
    tags?: Prisma.JobCreatetagsInput | string[];
    deadline?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: Prisma.ApplicationUncheckedCreateNestedManyWithoutJobInput;
};
export type JobCreateOrConnectWithoutUserInput = {
    where: Prisma.JobWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobCreateWithoutUserInput, Prisma.JobUncheckedCreateWithoutUserInput>;
};
export type JobCreateManyUserInputEnvelope = {
    data: Prisma.JobCreateManyUserInput | Prisma.JobCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type JobUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.JobWhereUniqueInput;
    update: Prisma.XOR<Prisma.JobUpdateWithoutUserInput, Prisma.JobUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.JobCreateWithoutUserInput, Prisma.JobUncheckedCreateWithoutUserInput>;
};
export type JobUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.JobWhereUniqueInput;
    data: Prisma.XOR<Prisma.JobUpdateWithoutUserInput, Prisma.JobUncheckedUpdateWithoutUserInput>;
};
export type JobUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.JobScalarWhereInput;
    data: Prisma.XOR<Prisma.JobUpdateManyMutationInput, Prisma.JobUncheckedUpdateManyWithoutUserInput>;
};
export type JobScalarWhereInput = {
    AND?: Prisma.JobScalarWhereInput | Prisma.JobScalarWhereInput[];
    OR?: Prisma.JobScalarWhereInput[];
    NOT?: Prisma.JobScalarWhereInput | Prisma.JobScalarWhereInput[];
    id?: Prisma.StringFilter<"Job"> | string;
    userId?: Prisma.StringFilter<"Job"> | string;
    categoryId?: Prisma.StringFilter<"Job"> | string;
    title?: Prisma.StringFilter<"Job"> | string;
    companyName?: Prisma.StringNullableFilter<"Job"> | string | null;
    companyLogo?: Prisma.StringNullableFilter<"Job"> | string | null;
    companyDetails?: Prisma.StringNullableFilter<"Job"> | string | null;
    location?: Prisma.StringNullableFilter<"Job"> | string | null;
    district?: Prisma.StringNullableFilter<"Job"> | string | null;
    vacancy?: Prisma.IntNullableFilter<"Job"> | number | null;
    age?: Prisma.StringNullableFilter<"Job"> | string | null;
    salary?: Prisma.StringNullableFilter<"Job"> | string | null;
    experience?: Prisma.StringNullableFilter<"Job"> | string | null;
    education?: Prisma.StringNullableFilter<"Job"> | string | null;
    additionalReqirements?: Prisma.StringNullableListFilter<"Job">;
    responsibilities?: Prisma.StringNullableListFilter<"Job">;
    requiredSkills?: Prisma.StringNullableListFilter<"Job">;
    description?: Prisma.StringNullableFilter<"Job"> | string | null;
    benefits?: Prisma.StringNullableListFilter<"Job">;
    jobType?: Prisma.EnumJobTypesFilter<"Job"> | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFilter<"Job"> | $Enums.EmploymentType;
    tags?: Prisma.StringNullableListFilter<"Job">;
    deadline?: Prisma.DateTimeNullableFilter<"Job"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Job"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Job"> | Date | string;
};
export type JobCreateWithoutCategoryInput = {
    id?: string;
    title: string;
    companyName?: string | null;
    companyLogo?: string | null;
    companyDetails?: string | null;
    location?: string | null;
    district?: string | null;
    vacancy?: number | null;
    age?: string | null;
    salary?: string | null;
    experience?: string | null;
    education?: string | null;
    additionalReqirements?: Prisma.JobCreateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobCreateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobCreaterequiredSkillsInput | string[];
    description?: string | null;
    benefits?: Prisma.JobCreatebenefitsInput | string[];
    jobType?: $Enums.JobTypes;
    employmentType?: $Enums.EmploymentType;
    tags?: Prisma.JobCreatetagsInput | string[];
    deadline?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: Prisma.ApplicationCreateNestedManyWithoutJobInput;
    user: Prisma.UserCreateNestedOneWithoutJobsInput;
};
export type JobUncheckedCreateWithoutCategoryInput = {
    id?: string;
    userId: string;
    title: string;
    companyName?: string | null;
    companyLogo?: string | null;
    companyDetails?: string | null;
    location?: string | null;
    district?: string | null;
    vacancy?: number | null;
    age?: string | null;
    salary?: string | null;
    experience?: string | null;
    education?: string | null;
    additionalReqirements?: Prisma.JobCreateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobCreateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobCreaterequiredSkillsInput | string[];
    description?: string | null;
    benefits?: Prisma.JobCreatebenefitsInput | string[];
    jobType?: $Enums.JobTypes;
    employmentType?: $Enums.EmploymentType;
    tags?: Prisma.JobCreatetagsInput | string[];
    deadline?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: Prisma.ApplicationUncheckedCreateNestedManyWithoutJobInput;
};
export type JobCreateOrConnectWithoutCategoryInput = {
    where: Prisma.JobWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobCreateWithoutCategoryInput, Prisma.JobUncheckedCreateWithoutCategoryInput>;
};
export type JobCreateManyCategoryInputEnvelope = {
    data: Prisma.JobCreateManyCategoryInput | Prisma.JobCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type JobUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.JobWhereUniqueInput;
    update: Prisma.XOR<Prisma.JobUpdateWithoutCategoryInput, Prisma.JobUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.JobCreateWithoutCategoryInput, Prisma.JobUncheckedCreateWithoutCategoryInput>;
};
export type JobUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.JobWhereUniqueInput;
    data: Prisma.XOR<Prisma.JobUpdateWithoutCategoryInput, Prisma.JobUncheckedUpdateWithoutCategoryInput>;
};
export type JobUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.JobScalarWhereInput;
    data: Prisma.XOR<Prisma.JobUpdateManyMutationInput, Prisma.JobUncheckedUpdateManyWithoutCategoryInput>;
};
export type JobCreateManyUserInput = {
    id?: string;
    categoryId: string;
    title: string;
    companyName?: string | null;
    companyLogo?: string | null;
    companyDetails?: string | null;
    location?: string | null;
    district?: string | null;
    vacancy?: number | null;
    age?: string | null;
    salary?: string | null;
    experience?: string | null;
    education?: string | null;
    additionalReqirements?: Prisma.JobCreateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobCreateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobCreaterequiredSkillsInput | string[];
    description?: string | null;
    benefits?: Prisma.JobCreatebenefitsInput | string[];
    jobType?: $Enums.JobTypes;
    employmentType?: $Enums.EmploymentType;
    tags?: Prisma.JobCreatetagsInput | string[];
    deadline?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JobUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUpdateManyWithoutJobNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutJobsNestedInput;
};
export type JobUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUncheckedUpdateManyWithoutJobNestedInput;
};
export type JobUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JobCreateManyCategoryInput = {
    id?: string;
    userId: string;
    title: string;
    companyName?: string | null;
    companyLogo?: string | null;
    companyDetails?: string | null;
    location?: string | null;
    district?: string | null;
    vacancy?: number | null;
    age?: string | null;
    salary?: string | null;
    experience?: string | null;
    education?: string | null;
    additionalReqirements?: Prisma.JobCreateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobCreateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobCreaterequiredSkillsInput | string[];
    description?: string | null;
    benefits?: Prisma.JobCreatebenefitsInput | string[];
    jobType?: $Enums.JobTypes;
    employmentType?: $Enums.EmploymentType;
    tags?: Prisma.JobCreatetagsInput | string[];
    deadline?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JobUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUpdateManyWithoutJobNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutJobsNestedInput;
};
export type JobUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUncheckedUpdateManyWithoutJobNestedInput;
};
export type JobUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vacancy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    age?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    additionalReqirements?: Prisma.JobUpdateadditionalReqirementsInput | string[];
    responsibilities?: Prisma.JobUpdateresponsibilitiesInput | string[];
    requiredSkills?: Prisma.JobUpdaterequiredSkillsInput | string[];
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    benefits?: Prisma.JobUpdatebenefitsInput | string[];
    jobType?: Prisma.EnumJobTypesFieldUpdateOperationsInput | $Enums.JobTypes;
    employmentType?: Prisma.EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType;
    tags?: Prisma.JobUpdatetagsInput | string[];
    deadline?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type JobCountOutputType
 */
export type JobCountOutputType = {
    applications: number;
};
export type JobCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs;
};
/**
 * JobCountOutputType without action
 */
export type JobCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: Prisma.JobCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * JobCountOutputType without action
 */
export type JobCountOutputTypeCountApplicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationWhereInput;
};
export type JobSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    title?: boolean;
    companyName?: boolean;
    companyLogo?: boolean;
    companyDetails?: boolean;
    location?: boolean;
    district?: boolean;
    vacancy?: boolean;
    age?: boolean;
    salary?: boolean;
    experience?: boolean;
    education?: boolean;
    additionalReqirements?: boolean;
    responsibilities?: boolean;
    requiredSkills?: boolean;
    description?: boolean;
    benefits?: boolean;
    jobType?: boolean;
    employmentType?: boolean;
    tags?: boolean;
    deadline?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    applications?: boolean | Prisma.Job$applicationsArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.JobCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["job"]>;
export type JobSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    title?: boolean;
    companyName?: boolean;
    companyLogo?: boolean;
    companyDetails?: boolean;
    location?: boolean;
    district?: boolean;
    vacancy?: boolean;
    age?: boolean;
    salary?: boolean;
    experience?: boolean;
    education?: boolean;
    additionalReqirements?: boolean;
    responsibilities?: boolean;
    requiredSkills?: boolean;
    description?: boolean;
    benefits?: boolean;
    jobType?: boolean;
    employmentType?: boolean;
    tags?: boolean;
    deadline?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["job"]>;
export type JobSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    title?: boolean;
    companyName?: boolean;
    companyLogo?: boolean;
    companyDetails?: boolean;
    location?: boolean;
    district?: boolean;
    vacancy?: boolean;
    age?: boolean;
    salary?: boolean;
    experience?: boolean;
    education?: boolean;
    additionalReqirements?: boolean;
    responsibilities?: boolean;
    requiredSkills?: boolean;
    description?: boolean;
    benefits?: boolean;
    jobType?: boolean;
    employmentType?: boolean;
    tags?: boolean;
    deadline?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["job"]>;
export type JobSelectScalar = {
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    title?: boolean;
    companyName?: boolean;
    companyLogo?: boolean;
    companyDetails?: boolean;
    location?: boolean;
    district?: boolean;
    vacancy?: boolean;
    age?: boolean;
    salary?: boolean;
    experience?: boolean;
    education?: boolean;
    additionalReqirements?: boolean;
    responsibilities?: boolean;
    requiredSkills?: boolean;
    description?: boolean;
    benefits?: boolean;
    jobType?: boolean;
    employmentType?: boolean;
    tags?: boolean;
    deadline?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type JobOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "categoryId" | "title" | "companyName" | "companyLogo" | "companyDetails" | "location" | "district" | "vacancy" | "age" | "salary" | "experience" | "education" | "additionalReqirements" | "responsibilities" | "requiredSkills" | "description" | "benefits" | "jobType" | "employmentType" | "tags" | "deadline" | "createdAt" | "updatedAt", ExtArgs["result"]["job"]>;
export type JobInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applications?: boolean | Prisma.Job$applicationsArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.JobCountOutputTypeDefaultArgs<ExtArgs>;
};
export type JobIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type JobIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $JobPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Job";
    objects: {
        applications: Prisma.$ApplicationPayload<ExtArgs>[];
        category: Prisma.$CategoryPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        categoryId: string;
        title: string;
        companyName: string | null;
        companyLogo: string | null;
        companyDetails: string | null;
        location: string | null;
        district: string | null;
        vacancy: number | null;
        age: string | null;
        salary: string | null;
        experience: string | null;
        education: string | null;
        additionalReqirements: string[];
        responsibilities: string[];
        requiredSkills: string[];
        description: string | null;
        benefits: string[];
        jobType: $Enums.JobTypes;
        employmentType: $Enums.EmploymentType;
        tags: string[];
        deadline: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["job"]>;
    composites: {};
};
export type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JobPayload, S>;
export type JobCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JobCountAggregateInputType | true;
};
export interface JobDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Job'];
        meta: {
            name: 'Job';
        };
    };
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: Prisma.SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JobClient<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JobClient<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: Prisma.SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma.Prisma__JobClient<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JobClient<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     *
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobFindManyArgs>(args?: Prisma.SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     *
     */
    create<T extends JobCreateArgs>(args: Prisma.SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma.Prisma__JobClient<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobCreateManyArgs>(args?: Prisma.SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     *
     */
    delete<T extends JobDeleteArgs>(args: Prisma.SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma.Prisma__JobClient<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobUpdateArgs>(args: Prisma.SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma.Prisma__JobClient<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: Prisma.SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobUpdateManyArgs>(args: Prisma.SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: Prisma.SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma.Prisma__JobClient<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(args?: Prisma.Subset<T, JobCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JobCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Prisma.Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>;
    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends JobGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JobGroupByArgs['orderBy'];
    } : {
        orderBy?: JobGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Job model
     */
    readonly fields: JobFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Job.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__JobClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    applications<T extends Prisma.Job$applicationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Job$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Job model
 */
export interface JobFieldRefs {
    readonly id: Prisma.FieldRef<"Job", 'String'>;
    readonly userId: Prisma.FieldRef<"Job", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Job", 'String'>;
    readonly title: Prisma.FieldRef<"Job", 'String'>;
    readonly companyName: Prisma.FieldRef<"Job", 'String'>;
    readonly companyLogo: Prisma.FieldRef<"Job", 'String'>;
    readonly companyDetails: Prisma.FieldRef<"Job", 'String'>;
    readonly location: Prisma.FieldRef<"Job", 'String'>;
    readonly district: Prisma.FieldRef<"Job", 'String'>;
    readonly vacancy: Prisma.FieldRef<"Job", 'Int'>;
    readonly age: Prisma.FieldRef<"Job", 'String'>;
    readonly salary: Prisma.FieldRef<"Job", 'String'>;
    readonly experience: Prisma.FieldRef<"Job", 'String'>;
    readonly education: Prisma.FieldRef<"Job", 'String'>;
    readonly additionalReqirements: Prisma.FieldRef<"Job", 'String[]'>;
    readonly responsibilities: Prisma.FieldRef<"Job", 'String[]'>;
    readonly requiredSkills: Prisma.FieldRef<"Job", 'String[]'>;
    readonly description: Prisma.FieldRef<"Job", 'String'>;
    readonly benefits: Prisma.FieldRef<"Job", 'String[]'>;
    readonly jobType: Prisma.FieldRef<"Job", 'JobTypes'>;
    readonly employmentType: Prisma.FieldRef<"Job", 'EmploymentType'>;
    readonly tags: Prisma.FieldRef<"Job", 'String[]'>;
    readonly deadline: Prisma.FieldRef<"Job", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Job", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Job", 'DateTime'>;
}
/**
 * Job findUnique
 */
export type JobFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where: Prisma.JobWhereUniqueInput;
};
/**
 * Job findUniqueOrThrow
 */
export type JobFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where: Prisma.JobWhereUniqueInput;
};
/**
 * Job findFirst
 */
export type JobFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where?: Prisma.JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: Prisma.JobOrderByWithRelationInput | Prisma.JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jobs.
     */
    cursor?: Prisma.JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jobs.
     */
    distinct?: Prisma.JobScalarFieldEnum | Prisma.JobScalarFieldEnum[];
};
/**
 * Job findFirstOrThrow
 */
export type JobFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where?: Prisma.JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: Prisma.JobOrderByWithRelationInput | Prisma.JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jobs.
     */
    cursor?: Prisma.JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jobs.
     */
    distinct?: Prisma.JobScalarFieldEnum | Prisma.JobScalarFieldEnum[];
};
/**
 * Job findMany
 */
export type JobFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobInclude<ExtArgs> | null;
    /**
     * Filter, which Jobs to fetch.
     */
    where?: Prisma.JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: Prisma.JobOrderByWithRelationInput | Prisma.JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Jobs.
     */
    cursor?: Prisma.JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    distinct?: Prisma.JobScalarFieldEnum | Prisma.JobScalarFieldEnum[];
};
/**
 * Job create
 */
export type JobCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobInclude<ExtArgs> | null;
    /**
     * The data needed to create a Job.
     */
    data: Prisma.XOR<Prisma.JobCreateInput, Prisma.JobUncheckedCreateInput>;
};
/**
 * Job createMany
 */
export type JobCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: Prisma.JobCreateManyInput | Prisma.JobCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Job createManyAndReturn
 */
export type JobCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * The data used to create many Jobs.
     */
    data: Prisma.JobCreateManyInput | Prisma.JobCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Job update
 */
export type JobUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobInclude<ExtArgs> | null;
    /**
     * The data needed to update a Job.
     */
    data: Prisma.XOR<Prisma.JobUpdateInput, Prisma.JobUncheckedUpdateInput>;
    /**
     * Choose, which Job to update.
     */
    where: Prisma.JobWhereUniqueInput;
};
/**
 * Job updateMany
 */
export type JobUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: Prisma.XOR<Prisma.JobUpdateManyMutationInput, Prisma.JobUncheckedUpdateManyInput>;
    /**
     * Filter which Jobs to update
     */
    where?: Prisma.JobWhereInput;
    /**
     * Limit how many Jobs to update.
     */
    limit?: number;
};
/**
 * Job updateManyAndReturn
 */
export type JobUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * The data used to update Jobs.
     */
    data: Prisma.XOR<Prisma.JobUpdateManyMutationInput, Prisma.JobUncheckedUpdateManyInput>;
    /**
     * Filter which Jobs to update
     */
    where?: Prisma.JobWhereInput;
    /**
     * Limit how many Jobs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Job upsert
 */
export type JobUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobInclude<ExtArgs> | null;
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: Prisma.JobWhereUniqueInput;
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: Prisma.XOR<Prisma.JobCreateInput, Prisma.JobUncheckedCreateInput>;
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.JobUpdateInput, Prisma.JobUncheckedUpdateInput>;
};
/**
 * Job delete
 */
export type JobDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobInclude<ExtArgs> | null;
    /**
     * Filter which Job to delete.
     */
    where: Prisma.JobWhereUniqueInput;
};
/**
 * Job deleteMany
 */
export type JobDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: Prisma.JobWhereInput;
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number;
};
/**
 * Job.applications
 */
export type Job$applicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    where?: Prisma.ApplicationWhereInput;
    orderBy?: Prisma.ApplicationOrderByWithRelationInput | Prisma.ApplicationOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApplicationScalarFieldEnum | Prisma.ApplicationScalarFieldEnum[];
};
/**
 * Job without action
 */
export type JobDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Job.d.ts.map