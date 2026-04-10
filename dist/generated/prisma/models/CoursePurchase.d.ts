import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model CoursePurchase
 *
 */
export type CoursePurchaseModel = runtime.Types.Result.DefaultSelection<Prisma.$CoursePurchasePayload>;
export type AggregateCoursePurchase = {
    _count: CoursePurchaseCountAggregateOutputType | null;
    _avg: CoursePurchaseAvgAggregateOutputType | null;
    _sum: CoursePurchaseSumAggregateOutputType | null;
    _min: CoursePurchaseMinAggregateOutputType | null;
    _max: CoursePurchaseMaxAggregateOutputType | null;
};
export type CoursePurchaseAvgAggregateOutputType = {
    amount: number | null;
};
export type CoursePurchaseSumAggregateOutputType = {
    amount: number | null;
};
export type CoursePurchaseMinAggregateOutputType = {
    id: string | null;
    applicantId: string | null;
    courseId: string | null;
    status: $Enums.CoursePurchaseStatus | null;
    amount: number | null;
    currency: string | null;
    stripeCheckoutSessionId: string | null;
    stripePaymentIntentId: string | null;
    paidAt: Date | null;
    accessExpiresAt: Date | null;
    receiptNumber: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CoursePurchaseMaxAggregateOutputType = {
    id: string | null;
    applicantId: string | null;
    courseId: string | null;
    status: $Enums.CoursePurchaseStatus | null;
    amount: number | null;
    currency: string | null;
    stripeCheckoutSessionId: string | null;
    stripePaymentIntentId: string | null;
    paidAt: Date | null;
    accessExpiresAt: Date | null;
    receiptNumber: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CoursePurchaseCountAggregateOutputType = {
    id: number;
    applicantId: number;
    courseId: number;
    status: number;
    amount: number;
    currency: number;
    stripeCheckoutSessionId: number;
    stripePaymentIntentId: number;
    paidAt: number;
    accessExpiresAt: number;
    receiptNumber: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CoursePurchaseAvgAggregateInputType = {
    amount?: true;
};
export type CoursePurchaseSumAggregateInputType = {
    amount?: true;
};
export type CoursePurchaseMinAggregateInputType = {
    id?: true;
    applicantId?: true;
    courseId?: true;
    status?: true;
    amount?: true;
    currency?: true;
    stripeCheckoutSessionId?: true;
    stripePaymentIntentId?: true;
    paidAt?: true;
    accessExpiresAt?: true;
    receiptNumber?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CoursePurchaseMaxAggregateInputType = {
    id?: true;
    applicantId?: true;
    courseId?: true;
    status?: true;
    amount?: true;
    currency?: true;
    stripeCheckoutSessionId?: true;
    stripePaymentIntentId?: true;
    paidAt?: true;
    accessExpiresAt?: true;
    receiptNumber?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CoursePurchaseCountAggregateInputType = {
    id?: true;
    applicantId?: true;
    courseId?: true;
    status?: true;
    amount?: true;
    currency?: true;
    stripeCheckoutSessionId?: true;
    stripePaymentIntentId?: true;
    paidAt?: true;
    accessExpiresAt?: true;
    receiptNumber?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CoursePurchaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePurchase to aggregate.
     */
    where?: Prisma.CoursePurchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: Prisma.CoursePurchaseOrderByWithRelationInput | Prisma.CoursePurchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CoursePurchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoursePurchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CoursePurchases
    **/
    _count?: true | CoursePurchaseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CoursePurchaseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CoursePurchaseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CoursePurchaseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CoursePurchaseMaxAggregateInputType;
};
export type GetCoursePurchaseAggregateType<T extends CoursePurchaseAggregateArgs> = {
    [P in keyof T & keyof AggregateCoursePurchase]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCoursePurchase[P]> : Prisma.GetScalarType<T[P], AggregateCoursePurchase[P]>;
};
export type CoursePurchaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CoursePurchaseWhereInput;
    orderBy?: Prisma.CoursePurchaseOrderByWithAggregationInput | Prisma.CoursePurchaseOrderByWithAggregationInput[];
    by: Prisma.CoursePurchaseScalarFieldEnum[] | Prisma.CoursePurchaseScalarFieldEnum;
    having?: Prisma.CoursePurchaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CoursePurchaseCountAggregateInputType | true;
    _avg?: CoursePurchaseAvgAggregateInputType;
    _sum?: CoursePurchaseSumAggregateInputType;
    _min?: CoursePurchaseMinAggregateInputType;
    _max?: CoursePurchaseMaxAggregateInputType;
};
export type CoursePurchaseGroupByOutputType = {
    id: string;
    applicantId: string;
    courseId: string;
    status: $Enums.CoursePurchaseStatus;
    amount: number;
    currency: string;
    stripeCheckoutSessionId: string | null;
    stripePaymentIntentId: string | null;
    paidAt: Date | null;
    accessExpiresAt: Date | null;
    receiptNumber: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CoursePurchaseCountAggregateOutputType | null;
    _avg: CoursePurchaseAvgAggregateOutputType | null;
    _sum: CoursePurchaseSumAggregateOutputType | null;
    _min: CoursePurchaseMinAggregateOutputType | null;
    _max: CoursePurchaseMaxAggregateOutputType | null;
};
type GetCoursePurchaseGroupByPayload<T extends CoursePurchaseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CoursePurchaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CoursePurchaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CoursePurchaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CoursePurchaseGroupByOutputType[P]>;
}>>;
export type CoursePurchaseWhereInput = {
    AND?: Prisma.CoursePurchaseWhereInput | Prisma.CoursePurchaseWhereInput[];
    OR?: Prisma.CoursePurchaseWhereInput[];
    NOT?: Prisma.CoursePurchaseWhereInput | Prisma.CoursePurchaseWhereInput[];
    id?: Prisma.StringFilter<"CoursePurchase"> | string;
    applicantId?: Prisma.StringFilter<"CoursePurchase"> | string;
    courseId?: Prisma.StringFilter<"CoursePurchase"> | string;
    status?: Prisma.EnumCoursePurchaseStatusFilter<"CoursePurchase"> | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFilter<"CoursePurchase"> | number;
    currency?: Prisma.StringFilter<"CoursePurchase"> | string;
    stripeCheckoutSessionId?: Prisma.StringNullableFilter<"CoursePurchase"> | string | null;
    stripePaymentIntentId?: Prisma.StringNullableFilter<"CoursePurchase"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"CoursePurchase"> | Date | string | null;
    accessExpiresAt?: Prisma.DateTimeNullableFilter<"CoursePurchase"> | Date | string | null;
    receiptNumber?: Prisma.StringNullableFilter<"CoursePurchase"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CoursePurchase"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CoursePurchase"> | Date | string;
    applicant?: Prisma.XOR<Prisma.ApplicantScalarRelationFilter, Prisma.ApplicantWhereInput>;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
};
export type CoursePurchaseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stripeCheckoutSessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    stripePaymentIntentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    accessExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    receiptNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    applicant?: Prisma.ApplicantOrderByWithRelationInput;
    course?: Prisma.CourseOrderByWithRelationInput;
};
export type CoursePurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    stripeCheckoutSessionId?: string;
    stripePaymentIntentId?: string;
    receiptNumber?: string;
    AND?: Prisma.CoursePurchaseWhereInput | Prisma.CoursePurchaseWhereInput[];
    OR?: Prisma.CoursePurchaseWhereInput[];
    NOT?: Prisma.CoursePurchaseWhereInput | Prisma.CoursePurchaseWhereInput[];
    applicantId?: Prisma.StringFilter<"CoursePurchase"> | string;
    courseId?: Prisma.StringFilter<"CoursePurchase"> | string;
    status?: Prisma.EnumCoursePurchaseStatusFilter<"CoursePurchase"> | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFilter<"CoursePurchase"> | number;
    currency?: Prisma.StringFilter<"CoursePurchase"> | string;
    paidAt?: Prisma.DateTimeNullableFilter<"CoursePurchase"> | Date | string | null;
    accessExpiresAt?: Prisma.DateTimeNullableFilter<"CoursePurchase"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CoursePurchase"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CoursePurchase"> | Date | string;
    applicant?: Prisma.XOR<Prisma.ApplicantScalarRelationFilter, Prisma.ApplicantWhereInput>;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
}, "id" | "stripeCheckoutSessionId" | "stripePaymentIntentId" | "receiptNumber">;
export type CoursePurchaseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stripeCheckoutSessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    stripePaymentIntentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    accessExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    receiptNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CoursePurchaseCountOrderByAggregateInput;
    _avg?: Prisma.CoursePurchaseAvgOrderByAggregateInput;
    _max?: Prisma.CoursePurchaseMaxOrderByAggregateInput;
    _min?: Prisma.CoursePurchaseMinOrderByAggregateInput;
    _sum?: Prisma.CoursePurchaseSumOrderByAggregateInput;
};
export type CoursePurchaseScalarWhereWithAggregatesInput = {
    AND?: Prisma.CoursePurchaseScalarWhereWithAggregatesInput | Prisma.CoursePurchaseScalarWhereWithAggregatesInput[];
    OR?: Prisma.CoursePurchaseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CoursePurchaseScalarWhereWithAggregatesInput | Prisma.CoursePurchaseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CoursePurchase"> | string;
    applicantId?: Prisma.StringWithAggregatesFilter<"CoursePurchase"> | string;
    courseId?: Prisma.StringWithAggregatesFilter<"CoursePurchase"> | string;
    status?: Prisma.EnumCoursePurchaseStatusWithAggregatesFilter<"CoursePurchase"> | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntWithAggregatesFilter<"CoursePurchase"> | number;
    currency?: Prisma.StringWithAggregatesFilter<"CoursePurchase"> | string;
    stripeCheckoutSessionId?: Prisma.StringNullableWithAggregatesFilter<"CoursePurchase"> | string | null;
    stripePaymentIntentId?: Prisma.StringNullableWithAggregatesFilter<"CoursePurchase"> | string | null;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CoursePurchase"> | Date | string | null;
    accessExpiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CoursePurchase"> | Date | string | null;
    receiptNumber?: Prisma.StringNullableWithAggregatesFilter<"CoursePurchase"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CoursePurchase"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CoursePurchase"> | Date | string;
};
export type CoursePurchaseCreateInput = {
    id?: string;
    status?: $Enums.CoursePurchaseStatus;
    amount: number;
    currency: string;
    stripeCheckoutSessionId?: string | null;
    stripePaymentIntentId?: string | null;
    paidAt?: Date | string | null;
    accessExpiresAt?: Date | string | null;
    receiptNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant: Prisma.ApplicantCreateNestedOneWithoutCoursePurchasesInput;
    course: Prisma.CourseCreateNestedOneWithoutPurchasesInput;
};
export type CoursePurchaseUncheckedCreateInput = {
    id?: string;
    applicantId: string;
    courseId: string;
    status?: $Enums.CoursePurchaseStatus;
    amount: number;
    currency: string;
    stripeCheckoutSessionId?: string | null;
    stripePaymentIntentId?: string | null;
    paidAt?: Date | string | null;
    accessExpiresAt?: Date | string | null;
    receiptNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoursePurchaseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCoursePurchaseStatusFieldUpdateOperationsInput | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeCheckoutSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripePaymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accessExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receiptNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: Prisma.ApplicantUpdateOneRequiredWithoutCoursePurchasesNestedInput;
    course?: Prisma.CourseUpdateOneRequiredWithoutPurchasesNestedInput;
};
export type CoursePurchaseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCoursePurchaseStatusFieldUpdateOperationsInput | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeCheckoutSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripePaymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accessExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receiptNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoursePurchaseCreateManyInput = {
    id?: string;
    applicantId: string;
    courseId: string;
    status?: $Enums.CoursePurchaseStatus;
    amount: number;
    currency: string;
    stripeCheckoutSessionId?: string | null;
    stripePaymentIntentId?: string | null;
    paidAt?: Date | string | null;
    accessExpiresAt?: Date | string | null;
    receiptNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoursePurchaseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCoursePurchaseStatusFieldUpdateOperationsInput | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeCheckoutSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripePaymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accessExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receiptNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoursePurchaseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCoursePurchaseStatusFieldUpdateOperationsInput | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeCheckoutSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripePaymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accessExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receiptNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoursePurchaseListRelationFilter = {
    every?: Prisma.CoursePurchaseWhereInput;
    some?: Prisma.CoursePurchaseWhereInput;
    none?: Prisma.CoursePurchaseWhereInput;
};
export type CoursePurchaseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CoursePurchaseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stripeCheckoutSessionId?: Prisma.SortOrder;
    stripePaymentIntentId?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    accessExpiresAt?: Prisma.SortOrder;
    receiptNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CoursePurchaseAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type CoursePurchaseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stripeCheckoutSessionId?: Prisma.SortOrder;
    stripePaymentIntentId?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    accessExpiresAt?: Prisma.SortOrder;
    receiptNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CoursePurchaseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stripeCheckoutSessionId?: Prisma.SortOrder;
    stripePaymentIntentId?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    accessExpiresAt?: Prisma.SortOrder;
    receiptNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CoursePurchaseSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type CoursePurchaseCreateNestedManyWithoutApplicantInput = {
    create?: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutApplicantInput, Prisma.CoursePurchaseUncheckedCreateWithoutApplicantInput> | Prisma.CoursePurchaseCreateWithoutApplicantInput[] | Prisma.CoursePurchaseUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.CoursePurchaseCreateOrConnectWithoutApplicantInput | Prisma.CoursePurchaseCreateOrConnectWithoutApplicantInput[];
    createMany?: Prisma.CoursePurchaseCreateManyApplicantInputEnvelope;
    connect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
};
export type CoursePurchaseUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutApplicantInput, Prisma.CoursePurchaseUncheckedCreateWithoutApplicantInput> | Prisma.CoursePurchaseCreateWithoutApplicantInput[] | Prisma.CoursePurchaseUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.CoursePurchaseCreateOrConnectWithoutApplicantInput | Prisma.CoursePurchaseCreateOrConnectWithoutApplicantInput[];
    createMany?: Prisma.CoursePurchaseCreateManyApplicantInputEnvelope;
    connect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
};
export type CoursePurchaseUpdateManyWithoutApplicantNestedInput = {
    create?: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutApplicantInput, Prisma.CoursePurchaseUncheckedCreateWithoutApplicantInput> | Prisma.CoursePurchaseCreateWithoutApplicantInput[] | Prisma.CoursePurchaseUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.CoursePurchaseCreateOrConnectWithoutApplicantInput | Prisma.CoursePurchaseCreateOrConnectWithoutApplicantInput[];
    upsert?: Prisma.CoursePurchaseUpsertWithWhereUniqueWithoutApplicantInput | Prisma.CoursePurchaseUpsertWithWhereUniqueWithoutApplicantInput[];
    createMany?: Prisma.CoursePurchaseCreateManyApplicantInputEnvelope;
    set?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    disconnect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    delete?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    connect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    update?: Prisma.CoursePurchaseUpdateWithWhereUniqueWithoutApplicantInput | Prisma.CoursePurchaseUpdateWithWhereUniqueWithoutApplicantInput[];
    updateMany?: Prisma.CoursePurchaseUpdateManyWithWhereWithoutApplicantInput | Prisma.CoursePurchaseUpdateManyWithWhereWithoutApplicantInput[];
    deleteMany?: Prisma.CoursePurchaseScalarWhereInput | Prisma.CoursePurchaseScalarWhereInput[];
};
export type CoursePurchaseUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutApplicantInput, Prisma.CoursePurchaseUncheckedCreateWithoutApplicantInput> | Prisma.CoursePurchaseCreateWithoutApplicantInput[] | Prisma.CoursePurchaseUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.CoursePurchaseCreateOrConnectWithoutApplicantInput | Prisma.CoursePurchaseCreateOrConnectWithoutApplicantInput[];
    upsert?: Prisma.CoursePurchaseUpsertWithWhereUniqueWithoutApplicantInput | Prisma.CoursePurchaseUpsertWithWhereUniqueWithoutApplicantInput[];
    createMany?: Prisma.CoursePurchaseCreateManyApplicantInputEnvelope;
    set?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    disconnect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    delete?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    connect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    update?: Prisma.CoursePurchaseUpdateWithWhereUniqueWithoutApplicantInput | Prisma.CoursePurchaseUpdateWithWhereUniqueWithoutApplicantInput[];
    updateMany?: Prisma.CoursePurchaseUpdateManyWithWhereWithoutApplicantInput | Prisma.CoursePurchaseUpdateManyWithWhereWithoutApplicantInput[];
    deleteMany?: Prisma.CoursePurchaseScalarWhereInput | Prisma.CoursePurchaseScalarWhereInput[];
};
export type CoursePurchaseCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutCourseInput, Prisma.CoursePurchaseUncheckedCreateWithoutCourseInput> | Prisma.CoursePurchaseCreateWithoutCourseInput[] | Prisma.CoursePurchaseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CoursePurchaseCreateOrConnectWithoutCourseInput | Prisma.CoursePurchaseCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.CoursePurchaseCreateManyCourseInputEnvelope;
    connect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
};
export type CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutCourseInput, Prisma.CoursePurchaseUncheckedCreateWithoutCourseInput> | Prisma.CoursePurchaseCreateWithoutCourseInput[] | Prisma.CoursePurchaseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CoursePurchaseCreateOrConnectWithoutCourseInput | Prisma.CoursePurchaseCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.CoursePurchaseCreateManyCourseInputEnvelope;
    connect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
};
export type CoursePurchaseUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutCourseInput, Prisma.CoursePurchaseUncheckedCreateWithoutCourseInput> | Prisma.CoursePurchaseCreateWithoutCourseInput[] | Prisma.CoursePurchaseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CoursePurchaseCreateOrConnectWithoutCourseInput | Prisma.CoursePurchaseCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput | Prisma.CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.CoursePurchaseCreateManyCourseInputEnvelope;
    set?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    disconnect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    delete?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    connect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    update?: Prisma.CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput | Prisma.CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.CoursePurchaseUpdateManyWithWhereWithoutCourseInput | Prisma.CoursePurchaseUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.CoursePurchaseScalarWhereInput | Prisma.CoursePurchaseScalarWhereInput[];
};
export type CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutCourseInput, Prisma.CoursePurchaseUncheckedCreateWithoutCourseInput> | Prisma.CoursePurchaseCreateWithoutCourseInput[] | Prisma.CoursePurchaseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.CoursePurchaseCreateOrConnectWithoutCourseInput | Prisma.CoursePurchaseCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput | Prisma.CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.CoursePurchaseCreateManyCourseInputEnvelope;
    set?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    disconnect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    delete?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    connect?: Prisma.CoursePurchaseWhereUniqueInput | Prisma.CoursePurchaseWhereUniqueInput[];
    update?: Prisma.CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput | Prisma.CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.CoursePurchaseUpdateManyWithWhereWithoutCourseInput | Prisma.CoursePurchaseUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.CoursePurchaseScalarWhereInput | Prisma.CoursePurchaseScalarWhereInput[];
};
export type EnumCoursePurchaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CoursePurchaseStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CoursePurchaseCreateWithoutApplicantInput = {
    id?: string;
    status?: $Enums.CoursePurchaseStatus;
    amount: number;
    currency: string;
    stripeCheckoutSessionId?: string | null;
    stripePaymentIntentId?: string | null;
    paidAt?: Date | string | null;
    accessExpiresAt?: Date | string | null;
    receiptNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutPurchasesInput;
};
export type CoursePurchaseUncheckedCreateWithoutApplicantInput = {
    id?: string;
    courseId: string;
    status?: $Enums.CoursePurchaseStatus;
    amount: number;
    currency: string;
    stripeCheckoutSessionId?: string | null;
    stripePaymentIntentId?: string | null;
    paidAt?: Date | string | null;
    accessExpiresAt?: Date | string | null;
    receiptNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoursePurchaseCreateOrConnectWithoutApplicantInput = {
    where: Prisma.CoursePurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutApplicantInput, Prisma.CoursePurchaseUncheckedCreateWithoutApplicantInput>;
};
export type CoursePurchaseCreateManyApplicantInputEnvelope = {
    data: Prisma.CoursePurchaseCreateManyApplicantInput | Prisma.CoursePurchaseCreateManyApplicantInput[];
    skipDuplicates?: boolean;
};
export type CoursePurchaseUpsertWithWhereUniqueWithoutApplicantInput = {
    where: Prisma.CoursePurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.CoursePurchaseUpdateWithoutApplicantInput, Prisma.CoursePurchaseUncheckedUpdateWithoutApplicantInput>;
    create: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutApplicantInput, Prisma.CoursePurchaseUncheckedCreateWithoutApplicantInput>;
};
export type CoursePurchaseUpdateWithWhereUniqueWithoutApplicantInput = {
    where: Prisma.CoursePurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.CoursePurchaseUpdateWithoutApplicantInput, Prisma.CoursePurchaseUncheckedUpdateWithoutApplicantInput>;
};
export type CoursePurchaseUpdateManyWithWhereWithoutApplicantInput = {
    where: Prisma.CoursePurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.CoursePurchaseUpdateManyMutationInput, Prisma.CoursePurchaseUncheckedUpdateManyWithoutApplicantInput>;
};
export type CoursePurchaseScalarWhereInput = {
    AND?: Prisma.CoursePurchaseScalarWhereInput | Prisma.CoursePurchaseScalarWhereInput[];
    OR?: Prisma.CoursePurchaseScalarWhereInput[];
    NOT?: Prisma.CoursePurchaseScalarWhereInput | Prisma.CoursePurchaseScalarWhereInput[];
    id?: Prisma.StringFilter<"CoursePurchase"> | string;
    applicantId?: Prisma.StringFilter<"CoursePurchase"> | string;
    courseId?: Prisma.StringFilter<"CoursePurchase"> | string;
    status?: Prisma.EnumCoursePurchaseStatusFilter<"CoursePurchase"> | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFilter<"CoursePurchase"> | number;
    currency?: Prisma.StringFilter<"CoursePurchase"> | string;
    stripeCheckoutSessionId?: Prisma.StringNullableFilter<"CoursePurchase"> | string | null;
    stripePaymentIntentId?: Prisma.StringNullableFilter<"CoursePurchase"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"CoursePurchase"> | Date | string | null;
    accessExpiresAt?: Prisma.DateTimeNullableFilter<"CoursePurchase"> | Date | string | null;
    receiptNumber?: Prisma.StringNullableFilter<"CoursePurchase"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CoursePurchase"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CoursePurchase"> | Date | string;
};
export type CoursePurchaseCreateWithoutCourseInput = {
    id?: string;
    status?: $Enums.CoursePurchaseStatus;
    amount: number;
    currency: string;
    stripeCheckoutSessionId?: string | null;
    stripePaymentIntentId?: string | null;
    paidAt?: Date | string | null;
    accessExpiresAt?: Date | string | null;
    receiptNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant: Prisma.ApplicantCreateNestedOneWithoutCoursePurchasesInput;
};
export type CoursePurchaseUncheckedCreateWithoutCourseInput = {
    id?: string;
    applicantId: string;
    status?: $Enums.CoursePurchaseStatus;
    amount: number;
    currency: string;
    stripeCheckoutSessionId?: string | null;
    stripePaymentIntentId?: string | null;
    paidAt?: Date | string | null;
    accessExpiresAt?: Date | string | null;
    receiptNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoursePurchaseCreateOrConnectWithoutCourseInput = {
    where: Prisma.CoursePurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutCourseInput, Prisma.CoursePurchaseUncheckedCreateWithoutCourseInput>;
};
export type CoursePurchaseCreateManyCourseInputEnvelope = {
    data: Prisma.CoursePurchaseCreateManyCourseInput | Prisma.CoursePurchaseCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.CoursePurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.CoursePurchaseUpdateWithoutCourseInput, Prisma.CoursePurchaseUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.CoursePurchaseCreateWithoutCourseInput, Prisma.CoursePurchaseUncheckedCreateWithoutCourseInput>;
};
export type CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.CoursePurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.CoursePurchaseUpdateWithoutCourseInput, Prisma.CoursePurchaseUncheckedUpdateWithoutCourseInput>;
};
export type CoursePurchaseUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.CoursePurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.CoursePurchaseUpdateManyMutationInput, Prisma.CoursePurchaseUncheckedUpdateManyWithoutCourseInput>;
};
export type CoursePurchaseCreateManyApplicantInput = {
    id?: string;
    courseId: string;
    status?: $Enums.CoursePurchaseStatus;
    amount: number;
    currency: string;
    stripeCheckoutSessionId?: string | null;
    stripePaymentIntentId?: string | null;
    paidAt?: Date | string | null;
    accessExpiresAt?: Date | string | null;
    receiptNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoursePurchaseUpdateWithoutApplicantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCoursePurchaseStatusFieldUpdateOperationsInput | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeCheckoutSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripePaymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accessExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receiptNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutPurchasesNestedInput;
};
export type CoursePurchaseUncheckedUpdateWithoutApplicantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCoursePurchaseStatusFieldUpdateOperationsInput | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeCheckoutSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripePaymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accessExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receiptNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoursePurchaseUncheckedUpdateManyWithoutApplicantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCoursePurchaseStatusFieldUpdateOperationsInput | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeCheckoutSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripePaymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accessExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receiptNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoursePurchaseCreateManyCourseInput = {
    id?: string;
    applicantId: string;
    status?: $Enums.CoursePurchaseStatus;
    amount: number;
    currency: string;
    stripeCheckoutSessionId?: string | null;
    stripePaymentIntentId?: string | null;
    paidAt?: Date | string | null;
    accessExpiresAt?: Date | string | null;
    receiptNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoursePurchaseUpdateWithoutCourseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCoursePurchaseStatusFieldUpdateOperationsInput | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeCheckoutSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripePaymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accessExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receiptNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: Prisma.ApplicantUpdateOneRequiredWithoutCoursePurchasesNestedInput;
};
export type CoursePurchaseUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCoursePurchaseStatusFieldUpdateOperationsInput | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeCheckoutSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripePaymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accessExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receiptNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoursePurchaseUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCoursePurchaseStatusFieldUpdateOperationsInput | $Enums.CoursePurchaseStatus;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeCheckoutSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripePaymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accessExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receiptNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoursePurchaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicantId?: boolean;
    courseId?: boolean;
    status?: boolean;
    amount?: boolean;
    currency?: boolean;
    stripeCheckoutSessionId?: boolean;
    stripePaymentIntentId?: boolean;
    paidAt?: boolean;
    accessExpiresAt?: boolean;
    receiptNumber?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    applicant?: boolean | Prisma.ApplicantDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coursePurchase"]>;
export type CoursePurchaseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicantId?: boolean;
    courseId?: boolean;
    status?: boolean;
    amount?: boolean;
    currency?: boolean;
    stripeCheckoutSessionId?: boolean;
    stripePaymentIntentId?: boolean;
    paidAt?: boolean;
    accessExpiresAt?: boolean;
    receiptNumber?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    applicant?: boolean | Prisma.ApplicantDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coursePurchase"]>;
export type CoursePurchaseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicantId?: boolean;
    courseId?: boolean;
    status?: boolean;
    amount?: boolean;
    currency?: boolean;
    stripeCheckoutSessionId?: boolean;
    stripePaymentIntentId?: boolean;
    paidAt?: boolean;
    accessExpiresAt?: boolean;
    receiptNumber?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    applicant?: boolean | Prisma.ApplicantDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coursePurchase"]>;
export type CoursePurchaseSelectScalar = {
    id?: boolean;
    applicantId?: boolean;
    courseId?: boolean;
    status?: boolean;
    amount?: boolean;
    currency?: boolean;
    stripeCheckoutSessionId?: boolean;
    stripePaymentIntentId?: boolean;
    paidAt?: boolean;
    accessExpiresAt?: boolean;
    receiptNumber?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CoursePurchaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "applicantId" | "courseId" | "status" | "amount" | "currency" | "stripeCheckoutSessionId" | "stripePaymentIntentId" | "paidAt" | "accessExpiresAt" | "receiptNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["coursePurchase"]>;
export type CoursePurchaseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applicant?: boolean | Prisma.ApplicantDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type CoursePurchaseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applicant?: boolean | Prisma.ApplicantDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type CoursePurchaseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applicant?: boolean | Prisma.ApplicantDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type $CoursePurchasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CoursePurchase";
    objects: {
        applicant: Prisma.$ApplicantPayload<ExtArgs>;
        course: Prisma.$CoursePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        applicantId: string;
        courseId: string;
        status: $Enums.CoursePurchaseStatus;
        /**
         * Snapshot at checkout: Stripe minor units (same as session amount_total)
         */
        amount: number;
        currency: string;
        stripeCheckoutSessionId: string | null;
        stripePaymentIntentId: string | null;
        paidAt: Date | null;
        /**
         * Set when PAID: null = unlimited access; otherwise paidAt + duration from course at checkout.
         */
        accessExpiresAt: Date | null;
        /**
         * Human-readable id for receipts (e.g. QH-2026-00001). Optional; can generate in app on first PAID.
         */
        receiptNumber: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["coursePurchase"]>;
    composites: {};
};
export type CoursePurchaseGetPayload<S extends boolean | null | undefined | CoursePurchaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload, S>;
export type CoursePurchaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CoursePurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CoursePurchaseCountAggregateInputType | true;
};
export interface CoursePurchaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CoursePurchase'];
        meta: {
            name: 'CoursePurchase';
        };
    };
    /**
     * Find zero or one CoursePurchase that matches the filter.
     * @param {CoursePurchaseFindUniqueArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursePurchaseFindUniqueArgs>(args: Prisma.SelectSubset<T, CoursePurchaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CoursePurchaseClient<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CoursePurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursePurchaseFindUniqueOrThrowArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursePurchaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CoursePurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CoursePurchaseClient<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CoursePurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseFindFirstArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursePurchaseFindFirstArgs>(args?: Prisma.SelectSubset<T, CoursePurchaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__CoursePurchaseClient<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CoursePurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseFindFirstOrThrowArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursePurchaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CoursePurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CoursePurchaseClient<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CoursePurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoursePurchases
     * const coursePurchases = await prisma.coursePurchase.findMany()
     *
     * // Get first 10 CoursePurchases
     * const coursePurchases = await prisma.coursePurchase.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const coursePurchaseWithIdOnly = await prisma.coursePurchase.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CoursePurchaseFindManyArgs>(args?: Prisma.SelectSubset<T, CoursePurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CoursePurchase.
     * @param {CoursePurchaseCreateArgs} args - Arguments to create a CoursePurchase.
     * @example
     * // Create one CoursePurchase
     * const CoursePurchase = await prisma.coursePurchase.create({
     *   data: {
     *     // ... data to create a CoursePurchase
     *   }
     * })
     *
     */
    create<T extends CoursePurchaseCreateArgs>(args: Prisma.SelectSubset<T, CoursePurchaseCreateArgs<ExtArgs>>): Prisma.Prisma__CoursePurchaseClient<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CoursePurchases.
     * @param {CoursePurchaseCreateManyArgs} args - Arguments to create many CoursePurchases.
     * @example
     * // Create many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CoursePurchaseCreateManyArgs>(args?: Prisma.SelectSubset<T, CoursePurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CoursePurchases and returns the data saved in the database.
     * @param {CoursePurchaseCreateManyAndReturnArgs} args - Arguments to create many CoursePurchases.
     * @example
     * // Create many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CoursePurchases and only return the `id`
     * const coursePurchaseWithIdOnly = await prisma.coursePurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CoursePurchaseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CoursePurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CoursePurchase.
     * @param {CoursePurchaseDeleteArgs} args - Arguments to delete one CoursePurchase.
     * @example
     * // Delete one CoursePurchase
     * const CoursePurchase = await prisma.coursePurchase.delete({
     *   where: {
     *     // ... filter to delete one CoursePurchase
     *   }
     * })
     *
     */
    delete<T extends CoursePurchaseDeleteArgs>(args: Prisma.SelectSubset<T, CoursePurchaseDeleteArgs<ExtArgs>>): Prisma.Prisma__CoursePurchaseClient<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CoursePurchase.
     * @param {CoursePurchaseUpdateArgs} args - Arguments to update one CoursePurchase.
     * @example
     * // Update one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CoursePurchaseUpdateArgs>(args: Prisma.SelectSubset<T, CoursePurchaseUpdateArgs<ExtArgs>>): Prisma.Prisma__CoursePurchaseClient<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CoursePurchases.
     * @param {CoursePurchaseDeleteManyArgs} args - Arguments to filter CoursePurchases to delete.
     * @example
     * // Delete a few CoursePurchases
     * const { count } = await prisma.coursePurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CoursePurchaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, CoursePurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CoursePurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CoursePurchaseUpdateManyArgs>(args: Prisma.SelectSubset<T, CoursePurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CoursePurchases and returns the data updated in the database.
     * @param {CoursePurchaseUpdateManyAndReturnArgs} args - Arguments to update many CoursePurchases.
     * @example
     * // Update many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CoursePurchases and only return the `id`
     * const coursePurchaseWithIdOnly = await prisma.coursePurchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoursePurchaseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CoursePurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CoursePurchase.
     * @param {CoursePurchaseUpsertArgs} args - Arguments to update or create a CoursePurchase.
     * @example
     * // Update or create a CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.upsert({
     *   create: {
     *     // ... data to create a CoursePurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoursePurchase we want to update
     *   }
     * })
     */
    upsert<T extends CoursePurchaseUpsertArgs>(args: Prisma.SelectSubset<T, CoursePurchaseUpsertArgs<ExtArgs>>): Prisma.Prisma__CoursePurchaseClient<runtime.Types.Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CoursePurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseCountArgs} args - Arguments to filter CoursePurchases to count.
     * @example
     * // Count the number of CoursePurchases
     * const count = await prisma.coursePurchase.count({
     *   where: {
     *     // ... the filter for the CoursePurchases we want to count
     *   }
     * })
    **/
    count<T extends CoursePurchaseCountArgs>(args?: Prisma.Subset<T, CoursePurchaseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CoursePurchaseCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CoursePurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoursePurchaseAggregateArgs>(args: Prisma.Subset<T, CoursePurchaseAggregateArgs>): Prisma.PrismaPromise<GetCoursePurchaseAggregateType<T>>;
    /**
     * Group by CoursePurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CoursePurchaseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CoursePurchaseGroupByArgs['orderBy'];
    } : {
        orderBy?: CoursePurchaseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CoursePurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursePurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CoursePurchase model
     */
    readonly fields: CoursePurchaseFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CoursePurchase.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CoursePurchaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    applicant<T extends Prisma.ApplicantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApplicantDefaultArgs<ExtArgs>>): Prisma.Prisma__ApplicantClient<runtime.Types.Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the CoursePurchase model
 */
export interface CoursePurchaseFieldRefs {
    readonly id: Prisma.FieldRef<"CoursePurchase", 'String'>;
    readonly applicantId: Prisma.FieldRef<"CoursePurchase", 'String'>;
    readonly courseId: Prisma.FieldRef<"CoursePurchase", 'String'>;
    readonly status: Prisma.FieldRef<"CoursePurchase", 'CoursePurchaseStatus'>;
    readonly amount: Prisma.FieldRef<"CoursePurchase", 'Int'>;
    readonly currency: Prisma.FieldRef<"CoursePurchase", 'String'>;
    readonly stripeCheckoutSessionId: Prisma.FieldRef<"CoursePurchase", 'String'>;
    readonly stripePaymentIntentId: Prisma.FieldRef<"CoursePurchase", 'String'>;
    readonly paidAt: Prisma.FieldRef<"CoursePurchase", 'DateTime'>;
    readonly accessExpiresAt: Prisma.FieldRef<"CoursePurchase", 'DateTime'>;
    readonly receiptNumber: Prisma.FieldRef<"CoursePurchase", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CoursePurchase", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CoursePurchase", 'DateTime'>;
}
/**
 * CoursePurchase findUnique
 */
export type CoursePurchaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where: Prisma.CoursePurchaseWhereUniqueInput;
};
/**
 * CoursePurchase findUniqueOrThrow
 */
export type CoursePurchaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where: Prisma.CoursePurchaseWhereUniqueInput;
};
/**
 * CoursePurchase findFirst
 */
export type CoursePurchaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where?: Prisma.CoursePurchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: Prisma.CoursePurchaseOrderByWithRelationInput | Prisma.CoursePurchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CoursePurchases.
     */
    cursor?: Prisma.CoursePurchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoursePurchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CoursePurchases.
     */
    distinct?: Prisma.CoursePurchaseScalarFieldEnum | Prisma.CoursePurchaseScalarFieldEnum[];
};
/**
 * CoursePurchase findFirstOrThrow
 */
export type CoursePurchaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where?: Prisma.CoursePurchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: Prisma.CoursePurchaseOrderByWithRelationInput | Prisma.CoursePurchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CoursePurchases.
     */
    cursor?: Prisma.CoursePurchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoursePurchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CoursePurchases.
     */
    distinct?: Prisma.CoursePurchaseScalarFieldEnum | Prisma.CoursePurchaseScalarFieldEnum[];
};
/**
 * CoursePurchase findMany
 */
export type CoursePurchaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CoursePurchases to fetch.
     */
    where?: Prisma.CoursePurchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: Prisma.CoursePurchaseOrderByWithRelationInput | Prisma.CoursePurchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CoursePurchases.
     */
    cursor?: Prisma.CoursePurchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoursePurchases.
     */
    skip?: number;
    distinct?: Prisma.CoursePurchaseScalarFieldEnum | Prisma.CoursePurchaseScalarFieldEnum[];
};
/**
 * CoursePurchase create
 */
export type CoursePurchaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a CoursePurchase.
     */
    data: Prisma.XOR<Prisma.CoursePurchaseCreateInput, Prisma.CoursePurchaseUncheckedCreateInput>;
};
/**
 * CoursePurchase createMany
 */
export type CoursePurchaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoursePurchases.
     */
    data: Prisma.CoursePurchaseCreateManyInput | Prisma.CoursePurchaseCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CoursePurchase createManyAndReturn
 */
export type CoursePurchaseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: Prisma.CoursePurchaseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: Prisma.CoursePurchaseOmit<ExtArgs> | null;
    /**
     * The data used to create many CoursePurchases.
     */
    data: Prisma.CoursePurchaseCreateManyInput | Prisma.CoursePurchaseCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoursePurchaseIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CoursePurchase update
 */
export type CoursePurchaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a CoursePurchase.
     */
    data: Prisma.XOR<Prisma.CoursePurchaseUpdateInput, Prisma.CoursePurchaseUncheckedUpdateInput>;
    /**
     * Choose, which CoursePurchase to update.
     */
    where: Prisma.CoursePurchaseWhereUniqueInput;
};
/**
 * CoursePurchase updateMany
 */
export type CoursePurchaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CoursePurchases.
     */
    data: Prisma.XOR<Prisma.CoursePurchaseUpdateManyMutationInput, Prisma.CoursePurchaseUncheckedUpdateManyInput>;
    /**
     * Filter which CoursePurchases to update
     */
    where?: Prisma.CoursePurchaseWhereInput;
    /**
     * Limit how many CoursePurchases to update.
     */
    limit?: number;
};
/**
 * CoursePurchase updateManyAndReturn
 */
export type CoursePurchaseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: Prisma.CoursePurchaseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: Prisma.CoursePurchaseOmit<ExtArgs> | null;
    /**
     * The data used to update CoursePurchases.
     */
    data: Prisma.XOR<Prisma.CoursePurchaseUpdateManyMutationInput, Prisma.CoursePurchaseUncheckedUpdateManyInput>;
    /**
     * Filter which CoursePurchases to update
     */
    where?: Prisma.CoursePurchaseWhereInput;
    /**
     * Limit how many CoursePurchases to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoursePurchaseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CoursePurchase upsert
 */
export type CoursePurchaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the CoursePurchase to update in case it exists.
     */
    where: Prisma.CoursePurchaseWhereUniqueInput;
    /**
     * In case the CoursePurchase found by the `where` argument doesn't exist, create a new CoursePurchase with this data.
     */
    create: Prisma.XOR<Prisma.CoursePurchaseCreateInput, Prisma.CoursePurchaseUncheckedCreateInput>;
    /**
     * In case the CoursePurchase was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CoursePurchaseUpdateInput, Prisma.CoursePurchaseUncheckedUpdateInput>;
};
/**
 * CoursePurchase delete
 */
export type CoursePurchaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which CoursePurchase to delete.
     */
    where: Prisma.CoursePurchaseWhereUniqueInput;
};
/**
 * CoursePurchase deleteMany
 */
export type CoursePurchaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePurchases to delete
     */
    where?: Prisma.CoursePurchaseWhereInput;
    /**
     * Limit how many CoursePurchases to delete.
     */
    limit?: number;
};
/**
 * CoursePurchase without action
 */
export type CoursePurchaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=CoursePurchase.d.ts.map