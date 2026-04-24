import { storeRedux } from "../Store/StoreNotes";
export type RootState = ReturnType<typeof storeRedux.getState>;
