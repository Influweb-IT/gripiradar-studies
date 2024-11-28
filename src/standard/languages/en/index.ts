import { LanguageHelpers } from "../../../common";

import intake from "./intake.json";
import vaccination from "./vaccination.json";
import weekly from "./weekly.json";

const languageId = "en";

LanguageHelpers.addLanguage(languageId, intake);
LanguageHelpers.addLanguage(languageId, vaccination);
LanguageHelpers.addLanguage(languageId, weekly);