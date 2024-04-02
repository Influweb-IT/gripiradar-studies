import { study_exporter } from "./common";
// NOTE: needs to be imported with full path, side effects here!
// FIXME: need to implement ee translations
// import "influenzanet-common-study/build/studies/common/languages/ee";

import { GripiradarStandardStudyBuilder } from "./standard/study";

const builder = new GripiradarStandardStudyBuilder();

builder.build();

const study = builder.getStudy();

study_exporter([study], { check: true, missing: true, classNames: true });
