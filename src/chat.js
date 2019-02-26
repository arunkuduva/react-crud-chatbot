import { ApiAiClient } from "api-ai-javascript";
import { applyMiddleware, createStore } from "redux";
const ON_MESSAGE = "ON_MESSAGE";

const accessToken = "0beef4f8490740a88fbe75307e1b1535";
const client = new ApiAiClient({ accessToken });

export const sendMessage = (text, sender = "user") => ({
  type: ON_MESSAGE,
  payload: {
    text,
    sender
  }
});

const messageMiddleware = () => next => action => {
  next(action);

  if (action.type === ON_MESSAGE) {
    const { text } = action.payload;
    client.textRequest(text).then(onSuccess);

    function onSuccess(response) {
      console.log("message from dialog flow");
      console.log(response.result.fulfillment.speech);
      //   const {
      //     result: { queryResult }
      //   } = response;
      next(sendMessage(response.result.fulfillment.speech, "bot"));
    }
  }
};

const initState = [{ text: "Hello there ", sender: "bot" }];

const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case ON_MESSAGE:
      //state.payload = action.payload;
      return [...state, action.payload];
    //return state;
    default:
      return state;
  }
};

export const store = createStore(
  messageReducer,
  applyMiddleware(messageMiddleware)
);
