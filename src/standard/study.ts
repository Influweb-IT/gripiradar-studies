import { StudyBuilder } from "../common";
import { VaccinationDef } from "../common";
import { IntakeDef } from "../common";
import { WeeklyDef } from "../common";

import { StudyRulesBuilder } from "./studyRules";

import "./languages/ee";
import "./languages/ru";

export interface SurveysDefs {
  intake: IntakeDef;
  weekly: WeeklyDef;
  vaccination: VaccinationDef;
}

export class GripiradarStandardStudyBuilder extends StudyBuilder {
  constructor() {
    super("standard");
  }

  build() {
    const intake = new IntakeDef();
    const weekly = new WeeklyDef();
    const vaccination = new VaccinationDef();

    this.surveys = [intake, weekly, vaccination];

    const surveys = {
      intake: intake,
      weekly: weekly,
      vaccination: vaccination,
    };

    const rulesBuilder = new StudyRulesBuilder(surveys);

    this.studyRules = rulesBuilder.build();
  }
}
