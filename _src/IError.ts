import _ from "lodash";
import _log from "@flavioespinoza/log_log";

export interface IError {
    method: string;
    err: string;
    _handle(): { success: boolean; method: string; info: string; };
}
