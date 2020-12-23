import {functionOne} from "./sub-module-one/functionOne";
import {functionTwo} from "./sub-module-two/functionTwo";

export const checker = () => {
    return functionOne() + functionTwo()
}