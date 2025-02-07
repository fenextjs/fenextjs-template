import { InputSelectStatus } from "@/components/Select/Status"
import { useFilter } from "@/hook/useFilter"

export interface FilterStatusProps {
    
}

export const FilterStatus = ({}:FilterStatusProps) => {
    const {onChangeData,data} = useFilter({})

    return <>
        <div className="filter-status">
            <InputSelectStatus
                placeholder="Estatus"
                onChange={onChangeData("status")}
                defaultValue={data?.status}
            />
        </div>
    </>
}