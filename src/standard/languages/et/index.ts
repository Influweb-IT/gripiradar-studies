import { LanguageHelpers } from "../../../common";

import intake from "./intake.json";
import weekly from "./weekly.json";
import vaccination from "./vaccination.json";

const languageId = "et";

LanguageHelpers.addLanguage(languageId, intake);
LanguageHelpers.addLanguage(languageId, weekly);
LanguageHelpers.addLanguage(languageId, vaccination);