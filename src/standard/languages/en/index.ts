import { LanguageHelpers } from "../../../common";

import vaccination from "./vaccination.json";
import weekly from "./weekly.json";

const languageId = "en";

LanguageHelpers.addLanguage(languageId, vaccination);
LanguageHelpers.addLanguage(languageId, weekly);