import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Applicant
 *
 */
export type ApplicantModel = runtime.Types.Result.DefaultSelection<Prisma.$ApplicantPayload>;
export type AggregateApplicant = {
    _count: ApplicantCountAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
};
export type ApplicantMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    address: string | null;
    phone: string | null;
    cv: string | null;
    userType: $Enums.UserType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ApplicantMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    address: string | null;
    phone: string | null;
    cv: string | null;
    userType: $Enums.UserType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ApplicantCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    address: number;
    phone: number;
    cv: number;
    userType: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ApplicantMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    address?: true;
    phone?: true;
    cv?: true;
    userType?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ApplicantMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    address?: true;
    phone?: true;
    cv?: true;
    userType?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ApplicantCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    address?: true;
    phone?: true;
    cv?: true;
    userType?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ApplicantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Applicant to aggregate.
     */
    where?: Prisma.ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?: Prisma.ApplicantOrderByWithRelationInput | Prisma.ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Applicants
    **/
    _count?: true | ApplicantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ApplicantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ApplicantMaxAggregateInputType;
};
export type GetApplicantAggregateType<T extends ApplicantAggregateArgs> = {
    [P in keyof T & keyof AggregateApplicant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApplicant[P]> : Prisma.GetScalarType<T[P], AggregateApplicant[P]>;
};
export type ApplicantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicantWhereInput;
    orderBy?: Prisma.ApplicantOrderByWithAggregationInput | Prisma.ApplicantOrderByWithAggregationInput[];
    by: Prisma.ApplicantScalarFieldEnum[] | Prisma.ApplicantScalarFieldEnum;
    having?: Prisma.ApplicantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicantCountAggregateInputType | true;
    _min?: ApplicantMinAggregateInputType;
    _max?: ApplicantMaxAggregateInputType;
};
export type ApplicantGroupByOutputType = {
    id: string;
    userId: string;
    name: string | null;
    address: string | null;
    phone: string | null;
    cv: string | null;
    userType: $Enums.UserType;
    createdAt: Date;
    updatedAt: Date;
    _count: ApplicantCountAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
};
type GetApplicantGroupByPayload<T extends ApplicantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApplicantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApplicantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApplicantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApplicantGroupByOutputType[P]>;
}>>;
export type ApplicantWhereInput = {
    AND?: Prisma.ApplicantWhereInput | Prisma.ApplicantWhereInput[];
    OR?: Prisma.ApplicantWhereInput[];
    NOT?: Prisma.ApplicantWhereInput | Prisma.ApplicantWhereInput[];
    id?: Prisma.StringFilter<"Applicant"> | string;
    userId?: Prisma.StringFilter<"Applicant"> | string;
    name?: Prisma.StringNullableFilter<"Applicant"> | string | null;
    address?: Prisma.StringNullableFilter<"Applicant"> | string | null;
    phone?: Prisma.StringNullableFilter<"Applicant"> | string | null;
    cv?: Prisma.StringNullableFilter<"Applicant"> | string | null;
    userType?: Prisma.EnumUserTypeFilter<"Applicant"> | $Enums.UserType;
    createdAt?: Prisma.DateTimeFilter<"Applicant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Applicant"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    applications?: Prisma.ApplicationListRelationFilter;
    coursePurchases?: Prisma.CoursePurchaseListRelationFilter;
};
export type ApplicantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    cv?: Prisma.SortOrderInput | Prisma.SortOrder;
    userType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    applications?: Prisma.ApplicationOrderByRelationAggregateInput;
    coursePurchases?: Prisma.CoursePurchaseOrderByRelationAggregateInput;
};
export type ApplicantWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.ApplicantWhereInput | Prisma.ApplicantWhereInput[];
    OR?: Prisma.ApplicantWhereInput[];
    NOT?: Prisma.ApplicantWhereInput | Prisma.ApplicantWhereInput[];
    name?: Prisma.StringNullableFilter<"Applicant"> | string | null;
    address?: Prisma.StringNullableFilter<"Applicant"> | string | null;
    phone?: Prisma.StringNullableFilter<"Applicant"> | string | null;
    cv?: Prisma.StringNullableFilter<"Applicant"> | string | null;
    userType?: Prisma.EnumUserTypeFilter<"Applicant"> | $Enums.UserType;
    createdAt?: Prisma.DateTimeFilter<"Applicant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Applicant"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    applications?: Prisma.ApplicationListRelationFilter;
    coursePurchases?: Prisma.CoursePurchaseListRelationFilter;
}, "id" | "userId">;
export type ApplicantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    cv?: Prisma.SortOrderInput | Prisma.SortOrder;
    userType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ApplicantCountOrderByAggregateInput;
    _max?: Prisma.ApplicantMaxOrderByAggregateInput;
    _min?: Prisma.ApplicantMinOrderByAggregateInput;
};
export type ApplicantScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApplicantScalarWhereWithAggregatesInput | Prisma.ApplicantScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApplicantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApplicantScalarWhereWithAggregatesInput | Prisma.ApplicantScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Applicant"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Applicant"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"Applicant"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Applicant"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Applicant"> | string | null;
    cv?: Prisma.StringNullableWithAggregatesFilter<"Applicant"> | string | null;
    userType?: Prisma.EnumUserTypeWithAggregatesFilter<"Applicant"> | $Enums.UserType;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Applicant"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Applicant"> | Date | string;
};
export type ApplicantCreateInput = {
    id?: string;
    name?: string | null;
    address?: string | null;
    phone?: string | null;
    cv?: string | null;
    userType?: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutApplicantInput;
    applications?: Prisma.ApplicationCreateNestedManyWithoutApplicantInput;
    coursePurchases?: Prisma.CoursePurchaseCreateNestedManyWithoutApplicantInput;
};
export type ApplicantUncheckedCreateInput = {
    id?: string;
    userId: string;
    name?: string | null;
    address?: string | null;
    phone?: string | null;
    cv?: string | null;
    userType?: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: Prisma.ApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    coursePurchases?: Prisma.CoursePurchaseUncheckedCreateNestedManyWithoutApplicantInput;
};
export type ApplicantUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userType?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutApplicantNestedInput;
    applications?: Prisma.ApplicationUpdateManyWithoutApplicantNestedInput;
    coursePurchases?: Prisma.CoursePurchaseUpdateManyWithoutApplicantNestedInput;
};
export type ApplicantUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userType?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    coursePurchases?: Prisma.CoursePurchaseUncheckedUpdateManyWithoutApplicantNestedInput;
};
export type ApplicantCreateManyInput = {
    id?: string;
    userId: string;
    name?: string | null;
    address?: string | null;
    phone?: string | null;
    cv?: string | null;
    userType?: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicantUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userType?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicantUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userType?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    cv?: Prisma.SortOrder;
    userType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    cv?: Prisma.SortOrder;
    userType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    cv?: Prisma.SortOrder;
    userType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicantScalarRelationFilter = {
    is?: Prisma.ApplicantWhereInput;
    isNot?: Prisma.ApplicantWhereInput;
};
export type ApplicantNullableScalarRelationFilter = {
    is?: Prisma.ApplicantWhereInput | null;
    isNot?: Prisma.ApplicantWhereInput | null;
};
export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType;
};
export type ApplicantCreateNestedOneWithoutApplicationsInput = {
    create?: Prisma.XOR<Prisma.ApplicantCreateWithoutApplicationsInput, Prisma.ApplicantUncheckedCreateWithoutApplicationsInput>;
    connectOrCreate?: Prisma.ApplicantCreateOrConnectWithoutApplicationsInput;
    connect?: Prisma.ApplicantWhereUniqueInput;
};
export type ApplicantUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicantCreateWithoutApplicationsInput, Prisma.ApplicantUncheckedCreateWithoutApplicationsInput>;
    connectOrCreate?: Prisma.ApplicantCreateOrConnectWithoutApplicationsInput;
    upsert?: Prisma.ApplicantUpsertWithoutApplicationsInput;
    connect?: Prisma.ApplicantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApplicantUpdateToOneWithWhereWithoutApplicationsInput, Prisma.ApplicantUpdateWithoutApplicationsInput>, Prisma.ApplicantUncheckedUpdateWithoutApplicationsInput>;
};
export type ApplicantCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ApplicantCreateWithoutUserInput, Prisma.ApplicantUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ApplicantCreateOrConnectWithoutUserInput;
    connect?: Prisma.ApplicantWhereUniqueInput;
};
export type ApplicantUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ApplicantCreateWithoutUserInput, Prisma.ApplicantUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ApplicantCreateOrConnectWithoutUserInput;
    connect?: Prisma.ApplicantWhereUniqueInput;
};
export type ApplicantUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicantCreateWithoutUserInput, Prisma.ApplicantUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ApplicantCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ApplicantUpsertWithoutUserInput;
    disconnect?: Prisma.ApplicantWhereInput | boolean;
    delete?: Prisma.ApplicantWhereInput | boolean;
    connect?: Prisma.ApplicantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApplicantUpdateToOneWithWhereWithoutUserInput, Prisma.ApplicantUpdateWithoutUserInput>, Prisma.ApplicantUncheckedUpdateWithoutUserInput>;
};
export type ApplicantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicantCreateWithoutUserInput, Prisma.ApplicantUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ApplicantCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ApplicantUpsertWithoutUserInput;
    disconnect?: Prisma.ApplicantWhereInput | boolean;
    delete?: Prisma.ApplicantWhereInput | boolean;
    connect?: Prisma.ApplicantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApplicantUpdateToOneWithWhereWithoutUserInput, Prisma.ApplicantUpdateWithoutUserInput>, Prisma.ApplicantUncheckedUpdateWithoutUserInput>;
};
export type ApplicantCreateNestedOneWithoutCoursePurchasesInput = {
    create?: Prisma.XOR<Prisma.ApplicantCreateWithoutCoursePurchasesInput, Prisma.ApplicantUncheckedCreateWithoutCoursePurchasesInput>;
    connectOrCreate?: Prisma.ApplicantCreateOrConnectWithoutCoursePurchasesInput;
    connect?: Prisma.ApplicantWhereUniqueInput;
};
export type ApplicantUpdateOneRequiredWithoutCoursePurchasesNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicantCreateWithoutCoursePurchasesInput, Prisma.ApplicantUncheckedCreateWithoutCoursePurchasesInput>;
    connectOrCreate?: Prisma.ApplicantCreateOrConnectWithoutCoursePurchasesInput;
    upsert?: Prisma.ApplicantUpsertWithoutCoursePurchasesInput;
    connect?: Prisma.ApplicantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApplicantUpdateToOneWithWhereWithoutCoursePurchasesInput, Prisma.ApplicantUpdateWithoutCoursePurchasesInput>, Prisma.ApplicantUncheckedUpdateWithoutCoursePurchasesInput>;
};
export type ApplicantCreateWithoutApplicationsInput = {
    id?: string;
    name?: string | null;
    address?: string | null;
    phone?: string | null;
    cv?: string | null;
    userType?: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutApplicantInput;
    coursePurchases?: Prisma.CoursePurchaseCreateNestedManyWithoutApplicantInput;
};
export type ApplicantUncheckedCreateWithoutApplicationsInput = {
    id?: string;
    userId: string;
    name?: string | null;
    address?: string | null;
    phone?: string | null;
    cv?: string | null;
    userType?: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coursePurchases?: Prisma.CoursePurchaseUncheckedCreateNestedManyWithoutApplicantInput;
};
export type ApplicantCreateOrConnectWithoutApplicationsInput = {
    where: Prisma.ApplicantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicantCreateWithoutApplicationsInput, Prisma.ApplicantUncheckedCreateWithoutApplicationsInput>;
};
export type ApplicantUpsertWithoutApplicationsInput = {
    update: Prisma.XOR<Prisma.ApplicantUpdateWithoutApplicationsInput, Prisma.ApplicantUncheckedUpdateWithoutApplicationsInput>;
    create: Prisma.XOR<Prisma.ApplicantCreateWithoutApplicationsInput, Prisma.ApplicantUncheckedCreateWithoutApplicationsInput>;
    where?: Prisma.ApplicantWhereInput;
};
export type ApplicantUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: Prisma.ApplicantWhereInput;
    data: Prisma.XOR<Prisma.ApplicantUpdateWithoutApplicationsInput, Prisma.ApplicantUncheckedUpdateWithoutApplicationsInput>;
};
export type ApplicantUpdateWithoutApplicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userType?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutApplicantNestedInput;
    coursePurchases?: Prisma.CoursePurchaseUpdateManyWithoutApplicantNestedInput;
};
export type ApplicantUncheckedUpdateWithoutApplicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userType?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    coursePurchases?: Prisma.CoursePurchaseUncheckedUpdateManyWithoutApplicantNestedInput;
};
export type ApplicantCreateWithoutUserInput = {
    id?: string;
    name?: string | null;
    address?: string | null;
    phone?: string | null;
    cv?: string | null;
    userType?: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: Prisma.ApplicationCreateNestedManyWithoutApplicantInput;
    coursePurchases?: Prisma.CoursePurchaseCreateNestedManyWithoutApplicantInput;
};
export type ApplicantUncheckedCreateWithoutUserInput = {
    id?: string;
    name?: string | null;
    address?: string | null;
    phone?: string | null;
    cv?: string | null;
    userType?: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: Prisma.ApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    coursePurchases?: Prisma.CoursePurchaseUncheckedCreateNestedManyWithoutApplicantInput;
};
export type ApplicantCreateOrConnectWithoutUserInput = {
    where: Prisma.ApplicantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicantCreateWithoutUserInput, Prisma.ApplicantUncheckedCreateWithoutUserInput>;
};
export type ApplicantUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ApplicantUpdateWithoutUserInput, Prisma.ApplicantUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ApplicantCreateWithoutUserInput, Prisma.ApplicantUncheckedCreateWithoutUserInput>;
    where?: Prisma.ApplicantWhereInput;
};
export type ApplicantUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ApplicantWhereInput;
    data: Prisma.XOR<Prisma.ApplicantUpdateWithoutUserInput, Prisma.ApplicantUncheckedUpdateWithoutUserInput>;
};
export type ApplicantUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userType?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUpdateManyWithoutApplicantNestedInput;
    coursePurchases?: Prisma.CoursePurchaseUpdateManyWithoutApplicantNestedInput;
};
export type ApplicantUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userType?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    coursePurchases?: Prisma.CoursePurchaseUncheckedUpdateManyWithoutApplicantNestedInput;
};
export type ApplicantCreateWithoutCoursePurchasesInput = {
    id?: string;
    name?: string | null;
    address?: string | null;
    phone?: string | null;
    cv?: string | null;
    userType?: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutApplicantInput;
    applications?: Prisma.ApplicationCreateNestedManyWithoutApplicantInput;
};
export type ApplicantUncheckedCreateWithoutCoursePurchasesInput = {
    id?: string;
    userId: string;
    name?: string | null;
    address?: string | null;
    phone?: string | null;
    cv?: string | null;
    userType?: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: Prisma.ApplicationUncheckedCreateNestedManyWithoutApplicantInput;
};
export type ApplicantCreateOrConnectWithoutCoursePurchasesInput = {
    where: Prisma.ApplicantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicantCreateWithoutCoursePurchasesInput, Prisma.ApplicantUncheckedCreateWithoutCoursePurchasesInput>;
};
export type ApplicantUpsertWithoutCoursePurchasesInput = {
    update: Prisma.XOR<Prisma.ApplicantUpdateWithoutCoursePurchasesInput, Prisma.ApplicantUncheckedUpdateWithoutCoursePurchasesInput>;
    create: Prisma.XOR<Prisma.ApplicantCreateWithoutCoursePurchasesInput, Prisma.ApplicantUncheckedCreateWithoutCoursePurchasesInput>;
    where?: Prisma.ApplicantWhereInput;
};
export type ApplicantUpdateToOneWithWhereWithoutCoursePurchasesInput = {
    where?: Prisma.ApplicantWhereInput;
    data: Prisma.XOR<Prisma.ApplicantUpdateWithoutCoursePurchasesInput, Prisma.ApplicantUncheckedUpdateWithoutCoursePurchasesInput>;
};
export type ApplicantUpdateWithoutCoursePurchasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userType?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutApplicantNestedInput;
    applications?: Prisma.ApplicationUpdateManyWithoutApplicantNestedInput;
};
export type ApplicantUncheckedUpdateWithoutCoursePurchasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cv?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userType?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
};
/**
 * Count Type ApplicantCountOutputType
 */
export type ApplicantCountOutputType = {
    applications: number;
    coursePurchases: number;
};
export type ApplicantCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applications?: boolean | ApplicantCountOutputTypeCountApplicationsArgs;
    coursePurchases?: boolean | ApplicantCountOutputTypeCountCoursePurchasesArgs;
};
/**
 * ApplicantCountOutputType without action
 */
export type ApplicantCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantCountOutputType
     */
    select?: Prisma.ApplicantCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ApplicantCountOutputType without action
 */
export type ApplicantCountOutputTypeCountApplicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationWhereInput;
};
/**
 * ApplicantCountOutputType without action
 */
export type ApplicantCountOutputTypeCountCoursePurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CoursePurchaseWhereInput;
};
export type ApplicantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    address?: boolean;
    phone?: boolean;
    cv?: boolean;
    userType?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    applications?: boolean | Prisma.Applicant$applicationsArgs<ExtArgs>;
    coursePurchases?: boolean | Prisma.Applicant$coursePurchasesArgs<ExtArgs>;
    _count?: boolean | Prisma.ApplicantCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["applicant"]>;
export type ApplicantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    address?: boolean;
    phone?: boolean;
    cv?: boolean;
    userType?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["applicant"]>;
export type ApplicantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    address?: boolean;
    phone?: boolean;
    cv?: boolean;
    userType?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["applicant"]>;
export type ApplicantSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    address?: boolean;
    phone?: boolean;
    cv?: boolean;
    userType?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ApplicantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "address" | "phone" | "cv" | "userType" | "createdAt" | "updatedAt", ExtArgs["result"]["applicant"]>;
export type ApplicantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    applications?: boolean | Prisma.Applicant$applicationsArgs<ExtArgs>;
    coursePurchases?: boolean | Prisma.Applicant$coursePurchasesArgs<ExtArgs>;
    _count?: boolean | Prisma.ApplicantCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ApplicantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ApplicantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ApplicantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Applicant";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        applications: Prisma.$ApplicationPayload<ExtArgs>[];
        coursePurchases: Prisma.$CoursePurchasePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        name: string | null;
        address: string | null;
        phone: string | null;
        cv: string | null;
        userType: $Enums.UserType;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["applicant"]>;
    composites: {};
};
export type ApplicantGetPayload<S extends boolean | null | undefined | ApplicantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApplicantPayload, S>;
export type ApplicantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApplicantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApplicantCountAggregateInputType | true;
};
export interface ApplicantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Applicant'];
        meta: {
            name: 'Applicant';
        };
    };
    /**
     * Find zero or one Applicant that matches the filter.
     * @param {ApplicantFindUniqueArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicantFindUniqueArgs>(args: Prisma.SelectSubset<T, ApplicantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApplicantClient<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Applicant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicantFindUniqueOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApplicantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicantClient<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Applicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicantFindFirstArgs>(args?: Prisma.SelectSubset<T, ApplicantFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApplicantClient<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Applicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApplicantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicantClient<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicant.findMany()
     *
     * // Get first 10 Applicants
     * const applicants = await prisma.applicant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicantWithIdOnly = await prisma.applicant.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApplicantFindManyArgs>(args?: Prisma.SelectSubset<T, ApplicantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Applicant.
     * @param {ApplicantCreateArgs} args - Arguments to create a Applicant.
     * @example
     * // Create one Applicant
     * const Applicant = await prisma.applicant.create({
     *   data: {
     *     // ... data to create a Applicant
     *   }
     * })
     *
     */
    create<T extends ApplicantCreateArgs>(args: Prisma.SelectSubset<T, ApplicantCreateArgs<ExtArgs>>): Prisma.Prisma__ApplicantClient<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Applicants.
     * @param {ApplicantCreateManyArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApplicantCreateManyArgs>(args?: Prisma.SelectSubset<T, ApplicantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Applicants and returns the data saved in the database.
     * @param {ApplicantCreateManyAndReturnArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Applicants and only return the `id`
     * const applicantWithIdOnly = await prisma.applicant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApplicantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApplicantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Applicant.
     * @param {ApplicantDeleteArgs} args - Arguments to delete one Applicant.
     * @example
     * // Delete one Applicant
     * const Applicant = await prisma.applicant.delete({
     *   where: {
     *     // ... filter to delete one Applicant
     *   }
     * })
     *
     */
    delete<T extends ApplicantDeleteArgs>(args: Prisma.SelectSubset<T, ApplicantDeleteArgs<ExtArgs>>): Prisma.Prisma__ApplicantClient<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Applicant.
     * @param {ApplicantUpdateArgs} args - Arguments to update one Applicant.
     * @example
     * // Update one Applicant
     * const applicant = await prisma.applicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApplicantUpdateArgs>(args: Prisma.SelectSubset<T, ApplicantUpdateArgs<ExtArgs>>): Prisma.Prisma__ApplicantClient<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Applicants.
     * @param {ApplicantDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApplicantDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApplicantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApplicantUpdateManyArgs>(args: Prisma.SelectSubset<T, ApplicantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Applicants and returns the data updated in the database.
     * @param {ApplicantUpdateManyAndReturnArgs} args - Arguments to update many Applicants.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Applicants and only return the `id`
     * const applicantWithIdOnly = await prisma.applicant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApplicantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Applicant.
     * @param {ApplicantUpsertArgs} args - Arguments to update or create a Applicant.
     * @example
     * // Update or create a Applicant
     * const applicant = await prisma.applicant.upsert({
     *   create: {
     *     // ... data to create a Applicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicant we want to update
     *   }
     * })
     */
    upsert<T extends ApplicantUpsertArgs>(args: Prisma.SelectSubset<T, ApplicantUpsertArgs<ExtArgs>>): Prisma.Prisma__ApplicantClient<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicant.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
    **/
    count<T extends ApplicantCountArgs>(args?: Prisma.Subset<T, ApplicantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApplicantCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicantAggregateArgs>(args: Prisma.Subset<T, ApplicantAggregateArgs>): Prisma.PrismaPromise<GetApplicantAggregateType<T>>;
    /**
     * Group by Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ApplicantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApplicantGroupByArgs['orderBy'];
    } : {
        orderBy?: ApplicantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApplicantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Applicant model
     */
    readonly fields: ApplicantFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Applicant.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ApplicantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    applications<T extends Prisma.Applicant$applicationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Applicant$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    coursePurchases<T extends Prisma.Applicant$coursePurchasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Applicant$coursePurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Applicant model
 */
export interface ApplicantFieldRefs {
    readonly id: Prisma.FieldRef<"Applicant", 'String'>;
    readonly userId: Prisma.FieldRef<"Applicant", 'String'>;
    readonly name: Prisma.FieldRef<"Applicant", 'String'>;
    readonly address: Prisma.FieldRef<"Applicant", 'String'>;
    readonly phone: Prisma.FieldRef<"Applicant", 'String'>;
    readonly cv: Prisma.FieldRef<"Applicant", 'String'>;
    readonly userType: Prisma.FieldRef<"Applicant", 'UserType'>;
    readonly createdAt: Prisma.FieldRef<"Applicant", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Applicant", 'DateTime'>;
}
/**
 * Applicant findUnique
 */
export type ApplicantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where: Prisma.ApplicantWhereUniqueInput;
};
/**
 * Applicant findUniqueOrThrow
 */
export type ApplicantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where: Prisma.ApplicantWhereUniqueInput;
};
/**
 * Applicant findFirst
 */
export type ApplicantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where?: Prisma.ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?: Prisma.ApplicantOrderByWithRelationInput | Prisma.ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applicants.
     */
    cursor?: Prisma.ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applicants.
     */
    distinct?: Prisma.ApplicantScalarFieldEnum | Prisma.ApplicantScalarFieldEnum[];
};
/**
 * Applicant findFirstOrThrow
 */
export type ApplicantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where?: Prisma.ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?: Prisma.ApplicantOrderByWithRelationInput | Prisma.ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applicants.
     */
    cursor?: Prisma.ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applicants.
     */
    distinct?: Prisma.ApplicantScalarFieldEnum | Prisma.ApplicantScalarFieldEnum[];
};
/**
 * Applicant findMany
 */
export type ApplicantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicants to fetch.
     */
    where?: Prisma.ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?: Prisma.ApplicantOrderByWithRelationInput | Prisma.ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Applicants.
     */
    cursor?: Prisma.ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    distinct?: Prisma.ApplicantScalarFieldEnum | Prisma.ApplicantScalarFieldEnum[];
};
/**
 * Applicant create
 */
export type ApplicantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantInclude<ExtArgs> | null;
    /**
     * The data needed to create a Applicant.
     */
    data: Prisma.XOR<Prisma.ApplicantCreateInput, Prisma.ApplicantUncheckedCreateInput>;
};
/**
 * Applicant createMany
 */
export type ApplicantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applicants.
     */
    data: Prisma.ApplicantCreateManyInput | Prisma.ApplicantCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Applicant createManyAndReturn
 */
export type ApplicantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * The data used to create many Applicants.
     */
    data: Prisma.ApplicantCreateManyInput | Prisma.ApplicantCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Applicant update
 */
export type ApplicantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantInclude<ExtArgs> | null;
    /**
     * The data needed to update a Applicant.
     */
    data: Prisma.XOR<Prisma.ApplicantUpdateInput, Prisma.ApplicantUncheckedUpdateInput>;
    /**
     * Choose, which Applicant to update.
     */
    where: Prisma.ApplicantWhereUniqueInput;
};
/**
 * Applicant updateMany
 */
export type ApplicantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Applicants.
     */
    data: Prisma.XOR<Prisma.ApplicantUpdateManyMutationInput, Prisma.ApplicantUncheckedUpdateManyInput>;
    /**
     * Filter which Applicants to update
     */
    where?: Prisma.ApplicantWhereInput;
    /**
     * Limit how many Applicants to update.
     */
    limit?: number;
};
/**
 * Applicant updateManyAndReturn
 */
export type ApplicantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * The data used to update Applicants.
     */
    data: Prisma.XOR<Prisma.ApplicantUpdateManyMutationInput, Prisma.ApplicantUncheckedUpdateManyInput>;
    /**
     * Filter which Applicants to update
     */
    where?: Prisma.ApplicantWhereInput;
    /**
     * Limit how many Applicants to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Applicant upsert
 */
export type ApplicantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantInclude<ExtArgs> | null;
    /**
     * The filter to search for the Applicant to update in case it exists.
     */
    where: Prisma.ApplicantWhereUniqueInput;
    /**
     * In case the Applicant found by the `where` argument doesn't exist, create a new Applicant with this data.
     */
    create: Prisma.XOR<Prisma.ApplicantCreateInput, Prisma.ApplicantUncheckedCreateInput>;
    /**
     * In case the Applicant was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ApplicantUpdateInput, Prisma.ApplicantUncheckedUpdateInput>;
};
/**
 * Applicant delete
 */
export type ApplicantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantInclude<ExtArgs> | null;
    /**
     * Filter which Applicant to delete.
     */
    where: Prisma.ApplicantWhereUniqueInput;
};
/**
 * Applicant deleteMany
 */
export type ApplicantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Applicants to delete
     */
    where?: Prisma.ApplicantWhereInput;
    /**
     * Limit how many Applicants to delete.
     */
    limit?: number;
};
/**
 * Applicant.applications
 */
export type Applicant$applicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Applicant.coursePurchases
 */
export type Applicant$coursePurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: Prisma.CoursePurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: Prisma.CoursePurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoursePurchaseInclude<ExtArgs> | null;
    where?: Prisma.CoursePurchaseWhereInput;
    orderBy?: Prisma.CoursePurchaseOrderByWithRelationInput | Prisma.CoursePurchaseOrderByWithRelationInput[];
    cursor?: Prisma.CoursePurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CoursePurchaseScalarFieldEnum | Prisma.CoursePurchaseScalarFieldEnum[];
};
/**
 * Applicant without action
 */
export type ApplicantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: Prisma.ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: Prisma.ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicantInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Applicant.d.ts.map