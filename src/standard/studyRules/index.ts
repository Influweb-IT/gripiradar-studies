import { StudyEngine } from "case-editor-tools/expression-utils/studyEngineExpressions";

import { StudyRulesBuilder as CommonStudyRulesBuilder } from "../../common";

import { ParticipantFlags } from "../participantFlags";
import { SurveysDefs } from "../study";

/*
 * extends StudyRulesBuilder found in common-study-definition by passing
 * SurveyDefs instead of SurveyKeys, needed for easy access to exported
 * questions from these rules.
 */
export class StudyRulesBuilder extends CommonStudyRulesBuilder {
  surveys: SurveysDefs;

  constructor(surveys: SurveysDefs) {
    super(surveys);
    this.surveys = surveys;
  }

  extraRules() {

    // study entry rules
    this.rules.entry = [
      // common rules from the base class
      ...this.rules.entry,
    ];

    // study submit rules
    this.rules.submit = [
      // common rules from the base class
      ...this.rules.submit,
    ];

    // study timer rules
    this.rules.timer = [
      // custom rules from base class (possibly undefined)
      ...(this.rules.timer ?? []),
    ];
  }
}
