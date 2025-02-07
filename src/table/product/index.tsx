import { useUpdateProduct } from '@/api/product/update';
import { IProduct } from '@/interface/product';
import { IStatus } from '@/interface/status';
import { ITable } from '@/interface/table';
import { parseDateTimeFormat_DD_MM_YY } from '@/parse/Dates';
import { parseStatus } from '@/parse/Status';
import { Button } from '@/ui-fenextjs/Button';
import { Img } from '@/ui-fenextjs/Img';
import { Link } from '@/ui-fenextjs/Link';
import { Table } from '@/ui-fenextjs/Table';
import { URL } from '@/url';
import { parseNumberCount, SvgCheck, SvgClose, SvgTrash } from 'fenextjs';

export interface TableProductProps extends ITable<IProduct> {}

export const TableProduct = ({ ...props }: TableProductProps) => {
    const { mutate, isPending } = useUpdateProduct({});
    return (
        <Table<IProduct>
            name="Productes"
            {...props}
            actionsCheckbox={{
                actions: [
                    (products) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgCheck />}
                                    onClick={() => {
                                        mutate({
                                            ids: products?.map((e) => e.id),
                                            status: IStatus.ACTIVE,
                                        });
                                    }}
                                    loader={isPending}
                                >
                                    Activar
                                </Button>
                            </>
                        );
                    },

                    (products) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgClose />}
                                    onClick={() => {
                                        mutate({
                                            ids: products?.map((e) => e.id),
                                            status: IStatus.INACTIVE,
                                        });
                                    }}
                                    loader={isPending}
                                >
                                    Desactivar
                                </Button>
                            </>
                        );
                    },

                    (products) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgTrash />}
                                    onClick={() => {
                                        mutate({
                                            ids: products?.map((e) => e.id),
                                            status: IStatus.DELETE,
                                        });
                                    }}
                                    loader={isPending}
                                >
                                    Eliminar
                                </Button>
                            </>
                        );
                    },
                ],
            }}
            header={[
                {
                    id: 'id',
                    th: 'ID',
                    parse: (product) => {
                        return (
                            <Link
                                useT={false}
                                href={URL.product.index + product.id}
                            >
                                {product?.id}
                            </Link>
                        );
                    },
                },
                {
                    id: 'id',
                    th: 'Imagen',
                    parse: (product) => {
                        return (
                            <Link
                                useT={false}
                                href={URL.product.index + product.id}
                            >
                                <Img
                                    src={product?.image ?? ''}
                                    className="img-table"
                                />
                            </Link>
                        );
                    },
                },
                {
                    id: 'name',
                    th: 'Nombre',
                    parse: (product) => {
                        return (
                            <Link
                                useT={false}
                                href={URL.product.index + product.id}
                            >
                                {product?.name}
                            </Link>
                        );
                    },
                },
                {
                    id: 'price',
                    th: 'Precio',
                    parse: (product) => {
                        return '$' + parseNumberCount(product?.price);
                    },
                },
                {
                    id: 'description',
                    th: 'Descripcion',
                },
                {
                    id: 'status',
                    th: 'Estatus',
                    parse: (product) => {
                        return parseStatus(product?.status);
                    },
                },
                {
                    id: 'createdAt',
                    th: 'Fecha de Creacion',
                    parse: (product) => {
                        return parseDateTimeFormat_DD_MM_YY(product?.createdAt);
                    },
                },
                {
                    id: 'updatedAt',
                    th: 'Fecha de Actualizacion',
                    parse: (product) => {
                        return parseDateTimeFormat_DD_MM_YY(product?.updatedAt);
                    },
                },
            ]}
        />
    );
};
