import { LocaleCode } from "@/enums/LocaleCode";

export interface Locale {
    readonly code: LocaleCode, 
    readonly text: string, 
    readonly shortText: string, 
    readonly img: string
}