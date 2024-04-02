import {
  responseGroupKey,
  singleChoiceKey,
} from "case-editor-tools/constants/key-definitions";
import { StudyEngine } from "case-editor-tools/expression-utils/studyEngineExpressions";
import { ParticipantFlags as CommonParticipantFlags } from "../common";

export const ParticipantFlags = {
  // flags from common implementations
  ...CommonParticipantFlags,
};
