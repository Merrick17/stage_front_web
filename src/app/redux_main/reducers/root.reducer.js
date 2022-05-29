import { combineReducers } from "redux";
import centerReducer from "./center.reducer";
import domainReducer from "./domain.reducer";
import formationReducer from "./formation.reducer";
import offreReducer from "./offre.reducer";
import participationReducer from "./participation.reducer";
import steReducer from "./ste.reducer";
import userReducer from "./user.reducer";
const rootReducer = combineReducers({
  users: userReducer,
  ste: steReducer,
  center: centerReducer,
  offres: offreReducer,
  domains: domainReducer,
  formation: formationReducer,
  participation: participationReducer,
});

export default rootReducer;
