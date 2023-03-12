export interface DataWrapperInput <Keys, Value>{
    field: Keys & string
    value: Value
}

export type WrapperInput<Keys, Value> = (data: DataWrapperInput<Keys, Value>) => void