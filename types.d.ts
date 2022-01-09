export interface DailyStats {
  positiveTests: Number;
  performedTests: Number;
  dailyPositivitity: Number;
  onCampusCases: Number;
  offCampusCases: Number;
  symptCases: Number;
  asymptCases: Number;
}

export interface Dailys {
  [date: string]: DailyStats;
}

export interface DailyData {
  lastUpdated: String;
  days: Dailys;
}

export interface GraphingData {
  day: string;
  positiveTests?: Number;
  performedTests?: Number;
}

export interface InputData {
  updateDateTime: String;
  startDate: String;
  totalPositive: {
    onCampusStu: Number;
    onCampusYesterday: Number;
    offCampusStu: Number;
    offCampusYesterday: Number;
  };
  isoRoomsAvailable: {
    total: Number;
    occupied: Number;
  };
  totalPositiveLast7: {
    onCampus: Number;
    offCampusInSlo: Number;
  },
  testsSinceStart: {
    total: Number;
    employees: Number;
    onCampusStu: Number;
    offCampusStu: Number;
  },
  dailyTestPos: {
    positiveTests: Number[];
    performedTests: Number[];
    avgPos7Day: Number[];
    dates: String[];
  },
  studentNewCases: {
    onCampusCases: Number[];
    offCampusCases: Number[];
    dates: String[];
  },
  symptVsAsympt: {
    symptCases: Number[];
    asymptCases: Number[];
    dates: String[];
  },
  quarantine: {
    selfQuarantine: Number;
    quarantineInPlace: Number;
    isolation: Number;
  }
}
