import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model SubIndustry
 *
 */
export type SubIndustryModel = runtime.Types.Result.DefaultSelection<Prisma.$SubIndustryPayload>;
export type AggregateSubIndustry = {
    _count: SubIndustryCountAggregateOutputType | null;
    _min: SubIndustryMinAggregateOutputType | null;
    _max: SubIndustryMaxAggregateOutputType | null;
};
export type SubIndustryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    industryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubIndustryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    industryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubIndustryCountAggregateOutputType = {
    id: number;
    name: number;
    industryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SubIndustryMinAggregateInputType = {
    id?: true;
    name?: true;
    industryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubIndustryMaxAggregateInputType = {
    id?: true;
    name?: true;
    industryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubIndustryCountAggregateInputType = {
    id?: true;
    name?: true;
    industryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SubIndustryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SubIndustry to aggregate.
     */
    where?: Prisma.SubIndustryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubIndustries to fetch.
     */
    orderBy?: Prisma.SubIndustryOrderByWithRelationInput | Prisma.SubIndustryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SubIndustryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubIndustries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubIndustries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SubIndustries
    **/
    _count?: true | SubIndustryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SubIndustryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SubIndustryMaxAggregateInputType;
};
export type GetSubIndustryAggregateType<T extends SubIndustryAggregateArgs> = {
    [P in keyof T & keyof AggregateSubIndustry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubIndustry[P]> : Prisma.GetScalarType<T[P], AggregateSubIndustry[P]>;
};
export type SubIndustryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubIndustryWhereInput;
    orderBy?: Prisma.SubIndustryOrderByWithAggregationInput | Prisma.SubIndustryOrderByWithAggregationInput[];
    by: Prisma.SubIndustryScalarFieldEnum[] | Prisma.SubIndustryScalarFieldEnum;
    having?: Prisma.SubIndustryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubIndustryCountAggregateInputType | true;
    _min?: SubIndustryMinAggregateInputType;
    _max?: SubIndustryMaxAggregateInputType;
};
export type SubIndustryGroupByOutputType = {
    id: string;
    name: string;
    industryId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SubIndustryCountAggregateOutputType | null;
    _min: SubIndustryMinAggregateOutputType | null;
    _max: SubIndustryMaxAggregateOutputType | null;
};
type GetSubIndustryGroupByPayload<T extends SubIndustryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubIndustryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubIndustryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubIndustryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubIndustryGroupByOutputType[P]>;
}>>;
export type SubIndustryWhereInput = {
    AND?: Prisma.SubIndustryWhereInput | Prisma.SubIndustryWhereInput[];
    OR?: Prisma.SubIndustryWhereInput[];
    NOT?: Prisma.SubIndustryWhereInput | Prisma.SubIndustryWhereInput[];
    id?: Prisma.StringFilter<"SubIndustry"> | string;
    name?: Prisma.StringFilter<"SubIndustry"> | string;
    industryId?: Prisma.StringFilter<"SubIndustry"> | string;
    createdAt?: Prisma.DateTimeFilter<"SubIndustry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SubIndustry"> | Date | string;
    industry?: Prisma.XOR<Prisma.IndustryScalarRelationFilter, Prisma.IndustryWhereInput>;
    recruiters?: Prisma.RecruiterListRelationFilter;
    jobs?: Prisma.JobListRelationFilter;
};
export type SubIndustryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    industryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    industry?: Prisma.IndustryOrderByWithRelationInput;
    recruiters?: Prisma.RecruiterOrderByRelationAggregateInput;
    jobs?: Prisma.JobOrderByRelationAggregateInput;
};
export type SubIndustryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name_industryId?: Prisma.SubIndustryNameIndustryIdCompoundUniqueInput;
    AND?: Prisma.SubIndustryWhereInput | Prisma.SubIndustryWhereInput[];
    OR?: Prisma.SubIndustryWhereInput[];
    NOT?: Prisma.SubIndustryWhereInput | Prisma.SubIndustryWhereInput[];
    name?: Prisma.StringFilter<"SubIndustry"> | string;
    industryId?: Prisma.StringFilter<"SubIndustry"> | string;
    createdAt?: Prisma.DateTimeFilter<"SubIndustry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SubIndustry"> | Date | string;
    industry?: Prisma.XOR<Prisma.IndustryScalarRelationFilter, Prisma.IndustryWhereInput>;
    recruiters?: Prisma.RecruiterListRelationFilter;
    jobs?: Prisma.JobListRelationFilter;
}, "id" | "name_industryId">;
export type SubIndustryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    industryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SubIndustryCountOrderByAggregateInput;
    _max?: Prisma.SubIndustryMaxOrderByAggregateInput;
    _min?: Prisma.SubIndustryMinOrderByAggregateInput;
};
export type SubIndustryScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubIndustryScalarWhereWithAggregatesInput | Prisma.SubIndustryScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubIndustryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubIndustryScalarWhereWithAggregatesInput | Prisma.SubIndustryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SubIndustry"> | string;
    name?: Prisma.StringWithAggregatesFilter<"SubIndustry"> | string;
    industryId?: Prisma.StringWithAggregatesFilter<"SubIndustry"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SubIndustry"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SubIndustry"> | Date | string;
};
export type SubIndustryCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    industry: Prisma.IndustryCreateNestedOneWithoutSubIndustriesInput;
    recruiters?: Prisma.RecruiterCreateNestedManyWithoutSubIndustryInput;
    jobs?: Prisma.JobCreateNestedManyWithoutSubIndustryInput;
};
export type SubIndustryUncheckedCreateInput = {
    id?: string;
    name: string;
    industryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    recruiters?: Prisma.RecruiterUncheckedCreateNestedManyWithoutSubIndustryInput;
    jobs?: Prisma.JobUncheckedCreateNestedManyWithoutSubIndustryInput;
};
export type SubIndustryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: Prisma.IndustryUpdateOneRequiredWithoutSubIndustriesNestedInput;
    recruiters?: Prisma.RecruiterUpdateManyWithoutSubIndustryNestedInput;
    jobs?: Prisma.JobUpdateManyWithoutSubIndustryNestedInput;
};
export type SubIndustryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    industryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recruiters?: Prisma.RecruiterUncheckedUpdateManyWithoutSubIndustryNestedInput;
    jobs?: Prisma.JobUncheckedUpdateManyWithoutSubIndustryNestedInput;
};
export type SubIndustryCreateManyInput = {
    id?: string;
    name: string;
    industryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubIndustryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubIndustryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    industryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubIndustryScalarRelationFilter = {
    is?: Prisma.SubIndustryWhereInput;
    isNot?: Prisma.SubIndustryWhereInput;
};
export type SubIndustryNullableScalarRelationFilter = {
    is?: Prisma.SubIndustryWhereInput | null;
    isNot?: Prisma.SubIndustryWhereInput | null;
};
export type SubIndustryListRelationFilter = {
    every?: Prisma.SubIndustryWhereInput;
    some?: Prisma.SubIndustryWhereInput;
    none?: Prisma.SubIndustryWhereInput;
};
export type SubIndustryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SubIndustryNameIndustryIdCompoundUniqueInput = {
    name: string;
    industryId: string;
};
export type SubIndustryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    industryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubIndustryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    industryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubIndustryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    industryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubIndustryCreateNestedOneWithoutJobsInput = {
    create?: Prisma.XOR<Prisma.SubIndustryCreateWithoutJobsInput, Prisma.SubIndustryUncheckedCreateWithoutJobsInput>;
    connectOrCreate?: Prisma.SubIndustryCreateOrConnectWithoutJobsInput;
    connect?: Prisma.SubIndustryWhereUniqueInput;
};
export type SubIndustryUpdateOneRequiredWithoutJobsNestedInput = {
    create?: Prisma.XOR<Prisma.SubIndustryCreateWithoutJobsInput, Prisma.SubIndustryUncheckedCreateWithoutJobsInput>;
    connectOrCreate?: Prisma.SubIndustryCreateOrConnectWithoutJobsInput;
    upsert?: Prisma.SubIndustryUpsertWithoutJobsInput;
    connect?: Prisma.SubIndustryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubIndustryUpdateToOneWithWhereWithoutJobsInput, Prisma.SubIndustryUpdateWithoutJobsInput>, Prisma.SubIndustryUncheckedUpdateWithoutJobsInput>;
};
export type SubIndustryCreateNestedOneWithoutRecruitersInput = {
    create?: Prisma.XOR<Prisma.SubIndustryCreateWithoutRecruitersInput, Prisma.SubIndustryUncheckedCreateWithoutRecruitersInput>;
    connectOrCreate?: Prisma.SubIndustryCreateOrConnectWithoutRecruitersInput;
    connect?: Prisma.SubIndustryWhereUniqueInput;
};
export type SubIndustryUpdateOneWithoutRecruitersNestedInput = {
    create?: Prisma.XOR<Prisma.SubIndustryCreateWithoutRecruitersInput, Prisma.SubIndustryUncheckedCreateWithoutRecruitersInput>;
    connectOrCreate?: Prisma.SubIndustryCreateOrConnectWithoutRecruitersInput;
    upsert?: Prisma.SubIndustryUpsertWithoutRecruitersInput;
    disconnect?: Prisma.SubIndustryWhereInput | boolean;
    delete?: Prisma.SubIndustryWhereInput | boolean;
    connect?: Prisma.SubIndustryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubIndustryUpdateToOneWithWhereWithoutRecruitersInput, Prisma.SubIndustryUpdateWithoutRecruitersInput>, Prisma.SubIndustryUncheckedUpdateWithoutRecruitersInput>;
};
export type SubIndustryCreateNestedManyWithoutIndustryInput = {
    create?: Prisma.XOR<Prisma.SubIndustryCreateWithoutIndustryInput, Prisma.SubIndustryUncheckedCreateWithoutIndustryInput> | Prisma.SubIndustryCreateWithoutIndustryInput[] | Prisma.SubIndustryUncheckedCreateWithoutIndustryInput[];
    connectOrCreate?: Prisma.SubIndustryCreateOrConnectWithoutIndustryInput | Prisma.SubIndustryCreateOrConnectWithoutIndustryInput[];
    createMany?: Prisma.SubIndustryCreateManyIndustryInputEnvelope;
    connect?: Prisma.SubIndustryWhereUniqueInput | Prisma.SubIndustryWhereUniqueInput[];
};
export type SubIndustryUncheckedCreateNestedManyWithoutIndustryInput = {
    create?: Prisma.XOR<Prisma.SubIndustryCreateWithoutIndustryInput, Prisma.SubIndustryUncheckedCreateWithoutIndustryInput> | Prisma.SubIndustryCreateWithoutIndustryInput[] | Prisma.SubIndustryUncheckedCreateWithoutIndustryInput[];
    connectOrCreate?: Prisma.SubIndustryCreateOrConnectWithoutIndustryInput | Prisma.SubIndustryCreateOrConnectWithoutIndustryInput[];
    createMany?: Prisma.SubIndustryCreateManyIndustryInputEnvelope;
    connect?: Prisma.SubIndustryWhereUniqueInput | Prisma.SubIndustryWhereUniqueInput[];
};
export type SubIndustryUpdateManyWithoutIndustryNestedInput = {
    create?: Prisma.XOR<Prisma.SubIndustryCreateWithoutIndustryInput, Prisma.SubIndustryUncheckedCreateWithoutIndustryInput> | Prisma.SubIndustryCreateWithoutIndustryInput[] | Prisma.SubIndustryUncheckedCreateWithoutIndustryInput[];
    connectOrCreate?: Prisma.SubIndustryCreateOrConnectWithoutIndustryInput | Prisma.SubIndustryCreateOrConnectWithoutIndustryInput[];
    upsert?: Prisma.SubIndustryUpsertWithWhereUniqueWithoutIndustryInput | Prisma.SubIndustryUpsertWithWhereUniqueWithoutIndustryInput[];
    createMany?: Prisma.SubIndustryCreateManyIndustryInputEnvelope;
    set?: Prisma.SubIndustryWhereUniqueInput | Prisma.SubIndustryWhereUniqueInput[];
    disconnect?: Prisma.SubIndustryWhereUniqueInput | Prisma.SubIndustryWhereUniqueInput[];
    delete?: Prisma.SubIndustryWhereUniqueInput | Prisma.SubIndustryWhereUniqueInput[];
    connect?: Prisma.SubIndustryWhereUniqueInput | Prisma.SubIndustryWhereUniqueInput[];
    update?: Prisma.SubIndustryUpdateWithWhereUniqueWithoutIndustryInput | Prisma.SubIndustryUpdateWithWhereUniqueWithoutIndustryInput[];
    updateMany?: Prisma.SubIndustryUpdateManyWithWhereWithoutIndustryInput | Prisma.SubIndustryUpdateManyWithWhereWithoutIndustryInput[];
    deleteMany?: Prisma.SubIndustryScalarWhereInput | Prisma.SubIndustryScalarWhereInput[];
};
export type SubIndustryUncheckedUpdateManyWithoutIndustryNestedInput = {
    create?: Prisma.XOR<Prisma.SubIndustryCreateWithoutIndustryInput, Prisma.SubIndustryUncheckedCreateWithoutIndustryInput> | Prisma.SubIndustryCreateWithoutIndustryInput[] | Prisma.SubIndustryUncheckedCreateWithoutIndustryInput[];
    connectOrCreate?: Prisma.SubIndustryCreateOrConnectWithoutIndustryInput | Prisma.SubIndustryCreateOrConnectWithoutIndustryInput[];
    upsert?: Prisma.SubIndustryUpsertWithWhereUniqueWithoutIndustryInput | Prisma.SubIndustryUpsertWithWhereUniqueWithoutIndustryInput[];
    createMany?: Prisma.SubIndustryCreateManyIndustryInputEnvelope;
    set?: Prisma.SubIndustryWhereUniqueInput | Prisma.SubIndustryWhereUniqueInput[];
    disconnect?: Prisma.SubIndustryWhereUniqueInput | Prisma.SubIndustryWhereUniqueInput[];
    delete?: Prisma.SubIndustryWhereUniqueInput | Prisma.SubIndustryWhereUniqueInput[];
    connect?: Prisma.SubIndustryWhereUniqueInput | Prisma.SubIndustryWhereUniqueInput[];
    update?: Prisma.SubIndustryUpdateWithWhereUniqueWithoutIndustryInput | Prisma.SubIndustryUpdateWithWhereUniqueWithoutIndustryInput[];
    updateMany?: Prisma.SubIndustryUpdateManyWithWhereWithoutIndustryInput | Prisma.SubIndustryUpdateManyWithWhereWithoutIndustryInput[];
    deleteMany?: Prisma.SubIndustryScalarWhereInput | Prisma.SubIndustryScalarWhereInput[];
};
export type SubIndustryCreateWithoutJobsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    industry: Prisma.IndustryCreateNestedOneWithoutSubIndustriesInput;
    recruiters?: Prisma.RecruiterCreateNestedManyWithoutSubIndustryInput;
};
export type SubIndustryUncheckedCreateWithoutJobsInput = {
    id?: string;
    name: string;
    industryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    recruiters?: Prisma.RecruiterUncheckedCreateNestedManyWithoutSubIndustryInput;
};
export type SubIndustryCreateOrConnectWithoutJobsInput = {
    where: Prisma.SubIndustryWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubIndustryCreateWithoutJobsInput, Prisma.SubIndustryUncheckedCreateWithoutJobsInput>;
};
export type SubIndustryUpsertWithoutJobsInput = {
    update: Prisma.XOR<Prisma.SubIndustryUpdateWithoutJobsInput, Prisma.SubIndustryUncheckedUpdateWithoutJobsInput>;
    create: Prisma.XOR<Prisma.SubIndustryCreateWithoutJobsInput, Prisma.SubIndustryUncheckedCreateWithoutJobsInput>;
    where?: Prisma.SubIndustryWhereInput;
};
export type SubIndustryUpdateToOneWithWhereWithoutJobsInput = {
    where?: Prisma.SubIndustryWhereInput;
    data: Prisma.XOR<Prisma.SubIndustryUpdateWithoutJobsInput, Prisma.SubIndustryUncheckedUpdateWithoutJobsInput>;
};
export type SubIndustryUpdateWithoutJobsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: Prisma.IndustryUpdateOneRequiredWithoutSubIndustriesNestedInput;
    recruiters?: Prisma.RecruiterUpdateManyWithoutSubIndustryNestedInput;
};
export type SubIndustryUncheckedUpdateWithoutJobsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    industryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recruiters?: Prisma.RecruiterUncheckedUpdateManyWithoutSubIndustryNestedInput;
};
export type SubIndustryCreateWithoutRecruitersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    industry: Prisma.IndustryCreateNestedOneWithoutSubIndustriesInput;
    jobs?: Prisma.JobCreateNestedManyWithoutSubIndustryInput;
};
export type SubIndustryUncheckedCreateWithoutRecruitersInput = {
    id?: string;
    name: string;
    industryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: Prisma.JobUncheckedCreateNestedManyWithoutSubIndustryInput;
};
export type SubIndustryCreateOrConnectWithoutRecruitersInput = {
    where: Prisma.SubIndustryWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubIndustryCreateWithoutRecruitersInput, Prisma.SubIndustryUncheckedCreateWithoutRecruitersInput>;
};
export type SubIndustryUpsertWithoutRecruitersInput = {
    update: Prisma.XOR<Prisma.SubIndustryUpdateWithoutRecruitersInput, Prisma.SubIndustryUncheckedUpdateWithoutRecruitersInput>;
    create: Prisma.XOR<Prisma.SubIndustryCreateWithoutRecruitersInput, Prisma.SubIndustryUncheckedCreateWithoutRecruitersInput>;
    where?: Prisma.SubIndustryWhereInput;
};
export type SubIndustryUpdateToOneWithWhereWithoutRecruitersInput = {
    where?: Prisma.SubIndustryWhereInput;
    data: Prisma.XOR<Prisma.SubIndustryUpdateWithoutRecruitersInput, Prisma.SubIndustryUncheckedUpdateWithoutRecruitersInput>;
};
export type SubIndustryUpdateWithoutRecruitersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: Prisma.IndustryUpdateOneRequiredWithoutSubIndustriesNestedInput;
    jobs?: Prisma.JobUpdateManyWithoutSubIndustryNestedInput;
};
export type SubIndustryUncheckedUpdateWithoutRecruitersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    industryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: Prisma.JobUncheckedUpdateManyWithoutSubIndustryNestedInput;
};
export type SubIndustryCreateWithoutIndustryInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    recruiters?: Prisma.RecruiterCreateNestedManyWithoutSubIndustryInput;
    jobs?: Prisma.JobCreateNestedManyWithoutSubIndustryInput;
};
export type SubIndustryUncheckedCreateWithoutIndustryInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    recruiters?: Prisma.RecruiterUncheckedCreateNestedManyWithoutSubIndustryInput;
    jobs?: Prisma.JobUncheckedCreateNestedManyWithoutSubIndustryInput;
};
export type SubIndustryCreateOrConnectWithoutIndustryInput = {
    where: Prisma.SubIndustryWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubIndustryCreateWithoutIndustryInput, Prisma.SubIndustryUncheckedCreateWithoutIndustryInput>;
};
export type SubIndustryCreateManyIndustryInputEnvelope = {
    data: Prisma.SubIndustryCreateManyIndustryInput | Prisma.SubIndustryCreateManyIndustryInput[];
    skipDuplicates?: boolean;
};
export type SubIndustryUpsertWithWhereUniqueWithoutIndustryInput = {
    where: Prisma.SubIndustryWhereUniqueInput;
    update: Prisma.XOR<Prisma.SubIndustryUpdateWithoutIndustryInput, Prisma.SubIndustryUncheckedUpdateWithoutIndustryInput>;
    create: Prisma.XOR<Prisma.SubIndustryCreateWithoutIndustryInput, Prisma.SubIndustryUncheckedCreateWithoutIndustryInput>;
};
export type SubIndustryUpdateWithWhereUniqueWithoutIndustryInput = {
    where: Prisma.SubIndustryWhereUniqueInput;
    data: Prisma.XOR<Prisma.SubIndustryUpdateWithoutIndustryInput, Prisma.SubIndustryUncheckedUpdateWithoutIndustryInput>;
};
export type SubIndustryUpdateManyWithWhereWithoutIndustryInput = {
    where: Prisma.SubIndustryScalarWhereInput;
    data: Prisma.XOR<Prisma.SubIndustryUpdateManyMutationInput, Prisma.SubIndustryUncheckedUpdateManyWithoutIndustryInput>;
};
export type SubIndustryScalarWhereInput = {
    AND?: Prisma.SubIndustryScalarWhereInput | Prisma.SubIndustryScalarWhereInput[];
    OR?: Prisma.SubIndustryScalarWhereInput[];
    NOT?: Prisma.SubIndustryScalarWhereInput | Prisma.SubIndustryScalarWhereInput[];
    id?: Prisma.StringFilter<"SubIndustry"> | string;
    name?: Prisma.StringFilter<"SubIndustry"> | string;
    industryId?: Prisma.StringFilter<"SubIndustry"> | string;
    createdAt?: Prisma.DateTimeFilter<"SubIndustry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SubIndustry"> | Date | string;
};
export type SubIndustryCreateManyIndustryInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubIndustryUpdateWithoutIndustryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recruiters?: Prisma.RecruiterUpdateManyWithoutSubIndustryNestedInput;
    jobs?: Prisma.JobUpdateManyWithoutSubIndustryNestedInput;
};
export type SubIndustryUncheckedUpdateWithoutIndustryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recruiters?: Prisma.RecruiterUncheckedUpdateManyWithoutSubIndustryNestedInput;
    jobs?: Prisma.JobUncheckedUpdateManyWithoutSubIndustryNestedInput;
};
export type SubIndustryUncheckedUpdateManyWithoutIndustryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type SubIndustryCountOutputType
 */
export type SubIndustryCountOutputType = {
    recruiters: number;
    jobs: number;
};
export type SubIndustryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recruiters?: boolean | SubIndustryCountOutputTypeCountRecruitersArgs;
    jobs?: boolean | SubIndustryCountOutputTypeCountJobsArgs;
};
/**
 * SubIndustryCountOutputType without action
 */
export type SubIndustryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustryCountOutputType
     */
    select?: Prisma.SubIndustryCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SubIndustryCountOutputType without action
 */
export type SubIndustryCountOutputTypeCountRecruitersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecruiterWhereInput;
};
/**
 * SubIndustryCountOutputType without action
 */
export type SubIndustryCountOutputTypeCountJobsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobWhereInput;
};
export type SubIndustrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    industryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    industry?: boolean | Prisma.IndustryDefaultArgs<ExtArgs>;
    recruiters?: boolean | Prisma.SubIndustry$recruitersArgs<ExtArgs>;
    jobs?: boolean | Prisma.SubIndustry$jobsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubIndustryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subIndustry"]>;
export type SubIndustrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    industryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    industry?: boolean | Prisma.IndustryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subIndustry"]>;
export type SubIndustrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    industryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    industry?: boolean | Prisma.IndustryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subIndustry"]>;
export type SubIndustrySelectScalar = {
    id?: boolean;
    name?: boolean;
    industryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SubIndustryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "industryId" | "createdAt" | "updatedAt", ExtArgs["result"]["subIndustry"]>;
export type SubIndustryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    industry?: boolean | Prisma.IndustryDefaultArgs<ExtArgs>;
    recruiters?: boolean | Prisma.SubIndustry$recruitersArgs<ExtArgs>;
    jobs?: boolean | Prisma.SubIndustry$jobsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubIndustryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SubIndustryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    industry?: boolean | Prisma.IndustryDefaultArgs<ExtArgs>;
};
export type SubIndustryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    industry?: boolean | Prisma.IndustryDefaultArgs<ExtArgs>;
};
export type $SubIndustryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SubIndustry";
    objects: {
        industry: Prisma.$IndustryPayload<ExtArgs>;
        recruiters: Prisma.$RecruiterPayload<ExtArgs>[];
        jobs: Prisma.$JobPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        industryId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["subIndustry"]>;
    composites: {};
};
export type SubIndustryGetPayload<S extends boolean | null | undefined | SubIndustryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload, S>;
export type SubIndustryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubIndustryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubIndustryCountAggregateInputType | true;
};
export interface SubIndustryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SubIndustry'];
        meta: {
            name: 'SubIndustry';
        };
    };
    /**
     * Find zero or one SubIndustry that matches the filter.
     * @param {SubIndustryFindUniqueArgs} args - Arguments to find a SubIndustry
     * @example
     * // Get one SubIndustry
     * const subIndustry = await prisma.subIndustry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubIndustryFindUniqueArgs>(args: Prisma.SelectSubset<T, SubIndustryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubIndustryClient<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SubIndustry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubIndustryFindUniqueOrThrowArgs} args - Arguments to find a SubIndustry
     * @example
     * // Get one SubIndustry
     * const subIndustry = await prisma.subIndustry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubIndustryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubIndustryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubIndustryClient<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SubIndustry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryFindFirstArgs} args - Arguments to find a SubIndustry
     * @example
     * // Get one SubIndustry
     * const subIndustry = await prisma.subIndustry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubIndustryFindFirstArgs>(args?: Prisma.SelectSubset<T, SubIndustryFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubIndustryClient<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SubIndustry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryFindFirstOrThrowArgs} args - Arguments to find a SubIndustry
     * @example
     * // Get one SubIndustry
     * const subIndustry = await prisma.subIndustry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubIndustryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubIndustryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubIndustryClient<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SubIndustries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubIndustries
     * const subIndustries = await prisma.subIndustry.findMany()
     *
     * // Get first 10 SubIndustries
     * const subIndustries = await prisma.subIndustry.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subIndustryWithIdOnly = await prisma.subIndustry.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubIndustryFindManyArgs>(args?: Prisma.SelectSubset<T, SubIndustryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SubIndustry.
     * @param {SubIndustryCreateArgs} args - Arguments to create a SubIndustry.
     * @example
     * // Create one SubIndustry
     * const SubIndustry = await prisma.subIndustry.create({
     *   data: {
     *     // ... data to create a SubIndustry
     *   }
     * })
     *
     */
    create<T extends SubIndustryCreateArgs>(args: Prisma.SelectSubset<T, SubIndustryCreateArgs<ExtArgs>>): Prisma.Prisma__SubIndustryClient<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SubIndustries.
     * @param {SubIndustryCreateManyArgs} args - Arguments to create many SubIndustries.
     * @example
     * // Create many SubIndustries
     * const subIndustry = await prisma.subIndustry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubIndustryCreateManyArgs>(args?: Prisma.SelectSubset<T, SubIndustryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SubIndustries and returns the data saved in the database.
     * @param {SubIndustryCreateManyAndReturnArgs} args - Arguments to create many SubIndustries.
     * @example
     * // Create many SubIndustries
     * const subIndustry = await prisma.subIndustry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SubIndustries and only return the `id`
     * const subIndustryWithIdOnly = await prisma.subIndustry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubIndustryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubIndustryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SubIndustry.
     * @param {SubIndustryDeleteArgs} args - Arguments to delete one SubIndustry.
     * @example
     * // Delete one SubIndustry
     * const SubIndustry = await prisma.subIndustry.delete({
     *   where: {
     *     // ... filter to delete one SubIndustry
     *   }
     * })
     *
     */
    delete<T extends SubIndustryDeleteArgs>(args: Prisma.SelectSubset<T, SubIndustryDeleteArgs<ExtArgs>>): Prisma.Prisma__SubIndustryClient<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SubIndustry.
     * @param {SubIndustryUpdateArgs} args - Arguments to update one SubIndustry.
     * @example
     * // Update one SubIndustry
     * const subIndustry = await prisma.subIndustry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubIndustryUpdateArgs>(args: Prisma.SelectSubset<T, SubIndustryUpdateArgs<ExtArgs>>): Prisma.Prisma__SubIndustryClient<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SubIndustries.
     * @param {SubIndustryDeleteManyArgs} args - Arguments to filter SubIndustries to delete.
     * @example
     * // Delete a few SubIndustries
     * const { count } = await prisma.subIndustry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubIndustryDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubIndustryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SubIndustries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubIndustries
     * const subIndustry = await prisma.subIndustry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubIndustryUpdateManyArgs>(args: Prisma.SelectSubset<T, SubIndustryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SubIndustries and returns the data updated in the database.
     * @param {SubIndustryUpdateManyAndReturnArgs} args - Arguments to update many SubIndustries.
     * @example
     * // Update many SubIndustries
     * const subIndustry = await prisma.subIndustry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SubIndustries and only return the `id`
     * const subIndustryWithIdOnly = await prisma.subIndustry.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubIndustryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubIndustryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SubIndustry.
     * @param {SubIndustryUpsertArgs} args - Arguments to update or create a SubIndustry.
     * @example
     * // Update or create a SubIndustry
     * const subIndustry = await prisma.subIndustry.upsert({
     *   create: {
     *     // ... data to create a SubIndustry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubIndustry we want to update
     *   }
     * })
     */
    upsert<T extends SubIndustryUpsertArgs>(args: Prisma.SelectSubset<T, SubIndustryUpsertArgs<ExtArgs>>): Prisma.Prisma__SubIndustryClient<runtime.Types.Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SubIndustries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryCountArgs} args - Arguments to filter SubIndustries to count.
     * @example
     * // Count the number of SubIndustries
     * const count = await prisma.subIndustry.count({
     *   where: {
     *     // ... the filter for the SubIndustries we want to count
     *   }
     * })
    **/
    count<T extends SubIndustryCountArgs>(args?: Prisma.Subset<T, SubIndustryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubIndustryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SubIndustry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubIndustryAggregateArgs>(args: Prisma.Subset<T, SubIndustryAggregateArgs>): Prisma.PrismaPromise<GetSubIndustryAggregateType<T>>;
    /**
     * Group by SubIndustry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SubIndustryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubIndustryGroupByArgs['orderBy'];
    } : {
        orderBy?: SubIndustryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubIndustryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubIndustryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SubIndustry model
     */
    readonly fields: SubIndustryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SubIndustry.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SubIndustryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    industry<T extends Prisma.IndustryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IndustryDefaultArgs<ExtArgs>>): Prisma.Prisma__IndustryClient<runtime.Types.Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    recruiters<T extends Prisma.SubIndustry$recruitersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubIndustry$recruitersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    jobs<T extends Prisma.SubIndustry$jobsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubIndustry$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the SubIndustry model
 */
export interface SubIndustryFieldRefs {
    readonly id: Prisma.FieldRef<"SubIndustry", 'String'>;
    readonly name: Prisma.FieldRef<"SubIndustry", 'String'>;
    readonly industryId: Prisma.FieldRef<"SubIndustry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SubIndustry", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SubIndustry", 'DateTime'>;
}
/**
 * SubIndustry findUnique
 */
export type SubIndustryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SubIndustry to fetch.
     */
    where: Prisma.SubIndustryWhereUniqueInput;
};
/**
 * SubIndustry findUniqueOrThrow
 */
export type SubIndustryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SubIndustry to fetch.
     */
    where: Prisma.SubIndustryWhereUniqueInput;
};
/**
 * SubIndustry findFirst
 */
export type SubIndustryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SubIndustry to fetch.
     */
    where?: Prisma.SubIndustryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubIndustries to fetch.
     */
    orderBy?: Prisma.SubIndustryOrderByWithRelationInput | Prisma.SubIndustryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SubIndustries.
     */
    cursor?: Prisma.SubIndustryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubIndustries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubIndustries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubIndustries.
     */
    distinct?: Prisma.SubIndustryScalarFieldEnum | Prisma.SubIndustryScalarFieldEnum[];
};
/**
 * SubIndustry findFirstOrThrow
 */
export type SubIndustryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SubIndustry to fetch.
     */
    where?: Prisma.SubIndustryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubIndustries to fetch.
     */
    orderBy?: Prisma.SubIndustryOrderByWithRelationInput | Prisma.SubIndustryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SubIndustries.
     */
    cursor?: Prisma.SubIndustryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubIndustries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubIndustries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubIndustries.
     */
    distinct?: Prisma.SubIndustryScalarFieldEnum | Prisma.SubIndustryScalarFieldEnum[];
};
/**
 * SubIndustry findMany
 */
export type SubIndustryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SubIndustries to fetch.
     */
    where?: Prisma.SubIndustryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubIndustries to fetch.
     */
    orderBy?: Prisma.SubIndustryOrderByWithRelationInput | Prisma.SubIndustryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SubIndustries.
     */
    cursor?: Prisma.SubIndustryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubIndustries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubIndustries.
     */
    skip?: number;
    distinct?: Prisma.SubIndustryScalarFieldEnum | Prisma.SubIndustryScalarFieldEnum[];
};
/**
 * SubIndustry create
 */
export type SubIndustryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a SubIndustry.
     */
    data: Prisma.XOR<Prisma.SubIndustryCreateInput, Prisma.SubIndustryUncheckedCreateInput>;
};
/**
 * SubIndustry createMany
 */
export type SubIndustryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubIndustries.
     */
    data: Prisma.SubIndustryCreateManyInput | Prisma.SubIndustryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SubIndustry createManyAndReturn
 */
export type SubIndustryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: Prisma.SubIndustrySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: Prisma.SubIndustryOmit<ExtArgs> | null;
    /**
     * The data used to create many SubIndustries.
     */
    data: Prisma.SubIndustryCreateManyInput | Prisma.SubIndustryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SubIndustryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SubIndustry update
 */
export type SubIndustryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a SubIndustry.
     */
    data: Prisma.XOR<Prisma.SubIndustryUpdateInput, Prisma.SubIndustryUncheckedUpdateInput>;
    /**
     * Choose, which SubIndustry to update.
     */
    where: Prisma.SubIndustryWhereUniqueInput;
};
/**
 * SubIndustry updateMany
 */
export type SubIndustryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SubIndustries.
     */
    data: Prisma.XOR<Prisma.SubIndustryUpdateManyMutationInput, Prisma.SubIndustryUncheckedUpdateManyInput>;
    /**
     * Filter which SubIndustries to update
     */
    where?: Prisma.SubIndustryWhereInput;
    /**
     * Limit how many SubIndustries to update.
     */
    limit?: number;
};
/**
 * SubIndustry updateManyAndReturn
 */
export type SubIndustryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: Prisma.SubIndustrySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: Prisma.SubIndustryOmit<ExtArgs> | null;
    /**
     * The data used to update SubIndustries.
     */
    data: Prisma.XOR<Prisma.SubIndustryUpdateManyMutationInput, Prisma.SubIndustryUncheckedUpdateManyInput>;
    /**
     * Filter which SubIndustries to update
     */
    where?: Prisma.SubIndustryWhereInput;
    /**
     * Limit how many SubIndustries to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SubIndustryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SubIndustry upsert
 */
export type SubIndustryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the SubIndustry to update in case it exists.
     */
    where: Prisma.SubIndustryWhereUniqueInput;
    /**
     * In case the SubIndustry found by the `where` argument doesn't exist, create a new SubIndustry with this data.
     */
    create: Prisma.XOR<Prisma.SubIndustryCreateInput, Prisma.SubIndustryUncheckedCreateInput>;
    /**
     * In case the SubIndustry was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SubIndustryUpdateInput, Prisma.SubIndustryUncheckedUpdateInput>;
};
/**
 * SubIndustry delete
 */
export type SubIndustryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which SubIndustry to delete.
     */
    where: Prisma.SubIndustryWhereUniqueInput;
};
/**
 * SubIndustry deleteMany
 */
export type SubIndustryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SubIndustries to delete
     */
    where?: Prisma.SubIndustryWhereInput;
    /**
     * Limit how many SubIndustries to delete.
     */
    limit?: number;
};
/**
 * SubIndustry.recruiters
 */
export type SubIndustry$recruitersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.RecruiterWhereInput;
    orderBy?: Prisma.RecruiterOrderByWithRelationInput | Prisma.RecruiterOrderByWithRelationInput[];
    cursor?: Prisma.RecruiterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecruiterScalarFieldEnum | Prisma.RecruiterScalarFieldEnum[];
};
/**
 * SubIndustry.jobs
 */
export type SubIndustry$jobsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * SubIndustry without action
 */
export type SubIndustryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=SubIndustry.d.ts.map