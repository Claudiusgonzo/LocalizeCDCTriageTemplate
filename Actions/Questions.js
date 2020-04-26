if (scenario.who_for.index == 0){

    scenario.questions = {
    check_box_question: session.getCustomLocalizedValue("covi19_core_you_check_box_question"),
    emergency_question: session.getCustomLocalizedValue("covi19_core_you_emergency_question"),
    button_question: session.getCustomLocalizedValue("covi19_core_you_button_question"),
    ltcf_question: session.getCustomLocalizedValue("covi19_core_you_ltcf_question"),
    hcf_question: session.getCustomLocalizedValue("covi19_core_you_hcf_question"),
    age_question: session.getCustomLocalizedValue("covi19_core_you_age_question"),
    gender_question: session.getCustomLocalizedValue("covi19_core_you_gender_question"),
    risk_factor_question: session.getCustomLocalizedValue("covi19_core_you_risk_factor_question"),
    exposure_question: session.getCustomLocalizedValue("covi19_core_you_exposure_question"),
    }

} else {

    scenario.questions = {
    check_box_question: session.getCustomLocalizedValue("covi19_core_they_check_box_question"),
    emergency_question: session.getCustomLocalizedValue("covi19_core_they_emergency_question"),
    button_question: session.getCustomLocalizedValue("covi19_core_they_button_question"),
    ltcf_question: session.getCustomLocalizedValue("covi19_core_they_ltcf_question"),
    hcf_question: session.getCustomLocalizedValue("covi19_core_they_hcf_question"),
    age_question: session.getCustomLocalizedValue("covi19_core_they_age_question"),
    gender_question: session.getCustomLocalizedValue("covi19_core_they_gender_question"),
    risk_factor_question: session.getCustomLocalizedValue("covi19_core_they_risk_factor_question"),
    exposure_question: session.getCustomLocalizedValue("covi19_core_they_exposure_question"),
    }

}