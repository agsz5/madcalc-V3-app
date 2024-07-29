export interface MadCalcApiResponse {
  creditCaseId: string;
  referenceNumber: string;
  customerId: string;
  frontend: string;
  nordeaUnit: string;
  creationDate: string;
  decisionJson: DecisionJson;
}

export interface DecisionJson {
  creditCaseId: string;
  creditCaseBasicInfo: CreditCaseBasicInfo;
  creditAssessmentApplication: CreditAssessmentApplication;
  recommendationResult: string;
  recommendationResultDetail: RecommendationResultDetail;
}

export interface CreditCaseBasicInfo {
  creditCaseStatus: string;
  creditCaseVersion: string;
  countryCode: string;
  createdBy: string;
  createdDate: string;
  updatedBy: string;
  updatedDate: string;
}

export interface CreditAssessmentApplication {
  referenceNumber: string;
  aml: Aml;
  assessmentDetail: AssessmentDetail;
  bpm: Bpm;
  bureau: Bureau;
  channel: Channel;
}

export interface Aml {
  groupStructureIncomplete: string;
  niwlFlag: string;
  pepFlag: string;
  pepQuestionFlag: string;
  sanctionFlag: string;
  ceo: Person;
  beneficialOwner: Person[];
  boardMember: Person[];
}

export interface Person {
  name: string;
  dateOfBirth: string;
  placeOfBirth?: string;
}

export interface AssessmentDetail {
  nbrOfApplicants: string;
  nbrOfGuarantors: string;
  alfaAlertFlag: string;
  recommedationFromBankFlag: string;
  statementFromBankFlag: string;
  orgApplDetailsForThresholdCase: OrgApplDetailsForThresholdCase;
}

export interface OrgApplDetailsForThresholdCase {
  recommendedDecision: string;
  finalDecision: string;
  applicationDate: string;
  acceptReason: string;
  decisionMakerId: string;
  downPayment: string;
  firstBigRental: string;
  leaseBaseAmount: string;
  leaseObjectValue: string;
  loanAmount: string;
  loanObjectValue: string;
  nbrOfMonthlyInstalments: string;
  objectAgeMonths: string;
  objectCode: string;
  objectIsNew: string;
  objectLicensePlateNbr: string;
  productVariant: string;
  residualValue: string;
  applicants: Applicant[];
  guarantor1: Guarantor;
  guarantor2: Guarantor;
}

export interface Applicant {
  amlRiskClassification: string;
  employmentStatus: string;
  grossMonthlyIncomeTotal: string;
  id: string;
  pepStatus: string;
  totalHomeDebtBeforeAppl: string;
  totalOtherDebtBeforeAppl: string;
}

export interface Guarantor {
  amlRiskClassification: string;
  employmentStatus: string;
  grossMonthlyIncomeTotal: string;
  id: string;
  pepStatus: string;
  totalHomeDebtBeforeAppl: string;
  totalOtherDebtBeforeAppl: string;
}

export interface Bpm {
  apServiceFailedFlag: string;
  bureauServiceFailedFlag: string;
  idqServiceFailedFlag: string;
  nirServiceFailedFlag: string;
  screeningServiceFailedFlag: string;
  retrieveCreditAssessmentFailedFlag: string;
  bureauInfoDate: string;
  commitmentServiceFailedFlag: string;
  farServiceFailedFlag: string;
  segmentServiceFailedFlag: SegmentServiceFailedFlag;
  triadServiceFailedFlag: string;
  caisServiceFailedFlag: string;
  dbrServiceFailedFlag: string;
}

export interface SegmentServiceFailedFlag {
  fsServiceFailedFlag: string;
  segmentationServiceFailedFlag: string;
  udmServiceFailedFlag: string;
}

export interface Bureau {
  norCorporate: NorCorporate;
}

export interface NorCorporate {
  applicant: NorCorporateApplicant;
}

export interface NorCorporateApplicant {
  nationalId: string;
  postalCode: string;
  judicialType: string;
  established: string;
  nbrOfEmployees: string;
  scoreCardModel: string;
  scoreDelphiCorporateAs: string;
  ratingAsPaymentHistory: string;
  scoreDelphiCorporateEnk: string;
  year: Year[];
}

export interface Year {
  dateFinAccDelivered: string;
  solvency: string;
  auditDate: string;
  auditRemark: string;
}

export interface Channel {
  frontEndSolution: string;
  nordeaUnit: string;
  nameVendor: string;
  salesPerson: string;
}

export interface RecommendationResultDetail {
  assessmentMethod: string;
  recommendationType: string;
  recommendationDate: string;
  recommendationReasons: RecommendationReasons;
  result: Result;
}

export interface RecommendationReasons {
  creditAssessmentRecommendationReason: CreditAssessmentRecommendationReason[];
}

export interface CreditAssessmentRecommendationReason {
  reasonCode: string;
  reasonDescription: string;
}

export interface Result {
  resultGlobal: ResultGlobal;
  orgApplDetails: OrgApplDetails;
  score: Score[];
  recommendation: Recommendation;
  tob: Tob[];
  randomNumber: RandomNumber;
  approvedAmount: string;
  approvedNbrOfMonthlyInstalments: string;
  approvedNominalInterest: string;
  approvedDownPayment: string;
}

export interface ResultGlobal {
  applicant: ApplicantResult[];
  creditThresholdFlag: string;
  debug1: string;
  debug2: string;
  debug3: string;
  dsti: Dsti;
  guarantor: GuarantorResult[];
  mad: Mad;
}

export interface ApplicantResult {
  nameOfExternalScorecardUsed: string;
}

export interface Dsti {
  dstiApplicant: DstiApplicant[];
}

export interface DstiApplicant {
  debtServiceCostAppliedLoan: string;
  debtServiceCostMortgages: string;
  debtServiceCostSecuredLoans: string;
  debtServiceCostTotal: string;
  debtServiceCostTotalExclMortgages: string;
  debtServiceCostUnsecuredLoans: string;
  debtServiceToNetIncome: string;
  debtServiceToNetIncomeLimit: string;
}

export interface GuarantorResult {
  nameOfExternalScorecardUsed: string;
}

export interface Mad {
  Applicant: MadApplicant[];
}

export interface MadApplicant {
  carServiceCosts: string;
  estimatedTotalNetMonthlyIncome: string;
  fixedLivingExpenses: string;
  maDToIncomeRatio: string;
  moneyAtDisposalAfterAllExpenses: string;
  moneyAtDisposalAfterFixedExpenses: string;
  nonTaxableIncome: string;
  salary: string;
  taxPaid: string;
  variableLivingExpenses: string;
}

export interface OrgApplDetails {
  recommendedDecision: string;
  finalDecision: string;
  applicationDate: string;
  acceptReason: string;
  decisionMakerId: string;
  downPayment: string;
  firstBigRental: string;
  leaseBaseAmount: string;
  leaseObjectValue: string;
  loanAmount: string;
  loanObjectValue: string;
  nbrOfMonthlyInstalments: string;
  objectAgeMonths: string;
  objectCode: string;
  objectIsNew: string;
  objectLicensePlateNbr: string;
  productVariant: string;
  residualValue: string;
  applicants: Applicant[];
  guarantor1: Guarantor;
  guarantor2: Guarantor;
}

export interface Score {
  scoreIndex: string;
  scorecardName: string;
  score: string;
  leafNodeID: string;
  leafNodeName: string;
  testGroupID: string;
  testGroupName: string;
  randomNumber: string;
  productType: string;
  version: string;
  riskGradeCondenced: string;
  riskGradeUncondenced: string;
  initialScore: string;
  elementOutcome: ElementOutcome;
  elementScoreValue: ElementScoreValue;
  elementValue1: ElementValue1;
  elementValue2: ElementValue2;
}

export interface ElementOutcome {
  value: string[];
}

export interface ElementScoreValue {
  value: string[];
}

export interface ElementValue1 {
  value: string[];
}

export interface ElementValue2 {
  value: string[];
}

export interface Recommendation {
  recommendedDecision: string;
  sortedReasonTable: SortedReasonTable;
  sortedReasonCodeTable: SortedReasonCodeTable;
  scoreRecommendedDecision: string;
  scoreSortedReasonCodeTable: string;
  scoreSortedReasonTable: string;
  leafNodeID: string;
  leafNodeName: string;
  testGroupID: string;
  testGroupName: string;
  randomNumber: string;
  recommendationDate: string;
}

export interface SortedReasonTable {
  value: string[];
}

export interface SortedReasonCodeTable {
  value: string[];
}

export interface Tob {
  leafNodeID: string;
  leafNodeName: string;
  outcomeName: string;
  testGroupID: string;
  testGroupName: string;
  randomNumber: string;
}

export interface RandomNumber {
  value: string[];
}
