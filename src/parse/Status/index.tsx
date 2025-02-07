import { IStatus } from '@/interface/status';
import { parseEnum_to_String } from 'fenextjs';

export const parseStatus = parseEnum_to_String<IStatus>(
    {
        ACTIVE: 'Activo',
        DELETE: 'Eliminado',
        INACTIVE: 'Inactivo',
    },
    {
        valueNull: 'No disponible',
    },
);
