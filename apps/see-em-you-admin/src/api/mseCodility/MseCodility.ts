import { Application } from "../application/Application";

export type MseCodility = {
  id: number;
  testSessionId: string;
  test: string;
  lastName: string;
  nick: string;
  email: string;
  phone: string | null;
  lastSchoolAttended: string | null;
  fieldOfStudy: string | null;
  academicDegree: string | null;
  programmingExperience: string | null;
  profileUrl: string | null;
  createDate: string;
  startDate: string | null;
  closeDate: string | null;
  ips: string;
  totalScore: string;
  maxScore: string;
  percentTotalScore: string;
  percentCorrectness: string;
  percentPerformance: string;
  timeUsed: string;
  similarityCheck: string | null;
  task1Name: string;
  task1Score: string;
  task1Correctness: string;
  task1Performance: string;
  task2Name: string;
  task2Score: string;
  task2Correctness: string;
  task2Performance: string;
  task3Name: string;
  task3Score: string;
  task3Correctness: string;
  task3Performance: string;
  task4Name: string;
  task4Score: string;
  task4Correctness: string;
  task4Performance: string;
  application?: Application;
};
