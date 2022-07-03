// type Store
import {rootReducer} from "../bll/store/store";

export type RootStateType = ReturnType<typeof rootReducer>;