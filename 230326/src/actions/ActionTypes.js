import { _SAVE } from "./";

export const dataSave = (inputData) =>({
    type: _SAVE,
    inputData: {
        id: inputData.id,
        title:inputData.title,
        content: inputData.content
    }
})