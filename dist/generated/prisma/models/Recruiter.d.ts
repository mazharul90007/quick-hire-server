import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Recruiter
 *
 */
export type RecruiterModel = runtime.Types.Result.DefaultSelection<Prisma.$RecruiterPayload>;
export type AggregateRecruiter = {
    _count: RecruiterCountAggregateOutputType | null;
    _min: RecruiterMinAggregateOutputType | null;
    _max: RecruiterMaxAggregateOutputType | null;
};
export type RecruiterMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    recruiterName: string | null;
    recruiterPhone: string | null;
    recruiterWorkEmail: string | null;
    companyName: string | null;
    companyLogo: string | null;
    companyWebsite: string | null;
    companyFacebookId: string | null;
    companyLinkedInId: string | null;
    companySize: $Enums.CompanySize | null;
    companyAddress: string | null;
    industryId: string | null;
    subIndustryId: string | null;
    isVerified: boolean | null;
    subscriptionPlan: $Enums.Subscription | null;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RecruiterMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    recruiterName: string | null;
    recruiterPhone: string | null;
    recruiterWorkEmail: string | null;
    companyName: string | null;
    companyLogo: string | null;
    companyWebsite: string | null;
    companyFacebookId: string | null;
    companyLinkedInId: string | null;
    companySize: $Enums.CompanySize | null;
    companyAddress: string | null;
    industryId: string | null;
    subIndustryId: string | null;
    isVerified: boolean | null;
    subscriptionPlan: $Enums.Subscription | null;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RecruiterCountAggregateOutputType = {
    id: number;
    userId: number;
    recruiterName: number;
    recruiterPhone: number;
    recruiterWorkEmail: number;
    companyName: number;
    companyLogo: number;
    companyWebsite: number;
    companyFacebookId: number;
    companyLinkedInId: number;
    companySize: number;
    companyAddress: number;
    industryId: number;
    subIndustryId: number;
    isVerified: number;
    subscriptionPlan: number;
    isDeleted: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RecruiterMinAggregateInputType = {
    id?: true;
    userId?: true;
    recruiterName?: true;
    recruiterPhone?: true;
    recruiterWorkEmail?: true;
    companyName?: true;
    companyLogo?: true;
    companyWebsite?: true;
    companyFacebookId?: true;
    companyLinkedInId?: true;
    companySize?: true;
    companyAddress?: true;
    industryId?: true;
    subIndustryId?: true;
    isVerified?: true;
    subscriptionPlan?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RecruiterMaxAggregateInputType = {
    id?: true;
    userId?: true;
    recruiterName?: true;
    recruiterPhone?: true;
    recruiterWorkEmail?: true;
    companyName?: true;
    companyLogo?: true;
    companyWebsite?: true;
    companyFacebookId?: true;
    companyLinkedInId?: true;
    companySize?: true;
    companyAddress?: true;
    industryId?: true;
    subIndustryId?: true;
    isVerified?: true;
    subscriptionPlan?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RecruiterCountAggregateInputType = {
    id?: true;
    userId?: true;
    recruiterName?: true;
    recruiterPhone?: true;
    recruiterWorkEmail?: true;
    companyName?: true;
    companyLogo?: true;
    companyWebsite?: true;
    companyFacebookId?: true;
    companyLinkedInId?: true;
    companySize?: true;
    companyAddress?: true;
    industryId?: true;
    subIndustryId?: true;
    isVerified?: true;
    subscriptionPlan?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RecruiterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Recruiter to aggregate.
     */
    where?: Prisma.RecruiterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recruiters to fetch.
     */
    orderBy?: Prisma.RecruiterOrderByWithRelationInput | Prisma.RecruiterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RecruiterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recruiters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recruiters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Recruiters
    **/
    _count?: true | RecruiterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RecruiterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RecruiterMaxAggregateInputType;
};
export type GetRecruiterAggregateType<T extends RecruiterAggregateArgs> = {
    [P in keyof T & keyof AggregateRecruiter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRecruiter[P]> : Prisma.GetScalarType<T[P], AggregateRecruiter[P]>;
};
export type RecruiterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecruiterWhereInput;
    orderBy?: Prisma.RecruiterOrderByWithAggregationInput | Prisma.RecruiterOrderByWithAggregationInput[];
    by: Prisma.RecruiterScalarFieldEnum[] | Prisma.RecruiterScalarFieldEnum;
    having?: Prisma.RecruiterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecruiterCountAggregateInputType | true;
    _min?: RecruiterMinAggregateInputType;
    _max?: RecruiterMaxAggregateInputType;
};
export type RecruiterGroupByOutputType = {
    id: string;
    userId: string;
    recruiterName: string | null;
    recruiterPhone: string | null;
    recruiterWorkEmail: string | null;
    companyName: string | null;
    companyLogo: string | null;
    companyWebsite: string | null;
    companyFacebookId: string | null;
    companyLinkedInId: string | null;
    companySize: $Enums.CompanySize | null;
    companyAddress: string | null;
    industryId: string | null;
    subIndustryId: string | null;
    isVerified: boolean;
    subscriptionPlan: $Enums.Subscription;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: RecruiterCountAggregateOutputType | null;
    _min: RecruiterMinAggregateOutputType | null;
    _max: RecruiterMaxAggregateOutputType | null;
};
type GetRecruiterGroupByPayload<T extends RecruiterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RecruiterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RecruiterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RecruiterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RecruiterGroupByOutputType[P]>;
}>>;
export type RecruiterWhereInput = {
    AND?: Prisma.RecruiterWhereInput | Prisma.RecruiterWhereInput[];
    OR?: Prisma.RecruiterWhereInput[];
    NOT?: Prisma.RecruiterWhereInput | Prisma.RecruiterWhereInput[];
    id?: Prisma.StringFilter<"Recruiter"> | string;
    userId?: Prisma.StringFilter<"Recruiter"> | string;
    recruiterName?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    recruiterPhone?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    recruiterWorkEmail?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyName?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyLogo?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyWebsite?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyFacebookId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyLinkedInId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companySize?: Prisma.EnumCompanySizeNullableFilter<"Recruiter"> | $Enums.CompanySize | null;
    companyAddress?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    industryId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    subIndustryId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    isVerified?: Prisma.BoolFilter<"Recruiter"> | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFilter<"Recruiter"> | $Enums.Subscription;
    isDeleted?: Prisma.BoolFilter<"Recruiter"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Recruiter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Recruiter"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    industry?: Prisma.XOR<Prisma.IndustryNullableScalarRelationFilter, Prisma.IndustryWhereInput> | null;
    subIndustry?: Prisma.XOR<Prisma.SubIndustryNullableScalarRelationFilter, Prisma.SubIndustryWhereInput> | null;
    jobs?: Prisma.JobListRelationFilter;
};
export type RecruiterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    recruiterName?: Prisma.SortOrderInput | Prisma.SortOrder;
    recruiterPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    recruiterWorkEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyName?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyLogo?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyWebsite?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyFacebookId?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyLinkedInId?: Prisma.SortOrderInput | Prisma.SortOrder;
    companySize?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    industryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    subIndustryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    subscriptionPlan?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    industry?: Prisma.IndustryOrderByWithRelationInput;
    subIndustry?: Prisma.SubIndustryOrderByWithRelationInput;
    jobs?: Prisma.JobOrderByRelationAggregateInput;
};
export type RecruiterWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.RecruiterWhereInput | Prisma.RecruiterWhereInput[];
    OR?: Prisma.RecruiterWhereInput[];
    NOT?: Prisma.RecruiterWhereInput | Prisma.RecruiterWhereInput[];
    recruiterName?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    recruiterPhone?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    recruiterWorkEmail?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyName?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyLogo?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyWebsite?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyFacebookId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyLinkedInId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companySize?: Prisma.EnumCompanySizeNullableFilter<"Recruiter"> | $Enums.CompanySize | null;
    companyAddress?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    industryId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    subIndustryId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    isVerified?: Prisma.BoolFilter<"Recruiter"> | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFilter<"Recruiter"> | $Enums.Subscription;
    isDeleted?: Prisma.BoolFilter<"Recruiter"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Recruiter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Recruiter"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    industry?: Prisma.XOR<Prisma.IndustryNullableScalarRelationFilter, Prisma.IndustryWhereInput> | null;
    subIndustry?: Prisma.XOR<Prisma.SubIndustryNullableScalarRelationFilter, Prisma.SubIndustryWhereInput> | null;
    jobs?: Prisma.JobListRelationFilter;
}, "id" | "userId">;
export type RecruiterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    recruiterName?: Prisma.SortOrderInput | Prisma.SortOrder;
    recruiterPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    recruiterWorkEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyName?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyLogo?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyWebsite?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyFacebookId?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyLinkedInId?: Prisma.SortOrderInput | Prisma.SortOrder;
    companySize?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    industryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    subIndustryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    subscriptionPlan?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RecruiterCountOrderByAggregateInput;
    _max?: Prisma.RecruiterMaxOrderByAggregateInput;
    _min?: Prisma.RecruiterMinOrderByAggregateInput;
};
export type RecruiterScalarWhereWithAggregatesInput = {
    AND?: Prisma.RecruiterScalarWhereWithAggregatesInput | Prisma.RecruiterScalarWhereWithAggregatesInput[];
    OR?: Prisma.RecruiterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RecruiterScalarWhereWithAggregatesInput | Prisma.RecruiterScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Recruiter"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Recruiter"> | string;
    recruiterName?: Prisma.StringNullableWithAggregatesFilter<"Recruiter"> | string | null;
    recruiterPhone?: Prisma.StringNullableWithAggregatesFilter<"Recruiter"> | string | null;
    recruiterWorkEmail?: Prisma.StringNullableWithAggregatesFilter<"Recruiter"> | string | null;
    companyName?: Prisma.StringNullableWithAggregatesFilter<"Recruiter"> | string | null;
    companyLogo?: Prisma.StringNullableWithAggregatesFilter<"Recruiter"> | string | null;
    companyWebsite?: Prisma.StringNullableWithAggregatesFilter<"Recruiter"> | string | null;
    companyFacebookId?: Prisma.StringNullableWithAggregatesFilter<"Recruiter"> | string | null;
    companyLinkedInId?: Prisma.StringNullableWithAggregatesFilter<"Recruiter"> | string | null;
    companySize?: Prisma.EnumCompanySizeNullableWithAggregatesFilter<"Recruiter"> | $Enums.CompanySize | null;
    companyAddress?: Prisma.StringNullableWithAggregatesFilter<"Recruiter"> | string | null;
    industryId?: Prisma.StringNullableWithAggregatesFilter<"Recruiter"> | string | null;
    subIndustryId?: Prisma.StringNullableWithAggregatesFilter<"Recruiter"> | string | null;
    isVerified?: Prisma.BoolWithAggregatesFilter<"Recruiter"> | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionWithAggregatesFilter<"Recruiter"> | $Enums.Subscription;
    isDeleted?: Prisma.BoolWithAggregatesFilter<"Recruiter"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Recruiter"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Recruiter"> | Date | string;
};
export type RecruiterCreateInput = {
    id?: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRecruiterInput;
    industry?: Prisma.IndustryCreateNestedOneWithoutRecruitersInput;
    subIndustry?: Prisma.SubIndustryCreateNestedOneWithoutRecruitersInput;
    jobs?: Prisma.JobCreateNestedManyWithoutRecruiterInput;
};
export type RecruiterUncheckedCreateInput = {
    id?: string;
    userId: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    industryId?: string | null;
    subIndustryId?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: Prisma.JobUncheckedCreateNestedManyWithoutRecruiterInput;
};
export type RecruiterUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRecruiterNestedInput;
    industry?: Prisma.IndustryUpdateOneWithoutRecruitersNestedInput;
    subIndustry?: Prisma.SubIndustryUpdateOneWithoutRecruitersNestedInput;
    jobs?: Prisma.JobUpdateManyWithoutRecruiterNestedInput;
};
export type RecruiterUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subIndustryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: Prisma.JobUncheckedUpdateManyWithoutRecruiterNestedInput;
};
export type RecruiterCreateManyInput = {
    id?: string;
    userId: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    industryId?: string | null;
    subIndustryId?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RecruiterUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruiterUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subIndustryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruiterNullableScalarRelationFilter = {
    is?: Prisma.RecruiterWhereInput | null;
    isNot?: Prisma.RecruiterWhereInput | null;
};
export type RecruiterScalarRelationFilter = {
    is?: Prisma.RecruiterWhereInput;
    isNot?: Prisma.RecruiterWhereInput;
};
export type RecruiterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    recruiterName?: Prisma.SortOrder;
    recruiterPhone?: Prisma.SortOrder;
    recruiterWorkEmail?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyLogo?: Prisma.SortOrder;
    companyWebsite?: Prisma.SortOrder;
    companyFacebookId?: Prisma.SortOrder;
    companyLinkedInId?: Prisma.SortOrder;
    companySize?: Prisma.SortOrder;
    companyAddress?: Prisma.SortOrder;
    industryId?: Prisma.SortOrder;
    subIndustryId?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    subscriptionPlan?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RecruiterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    recruiterName?: Prisma.SortOrder;
    recruiterPhone?: Prisma.SortOrder;
    recruiterWorkEmail?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyLogo?: Prisma.SortOrder;
    companyWebsite?: Prisma.SortOrder;
    companyFacebookId?: Prisma.SortOrder;
    companyLinkedInId?: Prisma.SortOrder;
    companySize?: Prisma.SortOrder;
    companyAddress?: Prisma.SortOrder;
    industryId?: Prisma.SortOrder;
    subIndustryId?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    subscriptionPlan?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RecruiterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    recruiterName?: Prisma.SortOrder;
    recruiterPhone?: Prisma.SortOrder;
    recruiterWorkEmail?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyLogo?: Prisma.SortOrder;
    companyWebsite?: Prisma.SortOrder;
    companyFacebookId?: Prisma.SortOrder;
    companyLinkedInId?: Prisma.SortOrder;
    companySize?: Prisma.SortOrder;
    companyAddress?: Prisma.SortOrder;
    industryId?: Prisma.SortOrder;
    subIndustryId?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    subscriptionPlan?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RecruiterListRelationFilter = {
    every?: Prisma.RecruiterWhereInput;
    some?: Prisma.RecruiterWhereInput;
    none?: Prisma.RecruiterWhereInput;
};
export type RecruiterOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RecruiterCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutUserInput, Prisma.RecruiterUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutUserInput;
    connect?: Prisma.RecruiterWhereUniqueInput;
};
export type RecruiterUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutUserInput, Prisma.RecruiterUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutUserInput;
    connect?: Prisma.RecruiterWhereUniqueInput;
};
export type RecruiterUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutUserInput, Prisma.RecruiterUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutUserInput;
    upsert?: Prisma.RecruiterUpsertWithoutUserInput;
    disconnect?: Prisma.RecruiterWhereInput | boolean;
    delete?: Prisma.RecruiterWhereInput | boolean;
    connect?: Prisma.RecruiterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecruiterUpdateToOneWithWhereWithoutUserInput, Prisma.RecruiterUpdateWithoutUserInput>, Prisma.RecruiterUncheckedUpdateWithoutUserInput>;
};
export type RecruiterUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutUserInput, Prisma.RecruiterUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutUserInput;
    upsert?: Prisma.RecruiterUpsertWithoutUserInput;
    disconnect?: Prisma.RecruiterWhereInput | boolean;
    delete?: Prisma.RecruiterWhereInput | boolean;
    connect?: Prisma.RecruiterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecruiterUpdateToOneWithWhereWithoutUserInput, Prisma.RecruiterUpdateWithoutUserInput>, Prisma.RecruiterUncheckedUpdateWithoutUserInput>;
};
export type RecruiterCreateNestedOneWithoutJobsInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutJobsInput, Prisma.RecruiterUncheckedCreateWithoutJobsInput>;
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutJobsInput;
    connect?: Prisma.RecruiterWhereUniqueInput;
};
export type RecruiterUpdateOneRequiredWithoutJobsNestedInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutJobsInput, Prisma.RecruiterUncheckedCreateWithoutJobsInput>;
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutJobsInput;
    upsert?: Prisma.RecruiterUpsertWithoutJobsInput;
    connect?: Prisma.RecruiterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecruiterUpdateToOneWithWhereWithoutJobsInput, Prisma.RecruiterUpdateWithoutJobsInput>, Prisma.RecruiterUncheckedUpdateWithoutJobsInput>;
};
export type NullableEnumCompanySizeFieldUpdateOperationsInput = {
    set?: $Enums.CompanySize | null;
};
export type EnumSubscriptionFieldUpdateOperationsInput = {
    set?: $Enums.Subscription;
};
export type RecruiterCreateNestedManyWithoutIndustryInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutIndustryInput, Prisma.RecruiterUncheckedCreateWithoutIndustryInput> | Prisma.RecruiterCreateWithoutIndustryInput[] | Prisma.RecruiterUncheckedCreateWithoutIndustryInput[];
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutIndustryInput | Prisma.RecruiterCreateOrConnectWithoutIndustryInput[];
    createMany?: Prisma.RecruiterCreateManyIndustryInputEnvelope;
    connect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
};
export type RecruiterUncheckedCreateNestedManyWithoutIndustryInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutIndustryInput, Prisma.RecruiterUncheckedCreateWithoutIndustryInput> | Prisma.RecruiterCreateWithoutIndustryInput[] | Prisma.RecruiterUncheckedCreateWithoutIndustryInput[];
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutIndustryInput | Prisma.RecruiterCreateOrConnectWithoutIndustryInput[];
    createMany?: Prisma.RecruiterCreateManyIndustryInputEnvelope;
    connect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
};
export type RecruiterUpdateManyWithoutIndustryNestedInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutIndustryInput, Prisma.RecruiterUncheckedCreateWithoutIndustryInput> | Prisma.RecruiterCreateWithoutIndustryInput[] | Prisma.RecruiterUncheckedCreateWithoutIndustryInput[];
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutIndustryInput | Prisma.RecruiterCreateOrConnectWithoutIndustryInput[];
    upsert?: Prisma.RecruiterUpsertWithWhereUniqueWithoutIndustryInput | Prisma.RecruiterUpsertWithWhereUniqueWithoutIndustryInput[];
    createMany?: Prisma.RecruiterCreateManyIndustryInputEnvelope;
    set?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    disconnect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    delete?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    connect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    update?: Prisma.RecruiterUpdateWithWhereUniqueWithoutIndustryInput | Prisma.RecruiterUpdateWithWhereUniqueWithoutIndustryInput[];
    updateMany?: Prisma.RecruiterUpdateManyWithWhereWithoutIndustryInput | Prisma.RecruiterUpdateManyWithWhereWithoutIndustryInput[];
    deleteMany?: Prisma.RecruiterScalarWhereInput | Prisma.RecruiterScalarWhereInput[];
};
export type RecruiterUncheckedUpdateManyWithoutIndustryNestedInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutIndustryInput, Prisma.RecruiterUncheckedCreateWithoutIndustryInput> | Prisma.RecruiterCreateWithoutIndustryInput[] | Prisma.RecruiterUncheckedCreateWithoutIndustryInput[];
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutIndustryInput | Prisma.RecruiterCreateOrConnectWithoutIndustryInput[];
    upsert?: Prisma.RecruiterUpsertWithWhereUniqueWithoutIndustryInput | Prisma.RecruiterUpsertWithWhereUniqueWithoutIndustryInput[];
    createMany?: Prisma.RecruiterCreateManyIndustryInputEnvelope;
    set?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    disconnect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    delete?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    connect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    update?: Prisma.RecruiterUpdateWithWhereUniqueWithoutIndustryInput | Prisma.RecruiterUpdateWithWhereUniqueWithoutIndustryInput[];
    updateMany?: Prisma.RecruiterUpdateManyWithWhereWithoutIndustryInput | Prisma.RecruiterUpdateManyWithWhereWithoutIndustryInput[];
    deleteMany?: Prisma.RecruiterScalarWhereInput | Prisma.RecruiterScalarWhereInput[];
};
export type RecruiterCreateNestedManyWithoutSubIndustryInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutSubIndustryInput, Prisma.RecruiterUncheckedCreateWithoutSubIndustryInput> | Prisma.RecruiterCreateWithoutSubIndustryInput[] | Prisma.RecruiterUncheckedCreateWithoutSubIndustryInput[];
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutSubIndustryInput | Prisma.RecruiterCreateOrConnectWithoutSubIndustryInput[];
    createMany?: Prisma.RecruiterCreateManySubIndustryInputEnvelope;
    connect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
};
export type RecruiterUncheckedCreateNestedManyWithoutSubIndustryInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutSubIndustryInput, Prisma.RecruiterUncheckedCreateWithoutSubIndustryInput> | Prisma.RecruiterCreateWithoutSubIndustryInput[] | Prisma.RecruiterUncheckedCreateWithoutSubIndustryInput[];
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutSubIndustryInput | Prisma.RecruiterCreateOrConnectWithoutSubIndustryInput[];
    createMany?: Prisma.RecruiterCreateManySubIndustryInputEnvelope;
    connect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
};
export type RecruiterUpdateManyWithoutSubIndustryNestedInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutSubIndustryInput, Prisma.RecruiterUncheckedCreateWithoutSubIndustryInput> | Prisma.RecruiterCreateWithoutSubIndustryInput[] | Prisma.RecruiterUncheckedCreateWithoutSubIndustryInput[];
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutSubIndustryInput | Prisma.RecruiterCreateOrConnectWithoutSubIndustryInput[];
    upsert?: Prisma.RecruiterUpsertWithWhereUniqueWithoutSubIndustryInput | Prisma.RecruiterUpsertWithWhereUniqueWithoutSubIndustryInput[];
    createMany?: Prisma.RecruiterCreateManySubIndustryInputEnvelope;
    set?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    disconnect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    delete?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    connect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    update?: Prisma.RecruiterUpdateWithWhereUniqueWithoutSubIndustryInput | Prisma.RecruiterUpdateWithWhereUniqueWithoutSubIndustryInput[];
    updateMany?: Prisma.RecruiterUpdateManyWithWhereWithoutSubIndustryInput | Prisma.RecruiterUpdateManyWithWhereWithoutSubIndustryInput[];
    deleteMany?: Prisma.RecruiterScalarWhereInput | Prisma.RecruiterScalarWhereInput[];
};
export type RecruiterUncheckedUpdateManyWithoutSubIndustryNestedInput = {
    create?: Prisma.XOR<Prisma.RecruiterCreateWithoutSubIndustryInput, Prisma.RecruiterUncheckedCreateWithoutSubIndustryInput> | Prisma.RecruiterCreateWithoutSubIndustryInput[] | Prisma.RecruiterUncheckedCreateWithoutSubIndustryInput[];
    connectOrCreate?: Prisma.RecruiterCreateOrConnectWithoutSubIndustryInput | Prisma.RecruiterCreateOrConnectWithoutSubIndustryInput[];
    upsert?: Prisma.RecruiterUpsertWithWhereUniqueWithoutSubIndustryInput | Prisma.RecruiterUpsertWithWhereUniqueWithoutSubIndustryInput[];
    createMany?: Prisma.RecruiterCreateManySubIndustryInputEnvelope;
    set?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    disconnect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    delete?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    connect?: Prisma.RecruiterWhereUniqueInput | Prisma.RecruiterWhereUniqueInput[];
    update?: Prisma.RecruiterUpdateWithWhereUniqueWithoutSubIndustryInput | Prisma.RecruiterUpdateWithWhereUniqueWithoutSubIndustryInput[];
    updateMany?: Prisma.RecruiterUpdateManyWithWhereWithoutSubIndustryInput | Prisma.RecruiterUpdateManyWithWhereWithoutSubIndustryInput[];
    deleteMany?: Prisma.RecruiterScalarWhereInput | Prisma.RecruiterScalarWhereInput[];
};
export type RecruiterCreateWithoutUserInput = {
    id?: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    industry?: Prisma.IndustryCreateNestedOneWithoutRecruitersInput;
    subIndustry?: Prisma.SubIndustryCreateNestedOneWithoutRecruitersInput;
    jobs?: Prisma.JobCreateNestedManyWithoutRecruiterInput;
};
export type RecruiterUncheckedCreateWithoutUserInput = {
    id?: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    industryId?: string | null;
    subIndustryId?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: Prisma.JobUncheckedCreateNestedManyWithoutRecruiterInput;
};
export type RecruiterCreateOrConnectWithoutUserInput = {
    where: Prisma.RecruiterWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecruiterCreateWithoutUserInput, Prisma.RecruiterUncheckedCreateWithoutUserInput>;
};
export type RecruiterUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.RecruiterUpdateWithoutUserInput, Prisma.RecruiterUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RecruiterCreateWithoutUserInput, Prisma.RecruiterUncheckedCreateWithoutUserInput>;
    where?: Prisma.RecruiterWhereInput;
};
export type RecruiterUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.RecruiterWhereInput;
    data: Prisma.XOR<Prisma.RecruiterUpdateWithoutUserInput, Prisma.RecruiterUncheckedUpdateWithoutUserInput>;
};
export type RecruiterUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: Prisma.IndustryUpdateOneWithoutRecruitersNestedInput;
    subIndustry?: Prisma.SubIndustryUpdateOneWithoutRecruitersNestedInput;
    jobs?: Prisma.JobUpdateManyWithoutRecruiterNestedInput;
};
export type RecruiterUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subIndustryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: Prisma.JobUncheckedUpdateManyWithoutRecruiterNestedInput;
};
export type RecruiterCreateWithoutJobsInput = {
    id?: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRecruiterInput;
    industry?: Prisma.IndustryCreateNestedOneWithoutRecruitersInput;
    subIndustry?: Prisma.SubIndustryCreateNestedOneWithoutRecruitersInput;
};
export type RecruiterUncheckedCreateWithoutJobsInput = {
    id?: string;
    userId: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    industryId?: string | null;
    subIndustryId?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RecruiterCreateOrConnectWithoutJobsInput = {
    where: Prisma.RecruiterWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecruiterCreateWithoutJobsInput, Prisma.RecruiterUncheckedCreateWithoutJobsInput>;
};
export type RecruiterUpsertWithoutJobsInput = {
    update: Prisma.XOR<Prisma.RecruiterUpdateWithoutJobsInput, Prisma.RecruiterUncheckedUpdateWithoutJobsInput>;
    create: Prisma.XOR<Prisma.RecruiterCreateWithoutJobsInput, Prisma.RecruiterUncheckedCreateWithoutJobsInput>;
    where?: Prisma.RecruiterWhereInput;
};
export type RecruiterUpdateToOneWithWhereWithoutJobsInput = {
    where?: Prisma.RecruiterWhereInput;
    data: Prisma.XOR<Prisma.RecruiterUpdateWithoutJobsInput, Prisma.RecruiterUncheckedUpdateWithoutJobsInput>;
};
export type RecruiterUpdateWithoutJobsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRecruiterNestedInput;
    industry?: Prisma.IndustryUpdateOneWithoutRecruitersNestedInput;
    subIndustry?: Prisma.SubIndustryUpdateOneWithoutRecruitersNestedInput;
};
export type RecruiterUncheckedUpdateWithoutJobsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subIndustryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruiterCreateWithoutIndustryInput = {
    id?: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRecruiterInput;
    subIndustry?: Prisma.SubIndustryCreateNestedOneWithoutRecruitersInput;
    jobs?: Prisma.JobCreateNestedManyWithoutRecruiterInput;
};
export type RecruiterUncheckedCreateWithoutIndustryInput = {
    id?: string;
    userId: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    subIndustryId?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: Prisma.JobUncheckedCreateNestedManyWithoutRecruiterInput;
};
export type RecruiterCreateOrConnectWithoutIndustryInput = {
    where: Prisma.RecruiterWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecruiterCreateWithoutIndustryInput, Prisma.RecruiterUncheckedCreateWithoutIndustryInput>;
};
export type RecruiterCreateManyIndustryInputEnvelope = {
    data: Prisma.RecruiterCreateManyIndustryInput | Prisma.RecruiterCreateManyIndustryInput[];
    skipDuplicates?: boolean;
};
export type RecruiterUpsertWithWhereUniqueWithoutIndustryInput = {
    where: Prisma.RecruiterWhereUniqueInput;
    update: Prisma.XOR<Prisma.RecruiterUpdateWithoutIndustryInput, Prisma.RecruiterUncheckedUpdateWithoutIndustryInput>;
    create: Prisma.XOR<Prisma.RecruiterCreateWithoutIndustryInput, Prisma.RecruiterUncheckedCreateWithoutIndustryInput>;
};
export type RecruiterUpdateWithWhereUniqueWithoutIndustryInput = {
    where: Prisma.RecruiterWhereUniqueInput;
    data: Prisma.XOR<Prisma.RecruiterUpdateWithoutIndustryInput, Prisma.RecruiterUncheckedUpdateWithoutIndustryInput>;
};
export type RecruiterUpdateManyWithWhereWithoutIndustryInput = {
    where: Prisma.RecruiterScalarWhereInput;
    data: Prisma.XOR<Prisma.RecruiterUpdateManyMutationInput, Prisma.RecruiterUncheckedUpdateManyWithoutIndustryInput>;
};
export type RecruiterScalarWhereInput = {
    AND?: Prisma.RecruiterScalarWhereInput | Prisma.RecruiterScalarWhereInput[];
    OR?: Prisma.RecruiterScalarWhereInput[];
    NOT?: Prisma.RecruiterScalarWhereInput | Prisma.RecruiterScalarWhereInput[];
    id?: Prisma.StringFilter<"Recruiter"> | string;
    userId?: Prisma.StringFilter<"Recruiter"> | string;
    recruiterName?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    recruiterPhone?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    recruiterWorkEmail?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyName?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyLogo?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyWebsite?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyFacebookId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companyLinkedInId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    companySize?: Prisma.EnumCompanySizeNullableFilter<"Recruiter"> | $Enums.CompanySize | null;
    companyAddress?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    industryId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    subIndustryId?: Prisma.StringNullableFilter<"Recruiter"> | string | null;
    isVerified?: Prisma.BoolFilter<"Recruiter"> | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFilter<"Recruiter"> | $Enums.Subscription;
    isDeleted?: Prisma.BoolFilter<"Recruiter"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Recruiter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Recruiter"> | Date | string;
};
export type RecruiterCreateWithoutSubIndustryInput = {
    id?: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRecruiterInput;
    industry?: Prisma.IndustryCreateNestedOneWithoutRecruitersInput;
    jobs?: Prisma.JobCreateNestedManyWithoutRecruiterInput;
};
export type RecruiterUncheckedCreateWithoutSubIndustryInput = {
    id?: string;
    userId: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    industryId?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: Prisma.JobUncheckedCreateNestedManyWithoutRecruiterInput;
};
export type RecruiterCreateOrConnectWithoutSubIndustryInput = {
    where: Prisma.RecruiterWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecruiterCreateWithoutSubIndustryInput, Prisma.RecruiterUncheckedCreateWithoutSubIndustryInput>;
};
export type RecruiterCreateManySubIndustryInputEnvelope = {
    data: Prisma.RecruiterCreateManySubIndustryInput | Prisma.RecruiterCreateManySubIndustryInput[];
    skipDuplicates?: boolean;
};
export type RecruiterUpsertWithWhereUniqueWithoutSubIndustryInput = {
    where: Prisma.RecruiterWhereUniqueInput;
    update: Prisma.XOR<Prisma.RecruiterUpdateWithoutSubIndustryInput, Prisma.RecruiterUncheckedUpdateWithoutSubIndustryInput>;
    create: Prisma.XOR<Prisma.RecruiterCreateWithoutSubIndustryInput, Prisma.RecruiterUncheckedCreateWithoutSubIndustryInput>;
};
export type RecruiterUpdateWithWhereUniqueWithoutSubIndustryInput = {
    where: Prisma.RecruiterWhereUniqueInput;
    data: Prisma.XOR<Prisma.RecruiterUpdateWithoutSubIndustryInput, Prisma.RecruiterUncheckedUpdateWithoutSubIndustryInput>;
};
export type RecruiterUpdateManyWithWhereWithoutSubIndustryInput = {
    where: Prisma.RecruiterScalarWhereInput;
    data: Prisma.XOR<Prisma.RecruiterUpdateManyMutationInput, Prisma.RecruiterUncheckedUpdateManyWithoutSubIndustryInput>;
};
export type RecruiterCreateManyIndustryInput = {
    id?: string;
    userId: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    subIndustryId?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RecruiterUpdateWithoutIndustryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRecruiterNestedInput;
    subIndustry?: Prisma.SubIndustryUpdateOneWithoutRecruitersNestedInput;
    jobs?: Prisma.JobUpdateManyWithoutRecruiterNestedInput;
};
export type RecruiterUncheckedUpdateWithoutIndustryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subIndustryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: Prisma.JobUncheckedUpdateManyWithoutRecruiterNestedInput;
};
export type RecruiterUncheckedUpdateManyWithoutIndustryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subIndustryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruiterCreateManySubIndustryInput = {
    id?: string;
    userId: string;
    recruiterName?: string | null;
    recruiterPhone?: string | null;
    recruiterWorkEmail?: string | null;
    companyName?: string | null;
    companyLogo?: string | null;
    companyWebsite?: string | null;
    companyFacebookId?: string | null;
    companyLinkedInId?: string | null;
    companySize?: $Enums.CompanySize | null;
    companyAddress?: string | null;
    industryId?: string | null;
    isVerified?: boolean;
    subscriptionPlan?: $Enums.Subscription;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RecruiterUpdateWithoutSubIndustryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRecruiterNestedInput;
    industry?: Prisma.IndustryUpdateOneWithoutRecruitersNestedInput;
    jobs?: Prisma.JobUpdateManyWithoutRecruiterNestedInput;
};
export type RecruiterUncheckedUpdateWithoutSubIndustryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: Prisma.JobUncheckedUpdateManyWithoutRecruiterNestedInput;
};
export type RecruiterUncheckedUpdateManyWithoutSubIndustryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recruiterName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recruiterWorkEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyWebsite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyFacebookId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyLinkedInId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companySize?: Prisma.NullableEnumCompanySizeFieldUpdateOperationsInput | $Enums.CompanySize | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    subscriptionPlan?: Prisma.EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type RecruiterCountOutputType
 */
export type RecruiterCountOutputType = {
    jobs: number;
};
export type RecruiterCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobs?: boolean | RecruiterCountOutputTypeCountJobsArgs;
};
/**
 * RecruiterCountOutputType without action
 */
export type RecruiterCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterCountOutputType
     */
    select?: Prisma.RecruiterCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RecruiterCountOutputType without action
 */
export type RecruiterCountOutputTypeCountJobsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobWhereInput;
};
export type RecruiterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    recruiterName?: boolean;
    recruiterPhone?: boolean;
    recruiterWorkEmail?: boolean;
    companyName?: boolean;
    companyLogo?: boolean;
    companyWebsite?: boolean;
    companyFacebookId?: boolean;
    companyLinkedInId?: boolean;
    companySize?: boolean;
    companyAddress?: boolean;
    industryId?: boolean;
    subIndustryId?: boolean;
    isVerified?: boolean;
    subscriptionPlan?: boolean;
    isDeleted?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    industry?: boolean | Prisma.Recruiter$industryArgs<ExtArgs>;
    subIndustry?: boolean | Prisma.Recruiter$subIndustryArgs<ExtArgs>;
    jobs?: boolean | Prisma.Recruiter$jobsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecruiterCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recruiter"]>;
export type RecruiterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    recruiterName?: boolean;
    recruiterPhone?: boolean;
    recruiterWorkEmail?: boolean;
    companyName?: boolean;
    companyLogo?: boolean;
    companyWebsite?: boolean;
    companyFacebookId?: boolean;
    companyLinkedInId?: boolean;
    companySize?: boolean;
    companyAddress?: boolean;
    industryId?: boolean;
    subIndustryId?: boolean;
    isVerified?: boolean;
    subscriptionPlan?: boolean;
    isDeleted?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    industry?: boolean | Prisma.Recruiter$industryArgs<ExtArgs>;
    subIndustry?: boolean | Prisma.Recruiter$subIndustryArgs<ExtArgs>;
}, ExtArgs["result"]["recruiter"]>;
export type RecruiterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    recruiterName?: boolean;
    recruiterPhone?: boolean;
    recruiterWorkEmail?: boolean;
    companyName?: boolean;
    companyLogo?: boolean;
    companyWebsite?: boolean;
    companyFacebookId?: boolean;
    companyLinkedInId?: boolean;
    companySize?: boolean;
    companyAddress?: boolean;
    industryId?: boolean;
    subIndustryId?: boolean;
    isVerified?: boolean;
    subscriptionPlan?: boolean;
    isDeleted?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    industry?: boolean | Prisma.Recruiter$industryArgs<ExtArgs>;
    subIndustry?: boolean | Prisma.Recruiter$subIndustryArgs<ExtArgs>;
}, ExtArgs["result"]["recruiter"]>;
export type RecruiterSelectScalar = {
    id?: boolean;
    userId?: boolean;
    recruiterName?: boolean;
    recruiterPhone?: boolean;
    recruiterWorkEmail?: boolean;
    companyName?: boolean;
    companyLogo?: boolean;
    companyWebsite?: boolean;
    companyFacebookId?: boolean;
    companyLinkedInId?: boolean;
    companySize?: boolean;
    companyAddress?: boolean;
    industryId?: boolean;
    subIndustryId?: boolean;
    isVerified?: boolean;
    subscriptionPlan?: boolean;
    isDeleted?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RecruiterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "recruiterName" | "recruiterPhone" | "recruiterWorkEmail" | "companyName" | "companyLogo" | "companyWebsite" | "companyFacebookId" | "companyLinkedInId" | "companySize" | "companyAddress" | "industryId" | "subIndustryId" | "isVerified" | "subscriptionPlan" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["recruiter"]>;
export type RecruiterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    industry?: boolean | Prisma.Recruiter$industryArgs<ExtArgs>;
    subIndustry?: boolean | Prisma.Recruiter$subIndustryArgs<ExtArgs>;
    jobs?: boolean | Prisma.Recruiter$jobsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecruiterCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RecruiterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    industry?: boolean | Prisma.Recruiter$industryArgs<ExtArgs>;
    subIndustry?: boolean | Prisma.Recruiter$subIndustryArgs<ExtArgs>;
};
export type RecruiterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    industry?: boolean | Prisma.Recruiter$industryArgs<ExtArgs>;
    subIndustry?: boolean | Prisma.Recruiter$subIndustryArgs<ExtArgs>;
};
export type $RecruiterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Recruiter";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        industry: Prisma.$IndustryPayload<ExtArgs> | null;
        subIndustry: Prisma.$SubIndustryPayload<ExtArgs> | null;
        jobs: Prisma.$JobPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        recruiterName: string | null;
        recruiterPhone: string | null;
        recruiterWorkEmail: string | null;
        companyName: string | null;
        companyLogo: string | null;
        companyWebsite: string | null;
        companyFacebookId: string | null;
        companyLinkedInId: string | null;
        companySize: $Enums.CompanySize | null;
        companyAddress: string | null;
        industryId: string | null;
        subIndustryId: string | null;
        isVerified: boolean;
        subscriptionPlan: $Enums.Subscription;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["recruiter"]>;
    composites: {};
};
export type RecruiterGetPayload<S extends boolean | null | undefined | RecruiterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RecruiterPayload, S>;
export type RecruiterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RecruiterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RecruiterCountAggregateInputType | true;
};
export interface RecruiterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Recruiter'];
        meta: {
            name: 'Recruiter';
        };
    };
    /**
     * Find zero or one Recruiter that matches the filter.
     * @param {RecruiterFindUniqueArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecruiterFindUniqueArgs>(args: Prisma.SelectSubset<T, RecruiterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RecruiterClient<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Recruiter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecruiterFindUniqueOrThrowArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecruiterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RecruiterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecruiterClient<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Recruiter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterFindFirstArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecruiterFindFirstArgs>(args?: Prisma.SelectSubset<T, RecruiterFindFirstArgs<ExtArgs>>): Prisma.Prisma__RecruiterClient<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Recruiter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterFindFirstOrThrowArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecruiterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RecruiterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecruiterClient<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Recruiters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recruiters
     * const recruiters = await prisma.recruiter.findMany()
     *
     * // Get first 10 Recruiters
     * const recruiters = await prisma.recruiter.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recruiterWithIdOnly = await prisma.recruiter.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RecruiterFindManyArgs>(args?: Prisma.SelectSubset<T, RecruiterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Recruiter.
     * @param {RecruiterCreateArgs} args - Arguments to create a Recruiter.
     * @example
     * // Create one Recruiter
     * const Recruiter = await prisma.recruiter.create({
     *   data: {
     *     // ... data to create a Recruiter
     *   }
     * })
     *
     */
    create<T extends RecruiterCreateArgs>(args: Prisma.SelectSubset<T, RecruiterCreateArgs<ExtArgs>>): Prisma.Prisma__RecruiterClient<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Recruiters.
     * @param {RecruiterCreateManyArgs} args - Arguments to create many Recruiters.
     * @example
     * // Create many Recruiters
     * const recruiter = await prisma.recruiter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RecruiterCreateManyArgs>(args?: Prisma.SelectSubset<T, RecruiterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Recruiters and returns the data saved in the database.
     * @param {RecruiterCreateManyAndReturnArgs} args - Arguments to create many Recruiters.
     * @example
     * // Create many Recruiters
     * const recruiter = await prisma.recruiter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Recruiters and only return the `id`
     * const recruiterWithIdOnly = await prisma.recruiter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RecruiterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RecruiterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Recruiter.
     * @param {RecruiterDeleteArgs} args - Arguments to delete one Recruiter.
     * @example
     * // Delete one Recruiter
     * const Recruiter = await prisma.recruiter.delete({
     *   where: {
     *     // ... filter to delete one Recruiter
     *   }
     * })
     *
     */
    delete<T extends RecruiterDeleteArgs>(args: Prisma.SelectSubset<T, RecruiterDeleteArgs<ExtArgs>>): Prisma.Prisma__RecruiterClient<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Recruiter.
     * @param {RecruiterUpdateArgs} args - Arguments to update one Recruiter.
     * @example
     * // Update one Recruiter
     * const recruiter = await prisma.recruiter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RecruiterUpdateArgs>(args: Prisma.SelectSubset<T, RecruiterUpdateArgs<ExtArgs>>): Prisma.Prisma__RecruiterClient<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Recruiters.
     * @param {RecruiterDeleteManyArgs} args - Arguments to filter Recruiters to delete.
     * @example
     * // Delete a few Recruiters
     * const { count } = await prisma.recruiter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RecruiterDeleteManyArgs>(args?: Prisma.SelectSubset<T, RecruiterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Recruiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recruiters
     * const recruiter = await prisma.recruiter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RecruiterUpdateManyArgs>(args: Prisma.SelectSubset<T, RecruiterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Recruiters and returns the data updated in the database.
     * @param {RecruiterUpdateManyAndReturnArgs} args - Arguments to update many Recruiters.
     * @example
     * // Update many Recruiters
     * const recruiter = await prisma.recruiter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Recruiters and only return the `id`
     * const recruiterWithIdOnly = await prisma.recruiter.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecruiterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RecruiterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Recruiter.
     * @param {RecruiterUpsertArgs} args - Arguments to update or create a Recruiter.
     * @example
     * // Update or create a Recruiter
     * const recruiter = await prisma.recruiter.upsert({
     *   create: {
     *     // ... data to create a Recruiter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recruiter we want to update
     *   }
     * })
     */
    upsert<T extends RecruiterUpsertArgs>(args: Prisma.SelectSubset<T, RecruiterUpsertArgs<ExtArgs>>): Prisma.Prisma__RecruiterClient<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Recruiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterCountArgs} args - Arguments to filter Recruiters to count.
     * @example
     * // Count the number of Recruiters
     * const count = await prisma.recruiter.count({
     *   where: {
     *     // ... the filter for the Recruiters we want to count
     *   }
     * })
    **/
    count<T extends RecruiterCountArgs>(args?: Prisma.Subset<T, RecruiterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RecruiterCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Recruiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecruiterAggregateArgs>(args: Prisma.Subset<T, RecruiterAggregateArgs>): Prisma.PrismaPromise<GetRecruiterAggregateType<T>>;
    /**
     * Group by Recruiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RecruiterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RecruiterGroupByArgs['orderBy'];
    } : {
        orderBy?: RecruiterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RecruiterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecruiterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Recruiter model
     */
    readonly fields: RecruiterFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Recruiter.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RecruiterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    industry<T extends Prisma.Recruiter$industryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recruiter$industryArgs<ExtArgs>>): Prisma.Prisma__IndustryClient<runtime.Types.Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    subIndustry<T extends Prisma.Recruiter$subIndustryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recruiter$subIndustryArgs<ExtArgs>>): Prisma.Prisma__SubIndustryClient<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    jobs<T extends Prisma.Recruiter$jobsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recruiter$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Recruiter model
 */
export interface RecruiterFieldRefs {
    readonly id: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly userId: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly recruiterName: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly recruiterPhone: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly recruiterWorkEmail: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly companyName: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly companyLogo: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly companyWebsite: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly companyFacebookId: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly companyLinkedInId: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly companySize: Prisma.FieldRef<"Recruiter", 'CompanySize'>;
    readonly companyAddress: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly industryId: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly subIndustryId: Prisma.FieldRef<"Recruiter", 'String'>;
    readonly isVerified: Prisma.FieldRef<"Recruiter", 'Boolean'>;
    readonly subscriptionPlan: Prisma.FieldRef<"Recruiter", 'Subscription'>;
    readonly isDeleted: Prisma.FieldRef<"Recruiter", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Recruiter", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Recruiter", 'DateTime'>;
}
/**
 * Recruiter findUnique
 */
export type RecruiterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterInclude<ExtArgs> | null;
    /**
     * Filter, which Recruiter to fetch.
     */
    where: Prisma.RecruiterWhereUniqueInput;
};
/**
 * Recruiter findUniqueOrThrow
 */
export type RecruiterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterInclude<ExtArgs> | null;
    /**
     * Filter, which Recruiter to fetch.
     */
    where: Prisma.RecruiterWhereUniqueInput;
};
/**
 * Recruiter findFirst
 */
export type RecruiterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterInclude<ExtArgs> | null;
    /**
     * Filter, which Recruiter to fetch.
     */
    where?: Prisma.RecruiterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recruiters to fetch.
     */
    orderBy?: Prisma.RecruiterOrderByWithRelationInput | Prisma.RecruiterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Recruiters.
     */
    cursor?: Prisma.RecruiterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recruiters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recruiters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Recruiters.
     */
    distinct?: Prisma.RecruiterScalarFieldEnum | Prisma.RecruiterScalarFieldEnum[];
};
/**
 * Recruiter findFirstOrThrow
 */
export type RecruiterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterInclude<ExtArgs> | null;
    /**
     * Filter, which Recruiter to fetch.
     */
    where?: Prisma.RecruiterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recruiters to fetch.
     */
    orderBy?: Prisma.RecruiterOrderByWithRelationInput | Prisma.RecruiterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Recruiters.
     */
    cursor?: Prisma.RecruiterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recruiters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recruiters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Recruiters.
     */
    distinct?: Prisma.RecruiterScalarFieldEnum | Prisma.RecruiterScalarFieldEnum[];
};
/**
 * Recruiter findMany
 */
export type RecruiterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterInclude<ExtArgs> | null;
    /**
     * Filter, which Recruiters to fetch.
     */
    where?: Prisma.RecruiterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recruiters to fetch.
     */
    orderBy?: Prisma.RecruiterOrderByWithRelationInput | Prisma.RecruiterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Recruiters.
     */
    cursor?: Prisma.RecruiterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recruiters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recruiters.
     */
    skip?: number;
    distinct?: Prisma.RecruiterScalarFieldEnum | Prisma.RecruiterScalarFieldEnum[];
};
/**
 * Recruiter create
 */
export type RecruiterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterInclude<ExtArgs> | null;
    /**
     * The data needed to create a Recruiter.
     */
    data: Prisma.XOR<Prisma.RecruiterCreateInput, Prisma.RecruiterUncheckedCreateInput>;
};
/**
 * Recruiter createMany
 */
export type RecruiterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recruiters.
     */
    data: Prisma.RecruiterCreateManyInput | Prisma.RecruiterCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Recruiter createManyAndReturn
 */
export type RecruiterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * The data used to create many Recruiters.
     */
    data: Prisma.RecruiterCreateManyInput | Prisma.RecruiterCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Recruiter update
 */
export type RecruiterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterInclude<ExtArgs> | null;
    /**
     * The data needed to update a Recruiter.
     */
    data: Prisma.XOR<Prisma.RecruiterUpdateInput, Prisma.RecruiterUncheckedUpdateInput>;
    /**
     * Choose, which Recruiter to update.
     */
    where: Prisma.RecruiterWhereUniqueInput;
};
/**
 * Recruiter updateMany
 */
export type RecruiterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Recruiters.
     */
    data: Prisma.XOR<Prisma.RecruiterUpdateManyMutationInput, Prisma.RecruiterUncheckedUpdateManyInput>;
    /**
     * Filter which Recruiters to update
     */
    where?: Prisma.RecruiterWhereInput;
    /**
     * Limit how many Recruiters to update.
     */
    limit?: number;
};
/**
 * Recruiter updateManyAndReturn
 */
export type RecruiterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * The data used to update Recruiters.
     */
    data: Prisma.XOR<Prisma.RecruiterUpdateManyMutationInput, Prisma.RecruiterUncheckedUpdateManyInput>;
    /**
     * Filter which Recruiters to update
     */
    where?: Prisma.RecruiterWhereInput;
    /**
     * Limit how many Recruiters to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Recruiter upsert
 */
export type RecruiterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterInclude<ExtArgs> | null;
    /**
     * The filter to search for the Recruiter to update in case it exists.
     */
    where: Prisma.RecruiterWhereUniqueInput;
    /**
     * In case the Recruiter found by the `where` argument doesn't exist, create a new Recruiter with this data.
     */
    create: Prisma.XOR<Prisma.RecruiterCreateInput, Prisma.RecruiterUncheckedCreateInput>;
    /**
     * In case the Recruiter was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RecruiterUpdateInput, Prisma.RecruiterUncheckedUpdateInput>;
};
/**
 * Recruiter delete
 */
export type RecruiterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterInclude<ExtArgs> | null;
    /**
     * Filter which Recruiter to delete.
     */
    where: Prisma.RecruiterWhereUniqueInput;
};
/**
 * Recruiter deleteMany
 */
export type RecruiterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Recruiters to delete
     */
    where?: Prisma.RecruiterWhereInput;
    /**
     * Limit how many Recruiters to delete.
     */
    limit?: number;
};
/**
 * Recruiter.industry
 */
export type Recruiter$industryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: Prisma.IndustrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Industry
     */
    omit?: Prisma.IndustryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IndustryInclude<ExtArgs> | null;
    where?: Prisma.IndustryWhereInput;
};
/**
 * Recruiter.subIndustry
 */
export type Recruiter$subIndustryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: Prisma.SubIndustrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: Prisma.SubIndustryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SubIndustryInclude<ExtArgs> | null;
    where?: Prisma.SubIndustryWhereInput;
};
/**
 * Recruiter.jobs
 */
export type Recruiter$jobsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.JobWhereInput;
    orderBy?: Prisma.JobOrderByWithRelationInput | Prisma.JobOrderByWithRelationInput[];
    cursor?: Prisma.JobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JobScalarFieldEnum | Prisma.JobScalarFieldEnum[];
};
/**
 * Recruiter without action
 */
export type RecruiterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: Prisma.RecruiterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: Prisma.RecruiterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruiterInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Recruiter.d.ts.map