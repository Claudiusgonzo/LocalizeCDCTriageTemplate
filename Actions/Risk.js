scenario.risk_factor_list = session.getCustomLocalizedValue("covi19_core_risk_factor_list");
scenario.risk_factor_pregnancy = session.getCustomLocalizedValue("covi19_core_risk_factor_pregnancy");

// Check female and between the age of 10 - 60
if ([3,4,5,6,7].includes(scenario.age.index) && scenario.gender.index !== 0) {
    scenario.risk_factor_list.splice(3, 0, scenario.risk_factor_pregnancy)
}