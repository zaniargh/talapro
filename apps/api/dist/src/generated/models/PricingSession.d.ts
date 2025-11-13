import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PricingSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$PricingSessionPayload>;
export type AggregatePricingSession = {
    _count: PricingSessionCountAggregateOutputType | null;
    _avg: PricingSessionAvgAggregateOutputType | null;
    _sum: PricingSessionSumAggregateOutputType | null;
    _min: PricingSessionMinAggregateOutputType | null;
    _max: PricingSessionMaxAggregateOutputType | null;
};
export type PricingSessionAvgAggregateOutputType = {
    gold_rate_input: runtime.Decimal | null;
    suggested_price: runtime.Decimal | null;
    window_amount: runtime.Decimal | null;
};
export type PricingSessionSumAggregateOutputType = {
    gold_rate_input: runtime.Decimal | null;
    suggested_price: runtime.Decimal | null;
    window_amount: runtime.Decimal | null;
};
export type PricingSessionMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    gold_rate_input: runtime.Decimal | null;
    source: string | null;
    suggested_price: runtime.Decimal | null;
    window_amount: runtime.Decimal | null;
    createdAt: Date | null;
};
export type PricingSessionMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    gold_rate_input: runtime.Decimal | null;
    source: string | null;
    suggested_price: runtime.Decimal | null;
    window_amount: runtime.Decimal | null;
    createdAt: Date | null;
};
export type PricingSessionCountAggregateOutputType = {
    id: number;
    tenantId: number;
    gold_rate_input: number;
    source: number;
    suggested_price: number;
    window_amount: number;
    createdAt: number;
    _all: number;
};
export type PricingSessionAvgAggregateInputType = {
    gold_rate_input?: true;
    suggested_price?: true;
    window_amount?: true;
};
export type PricingSessionSumAggregateInputType = {
    gold_rate_input?: true;
    suggested_price?: true;
    window_amount?: true;
};
export type PricingSessionMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    gold_rate_input?: true;
    source?: true;
    suggested_price?: true;
    window_amount?: true;
    createdAt?: true;
};
export type PricingSessionMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    gold_rate_input?: true;
    source?: true;
    suggested_price?: true;
    window_amount?: true;
    createdAt?: true;
};
export type PricingSessionCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    gold_rate_input?: true;
    source?: true;
    suggested_price?: true;
    window_amount?: true;
    createdAt?: true;
    _all?: true;
};
export type PricingSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PricingSessionWhereInput;
    orderBy?: Prisma.PricingSessionOrderByWithRelationInput | Prisma.PricingSessionOrderByWithRelationInput[];
    cursor?: Prisma.PricingSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PricingSessionCountAggregateInputType;
    _avg?: PricingSessionAvgAggregateInputType;
    _sum?: PricingSessionSumAggregateInputType;
    _min?: PricingSessionMinAggregateInputType;
    _max?: PricingSessionMaxAggregateInputType;
};
export type GetPricingSessionAggregateType<T extends PricingSessionAggregateArgs> = {
    [P in keyof T & keyof AggregatePricingSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePricingSession[P]> : Prisma.GetScalarType<T[P], AggregatePricingSession[P]>;
};
export type PricingSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PricingSessionWhereInput;
    orderBy?: Prisma.PricingSessionOrderByWithAggregationInput | Prisma.PricingSessionOrderByWithAggregationInput[];
    by: Prisma.PricingSessionScalarFieldEnum[] | Prisma.PricingSessionScalarFieldEnum;
    having?: Prisma.PricingSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PricingSessionCountAggregateInputType | true;
    _avg?: PricingSessionAvgAggregateInputType;
    _sum?: PricingSessionSumAggregateInputType;
    _min?: PricingSessionMinAggregateInputType;
    _max?: PricingSessionMaxAggregateInputType;
};
export type PricingSessionGroupByOutputType = {
    id: string;
    tenantId: string;
    gold_rate_input: runtime.Decimal;
    source: string;
    suggested_price: runtime.Decimal;
    window_amount: runtime.Decimal;
    createdAt: Date;
    _count: PricingSessionCountAggregateOutputType | null;
    _avg: PricingSessionAvgAggregateOutputType | null;
    _sum: PricingSessionSumAggregateOutputType | null;
    _min: PricingSessionMinAggregateOutputType | null;
    _max: PricingSessionMaxAggregateOutputType | null;
};
type GetPricingSessionGroupByPayload<T extends PricingSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PricingSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PricingSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PricingSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PricingSessionGroupByOutputType[P]>;
}>>;
export type PricingSessionWhereInput = {
    AND?: Prisma.PricingSessionWhereInput | Prisma.PricingSessionWhereInput[];
    OR?: Prisma.PricingSessionWhereInput[];
    NOT?: Prisma.PricingSessionWhereInput | Prisma.PricingSessionWhereInput[];
    id?: Prisma.StringFilter<"PricingSession"> | string;
    tenantId?: Prisma.StringFilter<"PricingSession"> | string;
    gold_rate_input?: Prisma.DecimalFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    source?: Prisma.StringFilter<"PricingSession"> | string;
    suggested_price?: Prisma.DecimalFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount?: Prisma.DecimalFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"PricingSession"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
};
export type PricingSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    gold_rate_input?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    suggested_price?: Prisma.SortOrder;
    window_amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
};
export type PricingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PricingSessionWhereInput | Prisma.PricingSessionWhereInput[];
    OR?: Prisma.PricingSessionWhereInput[];
    NOT?: Prisma.PricingSessionWhereInput | Prisma.PricingSessionWhereInput[];
    tenantId?: Prisma.StringFilter<"PricingSession"> | string;
    gold_rate_input?: Prisma.DecimalFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    source?: Prisma.StringFilter<"PricingSession"> | string;
    suggested_price?: Prisma.DecimalFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount?: Prisma.DecimalFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"PricingSession"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
}, "id">;
export type PricingSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    gold_rate_input?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    suggested_price?: Prisma.SortOrder;
    window_amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PricingSessionCountOrderByAggregateInput;
    _avg?: Prisma.PricingSessionAvgOrderByAggregateInput;
    _max?: Prisma.PricingSessionMaxOrderByAggregateInput;
    _min?: Prisma.PricingSessionMinOrderByAggregateInput;
    _sum?: Prisma.PricingSessionSumOrderByAggregateInput;
};
export type PricingSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PricingSessionScalarWhereWithAggregatesInput | Prisma.PricingSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PricingSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PricingSessionScalarWhereWithAggregatesInput | Prisma.PricingSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PricingSession"> | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"PricingSession"> | string;
    gold_rate_input?: Prisma.DecimalWithAggregatesFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    source?: Prisma.StringWithAggregatesFilter<"PricingSession"> | string;
    suggested_price?: Prisma.DecimalWithAggregatesFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount?: Prisma.DecimalWithAggregatesFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PricingSession"> | Date | string;
};
export type PricingSessionCreateInput = {
    id?: string;
    gold_rate_input: runtime.Decimal | runtime.DecimalJsLike | number | string;
    source: string;
    suggested_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutSessionsInput;
};
export type PricingSessionUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    gold_rate_input: runtime.Decimal | runtime.DecimalJsLike | number | string;
    source: string;
    suggested_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type PricingSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gold_rate_input?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    suggested_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutSessionsNestedInput;
};
export type PricingSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    gold_rate_input?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    suggested_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PricingSessionCreateManyInput = {
    id?: string;
    tenantId: string;
    gold_rate_input: runtime.Decimal | runtime.DecimalJsLike | number | string;
    source: string;
    suggested_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type PricingSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gold_rate_input?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    suggested_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PricingSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    gold_rate_input?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    suggested_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PricingSessionListRelationFilter = {
    every?: Prisma.PricingSessionWhereInput;
    some?: Prisma.PricingSessionWhereInput;
    none?: Prisma.PricingSessionWhereInput;
};
export type PricingSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PricingSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    gold_rate_input?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    suggested_price?: Prisma.SortOrder;
    window_amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PricingSessionAvgOrderByAggregateInput = {
    gold_rate_input?: Prisma.SortOrder;
    suggested_price?: Prisma.SortOrder;
    window_amount?: Prisma.SortOrder;
};
export type PricingSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    gold_rate_input?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    suggested_price?: Prisma.SortOrder;
    window_amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PricingSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    gold_rate_input?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    suggested_price?: Prisma.SortOrder;
    window_amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PricingSessionSumOrderByAggregateInput = {
    gold_rate_input?: Prisma.SortOrder;
    suggested_price?: Prisma.SortOrder;
    window_amount?: Prisma.SortOrder;
};
export type PricingSessionCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.PricingSessionCreateWithoutTenantInput, Prisma.PricingSessionUncheckedCreateWithoutTenantInput> | Prisma.PricingSessionCreateWithoutTenantInput[] | Prisma.PricingSessionUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PricingSessionCreateOrConnectWithoutTenantInput | Prisma.PricingSessionCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.PricingSessionCreateManyTenantInputEnvelope;
    connect?: Prisma.PricingSessionWhereUniqueInput | Prisma.PricingSessionWhereUniqueInput[];
};
export type PricingSessionUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.PricingSessionCreateWithoutTenantInput, Prisma.PricingSessionUncheckedCreateWithoutTenantInput> | Prisma.PricingSessionCreateWithoutTenantInput[] | Prisma.PricingSessionUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PricingSessionCreateOrConnectWithoutTenantInput | Prisma.PricingSessionCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.PricingSessionCreateManyTenantInputEnvelope;
    connect?: Prisma.PricingSessionWhereUniqueInput | Prisma.PricingSessionWhereUniqueInput[];
};
export type PricingSessionUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.PricingSessionCreateWithoutTenantInput, Prisma.PricingSessionUncheckedCreateWithoutTenantInput> | Prisma.PricingSessionCreateWithoutTenantInput[] | Prisma.PricingSessionUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PricingSessionCreateOrConnectWithoutTenantInput | Prisma.PricingSessionCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.PricingSessionUpsertWithWhereUniqueWithoutTenantInput | Prisma.PricingSessionUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.PricingSessionCreateManyTenantInputEnvelope;
    set?: Prisma.PricingSessionWhereUniqueInput | Prisma.PricingSessionWhereUniqueInput[];
    disconnect?: Prisma.PricingSessionWhereUniqueInput | Prisma.PricingSessionWhereUniqueInput[];
    delete?: Prisma.PricingSessionWhereUniqueInput | Prisma.PricingSessionWhereUniqueInput[];
    connect?: Prisma.PricingSessionWhereUniqueInput | Prisma.PricingSessionWhereUniqueInput[];
    update?: Prisma.PricingSessionUpdateWithWhereUniqueWithoutTenantInput | Prisma.PricingSessionUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.PricingSessionUpdateManyWithWhereWithoutTenantInput | Prisma.PricingSessionUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.PricingSessionScalarWhereInput | Prisma.PricingSessionScalarWhereInput[];
};
export type PricingSessionUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.PricingSessionCreateWithoutTenantInput, Prisma.PricingSessionUncheckedCreateWithoutTenantInput> | Prisma.PricingSessionCreateWithoutTenantInput[] | Prisma.PricingSessionUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PricingSessionCreateOrConnectWithoutTenantInput | Prisma.PricingSessionCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.PricingSessionUpsertWithWhereUniqueWithoutTenantInput | Prisma.PricingSessionUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.PricingSessionCreateManyTenantInputEnvelope;
    set?: Prisma.PricingSessionWhereUniqueInput | Prisma.PricingSessionWhereUniqueInput[];
    disconnect?: Prisma.PricingSessionWhereUniqueInput | Prisma.PricingSessionWhereUniqueInput[];
    delete?: Prisma.PricingSessionWhereUniqueInput | Prisma.PricingSessionWhereUniqueInput[];
    connect?: Prisma.PricingSessionWhereUniqueInput | Prisma.PricingSessionWhereUniqueInput[];
    update?: Prisma.PricingSessionUpdateWithWhereUniqueWithoutTenantInput | Prisma.PricingSessionUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.PricingSessionUpdateManyWithWhereWithoutTenantInput | Prisma.PricingSessionUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.PricingSessionScalarWhereInput | Prisma.PricingSessionScalarWhereInput[];
};
export type PricingSessionCreateWithoutTenantInput = {
    id?: string;
    gold_rate_input: runtime.Decimal | runtime.DecimalJsLike | number | string;
    source: string;
    suggested_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type PricingSessionUncheckedCreateWithoutTenantInput = {
    id?: string;
    gold_rate_input: runtime.Decimal | runtime.DecimalJsLike | number | string;
    source: string;
    suggested_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type PricingSessionCreateOrConnectWithoutTenantInput = {
    where: Prisma.PricingSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PricingSessionCreateWithoutTenantInput, Prisma.PricingSessionUncheckedCreateWithoutTenantInput>;
};
export type PricingSessionCreateManyTenantInputEnvelope = {
    data: Prisma.PricingSessionCreateManyTenantInput | Prisma.PricingSessionCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type PricingSessionUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.PricingSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PricingSessionUpdateWithoutTenantInput, Prisma.PricingSessionUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.PricingSessionCreateWithoutTenantInput, Prisma.PricingSessionUncheckedCreateWithoutTenantInput>;
};
export type PricingSessionUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.PricingSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PricingSessionUpdateWithoutTenantInput, Prisma.PricingSessionUncheckedUpdateWithoutTenantInput>;
};
export type PricingSessionUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.PricingSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.PricingSessionUpdateManyMutationInput, Prisma.PricingSessionUncheckedUpdateManyWithoutTenantInput>;
};
export type PricingSessionScalarWhereInput = {
    AND?: Prisma.PricingSessionScalarWhereInput | Prisma.PricingSessionScalarWhereInput[];
    OR?: Prisma.PricingSessionScalarWhereInput[];
    NOT?: Prisma.PricingSessionScalarWhereInput | Prisma.PricingSessionScalarWhereInput[];
    id?: Prisma.StringFilter<"PricingSession"> | string;
    tenantId?: Prisma.StringFilter<"PricingSession"> | string;
    gold_rate_input?: Prisma.DecimalFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    source?: Prisma.StringFilter<"PricingSession"> | string;
    suggested_price?: Prisma.DecimalFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount?: Prisma.DecimalFilter<"PricingSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"PricingSession"> | Date | string;
};
export type PricingSessionCreateManyTenantInput = {
    id?: string;
    gold_rate_input: runtime.Decimal | runtime.DecimalJsLike | number | string;
    source: string;
    suggested_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type PricingSessionUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gold_rate_input?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    suggested_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PricingSessionUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gold_rate_input?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    suggested_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PricingSessionUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    gold_rate_input?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    suggested_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    window_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PricingSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    gold_rate_input?: boolean;
    source?: boolean;
    suggested_price?: boolean;
    window_amount?: boolean;
    createdAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pricingSession"]>;
export type PricingSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    gold_rate_input?: boolean;
    source?: boolean;
    suggested_price?: boolean;
    window_amount?: boolean;
    createdAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pricingSession"]>;
export type PricingSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    gold_rate_input?: boolean;
    source?: boolean;
    suggested_price?: boolean;
    window_amount?: boolean;
    createdAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pricingSession"]>;
export type PricingSessionSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    gold_rate_input?: boolean;
    source?: boolean;
    suggested_price?: boolean;
    window_amount?: boolean;
    createdAt?: boolean;
};
export type PricingSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "gold_rate_input" | "source" | "suggested_price" | "window_amount" | "createdAt", ExtArgs["result"]["pricingSession"]>;
export type PricingSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type PricingSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type PricingSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $PricingSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PricingSession";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        gold_rate_input: runtime.Decimal;
        source: string;
        suggested_price: runtime.Decimal;
        window_amount: runtime.Decimal;
        createdAt: Date;
    }, ExtArgs["result"]["pricingSession"]>;
    composites: {};
};
export type PricingSessionGetPayload<S extends boolean | null | undefined | PricingSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload, S>;
export type PricingSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PricingSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PricingSessionCountAggregateInputType | true;
};
export interface PricingSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PricingSession'];
        meta: {
            name: 'PricingSession';
        };
    };
    findUnique<T extends PricingSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, PricingSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PricingSessionClient<runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PricingSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PricingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PricingSessionClient<runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PricingSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, PricingSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PricingSessionClient<runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PricingSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PricingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PricingSessionClient<runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PricingSessionFindManyArgs>(args?: Prisma.SelectSubset<T, PricingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PricingSessionCreateArgs>(args: Prisma.SelectSubset<T, PricingSessionCreateArgs<ExtArgs>>): Prisma.Prisma__PricingSessionClient<runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PricingSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, PricingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PricingSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PricingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PricingSessionDeleteArgs>(args: Prisma.SelectSubset<T, PricingSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__PricingSessionClient<runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PricingSessionUpdateArgs>(args: Prisma.SelectSubset<T, PricingSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__PricingSessionClient<runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PricingSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PricingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PricingSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, PricingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PricingSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PricingSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PricingSessionUpsertArgs>(args: Prisma.SelectSubset<T, PricingSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__PricingSessionClient<runtime.Types.Result.GetResult<Prisma.$PricingSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PricingSessionCountArgs>(args?: Prisma.Subset<T, PricingSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PricingSessionCountAggregateOutputType> : number>;
    aggregate<T extends PricingSessionAggregateArgs>(args: Prisma.Subset<T, PricingSessionAggregateArgs>): Prisma.PrismaPromise<GetPricingSessionAggregateType<T>>;
    groupBy<T extends PricingSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PricingSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: PricingSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PricingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PricingSessionFieldRefs;
}
export interface Prisma__PricingSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PricingSessionFieldRefs {
    readonly id: Prisma.FieldRef<"PricingSession", 'String'>;
    readonly tenantId: Prisma.FieldRef<"PricingSession", 'String'>;
    readonly gold_rate_input: Prisma.FieldRef<"PricingSession", 'Decimal'>;
    readonly source: Prisma.FieldRef<"PricingSession", 'String'>;
    readonly suggested_price: Prisma.FieldRef<"PricingSession", 'Decimal'>;
    readonly window_amount: Prisma.FieldRef<"PricingSession", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"PricingSession", 'DateTime'>;
}
export type PricingSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelect<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    include?: Prisma.PricingSessionInclude<ExtArgs> | null;
    where: Prisma.PricingSessionWhereUniqueInput;
};
export type PricingSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelect<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    include?: Prisma.PricingSessionInclude<ExtArgs> | null;
    where: Prisma.PricingSessionWhereUniqueInput;
};
export type PricingSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelect<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    include?: Prisma.PricingSessionInclude<ExtArgs> | null;
    where?: Prisma.PricingSessionWhereInput;
    orderBy?: Prisma.PricingSessionOrderByWithRelationInput | Prisma.PricingSessionOrderByWithRelationInput[];
    cursor?: Prisma.PricingSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PricingSessionScalarFieldEnum | Prisma.PricingSessionScalarFieldEnum[];
};
export type PricingSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelect<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    include?: Prisma.PricingSessionInclude<ExtArgs> | null;
    where?: Prisma.PricingSessionWhereInput;
    orderBy?: Prisma.PricingSessionOrderByWithRelationInput | Prisma.PricingSessionOrderByWithRelationInput[];
    cursor?: Prisma.PricingSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PricingSessionScalarFieldEnum | Prisma.PricingSessionScalarFieldEnum[];
};
export type PricingSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelect<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    include?: Prisma.PricingSessionInclude<ExtArgs> | null;
    where?: Prisma.PricingSessionWhereInput;
    orderBy?: Prisma.PricingSessionOrderByWithRelationInput | Prisma.PricingSessionOrderByWithRelationInput[];
    cursor?: Prisma.PricingSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PricingSessionScalarFieldEnum | Prisma.PricingSessionScalarFieldEnum[];
};
export type PricingSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelect<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    include?: Prisma.PricingSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PricingSessionCreateInput, Prisma.PricingSessionUncheckedCreateInput>;
};
export type PricingSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PricingSessionCreateManyInput | Prisma.PricingSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PricingSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    data: Prisma.PricingSessionCreateManyInput | Prisma.PricingSessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PricingSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PricingSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelect<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    include?: Prisma.PricingSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PricingSessionUpdateInput, Prisma.PricingSessionUncheckedUpdateInput>;
    where: Prisma.PricingSessionWhereUniqueInput;
};
export type PricingSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PricingSessionUpdateManyMutationInput, Prisma.PricingSessionUncheckedUpdateManyInput>;
    where?: Prisma.PricingSessionWhereInput;
    limit?: number;
};
export type PricingSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PricingSessionUpdateManyMutationInput, Prisma.PricingSessionUncheckedUpdateManyInput>;
    where?: Prisma.PricingSessionWhereInput;
    limit?: number;
    include?: Prisma.PricingSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PricingSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelect<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    include?: Prisma.PricingSessionInclude<ExtArgs> | null;
    where: Prisma.PricingSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PricingSessionCreateInput, Prisma.PricingSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PricingSessionUpdateInput, Prisma.PricingSessionUncheckedUpdateInput>;
};
export type PricingSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelect<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    include?: Prisma.PricingSessionInclude<ExtArgs> | null;
    where: Prisma.PricingSessionWhereUniqueInput;
};
export type PricingSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PricingSessionWhereInput;
    limit?: number;
};
export type PricingSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PricingSessionSelect<ExtArgs> | null;
    omit?: Prisma.PricingSessionOmit<ExtArgs> | null;
    include?: Prisma.PricingSessionInclude<ExtArgs> | null;
};
export {};
