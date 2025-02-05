import { IClient } from '@/interface/client';
import { ITable } from '@/interface/table';
import { parseDateTimeFormat_DD_MM_YY } from '@/parse/Dates';
import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { Table } from '@/ui-fenextjs/Table';
import { URL } from '@/url';
import { SvgTrash } from 'fenextjs';

export interface TableClientProps extends ITable<IClient> {}

export const TableClient = ({ ...props }: TableClientProps) => {
    return (
        <Table<IClient>
            name="Clientes"
            {...props}
            actionsCheckbox={{
                actions: [
                    () => {
                        return (
                            <>
                                <Button size="extra-small" icon={<SvgTrash />}>
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
                    parse: (client) => {
                        return (
                            <Link
                                useT={false}
                                href={URL.client.index + client.id}
                            >
                                {client?.id}
                            </Link>
                        );
                    },
                },
                {
                    id: 'name',
                    th: 'Nombre',
                    parse: (client) => {
                        return (
                            <Link
                                useT={false}
                                href={URL.client.index + client.id}
                            >
                                {client?.name}
                            </Link>
                        );
                    },
                },
                {
                    id: 'email',
                    th: 'Correo',
                    parse: (client) => {
                        return (
                            <Link
                                useT={false}
                                href={'mailto:' + client.email}
                                target="_blank"
                            >
                                {client?.email}
                            </Link>
                        );
                    },
                },
                {
                    id: 'createdAt',
                    th: 'Fecha de Creacion',
                    parse: (client) => {
                        return parseDateTimeFormat_DD_MM_YY(client?.createdAt);
                    },
                },
                {
                    id: 'updatedAt',
                    th: 'Fecha de Actualizacion',
                    parse: (client) => {
                        return parseDateTimeFormat_DD_MM_YY(client?.updatedAt);
                    },
                },
            ]}
        />
    );
};
