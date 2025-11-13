import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    karat: number | null;
    weight_gold_g: runtime.Decimal | null;
    wage_gold: runtime.Decimal | null;
    percent_from_gold: runtime.Decimal | null;
    weight_stone_g: runtime.Decimal | null;
    wage_stone: runtime.Decimal | null;
    quantity: number | null;
};
export type ProductSumAggregateOutputType = {
    karat: number | null;
    weight_gold_g: runtime.Decimal | null;
    wage_gold: runtime.Decimal | null;
    percent_from_gold: runtime.Decimal | null;
    weight_stone_g: runtime.Decimal | null;
    wage_stone: runtime.Decimal | null;
    quantity: number | null;
};
export type ProductMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    sku: string | null;
    name: string | null;
    karat: number | null;
    weight_gold_g: runtime.Decimal | null;
    wage_gold: runtime.Decimal | null;
    percent_from_gold: runtime.Decimal | null;
    weight_stone_g: runtime.Decimal | null;
    wage_stone: runtime.Decimal | null;
    quantity: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    sku: string | null;
    name: string | null;
    karat: number | null;
    weight_gold_g: runtime.Decimal | null;
    wage_gold: runtime.Decimal | null;
    percent_from_gold: runtime.Decimal | null;
    weight_stone_g: runtime.Decimal | null;
    wage_stone: runtime.Decimal | null;
    quantity: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    tenantId: number;
    sku: number;
    name: number;
    images: number;
    karat: number;
    weight_gold_g: number;
    wage_gold: number;
    percent_from_gold: number;
    weight_stone_g: number;
    wage_stone: number;
    quantity: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    karat?: true;
    weight_gold_g?: true;
    wage_gold?: true;
    percent_from_gold?: true;
    weight_stone_g?: true;
    wage_stone?: true;
    quantity?: true;
};
export type ProductSumAggregateInputType = {
    karat?: true;
    weight_gold_g?: true;
    wage_gold?: true;
    percent_from_gold?: true;
    weight_stone_g?: true;
    wage_stone?: true;
    quantity?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    sku?: true;
    name?: true;
    karat?: true;
    weight_gold_g?: true;
    wage_gold?: true;
    percent_from_gold?: true;
    weight_stone_g?: true;
    wage_stone?: true;
    quantity?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    sku?: true;
    name?: true;
    karat?: true;
    weight_gold_g?: true;
    wage_gold?: true;
    percent_from_gold?: true;
    weight_stone_g?: true;
    wage_stone?: true;
    quantity?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    sku?: true;
    name?: true;
    images?: true;
    karat?: true;
    weight_gold_g?: true;
    wage_gold?: true;
    percent_from_gold?: true;
    weight_stone_g?: true;
    wage_stone?: true;
    quantity?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: string;
    tenantId: string;
    sku: string | null;
    name: string;
    images: string[];
    karat: number;
    weight_gold_g: runtime.Decimal;
    wage_gold: runtime.Decimal;
    percent_from_gold: runtime.Decimal;
    weight_stone_g: runtime.Decimal;
    wage_stone: runtime.Decimal;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    tenantId?: Prisma.StringFilter<"Product"> | string;
    sku?: Prisma.StringNullableFilter<"Product"> | string | null;
    name?: Prisma.StringFilter<"Product"> | string;
    images?: Prisma.StringNullableListFilter<"Product">;
    karat?: Prisma.IntFilter<"Product"> | number;
    weight_gold_g?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: Prisma.IntFilter<"Product"> | number;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    sku?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
    karat?: Prisma.SortOrder;
    weight_gold_g?: Prisma.SortOrder;
    wage_gold?: Prisma.SortOrder;
    percent_from_gold?: Prisma.SortOrder;
    weight_stone_g?: Prisma.SortOrder;
    wage_stone?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sku?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    tenantId?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    images?: Prisma.StringNullableListFilter<"Product">;
    karat?: Prisma.IntFilter<"Product"> | number;
    weight_gold_g?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: Prisma.IntFilter<"Product"> | number;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
}, "id" | "sku">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    sku?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
    karat?: Prisma.SortOrder;
    weight_gold_g?: Prisma.SortOrder;
    wage_gold?: Prisma.SortOrder;
    percent_from_gold?: Prisma.SortOrder;
    weight_stone_g?: Prisma.SortOrder;
    wage_stone?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    sku?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    images?: Prisma.StringNullableListFilter<"Product">;
    karat?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    weight_gold_g?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
};
export type ProductCreateInput = {
    id?: string;
    sku?: string | null;
    name: string;
    images?: Prisma.ProductCreateimagesInput | string[];
    karat: number;
    weight_gold_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutProductsInput;
};
export type ProductUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    sku?: string | null;
    name: string;
    images?: Prisma.ProductCreateimagesInput | string[];
    karat: number;
    weight_gold_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductUpdateimagesInput | string[];
    karat?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_gold_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutProductsNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductUpdateimagesInput | string[];
    karat?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_gold_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCreateManyInput = {
    id?: string;
    tenantId: string;
    sku?: string | null;
    name: string;
    images?: Prisma.ProductCreateimagesInput | string[];
    karat: number;
    weight_gold_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductUpdateimagesInput | string[];
    karat?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_gold_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductUpdateimagesInput | string[];
    karat?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_gold_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
    karat?: Prisma.SortOrder;
    weight_gold_g?: Prisma.SortOrder;
    wage_gold?: Prisma.SortOrder;
    percent_from_gold?: Prisma.SortOrder;
    weight_stone_g?: Prisma.SortOrder;
    wage_stone?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    karat?: Prisma.SortOrder;
    weight_gold_g?: Prisma.SortOrder;
    wage_gold?: Prisma.SortOrder;
    percent_from_gold?: Prisma.SortOrder;
    weight_stone_g?: Prisma.SortOrder;
    wage_stone?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    karat?: Prisma.SortOrder;
    weight_gold_g?: Prisma.SortOrder;
    wage_gold?: Prisma.SortOrder;
    percent_from_gold?: Prisma.SortOrder;
    weight_stone_g?: Prisma.SortOrder;
    wage_stone?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    karat?: Prisma.SortOrder;
    weight_gold_g?: Prisma.SortOrder;
    wage_gold?: Prisma.SortOrder;
    percent_from_gold?: Prisma.SortOrder;
    weight_stone_g?: Prisma.SortOrder;
    wage_stone?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    karat?: Prisma.SortOrder;
    weight_gold_g?: Prisma.SortOrder;
    wage_gold?: Prisma.SortOrder;
    percent_from_gold?: Prisma.SortOrder;
    weight_stone_g?: Prisma.SortOrder;
    wage_stone?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type ProductCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutTenantInput, Prisma.ProductUncheckedCreateWithoutTenantInput> | Prisma.ProductCreateWithoutTenantInput[] | Prisma.ProductUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutTenantInput | Prisma.ProductCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.ProductCreateManyTenantInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutTenantInput, Prisma.ProductUncheckedCreateWithoutTenantInput> | Prisma.ProductCreateWithoutTenantInput[] | Prisma.ProductUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutTenantInput | Prisma.ProductCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.ProductCreateManyTenantInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutTenantInput, Prisma.ProductUncheckedCreateWithoutTenantInput> | Prisma.ProductCreateWithoutTenantInput[] | Prisma.ProductUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutTenantInput | Prisma.ProductCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutTenantInput | Prisma.ProductUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.ProductCreateManyTenantInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutTenantInput | Prisma.ProductUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutTenantInput | Prisma.ProductUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutTenantInput, Prisma.ProductUncheckedCreateWithoutTenantInput> | Prisma.ProductCreateWithoutTenantInput[] | Prisma.ProductUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutTenantInput | Prisma.ProductCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutTenantInput | Prisma.ProductUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.ProductCreateManyTenantInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutTenantInput | Prisma.ProductUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutTenantInput | Prisma.ProductUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateimagesInput = {
    set: string[];
};
export type ProductUpdateimagesInput = {
    set?: string[];
    push?: string | string[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ProductCreateWithoutTenantInput = {
    id?: string;
    sku?: string | null;
    name: string;
    images?: Prisma.ProductCreateimagesInput | string[];
    karat: number;
    weight_gold_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUncheckedCreateWithoutTenantInput = {
    id?: string;
    sku?: string | null;
    name: string;
    images?: Prisma.ProductCreateimagesInput | string[];
    karat: number;
    weight_gold_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductCreateOrConnectWithoutTenantInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutTenantInput, Prisma.ProductUncheckedCreateWithoutTenantInput>;
};
export type ProductCreateManyTenantInputEnvelope = {
    data: Prisma.ProductCreateManyTenantInput | Prisma.ProductCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutTenantInput, Prisma.ProductUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutTenantInput, Prisma.ProductUncheckedCreateWithoutTenantInput>;
};
export type ProductUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutTenantInput, Prisma.ProductUncheckedUpdateWithoutTenantInput>;
};
export type ProductUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutTenantInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    tenantId?: Prisma.StringFilter<"Product"> | string;
    sku?: Prisma.StringNullableFilter<"Product"> | string | null;
    name?: Prisma.StringFilter<"Product"> | string;
    images?: Prisma.StringNullableListFilter<"Product">;
    karat?: Prisma.IntFilter<"Product"> | number;
    weight_gold_g?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: Prisma.IntFilter<"Product"> | number;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
};
export type ProductCreateManyTenantInput = {
    id?: string;
    sku?: string | null;
    name: string;
    images?: Prisma.ProductCreateimagesInput | string[];
    karat: number;
    weight_gold_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone: runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductUpdateimagesInput | string[];
    karat?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_gold_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductUpdateimagesInput | string[];
    karat?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_gold_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductUpdateimagesInput | string[];
    karat?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_gold_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    percent_from_gold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    weight_stone_g?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wage_stone?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    sku?: boolean;
    name?: boolean;
    images?: boolean;
    karat?: boolean;
    weight_gold_g?: boolean;
    wage_gold?: boolean;
    percent_from_gold?: boolean;
    weight_stone_g?: boolean;
    wage_stone?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    sku?: boolean;
    name?: boolean;
    images?: boolean;
    karat?: boolean;
    weight_gold_g?: boolean;
    wage_gold?: boolean;
    percent_from_gold?: boolean;
    weight_stone_g?: boolean;
    wage_stone?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    sku?: boolean;
    name?: boolean;
    images?: boolean;
    karat?: boolean;
    weight_gold_g?: boolean;
    wage_gold?: boolean;
    percent_from_gold?: boolean;
    weight_stone_g?: boolean;
    wage_stone?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    sku?: boolean;
    name?: boolean;
    images?: boolean;
    karat?: boolean;
    weight_gold_g?: boolean;
    wage_gold?: boolean;
    percent_from_gold?: boolean;
    weight_stone_g?: boolean;
    wage_stone?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "sku" | "name" | "images" | "karat" | "weight_gold_g" | "wage_gold" | "percent_from_gold" | "weight_stone_g" | "wage_stone" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        sku: string | null;
        name: string;
        images: string[];
        karat: number;
        weight_gold_g: runtime.Decimal;
        wage_gold: runtime.Decimal;
        percent_from_gold: runtime.Decimal;
        weight_stone_g: runtime.Decimal;
        wage_stone: runtime.Decimal;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'String'>;
    readonly tenantId: Prisma.FieldRef<"Product", 'String'>;
    readonly sku: Prisma.FieldRef<"Product", 'String'>;
    readonly name: Prisma.FieldRef<"Product", 'String'>;
    readonly images: Prisma.FieldRef<"Product", 'String[]'>;
    readonly karat: Prisma.FieldRef<"Product", 'Int'>;
    readonly weight_gold_g: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly wage_gold: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly percent_from_gold: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly weight_stone_g: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly wage_stone: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly quantity: Prisma.FieldRef<"Product", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Product", 'DateTime'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
export {};
